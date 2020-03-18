import React from 'react';
import * as styled from './style';

function Rooms({ isActive, handleClick }) {
  return (
    <styled.Rooms isActive={isActive} onClick={handleClick}>
      <styled.RoomEmpty>준비중입니다 :)</styled.RoomEmpty>
    </styled.Rooms>
  )
}

export default Rooms;
