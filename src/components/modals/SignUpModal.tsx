import React, { FC } from 'react';
import { MODAL_TYPES, useGlobalModalContext } from 'contexts/GlobalModalContext';
import ModalWindow from 'components/shared/modal-window/ModalWindow';
import style from 'styles/modules/Auth.module.scss';
import linkedin from 'assets/images/auth/Linkedin.svg';
import gmail from 'assets/images/auth/Gmail.svg';
import SignInForm from 'components/shared/forms/sign-in-form/SignInForm';
import SignUpForm from 'components/shared/forms/sign-up-form/SignUpForm';
import SocialSignInButtons from 'components/shared/forms/social-sign-in-buttons/SocialSignInButtons';

export const SignUpModal: FC = () => {
  const { hideModal, showModal, store } = useGlobalModalContext();

  const handleSignInForm = () => {
    showModal(MODAL_TYPES.SIGN_IN_MODAL);
  };

  return (
    <ModalWindow visible={true} setVisible={hideModal}>
      <h2 className={style.title}>{'Sign Up'}</h2>
      <span className={style.text}>
        Please fill in all the fields below to sign up or choose one of the options below.
      </span>
      <SocialSignInButtons />

      <SignUpForm switchOnLogin={handleSignInForm} />
    </ModalWindow>
  );
};

export default SignUpModal;
