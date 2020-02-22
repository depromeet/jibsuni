import React from 'react';
import KakaoLogin from "../../components/KakaoLogin";
import * as styled from "./style";
import backImg from '../../images/login-background.jpeg';

const Login = () => {

  return (
    <styled.LoginWrapper style={{ backgroundImage: `url(${backImg})` }}>
      <styled.LoginForm>
        <p>집순이는 집에서도 할 일이 많다</p>
        <KakaoLogin />
      </styled.LoginForm>
    </styled.LoginWrapper>
  );
};

export default Login;
