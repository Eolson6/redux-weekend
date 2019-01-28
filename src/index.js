import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import FeelingsForm from './components/FeelingsForm/FeelingsForm.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingsFeedback = (state= [], action) => {
    if (action.type === 'UPDATE_FEELINGS_RATING') {
        return action.payload;
    }
    return state;
}


       const understandingfeedback = (state = [], action) => {
    if (action.type === 'UPDATE_UNDERSTANDING_RATING') {
        const understanding = 'understanding' + action.paylod
        return action.payload
    }
    return state;
}

const supportedFeedback = (state = [], action) => {
    if (action.type === 'UPDATE_SUPPORTED_RATING') {
            return action.payload;
    }
    return state;
} 

const commentsFeedback = (state = [], action) => {
    if (action.type === 'UPDATE_COMMENTS') {
        return action.payload;
    }
    return state;
} 

const submissionSuccess = (state = 'false', action) => {
    if (action.type === 'UPDATE_COMMENTS') {
        return true;
    }
    return state;
} 

const userName = (state = '', action) => {
    if (action.type === 'ADD_USER') {
        return action.payload;
    }
    return state;
} 


const storeInstance = createStore(
    combineReducers({
        feelingsFeedback,
        understandingfeedback,
        supportedFeedback,
        commentsFeedback,
        submissionSuccess,
        userName
     
    }),
    applyMiddleware(logger),
);



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();