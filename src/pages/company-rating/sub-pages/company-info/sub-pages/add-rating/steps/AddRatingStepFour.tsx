import React, { FC, useEffect, useState } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import JobTrend from 'components/shared/job-trend/JobTrend';
import Button from 'components/shared/button/Button';
import InfoCardScale from 'components/shared/page-info-card/components/info-card-scale/InfoCardScale';
import { useAddRatingContext } from 'contexts/AddRatingContext';
import { FOUR_STEP_CARD_SECTIONS } from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/data/add-rating-step-four.data';
import { useForm } from 'react-hook-form';
import { useDynamicBreadcrumbContext } from 'contexts/DynamicBreadcrumbContext';

export const AddRatingStepFour: FC = () => {
  const {
    store: { addRatingForm },
    setAddRatingForm,
    goNext,
    goBack,
  } = useAddRatingContext();

  const { store } = useDynamicBreadcrumbContext();
  const { register, watch, getValues } = useForm<{ other_notes_about_company: string }>({
    defaultValues: {
      other_notes_about_company: addRatingForm.other_notes_about_company || '',
    },
  });

  const [likeMost, setLikeMost] = useState<string[]>(addRatingForm.like_most_about_company_options);
  const [likeLeast, setLikeLease] = useState<string[]>(
    addRatingForm.like_least_about_company_options
  );
  const [recommendRate, setRecommendRate] = useState<number>();

  const handleLikeClick = (value: string) => {
    setLikeMost((old) => {
      return old.includes(value) ? old.filter((item) => item !== value) : [...old, value];
    });
  };

  const handleLeastClick = (value: string) => {
    setLikeLease((old) => {
      return old.includes(value) ? old.filter((item) => item !== value) : [...old, value];
    });
  };

  useEffect(() => {
    setAddRatingForm({
      ...addRatingForm,
      like_most_about_company_options: likeMost,
      like_least_about_company_options: likeLeast,
      how_likely_to_recommend_company: recommendRate || 0,
    });
  }, [likeLeast, likeMost, recommendRate]);

  useEffect(() => {
    setAddRatingForm({
      ...addRatingForm,
      other_notes_about_company: getValues('other_notes_about_company'),
    });
  }, [watch('other_notes_about_company')]);

  const onAnswerClick = (key: string, value: string) => {
    switch (key) {
      case 'like_most_about_company_options':
        return handleLikeClick(value);
      case 'like_least_about_company_options':
        return handleLeastClick(value);
      default:
        return undefined;
    }
  };

  const isSelected = (key: string, value: string) => {
    switch (key) {
      case 'like_most_about_company_options':
        return likeMost.includes(value);
      case 'like_least_about_company_options':
        return likeLeast.includes(value);
      default:
        return false;
    }
  };

  return (
    <PageInfoCard classList={['center', 'no-margin']}>
      <PageTitle
        type={'card'}
        title={'Overall Company Culture'}
        subTitle={'Please answer the following questions. Choose N/A if you don’t know the answer.'}
      />

      <div className="info-card-content">
        {FOUR_STEP_CARD_SECTIONS.map((item, index) => (
          <div className="card-section" key={index}>
            <InfoCardTitle
              {...item}
              text={item.text.replace('{Company Name}', store.props)}
              stepItem={true}
            />
            <div className={'flexWrapper'}>
              {item.answers.map((answer, index) => (
                <JobTrend
                  key={index}
                  {...answer}
                  clickable={true}
                  selected={isSelected(item.key, answer.value)}
                  onClick={
                    !item.maxItems ||
                    (item.maxItems && item.maxItems > addRatingForm[item.key].length) ||
                    isSelected(item.key, answer.value)
                      ? (value) => onAnswerClick(item.key, value)
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        ))}

        <div className="card-section">
          <InfoCardTitle
            text={`How likely are you to recommend ${store.props} to another woman?`}
            subText={'Rate on the scale of 0-5'}
            stepItem={true}
          />
          <InfoCardScale
            clickable={true}
            selected={addRatingForm?.how_likely_to_recommend_company || 0}
            onSelect={(value) => setRecommendRate(value)}
          />
        </div>

        <div className="card-section">
          <InfoCardTitle
            text={`Anything else important for others to kow about ${store.props}?`}
            stepItem={true}
          />

          <div className="form no-padding">
            <div className="form-group">
              <textarea
                className={`input`}
                placeholder="Enter your message"
                {...register('other_notes_about_company')}
              />
            </div>
          </div>
        </div>

        <div className="buttons-group">
          <Button text={'Go Back'} classList={['white']} onClick={goBack} />
          <Button text={'Next Step'} onClick={() => goNext()} />
        </div>
      </div>
    </PageInfoCard>
  );
};

export default AddRatingStepFour;
