import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import {compose} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers} from 'redux'; //STEP 1
import authorsReducer from './store/reducers/authors'; //STEP 2
import authorReducer from './store/reducers/author'; // STEP 2
import App from "./App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    rootAuthors: authorsReducer,
    rootAuthor: authorReducer,
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));




ReactDOM.render(
  <BrowserRouter store={store}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
