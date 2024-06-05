import React, { useState } from 'react';
import './App.css';

const initialItems = [
  { id: '1', content: 'Item 1' },
  { id: '2', content: 'Item 2' },
  { id: '3', content: 'Item 3' },
  { id: '4', content: 'Item 4' },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [dragging, setDragging] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);

  const onDragStart = (e, index) => {
    setDragging(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e, index) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

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
    <div className="App">
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
}

export default App;
