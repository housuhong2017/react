import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoList from "./TodoList";
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './Counter';
ReactDOM.render(
    <div style={{padding:'50px'}}>
    <Counter />
    <Provider store={store} >
    <TodoList  />
    </Provider>
    </div>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
