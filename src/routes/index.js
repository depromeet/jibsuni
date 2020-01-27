import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { withStore } from '../store';
import { reqGetAuth } from '../store/actions/AuthActions';
import { getAuthAPI } from '../utils/api';
import Home from '../containers/Home';
import Login from '../containers/Login';

async function getUserData(tokenStr) {
  if (!tokenStr) {
    return null;
  }

  try {
    return await getAuthAPI(tokenStr);
  } catch {
    return null;
  }
}

function Root() {
  const dispatch = useDispatch();

  const isInitialized = useSelector(state => state.auth.isInitialized);
  const tokenStr = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    if (!isInitialized) {
      getUserData(tokenStr).then(user => {
        if (user == null) {
          dispatch(reqGetAuth({ isAuthenticated: false }));
        } else {
          dispatch(reqGetAuth({ isAuthenticated: true, user }));
        }
      });
    }
  }, [tokenStr, isInitialized, dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          {user != null ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route exact={true} path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default withStore(Root);
