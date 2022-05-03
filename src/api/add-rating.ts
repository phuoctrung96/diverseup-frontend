import axios from '../utils/axios.config';

export interface IAddRatingRequest {
  business_slug: string;
  location: string;
  gender: string;
  employer_status: string;
  last_year_at_employer: number;
  employment_status: string;
  job_function: string;
  job_title: string;
  rate_sponsorship_mentorship_opportunity?: number | null;
  rate_equal_treatment_of_men_and_women?: number | null;
  rate_equal_pay_for_equal_performance?: number | null;
  rate_equal_opportunities_to_move_up_organization?: number | null;
  paid_maternity_weeks?: number | null;
  unpaid_maternity_weeks?: number | null;
  motherhood_support_options?: string[];
  work_flexibility_options?: string[];
  like_most_about_company_options: string[];
  like_least_about_company_options: string[];
  how_likely_to_recommend_company?: number | null;
  other_notes_about_company?: string;
  user_status?: string;
  user_age?: string;
  user_ethnicity?: string;
}

export const submitAddRatingApi = (body: IAddRatingRequest): Promise<string> => {
  return axios.post('/api/businessRating', body);
};
