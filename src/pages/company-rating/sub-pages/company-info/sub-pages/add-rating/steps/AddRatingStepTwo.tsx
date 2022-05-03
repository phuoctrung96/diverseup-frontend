import React, { FC, useEffect } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import InfoCardRating from 'components/shared/page-info-card/components/info-card-rating/InfoCardRating';
import Button from 'components/shared/button/Button';
import { QUESTION_LIST } from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/data/add-rating-step-two.data';
import { useAddRatingContext } from 'contexts/AddRatingContext';

export const AddRatingStepTwo: FC = () => {
  const {
    store: { addRatingForm },
    setAddRatingForm,
    goNext,
    goBack,
  } = useAddRatingContext();

  const handleRatingClick = (key: string, rating: number) => {
    setAddRatingForm({
      ...addRatingForm,
      [`${key}`]: rating,
    });
  };

  return (
    <PageInfoCard classList={['center', 'no-margin']}>
      <PageTitle
        type={'card'}
        title={'Equal opportunity for men and women'}
        subTitle={'Please answer the following questions. Choose N/A if you don’t know the answer.'}
      />

      <div className="info-card-content">
        <div className={'form'}>
          {QUESTION_LIST.map((item) => (
            <InfoCardRating
              rating={addRatingForm[item.key] || 0}
              key={item.key}
              question={item.question}
              editable={true}
              onRatingClick={(rating) => handleRatingClick(item.key, rating)}
            />
          ))}
        </div>
        <div className="buttons-group">
          <Button text={'Go Back'} classList={['white']} onClick={goBack} />
          <Button text={'Next Step'} onClick={() => goNext()} />
        </div>
      </div>
    </PageInfoCard>
  );
};

export default AddRatingStepTwo;
