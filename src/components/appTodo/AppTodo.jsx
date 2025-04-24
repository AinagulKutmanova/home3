import React from 'react';
import './AppTodo.css';

const AppTodo = ({ doneCount, todoCount }) => {
  return (
    <div className='d-flex align-items-center justify-content-between mt-2'>
      <h1 className='title'>Todo</h1>
      {todoCount === 0 ? (
        <h2 >No To Do</h2>  
      ) : (
        <h2>{doneCount} done, {todoCount} todo</h2>
      )}
    </div>
  );
};

export default AppTodo;

