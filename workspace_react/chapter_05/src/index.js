import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from "./Welcome";
import Welcome1 from "./Welcome1";
import App1 from "./App1";
import Comment from "./Comment";

const author ={avatarUrl: "다운로드.jpg",name:"KIM"};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Comment author={author} text="영화" date="2025-08-13" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
