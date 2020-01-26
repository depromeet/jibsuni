import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 470px;
  height: 100%;
  float: right;
  padding: 0 100px 0 50px;
`;

export const Profile = styled.div`
  display: flex;
  font-size: 26px;
`;

export const Title = styled.div`
  flex: 1 0 auto;
  line-height: 1.5;
    
  & > b > span {
    color: #ff595f;
  }
`;

export const TotalCount = styled.div`
  display: flex;
  margin-top: 40px;
  
  #middle {
    margin: 0 114px;
  }
`;

export const WeatherWrapper = styled.div`
  width: 470px;
  height: 110px;
  display: flex;
  opacity: 0.33;
  border-radius: 4px;
  background-color: #ebecf0;
  margin: 36px auto 46px;
`;

export const NavBarWrapper = styled.div`
  display: flex;
`;