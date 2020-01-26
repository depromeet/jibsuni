import React from 'react';
import profile from '../../images/profile.svg'
import * as styled from "./style";
import Count from "../../components/Count";
import Weather from "../../components/Weather";

function Board() {
  return(
    <styled.Wrapper>
      <styled.Profile>
        <styled.Title>
          안녕하세요,<br/>
          <b><span>🧚‍♂️ 빨래수호신</span> 은지님 :)</b>
        </styled.Title>
        <img alt={profile} src={profile}/>
      </styled.Profile>
      <styled.TotalCount>
        <Count title="해야하는 일" count={15}/>
        <div id="middle"><Count title="완료 일정" count={2}/></div>
        <Count title="미완료 일정" count={13}/>
      </styled.TotalCount>
      <styled.WeatherWrapper>
        <Weather/>
      </styled.WeatherWrapper>
    </styled.Wrapper>
  )
}

export default Board