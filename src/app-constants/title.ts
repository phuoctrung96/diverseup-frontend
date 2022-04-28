import {
  ROUTE_ABOUT,
  ROUTE_ADD_RATING,
  ROUTE_BLOG,
  ROUTE_COMPANY_RATING,
  ROUTE_EMPLOYER,
  ROUTE_JOB_PLACEMENT,
  ROUTE_TERMS_OF_USE,
} from 'app-constants/routes';

export const TITLE_MAP = [
  { path: '', title: 'Home Page' },
  { path: ROUTE_COMPANY_RATING, title: 'Company Rating' },
  { path: ROUTE_JOB_PLACEMENT, title: 'Job Placement' },
  { path: ROUTE_BLOG, title: 'Blog' },
  { path: ROUTE_EMPLOYER, title: 'For Employer' },
  { path: ROUTE_ABOUT, title: 'About us' },
  { path: ROUTE_ADD_RATING, title: 'New Quiz' },
  { path: ROUTE_TERMS_OF_USE, title: 'Add Rating' },
];
