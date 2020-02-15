import { RoomActionType } from '../actions/RoomActions';

export function createInitialCommonState() {
  return {
    roomId: null
  };
}

export function roomReducer(state = createInitialCommonState(), action) {
  switch (action.type) {
    case RoomActionType.REQ_GET_ROOM: {
      return {
        ...state,
        roomId: true
      };
    }
    
    default:
      return state;
  }
};
