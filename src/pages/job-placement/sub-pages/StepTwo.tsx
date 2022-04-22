import React, { FC } from 'react';
import JobTrend from 'components/shared/job-trend/JobTrend';
import Button from 'components/shared/button/Button';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import { SECOND_JOB_PLACEMENT_STEP } from 'app-constants/job-placement-steps';

export const JPStepTwo: FC = () => {
  return (
    <PageInfoCard classList={['center']}>
      <PageTitle
        type={'card'}
        title={'Tell Us about your cultural Preferences'}
        subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
      />

      <div className="info-card-content">
        {SECOND_JOB_PLACEMENT_STEP.map((item, index) => (
          <div className="card-section" key={index}>
            <InfoCardTitle {...item} stepItem={true} />
            <div className={'flexWrapper'}>
              {item.answers.map((answer, i) => (
                <JobTrend key={i} {...answer} clickable={true} />
              ))}
            </div>
          </div>
        ))}

        <div className="buttons-group">
          <Button text={'Go Back'} classList={['white']} />
          <Button text={'Next Step'} />
        </div>
      </div>
    </PageInfoCard>
  );
};
export default JPStepTwo;
