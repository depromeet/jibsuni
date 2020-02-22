import React from 'react';
import * as styled from './style'
import kitchen from '../../../images/kitchen.svg'
import kitchenOvenOff from '../../../images/kitchen-oven-off.svg'
import kitchenRefrigeratorOff from '../../../images/kitchen-refrigerator-off.svg'
import kitchenSinkOff from '../../../images/kitchen-sink-off.svg'
import kitchenTableOff from '../../../images/kitchen-table-off.svg'
import kitchenTrashcanOff from '../../../images/kitchen-trashcan-off.svg'
import kitchenOvenOn from '../../../images/kitchen-oven-on.svg'
import kitchenRefrigeratorOn from '../../../images/kitchen-refrigerator-on.svg'
import kitchenSinkOn from '../../../images/kitchen-sink-on.svg'
import kitchenTableOn from '../../../images/kitchen-table-on.svg'
import kitchenTrashcanOn from '../../../images/kitchen-trashcan-on.svg'

function Emptyroom({ isActive, handleClick }) {
  return (
    <styled.Room isActive={isActive} onClick={handleClick}>
      <styled.RoomEmpty>준비중입니다 :)</styled.RoomEmpty>
    </styled.Room>
  )
}

export default Emptyroom;
