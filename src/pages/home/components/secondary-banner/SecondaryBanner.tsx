import React, { FC } from 'react';
import styles from './SecondaryBanner.module.scss';
import Button from 'components/shared/button/Button';
import { ROUTE_COMPANY_RATING } from 'app-constants';
import { useNavigate } from 'react-router-dom';

export const SecondaryBanner: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerImage} />
      <div className={styles.infoWrapper}>
        <div className={styles.infoContent}>
          <div className={styles.headerText}>COMPANIES REVIEWS</div>
          <div className={styles.mainText}>Share your personal Experience</div>
          <p className={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <Button text={'Write a review'} onClick={() => navigate(ROUTE_COMPANY_RATING)} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryBanner;
