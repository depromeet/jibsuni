import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStore } from '../store';
import Home from '../containers/Home';
import Login from '../containers/Login';

function Root(){
  const dispatch = useDispatch();
  
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/Login" component={Login} />
    </Router>
  );
}

export default withStore(Root);