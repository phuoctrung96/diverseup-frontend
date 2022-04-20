import React, { FC } from 'react';
import styles from 'pages/home/components/main-banner/MainBanner.module.scss';
import Button from 'components/shared/button/Button';
import SearchForm from 'components/shared/search-form/SearchForm';

export const MainBanner: FC = () => {
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
        <Button text={'Add Rating'} classList={['red', 'withPlus']} />
      </div>
    </div>
  );
};

export default MainBanner;
