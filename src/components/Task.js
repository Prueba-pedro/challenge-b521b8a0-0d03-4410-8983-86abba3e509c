import React from 'react';

const Task = ({ task, onDelete, onToggleComplete }) => {
  return (
    <li>
      <span>{task.title}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onToggleComplete(task.id)}>Toggle Complete</button>
    </li>
  );
};

export default Task;