import ModalWindow from 'components/shared/modal-window/ModalWindow';
import { useGlobalModalContext } from 'contexts/GlobalModalContext';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthHelper from '../../utils/AuthHelpers';

export const JobPlacementFinishModal: FC = () => {
  const navigate = useNavigate();
  const { hideModal } = useGlobalModalContext();
  const userInfo = AuthHelper.getUserInfo();

  return (
    <ModalWindow
      visible={true}
      setVisible={() => {
        hideModal();
        navigate('/');
      }}
    >
      <div>
        Thank you {userInfo.username || userInfo.email} for filling out DiverseUp job placement.
        Once we find your ideal match, we will contact you.
      </div>
    </ModalWindow>
  );
};

export default JobPlacementFinishModal;
