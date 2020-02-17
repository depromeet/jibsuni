import React from 'react';
import * as styled from "./style";
import logo from '../../images/img-logo.svg'

function Header() {
  return (
    <styled.Wrapper>
      <styled.Img src={logo}/>
    </styled.Wrapper>
  )
}

export default Header