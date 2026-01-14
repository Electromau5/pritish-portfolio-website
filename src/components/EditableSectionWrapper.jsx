import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Pencil, Trash2, X, Check } from 'lucide-react';

const EditableSectionWrapper = ({
  id,
  children,
  sectionTitle,
  isEditable,
  onEdit,
  onDelete,
  onTitleChange
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(sectionTitle);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id, disabled: !isEditable });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    position: 'relative'
  };

  const handleSaveTitle = () => {
    if (onTitleChange && editedTitle.trim()) {
      onTitleChange(editedTitle.trim());
    }
    setIsEditingTitle(false);
  };

  const handleCancelEdit = () => {
    setEditedTitle(sectionTitle);
    setIsEditingTitle(false);
  };

  if (!isEditable) {
    return children;
  }

  return (
    <div ref={setNodeRef} style={style} className="group relative">
      {/* Action bar - visible on hover */}
      <div className={`
        absolute -top-3 left-0 right-0 z-20 flex items-center justify-between
        opacity-0 group-hover:opacity-100 transition-opacity duration-200
        ${isDragging ? 'opacity-100' : ''}
      `}>
        {/* Left side - drag handle and title */}
        <div className="flex items-center gap-2 bg-white rounded-lg shadow-md border border-gray-200 px-2 py-1.5">
          {/* Drag handle */}
          <button
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-1 hover:bg-gray-100 rounded text-gray-400 hover:text-gray-600 transition-colors"
            title="Drag to reorder"
          >
            <GripVertical size={16} />
          </button>

          {/* Section title - editable */}
          {isEditingTitle ? (
            <div className="flex items-center gap-1">
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded px-2 py-0.5 focus:outline-none focus:border-blue-500"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSaveTitle();
                  if (e.key === 'Escape') handleCancelEdit();
                }}
              />
              <button
                onClick={handleSaveTitle}
                className="p-1 hover:bg-green-100 rounded text-green-600 transition-colors"
                title="Save"
              >
                <Check size={14} />
              </button>
              <button
                onClick={handleCancelEdit}
                className="p-1 hover:bg-red-100 rounded text-red-600 transition-colors"
                title="Cancel"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <span
              className="text-sm font-medium text-gray-700 cursor-pointer hover:text-gray-900"
              onClick={() => setIsEditingTitle(true)}
              title="Click to edit title"
            >
              {sectionTitle}
            </span>
          )}
        </div>

        {/* Right side - action buttons */}
        <div className="flex items-center gap-1 bg-white rounded-lg shadow-md border border-gray-200 px-1 py-1">
          <button
            onClick={onEdit}
            className="p-1.5 hover:bg-blue-50 rounded text-gray-500 hover:text-blue-600 transition-colors"
            title="Edit section"
          >
            <Pencil size={14} />
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 hover:bg-red-50 rounded text-gray-500 hover:text-red-600 transition-colors"
            title="Delete section"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>

      {/* Drag indicator border */}
      <div className={`
        absolute inset-0 rounded-lg border-2 border-dashed pointer-events-none
        transition-colors duration-200
        ${isDragging ? 'border-blue-400 bg-blue-50/50' : 'border-transparent group-hover:border-gray-300'}
      `} />

      {/* Section content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default EditableSectionWrapper;
