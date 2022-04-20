import React, { FC } from 'react';
import style from '../Auth.module.scss';
import { IModalProps } from '../../AuthModal';
import Button from '../../../shared/button/Button';

const EmailSent: FC<IModalProps> = ({ setShow, isHide }) => {
  const resendHandler = () => {
    alert('resend message');
    if (isHide) {
      isHide(false);
    }
    if (setShow) {
      setShow(true);
    }
  };

  return (
    <>
      <h2 className={style.title}>Sign in</h2>
      <span className={style.text}>
        Check your inbox, we’ve sent you the link to reset your password. Please click on that link
        to change your password.
      </span>
      <div className={style.variant}>
        <span>Didn’t recieve the link?</span>
        <Button text="Resend" classList={['linkBtn']} onClick={resendHandler} />
      </div>
    </>
  );
};

export default EmailSent;
