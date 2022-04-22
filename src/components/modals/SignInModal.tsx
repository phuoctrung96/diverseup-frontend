import React, { FC } from 'react';
import ModalWindow from 'components/shared/modal-window/ModalWindow';
import SignInForm from 'components/shared/forms/sign-in-form/SignInForm';
import { MODAL_TYPES, useGlobalModalContext } from 'GlobalModal';
import style from 'styles/modules/Auth.module.scss';
import SocialSignInButtons from 'components/shared/forms/social-sign-in-buttons/SocialSignInButtons';

export const SignInModal: FC = () => {
  const { hideModal, showModal } = useGlobalModalContext();

  const handleSignUpForm = () => {
    showModal(MODAL_TYPES.SIGN_UP_MODAL);
  };

  const handleForgotForm = () => {
    showModal(MODAL_TYPES.FORGOT_MODAL);
  };

  return (
    <ModalWindow visible={true} setVisible={hideModal}>
      <h2 className={style.title}>{'Sign in'}</h2>
      <span className={style.text}>
        Please fill in all the fields below to sign in or choose the option to sign with any of
        social networks below.
      </span>
      <SocialSignInButtons />

      <SignInForm switchOnSignUpForm={handleSignUpForm} switchOnForgotForm={handleForgotForm} />
    </ModalWindow>
  );
};

export default SignInModal;
