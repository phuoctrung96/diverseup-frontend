import React, { FC } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import { Outlet, useParams } from 'react-router-dom';
import StepperComponent from 'components/shared/stepper/Stepper';
import { ROUTE_COMPANY_RATING } from 'app-constants';

interface StepModel {
  id: number;
  name: string;
  route: string;
  isActived: boolean;
}

export const AddRating: FC = () => {
  const { slug } = useParams();

  const getStepUrl = (step: number) => {
    return `/${ROUTE_COMPANY_RATING}/${slug}/add-rating${step === 1 ? '' : `/step${step}`}`;
  };

  const steps = [
    { id: 0, name: 'Step 1', route: getStepUrl(1), isActived: true },
    { id: 1, name: 'Step 2', route: getStepUrl(2), isActived: false },
    { id: 2, name: 'Step 3', route: getStepUrl(3), isActived: false },
    { id: 3, name: 'Step 4', route: getStepUrl(4), isActived: false },
    { id: 4, name: 'Step 5', route: getStepUrl(5), isActived: false },
    { id: 5, name: 'Step 6', route: getStepUrl(6), isActived: false },
  ];

  return (
    <>
      <PageTitle
        title={'Rate your Workplace'}
        subTitle={'All ratings will remain 100% anonymous'}
      />
      <StepperComponent steps={steps} />

      <div className="section__block no-top-padding">
        <Outlet />
      </div>
    </>
  );
};

export default AddRating;
