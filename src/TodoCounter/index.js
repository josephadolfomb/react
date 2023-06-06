import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter() {
    const {
      completedTodos,
      totalTodos,
    } = React.useContext(TodoContext);

    return (
      <h1 className="TodoCounter">
        <span>{completedTodos}</span> de <span>{totalTodos}</span> pendientes completados 🎊
      </h1>
    );
  }

export { TodoCounter };