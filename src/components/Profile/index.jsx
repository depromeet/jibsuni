import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {reqGetAuth} from '../../store/actions/AuthActions'
import {getAuthAPI} from "../../utils/api";
import classnames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classnames.bind(styles);

const Profile = ({ onClick }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAuthAPI()
      .then(response => dispatch(reqGetAuth(response)))
      .catch(error => Error(error));
  }, [dispatch]);

  return (
    /* 로그인이 됐을 때 프로필이 뜨고, 로그인이 안됐을 때 로그인 버튼이 뜨도록 하기 */
    /* 로그인 버튼 클릭 시 팝업창으로 카카오톡 로그인 띄우기 */
    <div> 
      <button className={cx('sign-btn')} onClick={onClick}>
        카카오톡으로 시작하기
      </button>
    </div>
  );
};

export default Profile;