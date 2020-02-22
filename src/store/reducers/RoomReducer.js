import { RoomActionType } from '../actions/RoomActions';

export function createInitialCommonState() {
  return {
    rooms: [],
    tasks: [],
    totalCount: null,
    countOfTodo: null,
    countOfDone: null,
    selectedRoomId: null,
    selectedRoomType: null,
  };
}

export function roomReducer(state = createInitialCommonState(), action) {
  switch (action.type) {
    case RoomActionType.GET_ROOMS: {
      return {
        ...state,
        rooms: [{ id: 'ALL', type: 'all' }, ...action.payload.rooms],
        selectedRoomId: 'ALL',
        selectedRoomType: 'all',
      };
    }
    case RoomActionType.SELECT_ROOM: {
      return {
        ...state,
        selectedRoomId: action.payload.roomId,
        selectedRoomType: action.payload.roomType,
      };
    }
    case RoomActionType.GET_SELECT_ROOM_TASKS: {
      return {
        ...state,
        tasks: action.payload.tasks,
      };
    }
    case RoomActionType.GET_TASKS_COUNTS: {
      return {
        ...state,
        totalCount: action.payload.count.total,
        countOfTodo: action.payload.count.countOfTodo,
        countOfDone: action.payload.count.countOfDone,
      };
    }
    default:
      return state;
  }
}
