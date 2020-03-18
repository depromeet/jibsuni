import styled from "styled-components";

export const Room = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 890px;
  opacity: ${p => p.isActive? 0 : 1};
  z-index: ${p => p.isActive? -1 : 5};
`;

export const Bathroom = styled.img`
  width: 1000px;
  height: 890px;
  position:absolute;
`;

export const BathroomShower = styled.img`
  width: 235px;
  height: 445px;
  position: absolute;
  top: 243px;
  left: 109px;
  &:hover {
    cursor: pointer;
  }
`;

export const BathroomBasin = styled.img`
  width: 288px;
  height: 386px;
  position: absolute;
  top: 227px;
  left: 566px;
  z-index: 5;
  &:hover {
    cursor: pointer;
  }
`;

export const BathroomToilet = styled.img`
  width: 210px;
  height: 268px;
  position: absolute;
  top: 306px;
  left: 268px;
  &:hover {
    cursor: pointer;
  }
`;

export const BathroomTrashcan = styled.img`
  width: 110px;
  height: 143px;
  position: absolute;
  top: 501px;
  left: 836px;
  &:hover {
    cursor: pointer;
  }
`;

export const BathroomWashingmachine = styled.img`
  width: 219px;
  height: 271px;
  position: absolute;
  top: 243px;
  left: 461px;
  &:hover {
    cursor: pointer;
  }
`;
