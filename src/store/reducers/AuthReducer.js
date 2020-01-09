import {AuthActionType} from '../actions/AuthActions'

const initialState = {
  isLoggedIn: false,
  token: '',
  profile: {
    id: null,
    providerType: null,
    providerUserId: null,
    createdAt: null,
    updatedAt: null,
  }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
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