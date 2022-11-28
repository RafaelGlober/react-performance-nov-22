import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const cssStyle = `
    color: #AED941;
    font-family: oswald;
    font-size: 50px;
    font-weight: 600px;
    border: 2px solid #79D15F;
    border-radius: 5px;
    margin: 10px;
    padding: 5px 40px 5px;
    
  `;
const welcomeMessage = "Optimization Techniques";
console.log(`%c${welcomeMessage}`, cssStyle)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
