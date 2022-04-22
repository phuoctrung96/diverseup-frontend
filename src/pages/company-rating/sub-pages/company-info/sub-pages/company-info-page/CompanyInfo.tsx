import React, { FC } from 'react';
import styles from './CompanyInfo.module.scss';

import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import InfoCardValue from 'components/shared/page-info-card/components/info-card-value/InfoCardValue';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import JobTrend from 'components/shared/job-trend/JobTrend';
import InfoCardRating from 'components/shared/page-info-card/components/info-card-rating/InfoCardRating';
import InfoCardScale from 'components/shared/page-info-card/components/info-card-scale/InfoCardScale';
import PageTitle from 'components/common/page-title/PageTitle';
import Cards from 'components/shared/cards/Cards';
import { ICard } from 'interfaces/card';
import Button from 'components/shared/button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTE_ADD_RATING } from 'app-constants';

export const CompanyInfo: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cardsCompany: ICard[] = [
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '',
      rating: 5,
      title: 'Company Name',
    },
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '',
      rating: 4.5,
      title: 'Company Name',
    },
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '',
      rating: 2.9,
      title: 'Company Name',
    },
  ];

  return (
    <>
      <PageInfoCard>
        <div className={styles.mainInfoWrapper}>
          <div className={styles.infoContent}>
            <img
              className={styles.companyImage}
              src={'/images/mock-company.jpg'}
              alt={'company logo'}
            />
            <div className={styles.mainInfo}>
              <div className={styles.mainInfoData}>
                <h1 className={styles.companyName}>Intel Corporation</h1>
                <span className={styles.companyLocation}>Santa Ciara, California</span>
              </div>
              <div className={styles.recommendation}>
                <div className={styles.recommendationBlock}>Recommended</div>
                <span className={styles.recommendationCount}>123 Reviews</span>
              </div>
              <div className={styles.recommenderToFriends}>
                <span className={`${styles.recommenderToFriendsStatus} ${styles.like}`} />
                <span>90% Recommend to Friend</span>
              </div>
            </div>
          </div>
          <Button
            text={'Add Rating'}
            classList={['red', 'withPlus']}
            onClick={() => navigate(`${location.pathname}/${ROUTE_ADD_RATING}`)}
          />
        </div>
      </PageInfoCard>

      <PageInfoCard>
        <InfoCardValue label={'Website'} value={'www.intel.com'} />
        <InfoCardValue label={'Country'} value={'USA'} />
        <InfoCardValue label={'Sector'} value={'Technology hardware & Equipment'} />
        <InfoCardValue label={'Employees'} value={'107,600'} />
      </PageInfoCard>

      <PageInfoCard>
        <InfoCardTitle text={'Equal Opportunity for men and women:'} />
        <InfoCardRating
          rating={3}
          question={'Opportunity for sponsorship and mentorship program?'}
        />
        <InfoCardRating rating={5} question={'Equal  treatment of men and women?'} />
        <InfoCardRating rating={2} question={'Equal  pay for equal performance?'} />
        <InfoCardRating
          rating={0}
          question={'Equal  opportunity to move up in the organization?'}
        />
      </PageInfoCard>

      <PageInfoCard>
        <InfoCardTitle text={'Maternity Leave'} />
        <InfoCardValue label={'Paid leave'} value={'18 weeks'} classList={['fullWidth']} />
        <InfoCardValue label={'Unpaid leave'} value={'26 weeks'} classList={['fullWidth']} />
      </PageInfoCard>

      <PageInfoCard>
        <InfoCardTitle text={'Motherhood Support'} />
        <InfoCardValue label={'Accessible parking'} value={'Yes'} />
        <InfoCardValue label={'Onsite childcare'} value={'Yes'} />
        <InfoCardValue label={'Lactation room'} value={'No'} />
        <InfoCardValue label={'Discounted childcare'} value={'No'} />
      </PageInfoCard>

      <PageInfoCard>
        <InfoCardTitle text={'Work Flexibility'} />
        <InfoCardValue label={'Flexible hours'} value={'100% said it’s offered'} />
        <InfoCardValue label={'Job sharing'} value={'No'} />
        <InfoCardValue label={'Working remotely'} value={'100% said it’s offered'} />
        <InfoCardValue label={'Part time opportunity'} value={'33% said it’s offered'} />
      </PageInfoCard>

      <PageInfoCard>
        <InfoCardTitle text={'What women most like about Intel'} />
        <div className={'flexWrapper'}>
          <JobTrend text={'Work life balance'} />
          <JobTrend text={'Able to make a difference'} />
          <JobTrend text={'Above average PTO'} />
        </div>
      </PageInfoCard>

      <PageInfoCard>
        <InfoCardTitle text={'What women least like about Intel'} />
        <div className={'flexWrapper'}>
          <JobTrend text={'Heavy on meetings'} />
          <JobTrend text={'Lack of Stability'} />
          <JobTrend text={'Micromanagement'} />
        </div>
      </PageInfoCard>

      <PageInfoCard>
        <InfoCardTitle
          text={'On a scale of 0-5, how likely is Intel recommendable to another woman'}
        />
        <InfoCardScale />
      </PageInfoCard>

      <div className="section">
        <div className="section__block no-bottom-padding">
          <PageTitle title={'Recent Ratings'} classList={['sectionTitle']} />
          <Cards cards={cardsCompany} button={null} />
        </div>
      </div>
    </>
  );
};

export default CompanyInfo;
