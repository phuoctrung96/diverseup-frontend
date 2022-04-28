import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import { matchRoutes, useLocation, useRoutes } from 'react-router-dom';
import { ROUTE_BLOG, ROUTE_COMPANY_RATING, ROUTE_EMPLOYER, TITLE_MAP } from 'app-constants';
import Breadcrumbs from 'components/common/breadcrumbs/Breadcrumbs';
import routes, { ROUTES } from 'routes';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import ScrollToTop from 'ScrollToTop';
import blogBanner from './assets/images/blog/blog-banner.jpg';
import { getTitle } from 'utils/Title';

function AppRoutes() {
  return useRoutes(ROUTES);
}

function App() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showFooter, setShowFooter] = useState<boolean>(true);
  const [showBlogPageBanner, setShowBlogPageBanner] = useState<boolean>(false);
  const [pageTitle, setPageTitle] = useState('Diverseup');

  const location = useLocation();
  const breadcrumbs = useBreadcrumbs(ROUTES);

  useEffect(() => {
    const title =
      getTitle(TITLE_MAP.find((item) => `/${item.path}` === location.pathname)?.title) || pageTitle;

    if (title) {
      setPageTitle(title);
      document.title = title;
    }

    setShowFooter(location.pathname !== `/${ROUTE_EMPLOYER}`);
    setShowSearch(location.pathname.includes(ROUTE_COMPANY_RATING));
    if (breadcrumbs.length > 1 && breadcrumbs[0].key === `/${ROUTE_BLOG}`) {
      setShowBlogPageBanner(true);
    } else {
      setShowBlogPageBanner(false);
    }
  }, [location]);

  return (
    <div className={styles.App}>
      <Header showSearch={showSearch} />
      <div className={styles.Layout}>
        {showBlogPageBanner && (
          <div className={styles.blogPageBanner}>
            <img src={blogBanner} alt="banner" />
          </div>
        )}
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
