import React, { FC } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import InfoCardRating from 'components/shared/page-info-card/components/info-card-rating/InfoCardRating';
import Button from 'components/shared/button/Button';

export const AddRatingStepTwo: FC = () => {
  return (
    <PageInfoCard classList={['center']}>
      <PageTitle
        type={'card'}
        title={'Equal opportunity for men and women'}
        subTitle={'Please answer the following questions. Choose N/A if you don’t know the answer.'}
      />

      <div className="info-card-content">
        <form className={'form'} onSubmit={(e) => e.preventDefault()}>
          <InfoCardRating
            rating={1}
            question={'Opportunity for sponsorship and mentorship program?'}
            editable={true}
          />
          <InfoCardRating
            rating={2}
            question={'Equal  treatment of men and women?'}
            editable={true}
          />
          <InfoCardRating
            rating={0}
            question={'Equal  pay for equal performance?'}
            editable={true}
          />
          <InfoCardRating
            rating={0}
            question={'Equal  opportunity to move up in the organization?'}
            editable={true}
          />
        </form>
        <div className="buttons-group">
          <Button text={'Go Back'} classList={['white']} />
          <Button text={'Next Step'} />
        </div>
      </div>
    </PageInfoCard>
  );
};

export default AddRatingStepTwo;
