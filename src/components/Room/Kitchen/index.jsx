import React from 'react';
import kitchen from '../../../images/kitchen.svg'
import kitchenOvenOff from '../../../images/kitchen-oven-off.svg'
import kitchenRefrigeratorOff from '../../../images/kitchen-refrigerator-off.svg'
import kitchenSinkOff from '../../../images/kitchen-sink-off.svg'
import kitchenTableOff from '../../../images/kitchen-table-off.svg'
import kitchenTrashcanOff from '../../../images/kitchen-trashcan-off.svg'
import * as styled from './style'

function Room() {
  return (
    <styled.Room>
      <styled.Kitchen src={kitchen}/>
      <styled.KitchenOven src={kitchenOvenOff}/>
      <styled.KitchenRefrigerator src={kitchenRefrigeratorOff}/>
      <styled.KitchenSink src={kitchenSinkOff}/>
      <styled.KitchenTable src={kitchenTableOff}/>
      <styled.KitchenTrashcan src={kitchenTrashcanOff}/>
    </styled.Room>
  )
}

export default Room
