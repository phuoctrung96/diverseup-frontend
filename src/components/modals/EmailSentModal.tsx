import React, { FC } from 'react';
import ModalWindow from 'components/shared/modal-window/ModalWindow';
import { useGlobalModalContext } from 'contexts/GlobalModalContext';
import { EmailSent } from 'components/shared/forms/email-sent/EmailSent';

export const EmailSentModal: FC = () => {
  const { hideModal } = useGlobalModalContext();

  return (
    <ModalWindow visible={true} setVisible={hideModal}>
      <EmailSent />
    </ModalWindow>
  );
};

export default EmailSentModal;
