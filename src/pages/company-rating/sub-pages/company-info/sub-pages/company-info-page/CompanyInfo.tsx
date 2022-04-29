import React, { FC, useEffect, useState } from 'react';
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
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ROUTE_ADD_RATING, ROUTE_COMPANY_RATING } from 'app-constants';
import { businessDetailApi, businessesApi, highlightedBusinesses, IBusinessItemInfo } from 'api';
import Loader from 'components/common/loader/Loader';
import { BREADCRUMBS_TYPES, useDynamicBreadcrumbContext } from 'DynamicBreadcrumb';

export const CompanyInfo: FC = () => {
  const [businesses, setBusinesses] = useState<ICard[] | []>([]);
  const [isBusinessLoading, setIsBusinessLoading] = useState<boolean>(true);
  const [company, setCompany] = useState<IBusinessItemInfo>();
  const [isCompanyLoading, setIsCompanyLoading] = useState<boolean>(true);
  const { setDynamicBreadcrumb } = useDynamicBreadcrumbContext();

  const motherhoodSupport = [
    'Onsite child care',
    'Lactation rooms',
    'Accessible parking',
    'Discounted childcare',
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();

  useEffect(() => {
    setIsCompanyLoading(true);
    setIsBusinessLoading(true);

    highlightedBusinesses().then((res) => {
      const newData: ICard[] | [] = res.items?.map((el) => ({
        type: 'company',
        description: el.short_description || '',
        imageUrl: el.logo || '',
        link: `/${ROUTE_COMPANY_RATING}/${el.slug}`,
        rating: el.rating || 0,
        title: el.name,
      }));

      setBusinesses(newData || []);
      setIsBusinessLoading(false);
    });

    loadCompanyData();
  }, [location]);

  const loadCompanyData = () => {
    setDynamicBreadcrumb(BREADCRUMBS_TYPES.COMPANY, '');
    businessDetailApi({ slug: slug || '' }).then((res) => {
      setCompany(res);
      setDynamicBreadcrumb(BREADCRUMBS_TYPES.COMPANY, res.name);
      setIsCompanyLoading(false);
    });
  };

  return (
    <>
      {!company || isCompanyLoading ? (
        <div className="flexWrapper flexWrapper--center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="section__block no-top-padding no-bottom-padding">
            <PageInfoCard>
              <div className={styles.mainInfoWrapper}>
                <div className={styles.infoContent}>
                  <img className={styles.companyImage} src={company.logo} alt={'company logo'} />
                  <div className={styles.mainInfo}>
                    <div className={styles.mainInfoData}>
                      <h1 className={styles.companyName}>{company.name}</h1>
                      <span className={styles.companyLocation}>{`${
                        company.city ? company.city + ',' : ''
                      } ${company.state}`}</span>
                    </div>
                    <div className={styles.recommendation}>
                      <div className={styles.recommendationBlock}>
                        {company.is_recommended ? 'Recommended' : 'Not Recommended'}
                      </div>
                      <span className={styles.recommendationCount}>
                        {company.review_count} Reviews
                      </span>
                    </div>
                    <div className={styles.recommenderToFriends}>
                      <span className={`${styles.recommenderToFriendsStatus} ${styles.like}`} />
                      <span>{company.avg_recommended || 0} % Recommend to Friend</span>
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
              <InfoCardValue label={'Website'} value={company.website || '—\t'} />
              <InfoCardValue label={'Country'} value={company.country || '—\t'} />
              <InfoCardValue label={'Sector'} value={company.sector || '—\t'} />
              <InfoCardValue
                label={'Employees'}
                value={company.employees_count?.toString() || '—\t'}
              />
            </PageInfoCard>

            <PageInfoCard>
              <InfoCardTitle text={'Equal Opportunity for men and women:'} />
              <InfoCardRating
                rating={company.rate_sponsorship_mentorship_opportunity || 0}
                question={'Opportunity for sponsorship and mentorship program?'}
              />
              <InfoCardRating
                rating={company.rate_equal_treatment_of_men_and_women || 0}
                question={'Equal treatment of men and women?'}
              />
              <InfoCardRating
                rating={company.rate_equal_pay_for_equal_performance || 0}
                question={'Equal pay for equal performance?'}
              />
              <InfoCardRating
                rating={company.rate_equal_opportunities_to_move_up_organization || 0}
                question={'Equal opportunity to move up in the organization?'}
              />
            </PageInfoCard>

            <PageInfoCard>
              <InfoCardTitle text={'Maternity Leave'} />
              <InfoCardValue
                label={'Paid leave'}
                value={company.paid_leave ? `${company.paid_leave} weeks` : '—\t'}
                classList={['fullWidth']}
              />
              <InfoCardValue
                label={'Unpaid leave'}
                value={company.unpaid_leave ? `${company.unpaid_leave} weeks` : '—\t'}
                classList={['fullWidth']}
              />
            </PageInfoCard>

            <PageInfoCard>
              <InfoCardTitle text={'Motherhood Support'} />
              {company.motherhood_supports?.length &&
              company.motherhood_supports[0] !== 'Not Offered' ? (
                motherhoodSupport.map((item, index) => {
                  return (
                    <InfoCardValue
                      key={index}
                      label={`${item}`}
                      value={company?.motherhood_supports?.includes(item) ? 'Yes' : 'No'}
                    />
                  );
                })
              ) : company.motherhood_supports === null ? (
                '—\t'
              ) : (
                <InfoCardValue label={'Not Offered'} value={'Yes'} />
              )}
            </PageInfoCard>

            <PageInfoCard>
              <InfoCardTitle text={'Work Flexibility'} />
              <InfoCardValue
                label={'Flexible hours'}
                value={
                  company.flexible_hours ? `${company.flexible_hours}% said it’s offered` : '—\t'
                }
              />
              <InfoCardValue
                label={'Job sharing'}
                value={company.job_sharing !== null ? (company.job_sharing ? 'Yes' : 'No') : '—\t'}
              />
              <InfoCardValue
                label={'Working remotely'}
                value={
                  company.working_remotely
                    ? `${company.working_remotely}% said it’s offered`
                    : '—\t'
                }
              />
              <InfoCardValue
                label={'Part time opportunity'}
                value={
                  company.part_time_opportunity
                    ? `${company.part_time_opportunity}% said it’s offered`
                    : '—\t'
                }
              />
            </PageInfoCard>

            <PageInfoCard>
              <InfoCardTitle text={`What women most like about ${company.name}`} />
              <div className={'flexWrapper'}>
                {company.most_like_top_three?.length
                  ? company.most_like_top_three.map((item, index) => {
                      return <JobTrend key={index} text={item} />;
                    })
                  : '—\t'}
              </div>
            </PageInfoCard>

            <PageInfoCard>
              <InfoCardTitle text={`What women least like about ${company.name}`} />
              <div className={'flexWrapper'}>
                {company.least_like_top_three?.length
                  ? company.least_like_top_three.map((item, index) => {
                      return <JobTrend key={index} text={item} />;
                    })
                  : '—\t'}
              </div>
            </PageInfoCard>

            <PageInfoCard>
              <InfoCardTitle
                text={`On a scale of 0-5, how likely is ${company.name} recommendable to another woman`}
              />
              {company.how_likely_to_recommend_company ? (
                <InfoCardScale selected={company.how_likely_to_recommend_company} />
              ) : (
                '—\t'
              )}
            </PageInfoCard>
          </div>
          <div className="section__block">
            <PageTitle title={'Recent Ratings'} classList={['sectionTitle']} />
            <Cards cards={businesses} button={null} isLoading={isBusinessLoading} />
          </div>
        </>
      )}
    </>
  );
};

export default CompanyInfo;
