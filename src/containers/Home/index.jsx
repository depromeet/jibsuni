import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import Board from '../Board';
import Sidebar from '../Sidebar';
import * as styled from './style';
import Room from '../Room';

function Home() {
  const tokenStr = useSelector(state => state.auth.token);

  return (
    <>
      <Header />
      <styled.Wrapper>
        <Sidebar />
        <Room />
        <Board />
      </styled.Wrapper>
    </>
  );
}

export default Home;
