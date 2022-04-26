import axios from '../utils/axios.config';
import { Pagination } from 'interfaces';

export interface IBusinessesItem {
  slug: string;
  name: string;
  logo: string | null;
  website: string | null;
  rating: number | null;
  short_description: string | null;
}

export interface IBusinessItemInfo {
  slug: string;
  name: string;
  logo: string;
  website: string;
  rating: number | null;
  short_description: string | null;
  created: string;
  city: string;
  state: string;
  address: string;
  avg_recommended: string;
  review_count: number;
  sector: string;
  country: string;
  employees_count: number | null;
  rate_sponsorship_mentorship_opportunity: null;
  rate_equal_treatment_of_men_and_women: null;
  rate_equal_pay_for_equal_performance: null;
  rate_equal_opportunities_to_move_up_organization: null;
  paid_leave: null;
  unpaid_leave: null;
  motherhood_supports: null;
  flexible_hours: null;
  job_sharing: null;
  working_remotely: null;
  part_time_opportunity: null;
  most_like_top_three: string[] | null;
  least_like_top_three: string[] | null;
  is_recommended: null;
}

export interface IBusinessesRes extends Pagination {
  items: IBusinessesItem[];
}
export const businessesApi = (
  p: Pick<Pagination, 'page' | 'size'>,
  highlighted = false
): Promise<IBusinessesRes> => {
  if (highlighted) {
    return axios.get(`/api/businesses?page=${p.page}&size=${p.size}&highlighted=true`);
  }

  return axios.get(`/api/businesses?page=${p.page}&size=${p.size}`);
};

export const businessesWithSearchApi = (
  p: Pick<Pagination, 'page' | 'size'>,
  term: string
): Promise<IBusinessesRes> => {
  return axios.get(`/api/quickSearchCompanies?page=${p.page}&size=${p.size}&term=${term}`);
};

export interface IBusinessDetailParams {
  slug: string;
}
export const businessDetailApi = (params: IBusinessDetailParams): Promise<IBusinessItemInfo> => {
  return axios.get(`/api/business/${params.slug}`);
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
