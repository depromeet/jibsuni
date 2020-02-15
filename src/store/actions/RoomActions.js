export const RoomActionType = {
    REQ_GET_AUTH: 'room/REQ_GET_ROOM'
  };

  export const reqGetRoom = payload => {
    const { roomId } = payload;

    return {
      type: RoomActionType.REQ_GET_ROOM,
      payload: {
        roomId
      }
    };
  };
  