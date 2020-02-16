import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Count from '../../components/Count';
import Weather from '../../components/Weather';
import NavBar from '../../components/NavBar';
import profile from '../../images/profile.svg';
import * as styled from './style';
import checkOff from '../../images/ico-check-off.svg';
import checkOn from '../../images/ico-check-on.svg';
import { getRoomsAPI, getTasksAPI, getRoomTasksAPI } from '../../utils/api';
import { getRoomsAction, selectRoomAction } from '../../store/actions/RoomActions';
import { roomNameByType } from '../../constants/roomType';

function Board() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const rooms = useSelector(state => state.room.rooms);
  const selectedRoomId = useSelector(state => state.room.selectedRoomId);
  
  const handleNavClick = useCallback(
    room => {
      dispatch(selectRoomAction(room.id));
    },
    [dispatch],
  );

  useEffect(() => {
    if (rooms.length > 0) {
      return;
    }

    getRoomsAPI(token).then(result => {
      dispatch(
        getRoomsAction({
          rooms: result.data,
        }),
      );
    });

    getTasksAPI(token);
    getRoomTasksAPI(token, '38714618882844401');
  }, [token, rooms, dispatch]);

  return (
    <styled.Wrapper>
      <styled.Profile>
        <styled.Title>
          안녕하세요,
          <br />
          <b>
            <span>🧚‍♂️ 빨래수호신</span> {user != null ? user.name : ''}님 :)
          </b>
        </styled.Title>
        <img alt={profile} src={profile} />
      </styled.Profile>
      <styled.TotalCount>
        <Count title="해야하는 일" count={15} />
        <div id="middle">
          <Count title="완료 일정" count={2} />
        </div>
        <Count title="미완료 일정" count={13} />
      </styled.TotalCount>
      <styled.WeatherWrapper>
        <Weather />
      </styled.WeatherWrapper>
      <styled.NavBarWrapper>
        {rooms.map(room => (
          <NavBar
            key={room.id}
            title={roomNameByType[room.type]}
            isActive={room.id === selectedRoomId}
            onClick={() => handleNavClick(room)}
          />
        ))}
      </styled.NavBarWrapper>
      <styled.TodoList>
        <styled.TodoItem>
          <styled.Number>1</styled.Number>
          <styled.CheckImage src={checkOff} />
          <styled.Label>침실</styled.Label>
          <styled.TodoContent complete={true}>일어나자 마자 이부자리 정리하기</styled.TodoContent>
        </styled.TodoItem>
        <styled.TodoItem>
          <styled.Number>2</styled.Number>
          <styled.CheckImage src={checkOn} />
          <styled.Label>침실</styled.Label>
          <styled.TodoContent complete={false}>
            오늘 운동 안하면 내가 사람이 아니다.
          </styled.TodoContent>
        </styled.TodoItem>
      </styled.TodoList>
    </styled.Wrapper>
  );
}

export default Board;
