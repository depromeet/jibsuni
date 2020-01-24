import React from 'react';
import './index.css';
import { render } from 'react-dom'
import * as serviceWorker from './serviceWorker';
import Root from './routes'

render(<Root />, document.getElementById('root'));

serviceWorker.register();