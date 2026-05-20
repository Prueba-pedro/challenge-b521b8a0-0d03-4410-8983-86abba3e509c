import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import taskService from '../services/taskService';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    taskService.getTasks().then(setTasks);
  }, []);

  const handleAddTask = (newTask) => {
    taskService.addTask(newTask).then((task) => setTasks([...tasks, task]));
  };

  const handleDeleteTask = (taskId) => {
    taskService.deleteTask(taskId).then(() => setTasks(tasks.filter(task => task.id!== taskId)));
  };

  const handleToggleComplete = (taskId) => {
    taskService.toggleComplete(taskId).then((updatedTask) => {
      setTasks(tasks.map(task => task.id === taskId? updatedTask : task));
    });
  };

  return (
    <div>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
};

export default TaskManager;