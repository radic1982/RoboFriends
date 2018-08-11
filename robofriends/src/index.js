import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App1 from './container/App1';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App1/>, document.getElementById('root'));
registerServiceWorker();
