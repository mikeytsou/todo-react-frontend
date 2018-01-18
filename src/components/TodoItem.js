import React from 'react';

const TodoItem = ({ description, completed, onDelete, onToggle }) => {
  const styles = {
    textDecoration: completed ? 'line-through' : 'none',
    color: completed ? '#989898' : '#2c3e50'
  }

  return (
    <li className="task">
      <span style={styles} onClick={onToggle}>{description}</span>
      <span className="delete" onClick={onDelete}> X </span>
    </li>
  );
};

export default TodoItem;
