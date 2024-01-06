import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { legacy_createStore as createStore } from 'redux';
import reducers from './reducers/rootReducer';
import { Provider } from 'react-redux';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
