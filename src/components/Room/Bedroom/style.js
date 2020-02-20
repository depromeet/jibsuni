import styled from "styled-components";

export const Room = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #b3dadb;
`;

export const Bedroom = styled.img`
  width: 1000px;
  height: 890px;
`;

export const BedroomBedOff = styled.img`
  width: 440px;
  height: 352px;
  position: absolute;
  top: 367px;
  left: 132px;
  &:hover {
    cursor: pointer;
  }
`;

export const bedroomTrashcanOff = styled.img`
  width: 146px;
  height: 139px;
  position: absolute;
  top: 492px;
  left: 789px;
  &:hover {
    cursor: pointer;
  }
`;

export const bedroomDressingtableOff = styled.img`
  width: 251px;
  height: 296px;
  position: absolute;
  top: 311px;
  left: 561px;
  &:hover {
    cursor: pointer;
  }
`;

export const bedroomDeskOff = styled.img`
  width: 337px;
  height: 288px;
  position: absolute;
  top: 530px;
  left: 452px;
  &:hover {
    cursor: pointer;
  }
`;

export const bedroomClothesOff = styled.img`
  width: 155px;
  height: 208px;
  position: absolute;
  top: 284px;
  left: 784px;
  &:hover {
    cursor: pointer;
  }
`;
