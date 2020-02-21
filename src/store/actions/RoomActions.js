export const RoomActionType = {
  GET_ROOMS: 'room/GET_ROOMS',
  SELECT_ROOM: 'room/SELECT_ROOM',
  GET_SELECT_ROOM_TASKS: 'room/GET_SELECT_ROOM_TASKS',
  COUNT_ROOM_TASKS: 'room/COUNT_ROOM_TASKS',
};

export const getRoomsAction = payload => ({
  type: RoomActionType.GET_ROOMS,
  payload,
});

export const selectRoomAction = payload => ({
  type: RoomActionType.SELECT_ROOM,
  payload,
});

export const getSelectRoomTasksAction = payload => ({
  type: RoomActionType.GET_SELECT_ROOM_TASKS,
  payload,
});

export const countRoomTasksAction = totalCount => ({
  type: RoomActionType.COUNT_ROOM_TASKS,
  payload: {
    totalCount,
  },
});
