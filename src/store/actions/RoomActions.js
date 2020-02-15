export const RoomActionType = {
  GET_ROOMS: 'room/GET_ROOMS',
  SELECT_ROOM: 'room/SELECT_ROOM',
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
