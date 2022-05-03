import PageTitle from 'components/common/page-title/PageTitle';
import StepperComponent from 'components/shared/stepper/Stepper';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { useGlobalJobPlacementContext } from '../../contexts/GlobalJobPlacementContext';

export const JobPlacementPage: FC = () => {
  const { store } = useGlobalJobPlacementContext();
  const renderStepperComponent = () => {
    return <StepperComponent steps={store.steps} disabled />;
  };

  return (
    <>
      <PageTitle title={'Job Placement'} />
      {renderStepperComponent()}
      <div className="job-placement-container">
        <Outlet />
      </div>
    </>
  );
};

export default JobPlacementPage;
