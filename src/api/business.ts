import axios from '../utils/axios.config';

export interface IBusinessesItem {
  name: string;
  logo: string;
  slug: string;
  diverseup_score: string;
  avg_recommended: string;
  address: string;
  city: string;
  state: string;
  sector: string;
  website: string;
  employees: string;
  ceo_name: string;
  ceo_photo: string;
  percent_women_in_company: string;
  percent_women_on_board: string;
  created: string;
}
export interface IBusinessesRes {
  items: IBusinessesItem[];
}
export const businessesApi = (): Promise<IBusinessesRes> => {
  return axios.get('/api/businesses');
};

export interface IBusinessDetailParams {
  slug: string;
}
export const businessDetailApi = (params: IBusinessDetailParams): Promise<IBusinessesItem> => {
  return axios.get('/api/business', {
    params,
  });
};

export interface IRateCompanyBody {
  token: string;
  businessId: string;
  location: string;
  gender: string;
  employer_status: string;
  selected_job_function: string;
  job_title: string;
  rate_sponsorship_mentorship_opportunity: string;
  rate_equal_treatment_of_men_and_women: string;
  rate_equal_pay_for_equal_performance: string;
  rate_equal_opportunities_to_move_up_organization: string;
  has_maternity_leave: string;
  paid_maternity_weeks: string;
  unpaid_maternity_weeks: string;
  has_motherhood_support: string;
  motherhood_support_options: string[];
  has_work_flexibility: string;
  work_flexibility_options: string[];
  like_most_about_company_options: string[];
  like_least_about_company_options: string[];
  how_likely_to_recommend_company: string;
  other_notes_about_company: string;
  selected_user_status: string;
  selected_user_age: string;
  selected_user_ethnicity: string;
}
export const rateCompanyApi = (body: IRateCompanyBody) => {
  return axios.post('/api/business/companyRating', body);
};

export interface ICompanyReviewsSearchParams {
  term: string;
  page: number;
  size: number;
  sort_by: string;
  order: string;
}
export const companyReviewsSearchApi = (params: ICompanyReviewsSearchParams) => {
  return axios.get('/api/companyReviews', {
    params,
  });
};
