export const AuthActionType = {
  REQ_GET_AUTH: 'auth/REQ_GET_AUTH',
  REQ_POST_LOGIN: 'auth/REQ_POST_LOGIN',
  REQ_POST_LOGOUT: 'auth/REQ_POST_LOGOUT',
};

export const reqGetAuth = payload => {
  // 페이지 진입 시 user 값 체크
  const { isAuthenticated, user } = payload;

  return {
    type: AuthActionType.REQ_GET_AUTH,
    payload: {
      isAuthenticated,
      user: isAuthenticated ? user : null,
    },
  };
};

export const reqPostLogin = payload => {
  // Kakao에서 받은 Access Token을 새로운 Access Token으로
  const { token, user } = payload;

  return {
    type: AuthActionType.REQ_POST_LOGIN,
    payload: {
      token,
      user,
    },
  };
};

export const reqPostLogout = payload => {
  const { token, user } = payload;

  return {
    type: AuthActionType.REQ_POST_LOGOUT,
    payload: {
      token,
      user,
    },
  };
};
