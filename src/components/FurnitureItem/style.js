import styled from 'styled-components';

export const FurnitureWrapper = styled.div`
  width: 20%;
  height: 200px;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const Title = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  text-align: center;
  font-size: 18px;
  ${p => p.isActive ? 'font-weight: bold' : ''};
`;
