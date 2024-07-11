import React, { useState, ChangeEvent, FormEvent, ReactNode } from 'react';
import LabelForForm from '../utilits/labelForModals';
import LoginBtn from '../utilits/mainBtn';
import { useDispatch, useSelector } from 'react-redux';
import {
  HANDLE_SIGNUP_MODAL_VISIBILITY,
  HANDLE_LOGIN_MODAL_VISIBILITY,
} from '../../redux/actions/action_types';
import { selectSignUp } from '../../redux/selectors/selectors_for_authorization';

interface Credentials {
  email: string;
}
interface AllModalsTypes {
  contentForm: ReactNode;
}

function RegistrationModal(props: AllModalsTypes) {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
  });
  const isSignUpVisible = useSelector(selectSignUp);
  const dispatch = useDispatch();

  const handleEmailSet = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, email: e.target.value });
  };

  const closeDialog = () => {
    dispatch({
      type: HANDLE_SIGNUP_MODAL_VISIBILITY,
      payload: false,
    });
  };
  const openLoginModal = () => {
    dispatch({
      type: HANDLE_LOGIN_MODAL_VISIBILITY,
      payload: true,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeDialog();
    openLoginModal();
  };

  return isSignUpVisible ? (
    <div className="backdrop">
      <dialog open={true} className="loggingPopupContainer">
        <LabelForForm className={'labelForForm'} text={'Sign up'} />
        <form className="loggingForm" onSubmit={handleSubmit}>
          <input
            className={'nameLoggingInput'}
            placeholder={'Email'}
            type={'email'}
            value={credentials.email}
            onChange={handleEmailSet}
          ></input>
          <LoginBtn
            className={'loggingButton'}
            type={'submit'}
            onClick={handleSubmit}
          >
            {' '}
            Sign up{' '}
          </LoginBtn>
        </form>
      </dialog>
    </div>
  ) : null;
}

export default RegistrationModal;
