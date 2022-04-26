import React, { FC, useState, createContext, useContext, ReactNode } from 'react';
import SignInModal from 'components/modals/SignInModal';
import SignUpModal from 'components/modals/SignUpModal';
import ForgotModal from 'components/modals/ForgotModal';
import NewPasswordModal from 'components/modals/NewPasswordModal';
import EmailSentModal from 'components/modals/EmailSentModal';
import ContactUsModal from 'components/modals/ContactUsModal';

export const MODAL_TYPES = {
  SIGN_IN_MODAL: 'SIGN_IN_MODAL',
  SIGN_UP_MODAL: 'SIGN_UP_MODAL',
  FORGOT_MODAL: 'FORGOT_MODAL',
  NEW_PASSWORD_MODAL: 'NEW_PASSWORD_MODAL',
  EMAIL_SENT_MODAL: 'EMAIL_SENT_MODAL',
  CONTACT_US_MODAL: 'CONTACT_US_MODAL',
};

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.SIGN_IN_MODAL]: SignInModal,
  [MODAL_TYPES.SIGN_UP_MODAL]: SignUpModal,
  [MODAL_TYPES.FORGOT_MODAL]: ForgotModal,
  [MODAL_TYPES.NEW_PASSWORD_MODAL]: NewPasswordModal,
  [MODAL_TYPES.EMAIL_SENT_MODAL]: EmailSentModal,
  [MODAL_TYPES.CONTACT_US_MODAL]: ContactUsModal,
};

type GlobalModalContext = {
  showModal: (modalType: string, modalProps?: any) => void;
  hideModal: () => void;
  store: any;
};

/* eslint-disable */
const initialState: GlobalModalContext = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
};

const GlobalModalContext = createContext(initialState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: FC<{ children: ReactNode }> = ({ children }) => {
  const [store, setStore] = useState({});
  // @ts-ignore
  const { modalType, modalProps } = store || {};

  const showModal = (modalType: string, modalProps: any = {}) => {
    setStore({
      ...store,
      modalType,
      modalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
    });
  };

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType];
    if (!modalType || !ModalComponent) {
      return null;
    }
    return <ModalComponent id="global-modal" {...modalProps} />;
  };

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  );
};
/* eslint-enable */
