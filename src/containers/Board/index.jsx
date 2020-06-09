import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomsAPI, getTasksAPI, getRoomTasksAPI, postTaskCompleteAPI, postTaskIncompleteAPI, getTasksCountsAPI } from '../../utils/api';
import { getRoomsAction, selectRoomAction, getSelectRoomTasksAction, getTasksCountsAction } from '../../store/actions/RoomActions';
import { roomNameByType } from '../../constants/roomType';
import { furnitureNameByType } from '../../constants/furnitureType';

import Count from '../../components/Count';
import Weather from '../../components/Weather';
import NavBar from '../../components/NavBar';
import * as styled from './style';
import profile from '../../images/profile.svg';
import checkOff from '../../images/ico-check-off.svg';
import checkOn from '../../images/ico-check-on.svg';

function Board() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const rooms = useSelector(state => state.room.rooms);
  const tasks = useSelector(state => state.room.tasks);
  const totalCount = useSelector(state => state.room.totalCount);
  const countOfTodo = useSelector(state => state.room.countOfTodo);
  const countOfDone = useSelector(state => state.room.countOfDone);
  const selectedRoomId = useSelector(state => state.room.selectedRoomId);

  const handleNavClick = useCallback(async (room) => {
    try {
      dispatch(selectRoomAction({
        roomId: room.id, roomType: room.type
      }));
      if (room.id === 'ALL') {
        getTasksAPI(token).then(result => {
          dispatch(
            getSelectRoomTasksAction({
              tasks: result.data,
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
  }, [token, dispatch]);

  const handleCompleteClick = useCallback(async (task) => {
    try {
      if(task.state === "DONE"){
        await postTaskIncompleteAPI(token, task.id);
      }else if(task.state === "TODO"){
        await postTaskCompleteAPI(token, task.id);
      }

      if (selectedRoomId != null) {
        if (selectedRoomId === 'ALL') {
          getTasksAPI(token).then(result => {
            dispatch(
              getSelectRoomTasksAction({
                tasks: result.data,
              }),
            );
          });
        } else {
          getRoomTasksAPI(token, selectedRoomId).then(result => {
            dispatch(
              getSelectRoomTasksAction({
                tasks: result.data,
              }),
            );
          });
        }      
      }
      
      getTasksCountsAPI(token).then(result => {
        dispatch(
          getTasksCountsAction({
            count: result.data,
          }),
        );
      });
    } catch (error) {
      console.error(error);
    }
  }, [selectedRoomId, token, dispatch]);

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
        })
      );
    });

    getTasksCountsAPI(token).then(result => {
      dispatch(
        getTasksCountsAction({
          count: result.data,
        }),
      );
    });
  }, [token, rooms, tasks, dispatch]);

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
        <Count title="전체 일정" count={totalCount} />
        <div id="middle">
          <Count title="완료 일정" count={countOfTodo} />
        </div>
        <Count title="미완료 일정" count={countOfDone} />
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
        tasks.length === 0 ?
          <styled.TodoList>
            할 일이 없어요 :(
        </styled.TodoList>
          :
          <styled.TodoList>
            {tasks.map((task, i) => (
              <styled.TodoItem key={task.id} onClick={() => handleCompleteClick(task)}>
                <styled.Number>{i + 1}</styled.Number>
                <styled.CheckImage src={task.state === "TODO"? checkOff : checkOn} />
                <styled.Label>{furnitureNameByType[task.furnitureName]}</styled.Label>
                <styled.TodoContent complete={task.state === "TODO"? false : true}>{task.contents}</styled.TodoContent>
              </styled.TodoItem>
            ))}
          </styled.TodoList>
      }
    </styled.Wrapper>
  );
}

export default Board;
