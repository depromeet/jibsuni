import React from 'react';

import * as styled from "./style";

function NavBar({
  title,
  isActive,
  onClick,
}) {
  return (
    <styled.Wrapper isActive={isActive} onClick={onClick}>
      {title}
    </styled.Wrapper>
  )
}

export default NavBar
