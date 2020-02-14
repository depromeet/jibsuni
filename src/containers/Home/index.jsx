import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomsAPI } from '../../utils/api';

import Header from "../../components/Header";
import Board from "../Board";
import Sidebar from "../Sidebar";
import * as styled from './style';

function Home() {
  const tokenStr = useSelector(state => state.auth.token);

  useEffect(() => {
    getRoomsAPI(tokenStr);
  }, []);

  return (
    <>
      <Header/>
      <styled.Wrapper>
        <Sidebar/>
        <styled.Room/>
        <Board/>
      </styled.Wrapper>
    </>
  )
}

export default Home