import styled from 'styled-components';

export const FurnitureWrapper = styled.div`
  width: 20%;
  height: 260px;
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Title = styled.p`
position: absolute;
bottom: 0;
text-align: center;
font-size: 20px;
${p => p.isActive ? 'font-weight: bold' : ''};
`;
