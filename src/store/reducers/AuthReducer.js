import { AUTH_TOKEN_STORAGE_KEY } from '../../constants';
import { AuthActionType } from '../actions/AuthActions';

export function createInitialCommonState() {
  const storage = window.localStorage;

  return {
    isInitialized: false,
    token: storage.getItem(AUTH_TOKEN_STORAGE_KEY),
    user: null,
  };
}

export function authReducer(state = createInitialCommonState(), action) {
  switch (action.type) {
    case AuthActionType.REQ_GET_AUTH: {
      return {
        ...state,
        isInitialized: true,
        user: action.payload.user,
      };
    }

    case AuthActionType.REQ_POST_LOGIN: {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      };
    }

    case AuthActionType.REQ_POST_LOGOUT: {
      return {
        ...state,
        user: null,
        token: null,
      };
    }

    default:
      return state;
  }
};
