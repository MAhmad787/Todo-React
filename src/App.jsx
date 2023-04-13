import React, { useState } from 'react';

const App = () => {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setItems((currentItems) => {
      return [
        ...currentItems,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });
    console.log(items);
  };
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const toggleItem = (id, completed) => {
    setItems((currentItems) => {
      return currentItems.map((item) => {
        if (item.id === id) {
          item.completed = completed;
          return { ...item, completed };
        }
        return item;
      });
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {items.map((item) => (
          <li key={item.id}>
            <label>
              <input
                type="checkbox"
                checked={item.isCompleted}
                onChange={(e) => toggleItem(item.id, e.target.checked)}
              />
              {item.title}
            </label>
            <button
              onClick={() => deleteItem(item.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
