export const AuthActionType = {
  CHECK_GET_AUTH: 'auth/CHECK_GET_AUTH',
  REQ_GET_AUTH: 'auth/REQ_GET_AUTH',
  REQ_POST_LOGIN: 'auth/REQ_POST_LOGIN',
  REQ_POST_LOGOUT: 'auth/REQ_POST_LOGOUT',
};

export const checkGetAuth = () => ({
  type: AuthActionType.CHECK_GET_AUTH
});

export const reqGetAuth = payload => {
  const { isAuthenticated, user } = payload;

  return {
    type: AuthActionType.REQ_GET_AUTH,
    payload: {
      isAuthenticated,
      user: isAuthenticated ? user : null
    }
  };
};

export const reqPostLogin = payload => {
  const { token, user } = payload;

  return {
    type: AuthActionType.REQ_POST_LOGIN,
    payload: {
      token,
      user
    }
  };
};

export const reqPostLogout = payload => {
  const { token, user } = payload;

  return {
    type: AuthActionType.REQ_POST_LOGOUT,
    payload: {
      token,
      user
    }
  };
};
