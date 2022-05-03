import ModalWindow from 'components/shared/modal-window/ModalWindow';
import { useGlobalModalContext } from 'contexts/GlobalModalContext';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthHelper from '../../utils/AuthHelpers';
import { ROUTE_COMPANY_RATING } from 'app-constants';

export const AddRatingFinishModal: FC = () => {
  const navigate = useNavigate();
  const { hideModal, store } = useGlobalModalContext();
  const { modalProps } = store || {};
  const userInfo = AuthHelper.getUserInfo();

  return (
    <ModalWindow
      visible={true}
      setVisible={() => {
        hideModal();
        navigate(`${ROUTE_COMPANY_RATING}/${modalProps.slug}`);
      }}
    >
      <div>
        Thank you {userInfo.username || userInfo.email} for adding rating to{' '}
        {modalProps.companyName}.
      </div>
    </ModalWindow>
  );
};

export default AddRatingFinishModal;
