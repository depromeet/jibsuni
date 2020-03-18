import styled from "styled-components";

export const Rooms = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 890px;
  opacity: ${p => p.isActive? 0 : 1};
  z-index: ${p => p.isActive? -1 : 5};
`;

export const RoomEmpty = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;
