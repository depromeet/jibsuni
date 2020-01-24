export const AuthActionType = {
  CHECK_AUTH_REQUEST: 'auth/CHECK_AUTH_REQUEST',
  CHECK_AUTH_RESPONSE: 'auth/CHECK_AUTH_RESPONSE',
  REQ_POST_LOGIN: 'auth/REQ_POST_LOGIN',
  REQ_POST_LOGOUT: 'auth/REQ_POST_LOGOUT',
  REQ_GET_AUTH: 'auth/REQ_GET_AUTH',
};

export const checkAuthRequest = () => ({
  type: AuthActionType.CHECK_AUTH_REQUEST,
});

export const checkAuthResponse = payload => {
  const { isAuthenticated, user } = payload;

  return {
    type: AuthActionType.CHECK_AUTH_RESPONSE,
    payload: {
      isAuthenticated,
      user: isAuthenticated ? user : null,
    },
  };
};


export function reqPostLogin(response) {
  return {
    type: AuthActionType.REQ_POST_LOGIN,
    payload: response,
  }
}

export function reqPostLogout(response) {
  return {
    type: AuthActionType.REQ_POST_LOGOUT,
    payload: response,
  }
}

export function reqGetAuth(response) {
  return {
    type: AuthActionType.REQ_GET_AUTH,
    payload: response,
  }
}
