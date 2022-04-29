import { IJobPlacementBody } from 'api/job-placement';
import PageTitle from 'components/common/page-title/PageTitle';
import StepperComponent from 'components/shared/stepper/Stepper';
import React, { createContext, FC, useCallback, useContext, useState } from 'react';
import { Outlet } from 'react-router-dom';

const steps = [
  { name: 'Step 1', route: '/job-placement' },
  { name: 'Step 2', route: '/job-placement/step2' },
  { name: 'Step 3', route: '/job-placement/step3' },
  { name: 'Step 4', route: '/job-placement/step4' },
  { name: 'Step 5', route: '/job-placement/step5' },
];

export const STEP_TYPES = {
  SET_JOB_PLACEMENT_FORM: 'SET_JOB_PLACEMENT_FORM',
  SET_JOB_PLACEMENT_STEP: 'SET_JOB_PLACEMENT_STEP',
};

type GlobalJobPlacementContext = {
  setJobPlacementForm: (body: IJobPlacementBody, resolve?: () => void) => void;
  setJobPlacementStep: (body: number, resolve?: () => void) => void;
  store: any;
};

/* eslint-disable */
const initialState: GlobalJobPlacementContext = {
  setJobPlacementForm: () => {},
  setJobPlacementStep: () => {},
  store: {
    jobPlacementForm: {
      selected_job_opportunity_type: [],
      selected_work_flexibility: [],
      selected_commute_options: [],
      selected_travel_options: [],
      selected_choosing_employer_importance_options: [],
      selected_what_motivates_best_job_options: [],
      selected_deal_breaker_options: [],
      notification_new_companies_are_rated: false,
      notification_latest_women_news: false,
      notification_receive_job_alerts: false,
    },
    jobPlacementStep: 1,
  },
};

const GlobalJobPlacementContext = createContext(initialState);
export const useGlobalJobPlacementContext = () => useContext(GlobalJobPlacementContext);

export const JobPlacementPage: FC = () => {
  const [store, setStore] = useState(initialState.store);

  const renderStepperComponent = useCallback(() => {
    return <StepperComponent steps={steps} />;
  }, [store.jobPlacementStep]);

  const setJobPlacementForm = (body: IJobPlacementBody, resolve?: () => void) => {
    setStore({
      ...store,
      jobPlacementForm: {
        ...store.jobPlacementForm,
        ...body,
      },
    });
    resolve?.();
  };

  const setJobPlacementStep = (body: number, resolve?: () => void) => {
    setStore({
      ...store,
      jobPlacementStep: body,
    });
    resolve?.();
  };

  return (
    <>
      <GlobalJobPlacementContext.Provider
        value={{ store, setJobPlacementForm, setJobPlacementStep }}
      >
        <PageTitle title={'Job Placement'} />
        {renderStepperComponent()}
        <div className="job-placement-container">
          <Outlet />
        </div>
      </GlobalJobPlacementContext.Provider>
    </>
  );
};

export default JobPlacementPage;
