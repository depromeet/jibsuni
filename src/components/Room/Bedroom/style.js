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

export const Bedroom = styled.img`
  position:absolute;
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
