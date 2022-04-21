import React from 'react';

import {
  ROUTE_ABOUT,
  ROUTE_BLOG,
  ROUTE_COMPANY_RATING,
  ROUTE_EMPLOYER,
  ROUTE_JOB_PLACEMENT,
  ROUTE_ROOT,
} from 'app-constants';
import HomePage from 'pages/home/Home';
import { BreadcrumbsRoute } from 'use-react-router-breadcrumbs';
import CompanyRating from 'pages/company-rating/CompanyRating';
import JobPlacement from 'pages/job-placement/JobPlacement';
import Blog from 'pages/blog/Blog';
import Employer from 'pages/employer/Employer';
import AboutUs from 'pages/about-us/AboutUs';
import CompanyInfo from 'pages/company-rating/sub-pages/company-info/CompanyInfo';
import CompanyList from 'pages/company-rating/sub-pages/company-list/CompanyList';
export const ROUTES: BreadcrumbsRoute[] = [
  { path: ROUTE_ROOT, element: <HomePage />, breadcrumb: null },
  {
    path: ROUTE_COMPANY_RATING,
    element: <CompanyRating />,
    breadcrumb: 'Company Rating',
    children: [
      { path: '', element: <CompanyList /> },
      { path: ':id', element: <CompanyInfo /> },
    ],
  },
  { path: ROUTE_JOB_PLACEMENT, element: <JobPlacement />, breadcrumb: 'Job Placement' },

  { path: ROUTE_BLOG, element: <Blog />, breadcrumb: 'Blog' },
  { path: ROUTE_EMPLOYER, element: <Employer />, breadcrumb: null },
  { path: ROUTE_ABOUT, element: <AboutUs />, breadcrumb: 'About us' },
];

export default ROUTES;
