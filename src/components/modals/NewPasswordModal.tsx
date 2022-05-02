import React, { FC } from 'react';
import ModalWindow from 'components/shared/modal-window/ModalWindow';
import { MODAL_TYPES, useGlobalModalContext } from 'contexts/GlobalModalContext';
import style from 'styles/modules/Auth.module.scss';
import NewPasswordForm from 'components/shared/forms/new-password-form/NewPasswordForm';

export const NewPasswordModal: FC = () => {
  const { hideModal, showModal } = useGlobalModalContext();

  const handleSignUpForm = () => {
    showModal(MODAL_TYPES.SIGN_UP_MODAL);
  };

  return (
    <ModalWindow visible={true} setVisible={hideModal}>
      <h2 className={style.title}>Create new password</h2>
      <NewPasswordForm />
    </ModalWindow>
  );
};

export default NewPasswordModal;
