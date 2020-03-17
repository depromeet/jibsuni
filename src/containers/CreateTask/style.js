import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;

export const Title = styled.p`
  position: relative;
  top: 120px;
  margin: 0;
  font-size: 40px;
  font-weight: bold;
  color: #383b41;
`;

export const FurnitureList = styled.div`
  width: 80%;
  height: 220px;
  position: relative;
  top: 170px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 80%;
  position: relative;
  top: 200px;
  opacity: 0.4;
  font-size: 30px;
  color: #383b41;
  border: none;
  border-bottom: 2px solid #777777;
`;

export const CompleteButton = styled.button`
  width: 300px;
  height: 80px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100px;
  border: none;
  border-radius: 6px;
  background-color: #ff595f;
  font-size: 30px;
  line-height: 1.07;
  color: #ffffff;
  cursor: pointer;
`;
