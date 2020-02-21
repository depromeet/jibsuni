import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFurnituresAPI, getRoomsAPI } from '../../../utils/api';

import Dialog from '../../../components/Dialog';
import CreateTask from '../../../containers/CreateTask';
import Bedroom from '../Bedroom';
import Bathroom from '../Bathroom';
import Kitchen from '../Kitchen';

function Room() {
  const selectedRoomType = useSelector(state => state.room.selectedRoomType);
  const selectedRoomId = useSelector(state => state.room.selectedRoomId);
  const token = useSelector(state => state.auth.token);

  const [show, setShow] = useState(false);
  const handleClick = useCallback(() => {
    setShow(prev => !prev);
    if(selectedRoomId == "ALL"){
      getRoomsAPI(token);
    }else{
      getFurnituresAPI(token, selectedRoomId);
    }
  }, [token, selectedRoomId]);
  
  return (
    <>
      {
        (function() {
          if(selectedRoomType == "all") return (<Bedroom handleClick={handleClick} />);
          else if(selectedRoomType == "bedroom") return (<Bedroom handleClick={handleClick} />);
          else if(selectedRoomType == "living-room") return (<Bedroom handleClick={handleClick} />);
          else if(selectedRoomType == "kitchen") return (<Kitchen handleClick={handleClick} />);
          else if(selectedRoomType == "bathroom") return (<Bathroom handleClick={handleClick} />);
        })()
      }
      <Dialog show={show} handleClose={handleClick}>
        <CreateTask
          // room={selectedRoom}
        />
      </Dialog>
    </>
  )
}

export default Room;
