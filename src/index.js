import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { Provider } from 'react-redux';
import Store from './store/Store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={Store} >
        <App />
    </Provider>
);

