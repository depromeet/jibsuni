export const RoomActionType = {
  GET_ROOMS: 'room/GET_ROOMS',
  SELECT_ROOM: 'room/SELECT_ROOM',
  GET_SELECT_ROOM_TASKS: 'room/GET_SELECT_ROOM_TASKS',
  COUNT_ROOM_TASKS: 'room/COUNT_ROOM_TASKS',
  GET_TASKS_COUNTS: 'room/GET_TASKS_COUNTS',
  SELECT_FURNITURE: 'room/SELECT_FURNITURE',
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

export const getTasksCountsAction = payload => ({
  type: RoomActionType.GET_TASKS_COUNTS,
  payload,
});

export const selectFurnitureAction = payload => ({
  type: RoomActionType.SELECT_FURNITURE,
  payload,
});
