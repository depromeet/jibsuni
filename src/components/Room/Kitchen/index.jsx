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

function Kitchen({ handleClick }) {
  return (
    <styled.Room>
      <styled.Kitchen src={kitchen}/>
      <styled.KitchenOven 
        src={kitchenOvenOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = kitchenOvenOn)}
        onMouseOut={e => (e.currentTarget.src = kitchenOvenOff)}
      />
      <styled.KitchenRefrigerator
        src={kitchenRefrigeratorOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = kitchenRefrigeratorOn)}
        onMouseOut={e => (e.currentTarget.src = kitchenRefrigeratorOff)}
      />
      <styled.KitchenSink
        src={kitchenSinkOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = kitchenSinkOn)}
        onMouseOut={e => (e.currentTarget.src = kitchenSinkOff)}
      />
      <styled.KitchenTable 
        src={kitchenTableOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = kitchenTableOn)}
        onMouseOut={e => (e.currentTarget.src = kitchenTableOff)}
      />
      <styled.KitchenTrashcan 
        src={kitchenTrashcanOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = kitchenTrashcanOn)}
        onMouseOut={e => (e.currentTarget.src = kitchenTrashcanOff)}
      />
    </styled.Room>
  )
}

export default Kitchen;
