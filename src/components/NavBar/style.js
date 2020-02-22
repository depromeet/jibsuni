import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 32px;
  text-align: center;
  color: #a5adbb;
  border-bottom: solid 1px #c1c7d0;

  &:hover {
    font-weight: bold;
    color: #383b41;
    border-bottom: 2px solid #616d86;
    cursor: pointer;
  }

  ${p => p.isActive ? `
    font-weight: bold;
    color: #383b41;
    border-bottom: 2px solid #616d86;
  ` : ''};
`;
