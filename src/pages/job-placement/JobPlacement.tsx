import React, { FC, useState } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import { Link, Outlet } from 'react-router-dom';
import StepperComponent from './Stepper';
export const JobPlacementPage: FC = () => {
  const [steps, setSteps] = useState([
    { name: 'Step 1', route: '/job-placement' },
    { name: 'Step 2', route: '/job-placement/step2' },
    { name: 'Step 3', route: '/job-placement/step3' },
    { name: 'Step 4', route: '/job-placement/step4' },
    { name: 'Step 5', route: '/job-placement/step5' },
  ]);
  return (
    <>
      <PageTitle title={'Job Placement'} />
      <StepperComponent steps={steps} />
      <Outlet />
    </>
  );
};

export default JobPlacementPage;
