import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFurnituresAPI } from '../../../utils/api';

import Dialog from '../../../components/Dialog';
import CreateTask from '../../../containers/CreateTask';
import Rooms from '../Rooms';
import Bedroom from '../Bedroom';
import Bathroom from '../Bathroom';
import Kitchen from '../Kitchen';
import Emptyroom from '../Emptyroom';
import styled from '@emotion/styled';

function Room() {
  const rooms = useSelector(state => state.room.rooms);
  const selectedRoomType = useSelector(state => state.room.selectedRoomType);
  const selectedRoomId = useSelector(state => state.room.selectedRoomId);
  const [furnitures, setFurnitures] = useState([]);
  const token = useSelector(state => state.auth.token);

  const [show, setShow] = useState(false);
  const handleClick = useCallback(async () => {
    if (selectedRoomType === 'all' || selectedRoomType === 'living-room') {
      alert('준비 중 입니다!');
      return;
    }

    const response = await getFurnituresAPI(token, selectedRoomId);

    setFurnitures(response.data);
    setShow(prev => !prev);
  }, [token, selectedRoomType, selectedRoomId]);
  
  return (
    <RoomsWrapper>
        <Rooms
          isActive = {selectedRoomType === "all"? false : true} 
          handleClick={handleClick} 
        />
        <Emptyroom
          isActive = {selectedRoomType === "living-room"? false : true} 
          handleClick={handleClick} 
        />
        <Bedroom 
          isActive = {selectedRoomType === "bedroom"? false : true} 
          handleClick={handleClick} 
        />
        <Kitchen 
          isActive = {selectedRoomType === "kitchen"? false : true} 
          handleClick={handleClick} 
        />
        <Bathroom 
          isActive = {selectedRoomType === "bathroom"? false : true} 
          handleClick={handleClick} 
        />
        <Dialog show={show} handleClose={handleClick}>
          <CreateTask
            room={rooms.find(room => room.id === selectedRoomId)}
            furnitures={furnitures}
            handleClose={handleClick}
          />
        </Dialog>
    </RoomsWrapper>
  )
}

export default Room;

const RoomsWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #b3dadb;
`;
