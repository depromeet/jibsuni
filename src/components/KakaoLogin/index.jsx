import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AUTH_TOKEN_STORAGE_KEY } from '../../constants';
import { reqPostLogin } from '../../store/actions/AuthActions';
import { postLoginAPI, putProfileAPI } from "../../utils/api";

import loginBtn from '../../images/btn-login.svg';
import * as styled from "./style";

const kakaoKey = process.env.REACT_APP_KAKAO_KEY;

const KakaoLogin = () => {
  const dispatch = useDispatch();

  const handleKakaoLogin = useCallback(async (accessToken, nickname) => {
    try {
      const { accessToken: token } = await postLoginAPI(accessToken);
      const { member } = await putProfileAPI(token, nickname);

      localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
      window.Kakao.Auth.setAccessToken(token);
      dispatch(reqPostLogin({ token: token, user: member }));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const onLogin = () => {
    window.Kakao.init(kakaoKey);
    window.Kakao.Auth.login({
      success(authObj) {
        window.Kakao.API.request({
          url: '/v1/user/me',
          success: function(res) {
            handleKakaoLogin(authObj.access_token, res.properties.nickname);
           },
           fail: function(error) {
            alert(JSON.stringify(error));
           }
        });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      }
    });
  };

  return (
    <styled.LoginBtn id="custom-login-btn" onClick={onLogin}>
      <img alt={loginBtn} src={loginBtn}/>
    </styled.LoginBtn>
  );
};

export default KakaoLogin;
