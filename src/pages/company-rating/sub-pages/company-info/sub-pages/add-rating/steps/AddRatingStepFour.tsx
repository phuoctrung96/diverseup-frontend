import React, { FC } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import JobTrend from 'components/shared/job-trend/JobTrend';
import Button from 'components/shared/button/Button';
import InfoCardScale from 'components/shared/page-info-card/components/info-card-scale/InfoCardScale';
import { FOUR_STEP_CARD_SECTIONS } from 'app-constants';

export const AddRatingStepFour: FC = () => {
  return (
    <PageInfoCard classList={['center']}>
      <PageTitle
        type={'card'}
        title={'Overall Company Culture'}
        subTitle={'Please answer the following questions. Choose N/A if you don’t know the answer.'}
      />

      <div className="info-card-content">
        {FOUR_STEP_CARD_SECTIONS.map((item, index) => (
          <div className="card-section" key={index}>
            <InfoCardTitle {...item} stepItem={true} />
            <div className={'flexWrapper'}>
              {item.answers.map((answer, index) => (
                <JobTrend key={index} {...answer} clickable={true} />
              ))}
            </div>
          </div>
        ))}

        <div className="card-section">
          <InfoCardTitle
            text={'How likely are you to recommend {Company Name} to another woman?'}
            subText={'Rate on the scale of 0-5'}
            stepItem={true}
          />
          <InfoCardScale clickable={true} />
        </div>

        <div className="card-section">
          <InfoCardTitle
            text={'Anything else important for others to kow about {Company Name}?'}
            stepItem={true}
          />

          <div className="form no-padding">
            <div className="form-group">
              <textarea className={`input`} placeholder="Enter your message" />
            </div>
          </div>
        </div>

        <div className="buttons-group">
          <Button text={'Go Back'} classList={['white']} />
          <Button text={'Next Step'} />
        </div>
      </div>
    </PageInfoCard>
  );
};

export default AddRatingStepFour;
