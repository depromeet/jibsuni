import { RoomActionType } from '../actions/RoomActions';

export function createInitialCommonState() {
  return {
    rooms: [],
    tasks: [],
    selectedRoomId: null,
  };
}

export function roomReducer(state = createInitialCommonState(), action) {
  switch (action.type) {
    case RoomActionType.GET_ROOMS: {
      return {
        ...state,
        rooms: [{ id: 'ALL', type: 'all' }, ...action.payload.rooms],
        selectedRoomId: 'ALL',
      };
    }
    case RoomActionType.SELECT_ROOM: {
      return {
        ...state,
        selectedRoomId: action.payload.roomId,
      };
    }
    case RoomActionType.GET_SELECT_ROOM_TASKS: {
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    }
    default:
      return state;
  }
}
