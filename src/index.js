import React from 'react';
import ReactDOM from 'react-dom/client';
import BoardProvider from '../contexts/board.jsx';
import TaskProvider from '../contexts/task.jsx';
import App from './App';
import TaskListProvider from './contexts/taskList.jsx';
import './index.css';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BoardProvider>
      <TaskListProvider>
        <TaskProvider>
          <App/>
        </TaskProvider>
      </TaskListProvider>
    </BoardProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
