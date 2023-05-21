import React, { useState } from 'react';
import './ToDo.css';

export default function ToDo() {
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const rememberMe = e.target.rememberMe.checked;

    const url = 'http://127.0.0.1:5000/api/login';
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(username + ':' + password)}`,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    // if (data.status === 'ok') {
    //     const myUserInfo = data.data
    //     logMeIn(myUserInfo, rememberMe)
    //     navigate('/feed')
    // }
  };

  function addItem() {
    if (!newItem) {
      alert('Enter an item.');
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem('');
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div style={{ overflow: 'auto' }}>
      <h1 align="center">To-Do List App</h1>

      <form align="center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add an item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button onClick={() => addItem()}>Add</button>

        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  className="deleteButton"
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
      </form>
    </div>
  );
}
