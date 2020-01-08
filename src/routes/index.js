import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
    </Router>
  </Provider>
);

export default Root