import React from 'react';

import * as styled from "./style";

function NavBar({
  title,
  isActive,
}) {
  return (
    <styled.Wrapper isActive={isActive}>
      {title}
    </styled.Wrapper>
  )
}

export default NavBar
