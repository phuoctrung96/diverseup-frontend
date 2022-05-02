import React, { FC } from 'react';
import ModalWindow from 'components/shared/modal-window/ModalWindow';
import { MODAL_TYPES, useGlobalModalContext } from 'contexts/GlobalModalContext';
import ForgotForm from 'components/shared/forms/forgot-form/ForgotForm';

export const ForgotModal: FC = () => {
  const { hideModal, showModal } = useGlobalModalContext();

  const handleSignUpForm = () => {
    showModal(MODAL_TYPES.SIGN_UP_MODAL);
  };

  const handleForgotFormSend = () => {
    showModal(MODAL_TYPES.EMAIL_SENT_MODAL);
  };

  return (
    <ModalWindow visible={true} setVisible={hideModal}>
      <ForgotForm onSend={handleForgotFormSend} />
    </ModalWindow>
  );
};

export default ForgotModal;
