import React from 'react';
import bedroom from '../../images/bedroom.svg'
import bedroomBedOff from '../../images/bedroom-bed-off.svg'
import bedroomTrashcanOff from '../../images/bedroom-trashcan-off.svg'
import bedroomDressingtableOff from '../../images/bedroom-dressingtable-off.svg'
import bedroomDeskOff from '../../images/bedroom-desk-off.svg'
import bedroomClothesOff from '../../images/bedroom-clothes-off.svg'
import * as styled from './style'

function Room() {
  return (
    <styled.Room>
      <styled.Bedroom src={bedroom}/>
      <styled.BedroomBedOff src={bedroomBedOff}/>
      <styled.bedroomTrashcanOff src={bedroomTrashcanOff}/>
      <styled.bedroomDressingtableOff src={bedroomDressingtableOff}/>
      <styled.bedroomDeskOff src={bedroomDeskOff}/>
      <styled.bedroomClothesOff src={bedroomClothesOff}/>
    </styled.Room>
  )
}

export default Room
