import { IJobPlacementBody } from 'api/job-placement';
import { ROUTE_JOB_PLACEMENT } from 'app-constants';
import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import AuthHelper from '../utils/AuthHelpers';

interface IStepModel {
  id: number;
  name: string;
  route: string;
  isActivated: boolean;
}

const INITIAL_STEPS = [
  { id: 0, name: 'Step 1', route: `/${ROUTE_JOB_PLACEMENT}`, isActivated: true },
  { id: 1, name: 'Step 2', route: `/${ROUTE_JOB_PLACEMENT}/step2`, isActivated: false },
  { id: 2, name: 'Step 3', route: `/${ROUTE_JOB_PLACEMENT}/step3`, isActivated: false },
  { id: 3, name: 'Step 4', route: `/${ROUTE_JOB_PLACEMENT}/step4`, isActivated: false },
];

type GlobalJobPlacementContext = {
  setJobPlacementForm: (body: IJobPlacementBody, resolve?: () => void) => void;
  setSteps: (body: IStepModel[], resolve?: () => void) => void;
  handleClickStep: (step: IStepModel, resolve?: () => void) => void;
  resetStep: (resolve?: () => void) => void;
  setIsLogin: (body: boolean, resolve?: () => void) => void;
  store: any;
};

/* eslint-disable */
const initialState: GlobalJobPlacementContext = {
  setJobPlacementForm: () => {},
  setSteps: () => {},
  handleClickStep: () => {},
  resetStep: () => {},
  setIsLogin: () => {},
  store: {
    isLogin: false,
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
      { id: 0, name: 'Step 1', route: `/${ROUTE_JOB_PLACEMENT}`, isActivated: true },
      { id: 1, name: 'Step 2', route: `/${ROUTE_JOB_PLACEMENT}/step2`, isActivated: false },
      { id: 2, name: 'Step 3', route: `/${ROUTE_JOB_PLACEMENT}/step3`, isActivated: false },
      { id: 3, name: 'Step 4', route: `/${ROUTE_JOB_PLACEMENT}/step4`, isActivated: false },
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

  const resetStep = (resolve?: () => void) => {
    const newStore = {
      isLogin: false,
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
        { id: 0, name: 'Step 1', route: `/${ROUTE_JOB_PLACEMENT}`, isActivated: true },
        { id: 1, name: 'Step 2', route: `/${ROUTE_JOB_PLACEMENT}/step2`, isActivated: false },
        { id: 2, name: 'Step 3', route: `/${ROUTE_JOB_PLACEMENT}/step3`, isActivated: false },
      ],
    };

    if (!accessToken) {
      newStore.steps.push({
        id: 3,
        name: 'Step 4',
        route: `/${ROUTE_JOB_PLACEMENT}/step4`,
        isActivated: false,
      });
    }
    setStore(newStore);

    resolve?.();
  };

  const handleClickStep = (step: IStepModel, resolve?: () => void) => {
    const newStep = store.steps.map((item: IStepModel) => {
      item.isActivated = step.id >= item.id;

      return item;
    });
    setSteps(newStep);
    resolve?.();
  };

  const setIsLogin = (body: boolean, resolve?: () => void) => {
    setStore({
      ...store,
      isLogin: body,
    });
    resolve?.();
  };

  useEffect(() => {
    if (accessToken || store.isLogin) {
      const newSteps = store.steps.filter((item) => item.id !== 3);
      setSteps(newSteps);
    } else {
      setSteps([
        { id: 0, name: 'Step 1', route: `/${ROUTE_JOB_PLACEMENT}`, isActivated: true },
        { id: 1, name: 'Step 2', route: `/${ROUTE_JOB_PLACEMENT}/step2`, isActivated: false },
        { id: 2, name: 'Step 3', route: `/${ROUTE_JOB_PLACEMENT}/step3`, isActivated: false },
        { id: 3, name: 'Step 4', route: `/${ROUTE_JOB_PLACEMENT}/step4`, isActivated: false },
      ]);
    }
  }, [accessToken, store.isLogin]);

  return (
    <GlobalJobPlacementContext.Provider
      value={{
        store,
        setJobPlacementForm,
        setSteps,
        handleClickStep,
        resetStep,
        setIsLogin,
      }}
    >
      {children}
    </GlobalJobPlacementContext.Provider>
  );
};
/* eslint-enable */
