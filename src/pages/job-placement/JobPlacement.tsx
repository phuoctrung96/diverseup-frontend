import { IJobPlacementBody } from 'api/job-placement';
import { ROUTE_JOB_PLACEMENT } from 'app-constants';
import PageTitle from 'components/common/page-title/PageTitle';
import StepperComponent from 'components/shared/stepper/Stepper';
import React, { createContext, FC, useCallback, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  GlobalJobPlacement,
  GlobalJobPlacementContext,
  useGlobalJobPlacementContext,
} from './GlobalJobPlacement';

const steps = [
  { name: 'Step 1', route: `/${ROUTE_JOB_PLACEMENT}` },
  { name: 'Step 2', route: `/${ROUTE_JOB_PLACEMENT}/step2` },
  { name: 'Step 3', route: `/${ROUTE_JOB_PLACEMENT}/step3` },
  { name: 'Step 4', route: `/${ROUTE_JOB_PLACEMENT}/step4` },
  { name: 'Step 5', route: `/${ROUTE_JOB_PLACEMENT}/step5` },
];

export const JobPlacementPage: FC = () => {
  const renderStepperComponent = () => {
    return (
      <GlobalJobPlacementContext.Consumer>
        {(value) => {
          return <StepperComponent steps={steps} />;
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
