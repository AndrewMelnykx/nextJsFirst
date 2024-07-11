import React from 'react';
import './header.css';
//@ts-ignore
import signupImg from '../../assets/pictures/signup.png';

import HandleVisibilityByStatus from 'components/utilits/helpers/status_processing';

import { HANDLE_SIGNUP_MODAL_VISIBILITY } from '../../redux/actions/action_types';
import { useDispatch, useSelector } from 'react-redux';
import { selectLogin } from '../../redux/selectors/selectors_for_authorization';

function MainHeader() {
  const dispatch = useDispatch();
  const data = useSelector(selectLogin);

  const handleSignupOpening = () => {
    dispatch({
      type: HANDLE_SIGNUP_MODAL_VISIBILITY,
      payload: true,
    });
  };
  return (
    <header className="header">
      {data ? false : <HandleVisibilityByStatus />}
      <div className="header_logo">{'Movies'}</div>
      <button className="header_signup_button" onClick={handleSignupOpening}>
        <img src={signupImg} alt="signup_button" id="signupImg" />
      </button>
    </header>
  );
}

export default MainHeader;
