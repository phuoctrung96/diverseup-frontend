import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import { matchRoutes, useLocation, useRoutes } from 'react-router-dom';
import { ROUTE_BLOG, ROUTE_COMPANY_RATING, ROUTE_EMPLOYER } from 'app-constants';
import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs';
import routes, { ROUTES } from 'routes';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import ScrollToTop from 'ScrollToTop';

function AppRoutes() {
  return useRoutes(ROUTES);
}

function App() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showFooter, setShowFooter] = useState<boolean>(true);
  const [showCompanyPageBanner, setShowCompanyPageBanner] = useState<boolean>(false);
  const [showBlogPageBanner, setShowBlogPageBanner] = useState<boolean>(false);

  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(ROUTES);

  useEffect(() => {
    setShowFooter(location.pathname !== `/${ROUTE_EMPLOYER}`);
    setShowSearch(location.pathname.includes(ROUTE_COMPANY_RATING));
    if (breadcrumbs.length > 1 && breadcrumbs[0].key === `/${ROUTE_BLOG}`) {
      setShowBlogPageBanner(true);
    } else {
      setShowBlogPageBanner(false);
    }

    setShowCompanyPageBanner(
      !!matchRoutes(routes, location)?.find(
        (route) => location.pathname === `/${ROUTE_COMPANY_RATING}/${route.params.slug}`
      )
    );
  }, [location]);

  return (
    <div className={styles.App}>
      <Header showSearch={showSearch} />
      <div className={styles.Layout}>
        {showCompanyPageBanner && <div className={styles.companyPageBanner} />}
        {showBlogPageBanner && <div className={styles.blogPageBanner} />}
        <Breadcrumbs />
        <ScrollToTop>
          <AppRoutes />
        </ScrollToTop>
      </div>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
