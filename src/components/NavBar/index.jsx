import React from 'react';

import * as styled from "./style";

function NavBar({
  title
}) {
  return (
    <styled.Wrapper>
      {title}
    </styled.Wrapper>
  )
}

export default NavBar
