import React, {
  useState,
  ChangeEvent,
  FormEvent,
  ReactNode,
  useEffect,
} from 'react';
import LabelForForm from '../utilits/labelForModals';
import LoginBtn from '../utilits/mainBtn';
import Cookies from 'js-cookie';

import { getMovieUserId } from 'data/fetched_data/id_request_data';
import { useDispatch, useSelector } from 'react-redux';
import {
  HANDLE_STATUS_API,
  HANDLE_LOGIN_MODAL_VISIBILITY,
} from '../../redux/actions/action_types';
import { selectLogin } from '../../redux/selectors/selectors_for_authorization';

interface Credentials {
  token: string;
}
interface AllModalsTypes {
  contentForm: ReactNode;
}

function LoggingPopup(props: AllModalsTypes) {
  const [credentials, setCredentials] = useState<Credentials>({
    token: '',
  });
  const dispatch = useDispatch();
  const isLoginVisible = useSelector(selectLogin);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => {
      closeLoginDialog();
      window.location.reload();
    }, 300);
  };

  const closeLoginDialog = () => {
    dispatch({
      type: HANDLE_LOGIN_MODAL_VISIBILITY,
      visible: false,
    });
  };

  const fetchGetUserId = async () => {
    try {
      const user = await getMovieUserId();
      await Cookies.set('userId', user.id);
      dispatch({
        type: HANDLE_STATUS_API,
        payload: user.status,
      });

      return user.id;
    } catch (error) {
      console.error('Failed to fetch', error);
    }
  };

  const handleTokenSet = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newToken = e.target.value;
    setCredentials({ ...credentials, token: newToken });
    Cookies.set('userToken', newToken, { expires: 365 });
  };
  useEffect(() => {
    fetchGetUserId();
  }, []);

  return isLoginVisible ? (
    <div className="backdrop">
      <dialog open={true} className="loggingPopupContainer">
        <LabelForForm className={'labelForForm'} text={'Login Form'} />
        <form className="loggingForm" onSubmit={handleSubmit}>
          <input
            className={'nameLoggingInput '}
            placeholder={'Token'}
            type={'text'}
            value={credentials.token}
            onChange={handleTokenSet}
          ></input>
          <LoginBtn className={'loggingButton'} type={'submit'}>
            {' '}
            Login{' '}
          </LoginBtn>
        </form>
      </dialog>
    </div>
  ) : null;
}

export default LoggingPopup;
