import { ROUTE_JOB_PLACEMENT } from 'app-constants';
import PageTitle from 'components/common/page-title/PageTitle';
import StepperComponent from 'components/shared/stepper/Stepper';
import React, { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AuthHelper from '../../utils/AuthHelpers';
import { GlobalJobPlacement, GlobalJobPlacementContext } from './GlobalJobPlacementContext';

const steps = [
  { name: 'Step 1', route: `/${ROUTE_JOB_PLACEMENT}` },
  { name: 'Step 2', route: `/${ROUTE_JOB_PLACEMENT}/step2` },
  { name: 'Step 3', route: `/${ROUTE_JOB_PLACEMENT}/step3` },
  { name: 'Step 4', route: `/${ROUTE_JOB_PLACEMENT}/step4` },
  { name: 'Step 5', route: `/${ROUTE_JOB_PLACEMENT}/step5` },
];

export const JobPlacementPage: FC = () => {
  const [stepsState, setStepsState] = useState(steps);
  const accessToken = AuthHelper.getAccessToken();
  const renderStepperComponent = () => {
    return (
      <GlobalJobPlacementContext.Consumer>
        {(value) => {
          return <StepperComponent steps={stepsState} />;
        }}
      </GlobalJobPlacementContext.Consumer>
    );
  };

  useEffect(() => {
    if (accessToken) {
      const newSteps = steps.filter((item) => {
        if (item.name === 'Step 3') return null;
        if (item.name === 'Step 4') item.name = 'Step 3';
        if (item.name === 'Step 5') item.name = 'Step 4';
        return item;
      });
      setStepsState(newSteps);
    }
  }, [accessToken]);

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
