import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import Count from "../../components/Count";
import Weather from "../../components/Weather";
import NavBar from "../../components/NavBar";
import profile from '../../images/profile.svg'
import * as styled from "./style";

function Board() {
  const [navState, setNavState] = useState("all");
  const user = useSelector(state => state.auth.user);

  return(
    <styled.Wrapper>
      <styled.Profile>
        <styled.Title>
          안녕하세요,<br/>
          <b><span>🧚‍♂️ 빨래수호신</span> {user != null ? user.name : ''}님 :)</b>
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
      <styled.NavBarWrapper>
        <NavBar title="ALL" onClick={() => setNavState("all")}/>
        <NavBar title="침실" onClick={() => setNavState("bed")}/>
        <NavBar title="거실" onClick={() => setNavState("living")}/>
        <NavBar title="주방" onClick={() => setNavState("kitchen")}/>
        <NavBar title="화장실" onClick={() => setNavState("toilet")}/>
      </styled.NavBarWrapper>
    </styled.Wrapper>
  )
}

export default Board
