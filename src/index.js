import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import storeConfig from './store/storeConfig'
import { Provider } from 'react-redux';

const store = storeConfig()
// console.log(store)

// console.log('state', store.getState())

store.subscribe(() => {
  // console.log('state updated', store.getState())
})


ReactDOM.render(<Provider store={store} >
    <App />
  </Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
