import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import ModalWindow from '../shared/modal-window/ModalWindow';
import Auth from './auth/Auth';
import Forgot from './auth/forgot/Forgot';
import EmailSent from './auth/email-sent/EmailSent';
import NewPassword from './auth/new-password/NewPassword';

interface IAuthModal {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export interface IModalProps {
  setShow?: Dispatch<SetStateAction<boolean>>;
  isHide?: Dispatch<SetStateAction<boolean>>;
}

const AuthModal: FC<IAuthModal> = ({ visible, setVisible }) => {
  const [showForgot, setShowForgot] = useState<boolean>(false);
  const [showSentEmail, setShowSentEmail] = useState<boolean>(false);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);

  return (
    <>
      <ModalWindow visible={visible} setVisible={setVisible}>
        <Auth setShow={setShowForgot} isHide={setVisible} />
      </ModalWindow>
      <ModalWindow visible={showForgot} setVisible={setShowForgot}>
        <Forgot setShow={setShowSentEmail} isHide={setShowForgot} />
      </ModalWindow>
      <ModalWindow visible={showSentEmail} setVisible={setShowSentEmail}>
        <EmailSent setShow={setShowNewPassword} isHide={setShowSentEmail} />
      </ModalWindow>
      <ModalWindow visible={showNewPassword} setVisible={setShowNewPassword}>
        <NewPassword isHide={setShowNewPassword} />
      </ModalWindow>
    </>
  );
};

export default AuthModal;
