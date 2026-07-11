import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Accessibility, X, Type, Eye, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ZOOM_LEVELS = [
    { id: 'normal',  label: 'A', scale: 1,   title: 'Default'  },
    { id: 'large',   label: 'A', scale: 1.2,  title: 'Large'    },
    { id: 'xlarge',  label: 'A', scale: 1.4,  title: 'X-Large'  },
    { id: 'xxlarge', label: 'A', scale: 1.6,  title: 'XX-Large' },
];

const ZOOM_FONT_SIZES = [13, 15, 17, 20];

const COLOR_MODES = [
    { id: 'normal',        label: 'Normal',        description: 'Default',          swatch: 'linear-gradient(135deg, #e74c3c 33%, #2ecc71 33% 66%, #3498db 66%)' },
    { id: 'protanopia',    label: 'Protanopia',    description: 'Red-blind',        swatch: 'linear-gradient(135deg, #8a8a00 33%, #d4d400 33% 66%, #3498db 66%)' },
    { id: 'deuteranopia',  label: 'Deuteranopia',  description: 'Green-blind',      swatch: 'linear-gradient(135deg, #c8a000 33%, #9a9a00 33% 66%, #3498db 66%)' },
    { id: 'tritanopia',    label: 'Tritanopia',    description: 'Blue-yellow',      swatch: 'linear-gradient(135deg, #e74c3c 33%, #2ecc71 33% 66%, #c0c0c0 66%)' },
    { id: 'grayscale',     label: 'Grayscale',     description: 'No colour',        swatch: 'linear-gradient(135deg, #555 33%, #999 33% 66%, #ddd 66%)'           },
    { id: 'high-contrast', label: 'High Contrast', description: 'Max visibility',   swatch: 'linear-gradient(135deg, #000 50%, #fff 50%)'                          },
];

function applyZoom(id) {
    const level = ZOOM_LEVELS.find(l => l.id === id);
    document.documentElement.style.zoom = level ? level.scale : 1;
}

function applyColorMode(id) {
    const root = document.getElementById('root');
    if (!root) return;
    root.classList.remove('cb-protanopia', 'cb-deuteranopia', 'cb-tritanopia', 'cb-grayscale', 'cb-high-contrast');
    if (id !== 'normal') root.classList.add(`cb-${id}`);
}

// SVG filter definitions — rendered inside #root so they exist in the DOM
// when #root's CSS filter references them by ID.
const ColorBlindnessFilters = () => (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
        <defs>
            <filter id="cb-filter-protanopia" colorInterpolationFilters="sRGB">
                <feColorMatrix type="matrix" values="0.567 0.433 0 0 0  0.558 0.442 0 0 0  0 0.242 0.758 0 0  0 0 0 1 0" />
            </filter>
            <filter id="cb-filter-deuteranopia" colorInterpolationFilters="sRGB">
                <feColorMatrix type="matrix" values="0.625 0.375 0 0 0  0.7 0.3 0 0 0  0 0.3 0.7 0 0  0 0 0 1 0" />
            </filter>
            <filter id="cb-filter-tritanopia" colorInterpolationFilters="sRGB">
                <feColorMatrix type="matrix" values="0.95 0.05 0 0 0  0 0.433 0.567 0 0  0 0.475 0.525 0 0  0 0 0 1 0" />
            </filter>
        </defs>
    </svg>
);

