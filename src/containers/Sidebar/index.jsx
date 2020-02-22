import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksAPI, getRoomTasksAPI } from '../../utils/api';
import { selectRoomAction, getSelectRoomTasksAction } from '../../store/actions/RoomActions';
import { roomNameByType, roomIconByType } from '../../constants/roomType';

import * as styled from './style';
import plus from '../../images/plus.svg';

function Sidebar() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const rooms = useSelector(state => state.room.rooms);
  const selectedRoomId = useSelector(state => state.room.selectedRoomId);

  const handleNavClick = useCallback(async (room) => {
    try {
      dispatch(selectRoomAction({
        roomId: room.id, roomType: room.type
      }));
      if (room.id == 'ALL') {
        getTasksAPI(token).then(result => {
          dispatch(
            getSelectRoomTasksAction({
              tasks: result.data,
              totalCount: result.totalCount,
            }),
          );
        });
      } else {
        getRoomTasksAPI(token, room.id).then(result => {
          dispatch(
            getSelectRoomTasksAction({
              tasks: result.data,
            }),
          );
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  return (
    <styled.Wrapper>
      <styled.ButtonWrapper>
        {rooms.map(room => (
          <styled.SideBtn key={room.id} isActive={room.id === selectedRoomId} onClick={() => handleNavClick(room)}>
            {/* {roomNameByType[room.type]} */}
            <styled.Img src={roomIconByType[room.type].off} />
            <styled.Img src={roomIconByType[room.type].on} />
          </styled.SideBtn>
        ))}
        <styled.PlusButton>
          <styled.Img src={plus} />
        </styled.PlusButton>
      </styled.ButtonWrapper>
    </styled.Wrapper>
  );
}

export default Sidebar;
