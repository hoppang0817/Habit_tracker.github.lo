import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import '@fortawesome/fontawesome-free/js/all.js';
//import SimpleHabit from './components/simpleHabit';
ReactDOM.render(
  //코딩 하다가 에러가 나며 밑에꺼가 에러메세지로 알려줌
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
