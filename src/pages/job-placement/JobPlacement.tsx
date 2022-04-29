import PageTitle from 'components/common/page-title/PageTitle';
import StepperComponent from 'components/shared/stepper/Stepper';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { GlobalJobPlacement, GlobalJobPlacementContext } from './GlobalJobPlacementContext';

export const JobPlacementPage: FC = () => {
  const renderStepperComponent = () => {
    return (
      <GlobalJobPlacementContext.Consumer>
        {(value) => {
          return (
            <StepperComponent
              steps={value.store.steps}
              onClick={(step) => value.handleClickStep(step)}
              disabled
            />
          );
        }}
      </GlobalJobPlacementContext.Consumer>
    );
  };

  return (
    <GlobalJobPlacement>
      <PageTitle title={'Job Placement'} />
      {renderStepperComponent()}
      <div className="job-placement-container">
        <Outlet />
      </div>
    </GlobalJobPlacement>
  );
};

export default JobPlacementPage;
