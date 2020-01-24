import { AUTH_TOKEN_STORAGE_KEY } from '../../constants';
import {AuthActionType} from '../actions/AuthActions';

export function createInitialCommonState() {
  const storage = window.localStorage;

  return {
    isInitialized: false,
    isCheckingAuth: true,
    token: storage.getItem(AUTH_TOKEN_STORAGE_KEY),
    user: null,

    isLoggedIn: false,
    profile: {
      id: null,
      providerType: null,
      providerUserId: null,
      createdAt: null,
      updatedAt: null,
    }
  };
}

export function authReducer(state = createInitialCommonState(), action) {
  switch (action.type) {
    case AuthActionType.CHECK_AUTH_REQUEST: {
      return {
        ...state,
        isCheckingAuth: true
      }
    }

    case AuthActionType.CHECK_AUTH_RESPONSE: {
      return {
        ...state,
        isInitialized: true,
        isCheckingAuth: false
      }
    }

    case AuthActionType.REQ_POST_LOGIN: {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload.data
      }
    }

    case AuthActionType.REQ_POST_LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
        profile: null
      }
    }

    case AuthActionType.REQ_GET_AUTH: {
      return {
        ...state,
        isLoggedIn: true,
        profile: action.payload.data
      }
    }

  default:
    return state;
  }
};
