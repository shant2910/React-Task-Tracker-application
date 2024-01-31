// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      onAdd({ name: taskName, date: new Date().toLocaleDateString(), completed: false });
      setTaskName('');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Add Task" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
