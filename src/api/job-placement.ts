import axios from '../utils/axios.config';

export interface IJobPlacementBody {
  selected_job_opportunity_type?: string[];
  selected_work_flexibility?: string[];
  selected_commute_options?: string[];
  selected_travel_options?: string[];
  selected_choosing_employer_importance_options?: string[];
  selected_what_motivates_best_job_options?: string[];
  selected_deal_breaker_options?: string[];
  notification_new_companies_are_rated?: boolean;
  notification_latest_women_news?: boolean;
  notification_receive_job_alerts?: boolean;
}

export interface IRecommendToFriendsBody {
  selected_prize_option?: any;
  user_fullname?: string;
  friend_emails?: string[];
  message?: string;
}

export const submitJobPlacement = (body: IJobPlacementBody): Promise<unknown> => {
  return axios.post('/api/jobPlacement', body);
};

export const recommendToFriends = (body: IRecommendToFriendsBody): Promise<unknown> => {
  return axios.post('/api/recommendToFriends', body);
};
