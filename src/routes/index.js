import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={Home} />
    </Router>
  </Provider>
);

export default Root