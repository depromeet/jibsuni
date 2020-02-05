import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AUTH_TOKEN_STORAGE_KEY } from '../../constants';
import { reqPostLogin } from '../../store/actions/AuthActions';
import { postLoginAPI } from "../../utils/api";

const kakaoKey = process.env.KAKAO_KEY;

const KakaoLogin = () => {
  const dispatch = useDispatch();

  const handleKakaoLogin = useCallback(async (accessToken) => {
    try {
      const { accessToken: token, member } = await postLoginAPI(accessToken);
      console.log(token, member);

      localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token);
      window.Kakao.Auth.setAccessToken(token);
      dispatch(reqPostLogin({ token: token, user: member }));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const onLogin = () => {
    window.Kakao.init(kakaoKey);
    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success(authObj) {
        handleKakaoLogin(authObj.access_token);
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      }
    });
  };

  useEffect(() => {
    onLogin();
  }, []);

  return (
    <div>
      <a id="kakao-login-btn"></a>
    </div>
  );
};

export default KakaoLogin;
