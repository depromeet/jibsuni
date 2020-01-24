import React, { useCallback, useState } from 'react';
import Profile from "../../components/Profile";

const Login = () => {

  const onLogin = () => {
    
  };

  return (
    <div>
      <Profile
        onClick={onLogin}
      />
    </div>
  );
};

export default Login;