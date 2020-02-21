import styled from "styled-components";

export const Room = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: #b3dadb;
`;

export const Kitchen = styled.img`
  width: 1000px;
  height: 890px;
`;

export const KitchenOven = styled.img`
  width: 179px;
  height: 389px;
  position: absolute;
  top: 263px;
  left: 129px;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenRefrigerator = styled.img`
  width: 238px;
  height: 394px;
  position: absolute;
  top: 247px;
  left: 586px;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenSink = styled.img`
  width: 150px;
  height: 219px;
  position: absolute;
  top: 326px;
  left: 288px;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenTable = styled.img`
  width: 110px;
  height: 143px;
  position: absolute;
  top: 521px;
  left: 856px;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenTrashcan = styled.img`
  width: 158px;
  height: 216px;
  position: absolute;
  top: 263px;
  left: 481px;
  &:hover {
    cursor: pointer;
  }
`;
