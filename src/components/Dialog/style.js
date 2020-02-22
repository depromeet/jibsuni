import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 1000;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

export const Dimmer = styled.div`
  position: absolute;
  background-color: rgba(97, 103, 111, 0.7);
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 1000px;
  height: 800px;
  border-radius: 6px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 11px 41px 0 rgba(0, 0, 0, 0.09);
  background-image: linear-gradient(to bottom, #f8f9fb, #ffffff);
`;

export const CloseButton = styled.button`
  height: 40px;
  padding: 0;
  position: absolute;
  right: 40px;
  top: 40px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  z-index: 3;
`;
