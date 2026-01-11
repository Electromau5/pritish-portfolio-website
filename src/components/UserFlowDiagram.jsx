import React, { useMemo } from 'react';

// User Flow Diagram Component
// Renders a visual flowchart showing the user's journey through an application

const UserFlowDiagram = ({ data, caseStudy, colors, template }) => {
  // Resolve user flow data
  const userFlow = data?.ref === 'userFlow' ? caseStudy?.userFlow : data;

  if (!userFlow || !Array.isArray(userFlow.nodes) || userFlow.nodes.length === 0) {
    return null;
  }

  // Calculate layout positions for nodes
  const layout = useMemo(() => {
    const nodes = userFlow.nodes || [];
    const connections = userFlow.connections || [];

    // Build adjacency list for layout calculation
    const adjacency = {};
    const inDegree = {};
    nodes.forEach(n => {
      adjacency[n.id] = [];
      inDegree[n.id] = 0;
    });
    connections.forEach(c => {
      if (adjacency[c.from]) {
        adjacency[c.from].push(c.to);
      }
      if (inDegree[c.to] !== undefined) {
        inDegree[c.to]++;
      }
    });

    // Find start nodes (nodes with no incoming connections)
    const startNodes = nodes.filter(n => inDegree[n.id] === 0);

    // BFS to assign levels
    const levels = {};
    const queue = startNodes.map(n => ({ id: n.id, level: 0 }));
    const visited = new Set();

    while (queue.length > 0) {
      const { id, level } = queue.shift();
      if (visited.has(id)) continue;
      visited.add(id);
      levels[id] = level;

      (adjacency[id] || []).forEach(targetId => {
        if (!visited.has(targetId)) {
          queue.push({ id: targetId, level: level + 1 });
        }
      });
    }

    // Handle any unvisited nodes
    nodes.forEach((n, idx) => {
      if (levels[n.id] === undefined) {
        levels[n.id] = idx;
      }
    });

    // Group nodes by level
    const levelGroups = {};
    nodes.forEach(n => {
      const level = levels[n.id];
      if (!levelGroups[level]) levelGroups[level] = [];
      levelGroups[level].push(n);
    });

    // Calculate positions
    const nodeWidth = 160;
    const nodeHeight = 80;
    const horizontalGap = 80;
    const verticalGap = 60;

    const maxLevel = Math.max(...Object.keys(levelGroups).map(Number));
    const maxNodesInLevel = Math.max(...Object.values(levelGroups).map(arr => arr.length));

    const totalWidth = (maxLevel + 1) * (nodeWidth + horizontalGap);
    const totalHeight = maxNodesInLevel * (nodeHeight + verticalGap);

    const positions = {};
    Object.entries(levelGroups).forEach(([level, levelNodes]) => {
      const levelNum = Number(level);
      const x = levelNum * (nodeWidth + horizontalGap) + nodeWidth / 2 + 40;
      const startY = (totalHeight - levelNodes.length * (nodeHeight + verticalGap) + verticalGap) / 2;

      levelNodes.forEach((node, idx) => {
        const y = startY + idx * (nodeHeight + verticalGap) + nodeHeight / 2 + 40;
        positions[node.id] = { x, y, node };
      });
    });

    return {
      positions,
      totalWidth: totalWidth + 80,
      totalHeight: Math.max(totalHeight + 80, 300),
      nodeWidth,
      nodeHeight
    };
  }, [userFlow]);

  // Template-specific styles
  const getStyles = () => {
    const baseStyles = {
      start: { fill: '#10B981', stroke: '#059669', textColor: '#ffffff' },
      action: { fill: '#ffffff', stroke: '#000000', textColor: '#000000' },
      decision: { fill: '#FEF3C7', stroke: '#F59E0B', textColor: '#92400E' },
      end: { fill: '#EF4444', stroke: '#DC2626', textColor: '#ffffff' },
      connector: { stroke: '#6B7280', strokeWidth: 2 },
      label: { fill: '#374151', fontSize: 11 }
    };

    // Adjust based on template
    switch (template) {
      case 'simonpan':
        return {
          ...baseStyles,
          action: { fill: '#ffffff', stroke: '#000000', textColor: '#000000' },
          connector: { stroke: '#000000', strokeWidth: 1.5 }
        };
      case 'moritz':
        return {
          ...baseStyles,
          start: { fill: '#000000', stroke: '#000000', textColor: '#ffffff' },
          action: { fill: '#f3f4f6', stroke: '#374151', textColor: '#111827' },
          connector: { stroke: '#374151', strokeWidth: 2 }
        };
      case 'lola':
        return {
          ...baseStyles,
          start: { fill: '#111827', stroke: '#111827', textColor: '#ffffff' },
          action: { fill: '#f9fafb', stroke: '#111827', textColor: '#111827' },
          end: { fill: '#111827', stroke: '#111827', textColor: '#ffffff' },
          connector: { stroke: '#111827', strokeWidth: 2 }
        };
      case 'gloria':
        return {
          ...baseStyles,
          action: { fill: '#ffffff', stroke: '#e5e7eb', textColor: '#374151' },
          connector: { stroke: '#9ca3af', strokeWidth: 1.5 }
        };
      case 'carex':
        return {
          ...baseStyles,
          start: { fill: '#000000', stroke: '#000000', textColor: '#ffffff' },
          action: { fill: '#fafafa', stroke: '#000000', textColor: '#000000' },
          decision: { fill: '#f5f5f5', stroke: '#000000', textColor: '#000000' },
          end: { fill: '#666666', stroke: '#666666', textColor: '#ffffff' },
          connector: { stroke: '#000000', strokeWidth: 2 }
        };
      default: // pratibha
        return baseStyles;
    }
  };

  const styles = getStyles();
  const { positions, totalWidth, totalHeight, nodeWidth, nodeHeight } = layout;

  // Render node based on type
  const renderNode = (node) => {
    const pos = positions[node.id];
    if (!pos) return null;

    const style = styles[node.type] || styles.action;
    const { x, y } = pos;

    switch (node.type) {
      case 'start':
        return (
          <g key={node.id}>
            <circle
              cx={x}
              cy={y}
              r={30}
              fill={style.fill}
              stroke={style.stroke}
              strokeWidth={2}
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={style.textColor}
              fontSize={12}
              fontWeight={600}
            >
              {node.label.length > 12 ? node.label.slice(0, 10) + '...' : node.label}
            </text>
          </g>
        );

      case 'end':
        return (
          <g key={node.id}>
            <circle
              cx={x}
              cy={y}
              r={30}
              fill={style.fill}
              stroke={style.stroke}
              strokeWidth={2}
            />
            <circle
              cx={x}
              cy={y}
              r={24}
              fill="none"
              stroke={style.textColor}
              strokeWidth={2}
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={style.textColor}
              fontSize={11}
              fontWeight={600}
            >
              {node.label.length > 10 ? node.label.slice(0, 8) + '...' : node.label}
            </text>
          </g>
        );

      case 'decision':
        const diamondSize = 45;
        return (
          <g key={node.id}>
            <polygon
              points={`${x},${y - diamondSize} ${x + diamondSize},${y} ${x},${y + diamondSize} ${x - diamondSize},${y}`}
              fill={style.fill}
              stroke={style.stroke}
              strokeWidth={2}
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={style.textColor}
              fontSize={11}
              fontWeight={500}
            >
              {node.label.length > 14 ? node.label.slice(0, 12) + '...' : node.label}
            </text>
          </g>
        );

      default: // action
        const rectWidth = nodeWidth - 20;
        const rectHeight = nodeHeight - 20;
        return (
          <g key={node.id}>
            <rect
              x={x - rectWidth / 2}
              y={y - rectHeight / 2}
              width={rectWidth}
              height={rectHeight}
              rx={8}
              fill={style.fill}
              stroke={style.stroke}
              strokeWidth={2}
            />
            <text
              x={x}
              y={y - (node.description ? 6 : 0)}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={style.textColor}
              fontSize={13}
              fontWeight={600}
            >
              {node.label.length > 18 ? node.label.slice(0, 16) + '...' : node.label}
            </text>
            {node.description && (
              <text
                x={x}
                y={y + 12}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={style.textColor}
                fontSize={10}
                opacity={0.7}
              >
                {node.description.length > 22 ? node.description.slice(0, 20) + '...' : node.description}
              </text>
            )}
          </g>
        );
    }
  };

  // Render connection with arrow
  const renderConnection = (connection, idx) => {
    const fromPos = positions[connection.from];
    const toPos = positions[connection.to];

    if (!fromPos || !toPos) return null;

    const fromNode = fromPos.node;
    const toNode = toPos.node;

    // Calculate edge points based on node types
    let startX = fromPos.x;
    let startY = fromPos.y;
    let endX = toPos.x;
    let endY = toPos.y;

    // Adjust start point based on from node type
    if (fromNode.type === 'start' || fromNode.type === 'end') {
      const angle = Math.atan2(endY - startY, endX - startX);
      startX += Math.cos(angle) * 30;
      startY += Math.sin(angle) * 30;
    } else if (fromNode.type === 'decision') {
      const angle = Math.atan2(endY - startY, endX - startX);
      startX += Math.cos(angle) * 45;
      startY += Math.sin(angle) * 45;
    } else {
      // Action node
      if (Math.abs(endX - startX) > Math.abs(endY - startY)) {
        startX += (endX > startX ? 1 : -1) * (nodeWidth - 20) / 2;
      } else {
        startY += (endY > startY ? 1 : -1) * (nodeHeight - 20) / 2;
      }
    }

    // Adjust end point based on to node type
    if (toNode.type === 'start' || toNode.type === 'end') {
      const angle = Math.atan2(startY - endY, startX - endX);
      endX += Math.cos(angle) * 30;
      endY += Math.sin(angle) * 30;
    } else if (toNode.type === 'decision') {
      const angle = Math.atan2(startY - endY, startX - endX);
      endX += Math.cos(angle) * 45;
      endY += Math.sin(angle) * 45;
    } else {
      // Action node
      if (Math.abs(startX - endX) > Math.abs(startY - endY)) {
        endX += (startX > endX ? 1 : -1) * (nodeWidth - 20) / 2;
      } else {
        endY += (startY > endY ? 1 : -1) * (nodeHeight - 20) / 2;
      }
    }

    // Calculate control points for curved lines
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;

    // Arrow head
    const arrowLength = 10;
    const arrowAngle = Math.PI / 6;
    const angle = Math.atan2(endY - startY, endX - startX);

    const arrowPoint1X = endX - arrowLength * Math.cos(angle - arrowAngle);
    const arrowPoint1Y = endY - arrowLength * Math.sin(angle - arrowAngle);
    const arrowPoint2X = endX - arrowLength * Math.cos(angle + arrowAngle);
    const arrowPoint2Y = endY - arrowLength * Math.sin(angle + arrowAngle);

    return (
      <g key={`conn-${idx}`}>
        <line
          x1={startX}
          y1={startY}
          x2={endX}
          y2={endY}
          stroke={styles.connector.stroke}
          strokeWidth={styles.connector.strokeWidth}
          markerEnd="url(#arrowhead)"
        />
        <polygon
          points={`${endX},${endY} ${arrowPoint1X},${arrowPoint1Y} ${arrowPoint2X},${arrowPoint2Y}`}
          fill={styles.connector.stroke}
        />
        {connection.label && (
          <text
            x={midX}
            y={midY - 8}
            textAnchor="middle"
            fill={styles.label.fill}
            fontSize={styles.label.fontSize}
            fontWeight={500}
          >
            <tspan
              style={{
                backgroundColor: '#ffffff',
                padding: '2px 4px'
              }}
            >
              {connection.label}
            </tspan>
          </text>
        )}
      </g>
    );
  };

  // Container styles based on template
  const getContainerClass = () => {
    switch (template) {
      case 'simonpan':
        return 'max-w-2xl mx-auto';
      case 'moritz':
        return 'max-w-3xl mx-auto';
      case 'lola':
        return 'max-w-5xl mx-auto';
      case 'gloria':
        return 'max-w-4xl mx-auto';
      case 'carex':
        return 'max-w-6xl mx-auto';
      default:
        return 'max-w-4xl mx-auto';
    }
  };

  return (
    <div className={`mb-16 ${getContainerClass()}`}>
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
          {userFlow.title || 'User Flow'}
        </h3>
        {userFlow.description && (
          <p className="text-sm text-gray-600">
            {userFlow.description}
          </p>
        )}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-4 overflow-x-auto">
        <svg
          width={Math.max(totalWidth, 600)}
          height={Math.max(totalHeight, 250)}
          className="mx-auto"
          style={{ minWidth: '100%' }}
        >
          {/* Render connections first (behind nodes) */}
          {(userFlow.connections || []).map((conn, idx) => renderConnection(conn, idx))}

          {/* Render nodes */}
          {(userFlow.nodes || []).map(node => renderNode(node))}
        </svg>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: styles.start.fill }}></div>
          <span>Start</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded border-2" style={{ borderColor: styles.action.stroke, backgroundColor: styles.action.fill }}></div>
          <span>Action</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 transform rotate-45" style={{ backgroundColor: styles.decision.fill, border: `2px solid ${styles.decision.stroke}` }}></div>
          <span>Decision</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: styles.end.fill }}></div>
          <span>End</span>
        </div>
      </div>
    </div>
  );
};

export default UserFlowDiagram;
