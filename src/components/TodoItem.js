import React from 'react';

const TodoItem = ({ description, completed }) => {
  const styles = {
    textDecoration: completed ? 'line-through' : 'none'
  }

  return (
    <li style={styles}>{description}</li>
  );
};

export default TodoItem;
