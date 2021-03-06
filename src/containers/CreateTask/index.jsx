import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomNameByType } from '../../constants/roomType';
import { postFurnitureTaskAPI, getRoomTasksAPI, getTasksCountsAPI } from '../../utils/api';
import { getTasksCountsAction, getSelectRoomTasksAction } from '../../store/actions/RoomActions';
import FurnitureItem from '../../components/FurnitureItem';
import * as styled from './style';

function CreateTask({ room, furnitures, handleClose }) {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const [userInput, setUserInput] = useState('');
  // Room 에서 가구를 클릭했을 때 가구 id를 useState에 넣어줘야함 (props로 받아오기)
  // 각 Room 가구를 클릭할 때마다 리덕스에 클릭된 가구 id 저장하고 바뀔 때마다 불러오기
  // 아래 useState를 useSelector로 바꿔주기 (dispatch를 사용)
  const [furnitureId, setFurnitureId] = useState('');
  const [inputPlaceholder, setInputPlaceholder] = useState('진행하실 내용을 입력해주세요 :)');

  const onInputChange = useCallback(
    e => {
      setUserInput(e.target.value);
    },
    []
  );

  const addTask = useCallback(async (furnitureId, contents) => {
    try {
      await postFurnitureTaskAPI(token, furnitureId, contents);
      const tasks = await getRoomTasksAPI(token, room.id);
      const counts = await getTasksCountsAPI(token);
      // console.log(tasks, counts);

      dispatch(getSelectRoomTasksAction({ tasks: tasks.data }));
      dispatch(getTasksCountsAction({ count: counts.data }));
      handleClose();
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  }, [token, handleClose, dispatch]);

  const addNewTask = () => {
    if (userInput.trim().length > 0) {
      addTask(furnitureId, userInput);
    } else {
      setInputPlaceholder('빈 Task는 추가할 수 없습니다');
    }
    setUserInput('');
  };

  return (
    <styled.Wrapper>
      <styled.Title>
        {room != null ? roomNameByType[room.type] : ''}에서 무엇을 하실건가요?
      </styled.Title>
      <styled.FurnitureList>
        {furnitures.map(furniture => (
          <FurnitureItem
            key={furniture.id}
            furniture={furniture}
            selected={furnitureId === furniture.id}
            onClick={() => setFurnitureId(furniture.id)}
            // selectedFurnitureType === furniture.type? setFurnitureId(furniture.id)}
          />
        ))}
      </styled.FurnitureList>
      <styled.Input
        type="text"
        onChange={onInputChange}
        placeholder={inputPlaceholder}
        value={userInput}
      />
      <styled.CompleteButton onClick={addNewTask}>
        등록하기
      </styled.CompleteButton>
    </styled.Wrapper>
  );
}

export default CreateTask;
