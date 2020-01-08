import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux'

import {reqGetAuth} from '../../store/actions/AuthActions'
import {getAuthAPI} from "../../utils/api";

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAuthAPI()
      .then(response => dispatch(reqGetAuth(response)))
      .catch(error => Error(error));
  }, [dispatch]);

  return (
    <div>
        <h1>Proflie</h1>
    </div>
  );
};

export default Profile;