import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppAladin from './components/aladin/AppAladin.jsx';
// import AppCounter2 from './components/counter2/AppCounter2.jsx';
// import AppOlive from './components/olive/AppOlive.jsx';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppAladin />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
