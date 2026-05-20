import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onToggleComplete }) => {
  return (
    <ul>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;