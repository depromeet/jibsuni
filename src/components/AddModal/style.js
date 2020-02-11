import styled from 'styled-components';

export const Dim = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: #000000;
`;

export const Wrapper = styled.div`
  z-index: 2;
  width: 1000px;
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 6px;
  box-shadow: 0 11px 41px 0 rgba(0, 0, 0, 0.09);
`;

export const CloseBtn = styled.img`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 30px;
  height: 30px;
  object-fit: contain;
  cursor: pointer;
`;

export const Title = styled.div`
  padding: 120px 0 70px;
  font-size: 40px;
  font-weight: bold;
  line-height: 0.8;
  text-align: center;
  color: #383b41;
`;

export const CategoryWapper = styled.div`
  display: flex;
  text-align: center;
  margin: 0 59px;
`;

export const Category = styled.div`
  margin-right: 18px;
  cursor: pointer;
  
  &:hover {
    > div {
      font-weight: bold;
      color: #383b41;
    }
  }
`;

export const CategoryImg = styled.img`
  width: 162px;
  height: 144px;
`;

export const SelectedName = styled.div`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.33;
  color: #383b41;
`;

export const Name = styled.div`
  font-size: 24px;
  font-weight: normal;
  line-height: 1.33;
  color: #777777;
`;
