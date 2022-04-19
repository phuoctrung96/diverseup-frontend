import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from 'pages/home/Home';
import CompanyRating from 'pages/company-rating/CompanyRating';
import JobPlacement from 'pages/job-placement/JobPlacement';
import { ROUTE_BLOG, ROUTE_COMPANY_RATING, ROUTE_EMPLOYER, ROUTE_JOB_PLACEMENT, ROUTE_ROOT } from 'app-constants';
import Blog from 'pages/blog/Blog';
import Employer from 'pages/employer/Employer';
import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs';
import Auth from './components/common/auth/Auth';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const [showModal, setShowModal] = useState<boolean>(false)
  const location = useLocation();

  useEffect(() => {
    setShowFooter(location.pathname !== `/${ROUTE_EMPLOYER}`);
    setShowSearch(location.pathname === `/${ROUTE_COMPANY_RATING}`);
  }, [location]);

  return (
    <div className={styles.App}>
      <Header showSearch={showSearch} setShowModal={setShowModal}/>
      <div className={styles.Layout}>
        <Breadcrumbs/>
        <Routes>
          <Route path={ROUTE_ROOT} element={<HomePage/>}/>
          <Route path={ROUTE_COMPANY_RATING} element={<CompanyRating/>}/>
          <Route path={ROUTE_JOB_PLACEMENT} element={<JobPlacement/>}/>
          <Route path={ROUTE_BLOG} element={<Blog/>}/>
          <Route path={ROUTE_EMPLOYER} element={<Employer/>}/>
        </Routes>
      </div>
      <Auth show={showModal} isHide={setShowModal}/>
      {showFooter && <Footer/>}
    </div>
  );
}

export default App;
