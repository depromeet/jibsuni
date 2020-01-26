import React from 'react';
import * as styled from "./style";
import logo from '../../images/logo.svg'

function Header() {
  return (
    <styled.Wrapper>
      <styled.Img src={logo}/>
      <div>집순이</div>
    </styled.Wrapper>
  )
}

export default Header