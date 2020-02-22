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
    margin: 0 85px;
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

export const TodoList = styled.ul`
  height: 430px;
  overflow-y: scroll;
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px 0;
  min-height: 90px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Number = styled.div`
  flex: none;
  margin-right: 18px;
  font-size: 18.2px;
  font-weight: bold;
  line-height: 1.64;
  text-align: center;
  color: #383b41;
`;

export const CheckImage = styled.img` 
  flex: none;
  margin-right: 10px;
  width: 30px;
  height: 30px;
`;

export const Label = styled.span`
  margin-right: 6px;
  font-size: 16px;
  font-weight: bold;
  color: #383b41;
`;

export const TodoContent = styled.span`
  flex: 1 1 auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: normal;
  color: #777777;
  text-decoration: ${p => p.complete ? 'line-through' : 'none'};
`;
