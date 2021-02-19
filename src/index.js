import React from "react";
import ReactDOM from "react-dom";
import { reducer } from "./reducers/index"
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { fetchSmurfs } from "./actions/index"
import {} from "./actions/index"

import "./index.css";
import App from "./App";

const { worker } = require('./mocks/browser');
worker.start();

const store = createStore(reducer, applyMiddleware(thunk, logger));


const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
    <App fetchSmurfs={fetchSmurfs}/> 
    </Provider>,
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.