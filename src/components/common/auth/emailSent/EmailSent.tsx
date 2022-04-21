import React, { Dispatch, FC, SetStateAction } from 'react';
import ModalWindow from '../../../shared/modal-window/ModalWindow';
import style from '../Auth.module.scss';

interface IEmailSent {
  showEmailSent: boolean;
  setShowEmailSent: Dispatch<SetStateAction<boolean>>;
}

const EmailSent: FC<IEmailSent> = ({ showEmailSent, setShowEmailSent }) => {
  const resendHandler = () => {
    alert('resend message');
    setShowEmailSent(false);
  };

  return (
    <ModalWindow setVisible={setShowEmailSent} visible={showEmailSent}>
      <h2 className={style.title}>Sign in</h2>
      <span className={style.text}>
        Check your inbox, we’ve sent you the link to reset your password. Please click on that link
        to change your password.
      </span>
      <div className={style.variant}>
        <span>Didn’t recieve the link?</span>
        <button className={style.selectLogin} onClick={resendHandler}>
          Resend
        </button>
      </div>
    </ModalWindow>
  );
};

export default EmailSent;
