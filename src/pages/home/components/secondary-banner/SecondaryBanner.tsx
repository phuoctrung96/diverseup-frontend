import React, { FC } from 'react';
import styles from './SecondaryBanner.module.scss';
import Button from 'components/shared/button/Button';

export const SecondaryBanner: FC = () => {
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
          <Button text={'Write a review'} onClick={() => void 0} />
        </div>
      </div>
    </div>
  );
};

export default SecondaryBanner;
