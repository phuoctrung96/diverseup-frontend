import { IJobPlacementBody } from 'api/job-placement';
import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

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

export const GlobalJobPlacementContext = createContext(initialState);
export const useGlobalJobPlacementContext = () => useContext(GlobalJobPlacementContext);

export const GlobalJobPlacement: FC<{ children: ReactNode }> = ({ children }) => {
  const [store, setStore] = useState(initialState.store);

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
    <GlobalJobPlacementContext.Provider value={{ store, setJobPlacementForm, setJobPlacementStep }}>
      {children}
    </GlobalJobPlacementContext.Provider>
  );
};
/* eslint-enable */
