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

export const Kitchen = styled.img`
  position:absolute;
  width: 1000px;
  height: 890px;
`;

export const KitchenOven = styled.img`
  width: 138px;
  height: 175px;
  position: absolute;
  top: 382px;
  left: 632px;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenRefrigerator = styled.img`
  width: 137px;
  height: 283px;
  position: absolute;
  top: 292px;
  left: 181px;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenSink = styled.img`
  width: 391px;
  height: 243px;
  position: absolute;
  top: 270px;
  left: 305px;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenTable = styled.img`
  width: 305px;
  height: 244px;
  position: absolute;
  top: 513px;
  left: 338px;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenTrashcan = styled.img`
  width: 110px;
  height: 143px;
  position: absolute;
  top: 498px;
  left: 781px;
  &:hover {
    cursor: pointer;
  }
`;
