import React from 'react';
import {render} from 'react-dom';
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reportWebVitals from './reportWebVitals';
import {rootReducer} from "./Redux/rootReducer";
import App from './App';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    )
))

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(
    app, document.getElementById('root')
);

reportWebVitals();
