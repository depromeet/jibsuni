import React from 'react';
import * as styled from "./style";

function Count({
  title,
  count
}) {
  return (
    <styled.Wrapper>
      <span>{title}</span>
      <styled.Count>
        <styled.Bar/>
        <span>{count}개</span>
      </styled.Count>
    </styled.Wrapper>
  )
}

export default Count
