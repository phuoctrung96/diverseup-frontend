import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import { matchRoutes, Route, Routes, useLocation } from 'react-router-dom';
import HomePage from 'pages/home/Home';
import CompanyRating from 'pages/company-rating/CompanyRating';
import JobPlacement from 'pages/job-placement/JobPlacement';
import JPStepOne from 'pages/job-placement/sub-page/StepOne';
import JPStepTwo from 'pages/job-placement/sub-page/StepTwo';
import JPStepThree from 'pages/job-placement/sub-page/StepThree';
import JPStepFour from 'pages/job-placement/sub-page/StepFour';
import JPStepFive from 'pages/job-placement/sub-page/StepFive';

import {
  ROUTE_ABOUT,
  ROUTE_BLOG,
  ROUTE_COMPANY_RATING,
  ROUTE_EMPLOYER,
  ROUTE_JOB_PLACEMENT,
  ROUTE_ROOT,
} from 'app-constants';
import Blog from 'pages/blog/Blog';
import Employer from 'pages/employer/Employer';
import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs';
import AboutUs from 'pages/about-us/AboutUs';
import CompanyInfo from 'pages/company-rating/sub-pages/company-info/CompanyInfo';
import CompanyList from 'pages/company-rating/sub-pages/company-list/CompanyList';
import AuthModal from './components/common/AuthModal';
import routes from 'routes';

function App() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showFooter, setShowFooter] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showCompanyPageBanner, setShowCompanyPageBanner] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    setShowFooter(location.pathname !== `/${ROUTE_EMPLOYER}`);
    setShowSearch(location.pathname.includes(ROUTE_COMPANY_RATING));
    setShowCompanyPageBanner(
      !!matchRoutes(routes, location)?.find(
        (route) => location.pathname === `/${ROUTE_COMPANY_RATING}/${route.params.id}`
      )
    );
  }, [location]);

  return (
    <div className={styles.App}>
      <Header showSearch={showSearch} setShowModal={setShowModal} />
      <div className={styles.Layout}>
        {showCompanyPageBanner && <div className={styles.companyPageBanner} />}
        <Breadcrumbs />
        <Routes>
          <Route path={ROUTE_ROOT} element={<HomePage />} />
          <Route path={ROUTE_COMPANY_RATING} element={<CompanyRating />}>
            <Route path={''} element={<CompanyList />} />
            <Route path={':id'} element={<CompanyInfo />} />
          </Route>
          <Route path={ROUTE_JOB_PLACEMENT} element={<JobPlacement />}></Route>
          <Route path={ROUTE_JOB_PLACEMENT + '/step1'} element={<JPStepOne />}></Route>
          <Route path={ROUTE_JOB_PLACEMENT + '/step2'} element={<JPStepTwo />}></Route>
          <Route path={ROUTE_JOB_PLACEMENT + '/step3'} element={<JPStepThree />}></Route>
          <Route path={ROUTE_JOB_PLACEMENT + '/step4'} element={<JPStepFour />}></Route>
          <Route path={ROUTE_JOB_PLACEMENT + '/step5'} element={<JPStepFive />}></Route>

          <Route path={ROUTE_BLOG} element={<Blog />} />
          <Route path={ROUTE_EMPLOYER} element={<Employer />} />
          <Route path={ROUTE_ABOUT} element={<AboutUs />} />
        </Routes>
      </div>
      <AuthModal visible={showModal} setVisible={setShowModal} />
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
