import React, { FC } from 'react';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Link, useLocation } from 'react-router-dom';
import ROUTES from 'routes';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs: FC = () => {
  const breadcrumbs = useBreadcrumbs(ROUTES);
  const location = useLocation();

  return (
    <div className={`${breadcrumbs?.length > 0 && styles.breadcrumbs} section`}>
      {breadcrumbs?.length > 0 && (
        <span className={styles.breadcrumb}>
          <Link to={'/'}>Home Page</Link>
        </span>
      )}
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <span
          className={`${styles.breadcrumb} ${
            location.pathname === match.pathname ? styles.breadcrumbActive : undefined
          }`}
          key={match.pathname}
        >
          <Link to={match.pathname}>{breadcrumb}</Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
