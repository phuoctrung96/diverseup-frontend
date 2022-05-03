import React from 'react';

import {
  ROUTE_ABOUT,
  ROUTE_ADD_RATING,
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
import CompanyInfoPage from 'pages/company-rating/sub-pages/company-info/CompanyInfoPage';
import CompanyList from 'pages/company-rating/sub-pages/company-list/CompanyList';
import CompanyInfo from 'pages/company-rating/sub-pages/company-info/sub-pages/company-info-page/CompanyInfo';
import AddRatingStepOne from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/steps/AddRatingStepOne';
import AddRatingStepTwo from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/steps/AddRatingStepTwo';
import AddRatingStepThree from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/steps/AddRatingStepThree';
import AddRatingStepFour from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/steps/AddRatingStepFour';
import AddRatingStepFive from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/steps/AddRatingStepFive';
import JPStepOne from 'pages/job-placement/sub-pages/StepOne';
import JPStepTwo from 'pages/job-placement/sub-pages/StepTwo';
import JPStepThree from 'pages/job-placement/sub-pages/StepThree';
import JPStepFour from 'pages/job-placement/sub-pages/StepFour';
import JPStepFive from 'pages/job-placement/sub-pages/StepFive';
import AddRating from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/AddRating';
import BlogInfoPage from './pages/blog/sub-pages/blog-info/BlogInfoPage';
import BlogList from './pages/blog/sub-pages/blog-list/BlogList';
import { useDynamicBreadcrumbContext } from 'contexts/DynamicBreadcrumbContext';
import NewPasswordModal from './components/modals/NewPasswordModal';

const ContextBreadcrumb = () => {
  const { store } = useDynamicBreadcrumbContext();

  return <span>{store.props}</span>;
};

export const ROUTES: BreadcrumbsRoute[] = [
  {
    path: ROUTE_ROOT,
    element: <HomePage />,
    breadcrumb: null,
  },
  {
    path: '/reset_password',
    breadcrumb: null,
    element: <NewPasswordModal />,
  },
  {
    path: ROUTE_COMPANY_RATING,
    element: <CompanyRating />,
    breadcrumb: 'Company Rating',
    children: [
      { index: true, element: <CompanyList /> },
      {
        path: ':slug',
        element: <CompanyInfoPage />,
        children: [
          {
            path: '',
            element: <CompanyInfo />,
            breadcrumb: ContextBreadcrumb,
          },
          {
            path: ROUTE_ADD_RATING,
            element: <AddRating />,
            breadcrumb: null,
            children: [
              { index: true, element: <AddRatingStepOne /> },
              { path: 'step2', element: <AddRatingStepTwo />, breadcrumb: 'Equal opportunity' },
              { path: 'step3', element: <AddRatingStepThree />, breadcrumb: 'Family Support' },
              { path: 'step4', element: <AddRatingStepFour />, breadcrumb: 'Company Culture' },
              { path: 'step5', element: <AddRatingStepFive />, breadcrumb: 'Your profile' },
            ],
          },
        ],
      },
    ],
  },
  {
    path: ROUTE_JOB_PLACEMENT,
    element: <JobPlacement />,
    breadcrumb: 'Job Placement',
    children: [
      { index: true, element: <JPStepOne /> },
      { path: 'step2', element: <JPStepTwo /> },
      { path: 'step3', element: <JPStepThree /> },
      { path: 'step4', element: <JPStepFour /> },
      { path: 'step5', element: <JPStepFive /> },
    ],
  },
  {
    path: ROUTE_BLOG,
    element: <Blog />,
    breadcrumb: 'Blog',
    children: [
      { index: true, element: <BlogList /> },
      {
        path: ':slug',
        element: <BlogInfoPage />,
        breadcrumb: ContextBreadcrumb,
      },
    ],
  },
  { path: ROUTE_EMPLOYER, element: <Employer />, breadcrumb: null },
  { path: ROUTE_ABOUT, element: <AboutUs />, breadcrumb: 'About us' },
];

export default ROUTES;
