import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { reducer } from './store';
import "./index.css";
import App from './App';

const store = configureStore({reducer}, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>
);