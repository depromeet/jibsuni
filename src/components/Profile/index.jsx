import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reqGetAuth } from '../../store/actions/AuthActions';
import { getAuthAPI } from "../../utils/api";
import classnames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classnames.bind(styles);

const Profile = () => {
  const dispatch = useDispatch();
  // 로그인 했을 때 storage.setItem 필요

  const kakaoKey = `27e4446a9670154714ae75651cd801ca`;

  useEffect(() => {
    getAuthAPI()
      .then(response => dispatch(reqGetAuth(response)))
      .catch(error => Error(error));

      onLogin();
  }, [dispatch]);

  const onLogin = () => {
    window.Kakao.init(kakaoKey);
    // 카카오 로그인 버튼 생성
    window.Kakao.Auth.createLoginButton({
      container: '#kakao-login-btn',
      success: function(authObj) {
        alert(JSON.stringify(authObj));
      },
      fail: function(err) {
        alert(JSON.stringify(err));
      }
    });
  };

  return (
    /* 로그인이 됐을 때 프로필이 뜨고, 로그인이 안됐을 때 로그인 버튼이 뜨도록 하기 */
    /* 로그인 버튼 클릭 시 팝업창으로 카카오톡 로그인 띄우기 */
    <div>
      <a id="kakao-login-btn"></a>
    </div>
  );
};

export default Profile;
