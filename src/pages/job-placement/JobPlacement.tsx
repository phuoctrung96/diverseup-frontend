import React, { FC, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import PageTitle from 'components/common/page-title/PageTitle';
import StepperComponent from 'components/shared/stepper/Stepper';
import { useSelector } from 'react-redux';

const steps = [
  { name: 'Step 1', route: '/job-placement' },
  { name: 'Step 2', route: '/job-placement/step2' },
  { name: 'Step 3', route: '/job-placement/step3' },
  { name: 'Step 4', route: '/job-placement/step4' },
  { name: 'Step 5', route: '/job-placement/step5' },
];

export const JobPlacementPage: FC = () => {
  const jobPlacementStep = useSelector((state: any) => state?.jobPlacement?.jobPlacementStep);

  const renderStepperComponent = useCallback(() => {
    return <StepperComponent steps={steps} />;
  }, [jobPlacementStep]);

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
