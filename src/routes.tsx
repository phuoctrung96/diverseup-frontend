import React from 'react';

import { ROUTE_BLOG, ROUTE_COMPANY_RATING, ROUTE_EMPLOYER, ROUTE_JOB_PLACEMENT, ROUTE_ROOT } from 'app-constants';
import HomePage from 'pages/home/Home';
import { BreadcrumbsRoute } from 'use-react-router-breadcrumbs';
import CompanyRating from 'pages/company-rating/CompanyRating';
import JobPlacement from 'pages/job-placement/JobPlacement';
import Blog from 'pages/blog/Blog';
import Employer from 'pages/employer/Employer';

export const ROUTES: BreadcrumbsRoute[] = [
	{ path: ROUTE_ROOT, element: <HomePage />, breadcrumb: null },
	{
		path: ROUTE_COMPANY_RATING,
		element: <CompanyRating />,
		breadcrumb: 'Company Rating',
		children: [
			// { path: ':id', component:  }
		]
	},
	{ path: ROUTE_JOB_PLACEMENT, element: <JobPlacement />, breadcrumb: 'Job Placement' },
	{ path: ROUTE_BLOG, element: <Blog />, breadcrumb: 'Blog' },
	{ path: ROUTE_EMPLOYER, element: <Employer />, breadcrumb: null },
];

export default ROUTES;
