import React from 'react';
import plus from '../../images/plus.svg'
import * as styled from './style'

function Sidebar() {
  return (
    <styled.Wrapper>
      <styled.ButtonWrapper>
        <div>전체</div>
        <div>거실</div>
        <div>침실</div>
        <div>주방</div>
        <div>화장실</div>
        <styled.Img src={plus}/>
      </styled.ButtonWrapper>
    </styled.Wrapper>
  )
}

export default Sidebar;