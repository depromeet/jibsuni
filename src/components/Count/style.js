import styled from 'styled-components';

export const Wrapper = styled.div`
  color: #a5adbb;
  
  & > span {
    width: max-content;
    font-size: 18px;
    font-weight: 300;
    color: #a5adbb;
    min-width: 100px;
    display: block;
  } 
`;

export const Count = styled.div`
  display: flex;
  margin-top: 10px;
  line-height: 1;
  
  & > span {
    width: max-content;
    font-size: 26px;
    font-weight: bold;
    color: #ff595f;
  }
`;

export const Bar = styled.div`
  width: 4px;
  height: 30px;
  margin-right: 10px;
  background-color: #ff595f;
`;
