import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Pencil, Trash2, ChevronDown, ChevronRight, X } from 'lucide-react';

// Sortable section item
const SortableSectionItem = ({ id, section, index, onEdit, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  // Get content preview
  const getContentPreview = () => {
    if (!section.content || section.content.length === 0) return 'No content';

    const firstBlock = section.content[0];
    const data = firstBlock.data;

    if (data.paragraphs && data.paragraphs.length > 0) {
      return data.paragraphs[0].slice(0, 100) + (data.paragraphs[0].length > 100 ? '...' : '');
    }
    if (data.description) {
      return data.description.slice(0, 100) + (data.description.length > 100 ? '...' : '');
    }
    if (data.items) {
      return `${data.items.length} items`;
    }
    if (data.members) {
      return `${data.members.length} team members`;
    }
    return firstBlock.type;
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        bg-white rounded-lg border border-gray-200 mb-2
        ${isDragging ? 'shadow-lg ring-2 ring-blue-400 opacity-90' : 'shadow-sm'}
      `}
    >
      <div className="flex items-center gap-3 p-3">
        {/* Drag handle */}
        <button
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-1.5 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600 transition-colors"
        >
          <GripVertical size={18} />
        </button>

        {/* Section number */}
        <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-500">
          {index + 1}
        </span>

        {/* Section info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-0.5 hover:bg-gray-100 rounded transition-colors"
            >
              {isExpanded ? (
                <ChevronDown size={16} className="text-gray-400" />
              ) : (
                <ChevronRight size={16} className="text-gray-400" />
              )}
            </button>
            <h3 className="font-medium text-gray-900 truncate">{section.title}</h3>
          </div>
          {!isExpanded && (
            <p className="text-sm text-gray-500 truncate ml-6">{getContentPreview()}</p>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => onEdit(index)}
            className="p-2 hover:bg-blue-50 rounded-lg text-gray-500 hover:text-blue-600 transition-colors"
            title="Edit section"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => onDelete(index)}
            className="p-2 hover:bg-red-50 rounded-lg text-gray-500 hover:text-red-600 transition-colors"
            title="Delete section"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Expanded content preview */}
      {isExpanded && (
        <div className="px-4 pb-4 ml-14">
          <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-600">
            {section.content?.map((block, blockIdx) => (
              <div key={blockIdx} className="mb-2 last:mb-0">
                <span className="inline-block px-2 py-0.5 bg-gray-200 rounded text-xs font-medium text-gray-600 mb-1">
                  {block.type}
                </span>
                <p className="text-gray-700">
                  {block.data.paragraphs?.[0]?.slice(0, 150) ||
                   block.data.description?.slice(0, 150) ||
                   block.data.title ||
                   (block.data.items ? `${block.data.items.length} items` : '') ||
                   (block.data.members ? `${block.data.members.length} members` : '')}
                  {(block.data.paragraphs?.[0]?.length > 150 || block.data.description?.length > 150) && '...'}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const EditableSectionsPanel = ({
  isOpen,
  sections,
  onClose,
  onReorder,
  onEdit,
  onDelete
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex((s, i) => `section-${i}` === active.id);
      const newIndex = sections.findIndex((s, i) => `section-${i}` === over.id);

      if (oldIndex !== -1 && newIndex !== -1) {
        onReorder(oldIndex, newIndex);
      }
    }
  };

  const handleDelete = (index) => {
    if (window.confirm(`Delete "${sections[index]?.title}"? This cannot be undone.`)) {
      onDelete(index);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gray-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
          <div>
            <h2 className="font-semibold text-gray-900">Edit Sections</h2>
            <p className="text-sm text-gray-500">Drag to reorder, click to edit</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        {/* Sections list */}
        <div className="flex-1 overflow-y-auto p-4">
          {sections.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No sections yet. Use the AI assistant to add sections.
            </div>
          ) : (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={sections.map((_, i) => `section-${i}`)}
                strategy={verticalListSortingStrategy}
              >
                {sections.map((section, index) => (
                  <SortableSectionItem
                    key={`section-${index}`}
                    id={`section-${index}`}
                    section={section}
                    index={index}
                    onEdit={onEdit}
                    onDelete={handleDelete}
                  />
                ))}
              </SortableContext>
            </DndContext>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-white border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">
            {sections.length} section{sections.length !== 1 ? 's' : ''} • Changes are temporary until saved
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditableSectionsPanel;
