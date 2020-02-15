import React from 'react';

import './app-header.css';

// eslint-disable-next-line react/prop-types
const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header">
      <h1>Todo App</h1>
      <h2 className="todo-info">
        {toDo} active, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
