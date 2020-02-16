import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 126px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  margin: 45px auto;
`;

export const SideBtn = styled.div`
  width: 50px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  letter-spacing: normal;
  text-align: center;
  color: #777777;
  background: #f5f5f5;
  border-radius: 50px;
  margin-bottom: 50px;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #383b41;
  }

  ${p => p.isActive ? `
    font-weight: bold;
    color: #ff595f;
  ` : ''};
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 113px;
  left: 38px;
`;