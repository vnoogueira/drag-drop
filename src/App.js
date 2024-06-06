import React from 'react';
import './App.css';
import DraggableList from './component/DraggableList';

const initialItems = [
  { id: '1', content: 'Item 1' },
  { id: '2', content: 'Item 2' },
  { id: '3', content: 'Item 3' },
  { id: '4', content: 'Item 4' },
];

function App() {
  return (
    <div className="App">
      <DraggableList initialItems={initialItems} />
    </div>
  );
}

export default App;
