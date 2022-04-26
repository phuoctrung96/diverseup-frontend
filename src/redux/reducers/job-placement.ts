import { SET_JOB_PLACEMENT_FORM, SET_JOB_PLACEMENT_STEP } from 'redux/actions/contansts';

const initialState = {
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
};

export default function jobPlacement(state = initialState, action: any) {
  switch (action.type) {
    case SET_JOB_PLACEMENT_FORM:
      return {
        ...state,
        jobPlacementForm: {
          ...state.jobPlacementForm,
          ...action.body,
        },
      };
    case SET_JOB_PLACEMENT_STEP:
      return {
        ...state,
        jobPlacementStep: action.body,
      };
    default:
      return {
        ...state,
      };
  }
}
