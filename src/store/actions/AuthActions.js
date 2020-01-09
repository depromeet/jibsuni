export const AuthActionType = {
  REQ_POST_LOGIN: 'auth/REQ_POST_LOGIN',
  REQ_POST_LOGOUT: 'auth/REQ_POST_LOGOUT',
  REQ_GET_AUTH: 'auth/REQ_GET_AUTH',
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
