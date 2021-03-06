import React from 'react';
import ReactDOM from 'react-dom';
import ParentComponent from "./Pages/LifeCycleDemoFunctinal"
import './index.css';
//import {App} from './Pages/App';
import FunctionalApp from './Pages/FunctionalApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <FunctionalApp name="dheeraj-thedev" /> */}
    <ParentComponent></ParentComponent>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
