import React, { FC } from 'react';
import styles from './AboutUs.module.scss';

import PageTitle from 'components/common/page-title/PageTitle';

export const AboutUs: FC = () => {
  return (
    <section className="section">
      <div className="section__block no-top-padding">
        <PageTitle title={'About us'} />

        <div className={styles.aboutUsWrapper}>
          <div className={styles.topSection}>
            <div className={`${styles.aboutUsBlock} ${styles.aboutUsBlockImage}`}>
              <div>
                <h2 className={styles.title}>Our Mission</h2>
                <p className={styles.description}>
                  Utilizing software as a solution to collect targeted data and align wonen’s
                  working preferences to emploers’ offerings.
                </p>
              </div>
            </div>
            <div className={`${styles.aboutUsBlock} ${styles.aboutUsBlockYellow}`}>
              <h2 className={styles.title}>Our Vision</h2>
              <p className={styles.description}>
                Promote succes of working woman through knowledge sharing.
              </p>
            </div>
          </div>
          <div className={styles.aboutUsBlock}>
            <h2 className={styles.title}>Our Reason for Being</h2>
            <p className={styles.description}>
              Our founders are 2 female veterans, who strongly believe in equesl opportunity for
              all. Having worked for Fortune 100 companies for over a decade, they have witnessed
              the positive impact of diverse teams on end business results.
            </p>
            <p className={styles.description}>
              By means of DiverseUp, they aspire to help other women find opportunities that best
              suits their career and personal goals and ultimately help employers retain their
              female talent. DiverseUp anonymously collects data focused on gender equality
              prectices, and through an intelligent matchmaking algotithm, matches prospect female
              employees with potential employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
