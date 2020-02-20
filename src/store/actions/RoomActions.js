export const RoomActionType = {
  GET_ROOMS: 'room/GET_ROOMS',
  SELECT_ROOM: 'room/SELECT_ROOM',
  GET_SELECT_ROOM_TASKS: 'room/GET_SELECT_ROOM_TASKS',
};

export const getRoomsAction = payload => ({
  type: RoomActionType.GET_ROOMS,
  payload,
});

export const selectRoomAction = roomId => ({
  type: RoomActionType.SELECT_ROOM,
  payload: {
    roomId,
  },
});

export const getSelectRoomTasksAction = payload => ({
  type: RoomActionType.GET_SELECT_ROOM_TASKS,
  payload,
});