const AccessibilityFAB = () => {
    const [open, setOpen] = useState(false);
    const [zoom, setZoom] = useState(() => localStorage.getItem('a11y-zoom') || 'normal');
    const [colorMode, setColorMode] = useState(() => localStorage.getItem('a11y-color') || 'normal');
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        applyZoom(zoom);
        applyColorMode(colorMode);
    }, []);

    const handleZoom = (id) => {
        setZoom(id);
        localStorage.setItem('a11y-zoom', id);
        applyZoom(id);
    };

    const handleColorMode = (id) => {
        setColorMode(id);
        localStorage.setItem('a11y-color', id);
        applyColorMode(id);
    };

    const handleReset = () => {
        handleZoom('normal');
        handleColorMode('normal');
        if (isDark) toggleTheme();
    };

    // The floating UI — rendered into #a11y-portal (a sibling of #root in index.html)
    // so it is never inside a filtered ancestor, keeping position:fixed working correctly.
    const fabUI = (
        <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>

            {/* Panel */}
            {open && (
                <div
                    role="dialog"
                    aria-label="Accessibility options"
                    style={{
                        width: 300,
                        backgroundColor: '#fbfbf9',
                        border: '1px solid #e7e6e2',
                        borderRadius: 16,
                        boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                        overflow: 'hidden',
                        fontFamily: 'Inter, system-ui, sans-serif',
                    }}
                >
                    {/* Header */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid #e7e6e2' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Accessibility size={16} color="#1a1a1a" />
                            <span style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>Accessibility</span>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            aria-label="Close accessibility panel"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#9a9a96', display: 'flex', alignItems: 'center' }}
                        >
                            <X size={16} />
                        </button>
                    </div>

                    {/* Text Size */}
                    <div style={{ padding: '20px 20px 16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                            <Type size={13} color="#9a9a96" />
                            <span style={{ fontSize: 11, fontWeight: 600, color: '#9a9a96', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Text Size</span>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                            {ZOOM_LEVELS.map((level, i) => {
                                const active = zoom === level.id;
                                return (
                                    <button
                                        key={level.id}
                                        onClick={() => handleZoom(level.id)}
                                        aria-label={`Set text size to ${level.title}`}
                                        aria-pressed={active}
                                        style={{
                                            flex: 1,
                                            padding: '10px 4px',
                                            borderRadius: 10,
                                            border: active ? '1.5px solid #1a1a1a' : '1px solid #e7e6e2',
                                            backgroundColor: active ? '#1a1a1a' : 'transparent',
                                            color: active ? '#fafaf8' : '#6e6e6b',
                                            fontSize: ZOOM_FONT_SIZES[i],
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            lineHeight: 1,
                                            transition: 'all 0.15s',
                                            fontFamily: 'Inter, sans-serif',
                                        }}
                                    >
                                        A
                                    </button>
                                );
                            })}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                            {ZOOM_LEVELS.map(level => (
                                <span key={level.id} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: '#9a9a96' }}>{level.title}</span>
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: 1, backgroundColor: '#e7e6e2', margin: '0 20px' }} />

                    {/* Colour Vision */}
                    <div style={{ padding: '16px 20px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                            <Eye size={13} color="#9a9a96" />
                            <span style={{ fontSize: 11, fontWeight: 600, color: '#9a9a96', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Colour Vision</span>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                            {COLOR_MODES.map(mode => {
                                const active = colorMode === mode.id;
                                return (
                                    <button
                                        key={mode.id}
                                        onClick={() => handleColorMode(mode.id)}
                                        aria-label={`${mode.label}: ${mode.description}`}
                                        aria-pressed={active}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 10,
                                            padding: '10px 12px',
                                            borderRadius: 10,
                                            border: active ? '1.5px solid #1a1a1a' : '1px solid #e7e6e2',
                                            backgroundColor: active ? '#f4f3f0' : 'transparent',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                            transition: 'all 0.15s',
                                        }}
                                    >
                                        <span aria-hidden="true" style={{ width: 20, height: 20, borderRadius: '50%', background: mode.swatch, flexShrink: 0, border: '1px solid rgba(0,0,0,0.08)' }} />
                                        <div>
                                            <div style={{ fontSize: 12, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.2 }}>{mode.label}</div>
                                            <div style={{ fontSize: 10, color: '#9a9a96', lineHeight: 1.3 }}>{mode.description}</div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: 1, backgroundColor: '#e7e6e2', margin: '0 20px' }} />

                    {/* Appearance */}
                    <div style={{ padding: '16px 20px 20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
                            {isDark ? <Moon size={13} color="#9a9a96" /> : <Sun size={13} color="#9a9a96" />}
                            <span style={{ fontSize: 11, fontWeight: 600, color: '#9a9a96', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Appearance</span>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                            {[
                                { id: 'light', label: 'Light', Icon: Sun  },
                                { id: 'dark',  label: 'Dark',  Icon: Moon },
                            ].map(({ id, label, Icon }) => {
                                const active = id === (isDark ? 'dark' : 'light');
                                return (
                                    <button
                                        key={id}
                                        onClick={() => { if (!active) toggleTheme(); }}
                                        aria-label={`Switch to ${label} mode`}
                                        aria-pressed={active}
                                        style={{
                                            flex: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 6,
                                            padding: '10px 12px',
                                            borderRadius: 10,
                                            border: active ? '1.5px solid #1a1a1a' : '1px solid #e7e6e2',
                                            backgroundColor: active ? '#1a1a1a' : 'transparent',
                                            color: active ? '#fafaf8' : '#6e6e6b',
                                            fontSize: 13,
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            transition: 'all 0.15s',
                                            fontFamily: 'Inter, sans-serif',
                                        }}
                                    >
                                        <Icon size={13} />
                                        {label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Reset */}
                    <div style={{ padding: '0 20px 16px', display: 'flex', justifyContent: 'center' }}>
                        <button
                            onClick={handleReset}
                            style={{ fontSize: 12, color: '#9a9a96', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 2, padding: 4 }}
                        >
                            Reset to defaults
                        </button>
                    </div>
                </div>
            )}

            {/* FAB button */}
            <button
                onClick={() => setOpen(o => !o)}
                aria-label={open ? 'Close accessibility options' : 'Open accessibility options'}
                aria-expanded={open}
                style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    backgroundColor: open ? '#6e6e6b' : '#1a1a1a',
                    color: '#fafaf8',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                    transition: 'background-color 0.15s, transform 0.15s',
                    flexShrink: 0,
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                <Accessibility size={22} />
            </button>
        </div>
    );

    const portalTarget = document.getElementById('a11y-portal');

    return (
        <>
            {/* SVG filters live inside #root so they're in the same document scope */}
            <ColorBlindnessFilters />
            {/* FAB renders into a sibling div outside #root to avoid filter stacking-context issues */}
            {portalTarget ? createPortal(fabUI, portalTarget) : fabUI}
        </>
    );
};

export default AccessibilityFAB;
