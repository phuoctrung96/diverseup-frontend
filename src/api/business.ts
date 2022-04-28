import axios from '../utils/axios.config';
import { Pagination } from 'interfaces';
import { getUrlWithParams } from 'utils/http.utils';
import { removeEmptyValues } from 'utils/object.utils';

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
  rate_sponsorship_mentorship_opportunity: number | null;
  rate_equal_treatment_of_men_and_women: number | null;
  rate_equal_pay_for_equal_performance: number | null;
  rate_equal_opportunities_to_move_up_organization: number | null;
  paid_leave: number | null;
  unpaid_leave: number | null;
  motherhood_supports: string[] | null;
  flexible_hours: number | null;
  job_sharing: number | null;
  working_remotely: number | null;
  part_time_opportunity: number | null;
  most_like_top_three: string[] | null;
  least_like_top_three: string[] | null;
  is_recommended: boolean | null;
  how_likely_to_recommend_company: number | null;
}

export interface IBusinessesRes extends Pagination {
  items: IBusinessesItem[];
}
export interface IBusinessReq {
  page: number;
  size: number;
  search_term?: string;
  sort_by?: '' | 'name' | 'rating' | 'ratingDate';
  order?: '' | 'asc' | 'desc';
}

export const businessesApi = (params: IBusinessReq): Promise<IBusinessesRes> => {
  return axios.get(getUrlWithParams(removeEmptyValues(params), '/api/businesses'));
};

export const highlightedBusinesses = (
  p: Pick<Pagination, 'page' | 'size'> = { page: 1, size: 3 },
  limit = 3
): Promise<IBusinessesRes> => {
  return axios.get(`/api/highlightedBusinesses?page=${p.page}&size=${p.size}&limit=${limit}`);
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
