import { INavLink } from 'interfaces';

export const ROUTE_ROOT = '/';
export const ROUTE_COMPANY_RATING = 'company-rating';
export const ROUTE_JOB_PLACEMENT = 'job-placement';
export const ROUTE_BLOG = 'blog';
export const ROUTE_EMPLOYER = 'employer';
export const ROUTE_ABOUT = 'about';
export const ROUTE_TERMS_OF_USE = 'terms';

export const NAV_LINKS: INavLink[] = [
  { id: 1, link: `/${ROUTE_COMPANY_RATING}`, label: 'Company Rating' },
  { id: 2, link: `/${ROUTE_JOB_PLACEMENT}`, label: 'Job Placement' },
  { id: 3, link: `/${ROUTE_BLOG}`, label: 'Blog' },
  { id: 4, link: `/${ROUTE_EMPLOYER}`, label: 'Employer' },
];
