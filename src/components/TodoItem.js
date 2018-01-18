import React from 'react';

const TodoItem = ({ description, completed, onDelete, onToggle }) => {
  const styles = {
    textDecoration: completed ? 'line-through' : 'none'
  }

  return (
    <li>
      <span style={styles} onClick={onToggle}>{description}</span>
      <span onClick={onDelete}> X </span>
    </li>
  );
};

export default TodoItem;
