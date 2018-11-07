import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import RouterRoot from './router/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouterRoot />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
if(process.env.NODE_ENV==='dependencies'){
    serviceWorker.unregister();
}