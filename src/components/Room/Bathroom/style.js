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

export const Bathroom = styled.img`
  width: 1000px;
  height: 890px;
  position:absolute;
`;

export const BathroomShower = styled.img`
  width: 179px;
  height: 389px;
  position: absolute;
  top: 263px;
  left: 129px;
  &:hover {
    cursor: pointer;
  }
`;

export const BathroomBasin = styled.img`
  width: 238px;
  height: 394px;
  position: absolute;
  top: 247px;
  left: 586px;
  &:hover {
    cursor: pointer;
  }
`;

export const BathroomToilet = styled.img`
  width: 150px;
  height: 219px;
  position: absolute;
  top: 326px;
  left: 288px;
  &:hover {
    cursor: pointer;
  }
`;

export const BathroomTrashcan = styled.img`
  width: 110px;
  height: 143px;
  position: absolute;
  top: 521px;
  left: 856px;
  &:hover {
    cursor: pointer;
  }
`;

export const BathroomWashingmachine = styled.img`
  width: 158px;
  height: 216px;
  position: absolute;
  top: 263px;
  left: 481px;
  &:hover {
    cursor: pointer;
  }
`;
