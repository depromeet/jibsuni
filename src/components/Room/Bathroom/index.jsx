import React from 'react';
import bathroom from '../../../images/bathroom.svg'
import bathroomBasinOff from '../../../images/bathroom-basin-off.svg'
import bathroomShowerOff from '../../../images/bathroom-shower-off.svg'
import bathroomToiletOff from '../../../images/bathroom-toilet-off.svg'
import bathroomTrashcanOff from '../../../images/bathroom-trashcan-off.svg'
import bathroomWashingmachineOff from '../../../images/bathroom-washingmachine-off.svg'
import * as styled from './style'

function Room() {
  return (
    <styled.Room>
      <styled.Bathroom src={bathroom}/>
      <styled.BathroomShower src={bathroomShowerOff}/>
      <styled.BathroomBasin src={bathroomBasinOff}/>
      <styled.BathroomToilet src={bathroomToiletOff}/>
      <styled.BathroomTrashcan src={bathroomTrashcanOff}/>
      <styled.BathroomWashingmachine src={bathroomWashingmachineOff}/>
    </styled.Room>
  )
}

export default Room
