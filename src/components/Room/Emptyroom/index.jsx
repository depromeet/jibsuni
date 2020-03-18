import React from 'react';
import * as styled from './style';

function Emptyroom({ isActive, handleClick }) {
  return (
    <styled.Room isActive={isActive} onClick={handleClick}>
      <styled.RoomEmpty>준비중입니다 :)</styled.RoomEmpty>
    </styled.Room>
  )
}

export default Emptyroom;
