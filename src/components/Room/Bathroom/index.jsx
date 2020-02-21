import React from 'react';
import * as styled from './style'
import bathroom from '../../../images/bathroom.svg'
import bathroomBasinOff from '../../../images/bathroom-basin-off.svg'
import bathroomShowerOff from '../../../images/bathroom-shower-off.svg'
import bathroomToiletOff from '../../../images/bathroom-toilet-off.svg'
import bathroomTrashcanOff from '../../../images/bathroom-trashcan-off.svg'
import bathroomWashingmachineOff from '../../../images/bathroom-washingmachine-off.svg'
import bathroomBasinOn from '../../../images/bathroom-basin-on.svg'
import bathroomShowerOn from '../../../images/bathroom-shower-on.svg'
import bathroomToiletOn from '../../../images/bathroom-toilet-on.svg'
import bathroomTrashcanOn from '../../../images/bathroom-trashcan-on.svg'
import bathroomWashingmachineOn from '../../../images/bathroom-washingmachine-on.svg'

function Bathroom({ handleClick }) {
  return (
    <styled.Room>
      <styled.Bathroom src={bathroom} />
      <styled.BathroomShower 
        src={bathroomShowerOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = bathroomShowerOn)}
        onMouseOut={e => (e.currentTarget.src = bathroomShowerOff)}
      />
      <styled.BathroomBasin 
        src={bathroomBasinOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = bathroomBasinOn)}
        onMouseOut={e => (e.currentTarget.src = bathroomBasinOff)}
      />
      <styled.BathroomToilet 
        src={bathroomToiletOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = bathroomToiletOn)}
        onMouseOut={e => (e.currentTarget.src = bathroomToiletOff)}
      />
      <styled.BathroomTrashcan 
        src={bathroomTrashcanOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = bathroomTrashcanOn)}
        onMouseOut={e => (e.currentTarget.src = bathroomTrashcanOff)}
      />
      <styled.BathroomWashingmachine 
        src={bathroomWashingmachineOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = bathroomWashingmachineOn)}
        onMouseOut={e => (e.currentTarget.src = bathroomWashingmachineOff)}
      />
    </styled.Room>
  )
}

export default Bathroom;

