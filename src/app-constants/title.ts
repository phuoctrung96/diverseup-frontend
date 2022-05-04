import {
  ROUTE_ABOUT_US,
  ROUTE_ADD_RATING,
  ROUTE_BLOG,
  ROUTE_COMPANY_RATING,
  ROUTE_EMPLOYER,
  ROUTE_JOB_PLACEMENT,
  ROUTE_TERMS_OF_USE,
  ROUTE_PRIVACY_POLICY,
  ROUTE_POSTING_GUIDELINES,
} from 'app-constants/routes';

export const TITLE_MAP = [
  { path: '', title: 'Home Page' },
  { path: ROUTE_COMPANY_RATING, title: 'Company Rating' },
  { path: ROUTE_JOB_PLACEMENT, title: 'Job Placement' },
  { path: ROUTE_BLOG, title: 'Blog' },
  { path: ROUTE_EMPLOYER, title: 'For Employer' },
  { path: ROUTE_ABOUT_US, title: 'About Us' },
  { path: ROUTE_ADD_RATING, title: 'Add Rating' },
  { path: ROUTE_PRIVACY_POLICY, title: 'Privacy Policy' },
  { path: ROUTE_TERMS_OF_USE, title: 'Terms Of Use' },
  { path: ROUTE_POSTING_GUIDELINES, title: 'Posting Guidelines' },
];
