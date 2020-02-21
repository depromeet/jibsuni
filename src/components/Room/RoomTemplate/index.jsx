import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Bedroom from '../Bedroom';
import Bathroom from '../Bathroom';
import Kitchen from '../Kitchen';

function Room() {
  const selectedRoomType = useSelector(state => state.room.selectedRoomType);
  
  return (
    <>
      {
        (function() {
          if(selectedRoomType == "all") return (<Bedroom />);
          else if(selectedRoomType == "bedroom") return (<Bedroom />);
          else if(selectedRoomType == "living-room") return (<Bedroom />);
          else if(selectedRoomType == "kitchen") return (<Kitchen />);
          else if(selectedRoomType == "bathroom") return (<Bathroom />);
        })()
      }
    </>
  )
}

export default Room;
