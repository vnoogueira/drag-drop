import React, { useState } from 'react';
import './DraggableList.css';

const DraggableList = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);
  const [dragging, setDragging] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const onDragStart = (e, index) => {
    setDragging(index);
    e.dataTransfer.effectAllowed = 'move';
    console.log(`setDragging: ${index}`);
  };

  const onDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  }

  const onDragEnd = () => {
    if (dragOverIndex !== null && dragging !== null) {
      const newItems = Array.from(items);
      const [movedItem] = newItems.splice(dragging, 1);
      newItems.splice(dragOverIndex, 0, movedItem);
      setItems(newItems);
      console.log(`Item movido de ${dragging} para ${dragOverIndex}`);
    }
    setDragging(null);
    setDragOverIndex(null);
  };

  return (
    <div className="draggable-list">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="item-container"
          draggable
          onDragStart={(e) => onDragStart(e, index)}
          onDragOver={(e) => onDragOver(e, index)}
          onDragEnd={onDragEnd}
        >
          <span className="drag-icon">☰</span>
          <div className="item">
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DraggableList;