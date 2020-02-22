import styled from "styled-components";

export const Room = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #b3dadb;
  opacity: ${p => p.isActive? 0 : 1};
  z-index: ${p => p.isActive? -1 : 5};
`;

export const RoomEmpty = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;
