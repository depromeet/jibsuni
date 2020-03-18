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

export const Kitchen = styled.img`
  position:absolute;
  width: 1000px;
  height: 890px;
`;

export const KitchenOven = styled.img`
  width: 191px;
  height: 225px;
  position: absolute;
  top: 362px;
  left: 612px;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenRefrigerator = styled.img`
  width: 192px;
  height: 334px;
  position: absolute;
  top: 292px;
  left: 141px;
  z-index: 5;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenSink = styled.img`
  width: 446px;
  height: 293px;
  position: absolute;
  top: 250px;
  left: 285px;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenTable = styled.img`
  width: 358px;
  height: 295px;
  position: absolute;
  top: 493px;
  left: 318px;
  &:hover {
    cursor: pointer;
  }
`;

export const KitchenTrashcan = styled.img`
  width: 110px;
  height: 143px;
  position: absolute;
  top: 478px;
  left: 761px;
  &:hover {
    cursor: pointer;
  }
`;
