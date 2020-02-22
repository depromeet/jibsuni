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
  position: relative;

  & > img:first-child {
      opacity: 1;
      z-index: 1;
    }

    & > img:last-child {
      opacity: 0;
      z-index: -1;
    }

  ${p => p.isActive ? `
    & > img:first-child {
      opacity: 0;
      z-index: -1;
    }

    & > img:last-child {
      opacity: 1;
      z-index: 1;
    }
  ` : ''};

  &:hover {
    & > img:first-child {
      opacity: 0;
      z-index: -1;
    }

    & > img:last-child {
      opacity: 1;
      z-index: 1;
    }
  }
`;

export const PlusButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 113px;
  left: 38px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;
