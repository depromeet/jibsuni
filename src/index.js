import React from 'react';
import './index.css';
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './store';
import Root from './routes'

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

render(<Root store={store} />, document.getElementById('root'));

serviceWorker.register();