import React from 'react';
import bedroom from '../../../images/bedroom.svg'
import bedroomBedOff from '../../../images/bedroom-bed-off.svg'
import bedroomTrashcanOff from '../../../images/bedroom-trashcan-off.svg'
import bedroomDressingtableOff from '../../../images/bedroom-dressingtable-off.svg'
import bedroomDeskOff from '../../../images/bedroom-desk-off.svg'
import bedroomClothesOff from '../../../images/bedroom-clothes-off.svg'
import bedroomBedOn from '../../../images/bedroom-bed-on.svg'
import bedroomTrashcanOn from '../../../images/bedroom-trashcan-on.svg'
import bedroomDressingtableOn from '../../../images/bedroom-dressingtable-on.svg'
import bedroomDeskOn from '../../../images/bedroom-desk-on.svg'
import bedroomClothesOn from '../../../images/bedroom-clothes-on.svg'
import * as styled from './style'

function Room() {
  return (
    <styled.Room>
      <styled.Bedroom src={bedroom}/>
      <styled.BedroomBedOff 
        src={bedroomBedOff} 
        onMouseOver={e => (e.currentTarget.src = bedroomBedOn)}
        onMouseOut={e => (e.currentTarget.src = bedroomBedOff)}
      />
      <styled.bedroomTrashcanOff
        src={bedroomTrashcanOff}
        onMouseOver={e => (e.currentTarget.src = bedroomTrashcanOn)}
        onMouseOut={e => (e.currentTarget.src = bedroomTrashcanOff)}
      />
      <styled.bedroomDressingtableOff
        src={bedroomDressingtableOff}
        onMouseOver={e => (e.currentTarget.src = bedroomDressingtableOn)}
        onMouseOut={e => (e.currentTarget.src = bedroomDressingtableOff)}
      />
      <styled.bedroomDeskOff 
        src={bedroomDeskOff}
        onMouseOver={e => (e.currentTarget.src = bedroomDeskOn)}
        onMouseOut={e => (e.currentTarget.src = bedroomDeskOff)}
      />
      <styled.bedroomClothesOff 
        src={bedroomClothesOff}
        onMouseOver={e => (e.currentTarget.src = bedroomClothesOn)}
        onMouseOut={e => (e.currentTarget.src = bedroomClothesOff)}
      />
    </styled.Room>
  )
}

export default Room
