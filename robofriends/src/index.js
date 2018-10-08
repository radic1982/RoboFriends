import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import './index.css';
import App1 from './container/App1';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, requestRobots } from './reducers';


const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

ReactDOM.render(
            <Provider store={store}>
                <App1/>
            </Provider>, document.getElementById('root'));
registerServiceWorker();
