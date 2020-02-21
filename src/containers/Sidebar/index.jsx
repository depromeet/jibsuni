import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksAPI, getRoomTasksAPI } from '../../utils/api';
import { selectRoomAction, getSelectRoomTasksAction, countRoomTasksAction } from '../../store/actions/RoomActions';
import { roomNameByType } from '../../constants/roomType';

import Dialog from '../../components/Dialog';
import CreateTask from '../CreateTask';
import * as styled from './style';
import plus from '../../images/plus.svg';

function Sidebar() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const rooms = useSelector(state => state.room.rooms);
  const selectedRoomId = useSelector(state => state.room.selectedRoomId);

  const [show, setShow] = useState(false);
  const handleClick = useCallback(() => {
    setShow(prev => !prev);
  }, []);

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
            {roomNameByType[room.type]}
          </styled.SideBtn>
        ))}
        <styled.PlusButton onClick={handleClick}>
          <styled.Img src={plus} />
        </styled.PlusButton>
        <Dialog show={show} handleClose={handleClick}>
          <CreateTask />
        </Dialog>
      </styled.ButtonWrapper>
    </styled.Wrapper>
  );
}

export default Sidebar;
