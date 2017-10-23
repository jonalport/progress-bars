import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import API from './API';

ReactDOM.render(<App API={API} />, document.getElementById('root'));
registerServiceWorker();
