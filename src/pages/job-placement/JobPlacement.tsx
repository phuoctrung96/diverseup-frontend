import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import PageTitle from 'components/common/page-title/PageTitle';
import StepperComponent from 'components/shared/stepper/Stepper';

const steps = [
  { name: 'Step 1', route: '/job-placement' },
  { name: 'Step 2', route: '/job-placement/step2' },
  { name: 'Step 3', route: '/job-placement/step3' },
  { name: 'Step 4', route: '/job-placement/step4' },
  { name: 'Step 5', route: '/job-placement/step5' },
];

export const JobPlacementPage: FC = () => {
  return (
    <>
      <PageTitle title={'Job Placement'} />
      <StepperComponent steps={steps} />
      <div className="job-placement-container">
        <Outlet />
      </div>
    </>
  );
};

export default JobPlacementPage;
