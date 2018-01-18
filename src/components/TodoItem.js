import React from 'react';

const TodoItem = ({ description, completed, onDelete }) => {
  const styles = {
    textDecoration: completed ? 'line-through' : 'none'
  }

  return (
    <li style={styles}>{description}<span onClick={onDelete}> X </span></li>
  );
};

export default TodoItem;
