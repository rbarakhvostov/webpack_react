import React from 'react';
import PropTypes from 'prop-types';

import './app-header.css';

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

AppHeader.propTypes = {
  toDo: PropTypes.number,
  done: PropTypes.number,
};

export default AppHeader;
