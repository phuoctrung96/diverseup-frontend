import { IJobPlacementBody } from 'api/job-placement';
import { ROUTE_JOB_PLACEMENT } from 'app-constants';
import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import AuthHelper from '../../utils/AuthHelpers';

export const STEP_TYPES = {
  SET_JOB_PLACEMENT_FORM: 'SET_JOB_PLACEMENT_FORM',
  SET_JOB_PLACEMENT_STEP: 'SET_JOB_PLACEMENT_STEP',
};

interface IStepModel {
  id: number;
  name: string;
  route: string;
  isActived: boolean;
}

type GlobalJobPlacementContext = {
  setJobPlacementForm: (body: IJobPlacementBody, resolve?: () => void) => void;
  setSteps: (body: IStepModel[], resolve?: () => void) => void;
  handleClickStep: (step: IStepModel, resolve?: () => void) => void;
  store: any;
};

/* eslint-disable */
const initialState: GlobalJobPlacementContext = {
  setJobPlacementForm: () => {},
  setSteps: () => {},
  handleClickStep: () => {},
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
    steps: [
      { id: 0, name: 'Step 1', route: `/${ROUTE_JOB_PLACEMENT}`, isActived: true },
      { id: 1, name: 'Step 2', route: `/${ROUTE_JOB_PLACEMENT}/step2`, isActived: false },
      { id: 2, name: 'Step 3', route: `/${ROUTE_JOB_PLACEMENT}/step3`, isActived: false },
      { id: 3, name: 'Step 4', route: `/${ROUTE_JOB_PLACEMENT}/step4`, isActived: false },
      { id: 4, name: 'Step 5', route: `/${ROUTE_JOB_PLACEMENT}/step5`, isActived: false },
    ],
  },
};

export const GlobalJobPlacementContext = createContext(initialState);
export const useGlobalJobPlacementContext = () => useContext(GlobalJobPlacementContext);

export const GlobalJobPlacement: FC<{ children: ReactNode }> = ({ children }) => {
  const [store, setStore] = useState(initialState.store);
  const accessToken = AuthHelper.getAccessToken();

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

  const setSteps = (steps: IStepModel[], resolve?: () => void) => {
    setStore({
      ...store,
      steps,
    });
    resolve?.();
  };

  const handleClickStep = (step: IStepModel, resolve?: () => void) => {
    const newStep = store.steps.map((item: IStepModel) => {
      if (step.id >= item.id) item.isActived = true;
      else item.isActived = false;

      return item;
    });
    setSteps(newStep);
    resolve?.();
  };

  useEffect(() => {
    if (accessToken) {
      const newSteps = store.steps.filter((item) => {
        if (item.name === 'Step 3') return null;
        if (item.name === 'Step 4') item.name = 'Step 3';
        if (item.name === 'Step 5') item.name = 'Step 4';
        return item;
      });
      setSteps(newSteps);
    }
  }, [accessToken]);

  return (
    <GlobalJobPlacementContext.Provider
      value={{
        store,
        setJobPlacementForm,
        setSteps,
        handleClickStep,
      }}
    >
      {children}
    </GlobalJobPlacementContext.Provider>
  );
};
/* eslint-enable */
