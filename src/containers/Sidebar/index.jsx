import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksAPI, getRoomTasksAPI } from '../../utils/api';
import { selectRoomAction, getSelectRoomTasksAction } from '../../store/actions/RoomActions';
import { roomNameByType } from '../../constants/roomType';

import * as styled from './style';
import plus from '../../images/plus.svg';
import icoAllOff from '../../images/ico-all-off.svg';
import icoLivingroomOff from '../../images/ico-livingroom-off.svg';
import icoBedroomOff from '../../images/ico-bedroom-off.svg';
import icoKitchenOff from '../../images/ico-kitchen-off.svg';
import icoBathroomOff from '../../images/ico-bathroom-off.svg';
import icoAllOn from '../../images/ico-all-on.svg';
import icoLivingroomOn from '../../images/ico-livingroom-on.svg';
import icoBedroomOn from '../../images/ico-bedroom-on.svg';
import icoKitchenOn from '../../images/ico-kitchen-on.svg';
import icoBathroomOn from '../../images/ico-bathroom-on.svg';

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
            <styled.Img 
              src={icoAllOff}
              onMouseOver={e => (e.currentTarget.src = icoAllOn)}
              onMouseOut={e => (e.currentTarget.src = icoAllOff)}
            />
            <styled.Img 
              src={icoLivingroomOff}
              onMouseOver={e => (e.currentTarget.src = icoLivingroomOn)}
              onMouseOut={e => (e.currentTarget.src = icoLivingroomOff)}
            />
            <styled.Img 
              src={icoBedroomOff}
              onMouseOver={e => (e.currentTarget.src = icoBedroomOn)}
              onMouseOut={e => (e.currentTarget.src = icoBedroomOff)}
            />
            <styled.Img 
              src={icoKitchenOff}
              onMouseOver={e => (e.currentTarget.src = icoKitchenOn)}
              onMouseOut={e => (e.currentTarget.src = icoKitchenOff)}
            />
            <styled.Img 
              src={icoBathroomOff}
              onMouseOver={e => (e.currentTarget.src = icoBathroomOn)}
              onMouseOut={e => (e.currentTarget.src = icoBathroomOff)}
            />
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
