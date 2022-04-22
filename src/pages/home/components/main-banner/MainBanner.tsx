import React, { FC } from 'react';
import styles from 'pages/home/components/main-banner/MainBanner.module.scss';
import Button from 'components/shared/button/Button';
import SearchForm from 'components/shared/forms/search-form/SearchForm';
import { useNavigate } from 'react-router-dom';
import { ROUTE_ADD_RATING, ROUTE_COMPANY_RATING } from 'app-constants';

export const MainBanner: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.banner}>
      <div className={styles.mainWrapper}>
        <div className={styles.mainArea}>
          <div className={styles.title}>
            <h1>Search companies Reviews & Ratings</h1>
          </div>
          <span className={styles.subTitle}>
            See what other women like you say about their companies
          </span>
          <SearchForm />
        </div>
        <h2>Rate a company you are working with</h2>
        <Button
          text={'Add Rating'}
          classList={['red', 'withPlus']}
          onClick={() => navigate(ROUTE_COMPANY_RATING)}
        />
      </div>
    </div>
  );
};

export default MainBanner;
