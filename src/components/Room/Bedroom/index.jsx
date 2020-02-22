import React from 'react';
import * as styled from './style'
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

function Bedroom({ isActive, handleClick }) {
  return (
    <styled.Room isActive={isActive}>
      <styled.Bedroom src={bedroom}/>
      <styled.BedroomBedOff 
        src={bedroomBedOff} 
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = bedroomBedOn)}
        onMouseOut={e => (e.currentTarget.src = bedroomBedOff)}
      />
      <styled.bedroomTrashcanOff
        src={bedroomTrashcanOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = bedroomTrashcanOn)}
        onMouseOut={e => (e.currentTarget.src = bedroomTrashcanOff)}
      />
      <styled.bedroomDressingtableOff
        src={bedroomDressingtableOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = bedroomDressingtableOn)}
        onMouseOut={e => (e.currentTarget.src = bedroomDressingtableOff)}
      />
      <styled.bedroomDeskOff 
        src={bedroomDeskOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = bedroomDeskOn)}
        onMouseOut={e => (e.currentTarget.src = bedroomDeskOff)}
      />
      <styled.bedroomClothesOff 
        src={bedroomClothesOff}
        onClick={handleClick}
        onMouseOver={e => (e.currentTarget.src = bedroomClothesOn)}
        onMouseOut={e => (e.currentTarget.src = bedroomClothesOff)}
      />
    </styled.Room>
  )
}

export default Bedroom;
