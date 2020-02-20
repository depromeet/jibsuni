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
import { getRoomsAction, selectRoomAction, getSelectRoomTasksAction } from '../../store/actions/RoomActions';
import { roomNameByType } from '../../constants/roomType';

function Board() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const rooms = useSelector(state => state.room.rooms);
  const tasks = useSelector(state => state.room.tasks);
  const selectedRoomId = useSelector(state => state.room.selectedRoomId);

  const handleNavClick = useCallback(async (room) => {
    try {
      dispatch(selectRoomAction(room.id));
      if(room.id == 'ALL'){
        getTasksAPI(token).then(result => {
          dispatch(
            getSelectRoomTasksAction({
              tasks: result.data,
            }),
          );
        });
      }else{
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

    getTasksAPI(token).then(result => {
      dispatch(
        getSelectRoomTasksAction({
          tasks: result.data,
        }),
      );
    });
  }, [token, rooms, tasks, dispatch]);

  console.log(rooms);

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
        <Count title="전체 일정" count={tasks.length} />
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
      {
        tasks.length == 0?
        <styled.TodoList>
          할 일이 없어요 :(
        </styled.TodoList>
        :
        <styled.TodoList>
          {tasks.map((task, i) => (
            <styled.TodoItem key={task.id}>
              <styled.Number>{i+1}</styled.Number>
              <styled.CheckImage src={checkOff} />
              <styled.Label>{task.furnitureName}</styled.Label>
              <styled.TodoContent complete={true}>{task.contents}</styled.TodoContent>
            </styled.TodoItem>
          ))}
        </styled.TodoList>
      }
    </styled.Wrapper>
  );
}

export default Board;
