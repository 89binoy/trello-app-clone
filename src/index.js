import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BoardProvider from './contexts/board';
import TaskProvider from './contexts/task';
import TaskListProvider from './contexts/taskList';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BoardProvider>
      <TaskListProvider>
        <TaskProvider>
          <App />
        </TaskProvider>
      </TaskListProvider>
    </BoardProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();