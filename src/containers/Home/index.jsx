import React from 'react';

import Header from '../../components/Header';
import Board from '../Board';
import Sidebar from '../Sidebar';
import * as styled from './style';
import Room from '../../components/Room/RoomTemplate';

function Home() {
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
