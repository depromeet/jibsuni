import React from 'react';
import KakaoLogin from "../../components/KakaoLogin";

import * as styled from "./style";

const Login = () => {

  return (
    <styled.LoginForm>
      <p>집순이는 집에서도 할 일이 많다</p>
      <KakaoLogin />
    </styled.LoginForm>
  );
};

export default Login;
