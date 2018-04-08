import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AdminPanel from './admin-panel/index'

ReactDOM.render(<AdminPanel />, document.getElementById('root'));
registerServiceWorker();
