import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Buttonapp from './world';
import * as serviceWorker from './serviceWorker';
import Timer from './timer.js'

ReactDOM.render(
  <React.StrictMode>
    <Timer  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();