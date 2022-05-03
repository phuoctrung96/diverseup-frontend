import React, { FC, useEffect, useState } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import Button from 'components/shared/button/Button';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import JobTrend from 'components/shared/job-trend/JobTrend';
import Input from 'components/shared/form-controls/input/Input';
import { useForm } from 'react-hook-form';
import { useAddRatingContext } from 'contexts/AddRatingContext';
import {
  CLEAR_ALL_TEXT,
  THIRD_STEP_CARD_SECTIONS,
} from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/data/add-rating-step-three.data';

interface IAddRatingStepThreeForm {
  paid_maternity_weeks: string | null;
  unpaid_maternity_weeks: string | null;
}

export const AddRatingStepThree: FC = () => {
  const {
    store: { addRatingForm },
    setAddRatingForm,
    goNext,
    goBack,
  } = useAddRatingContext();

  const [motherhoodSupport, setMotherhoodSupport] = useState<string[]>(
    addRatingForm?.motherhood_support_options || []
  );
  const [workFlexibility, setWorkFlexibility] = useState<string[]>(
    addRatingForm?.work_flexibility_options || []
  );
  const [isFormEmpty, setIsFormEmpty] = useState<boolean>(
    !addRatingForm.paid_maternity_weeks && !addRatingForm.unpaid_maternity_weeks
  );

  const { register, reset, watch } = useForm<IAddRatingStepThreeForm>({
    defaultValues: {
      paid_maternity_weeks: `${addRatingForm.paid_maternity_weeks}`,
      unpaid_maternity_weeks: `${addRatingForm.unpaid_maternity_weeks}`,
    },
  });

  const cardSections = THIRD_STEP_CARD_SECTIONS;

  const handleMotherhoodClick = (value: string) => {
    setMotherhoodSupport((old) => {
      return value === CLEAR_ALL_TEXT
        ? old.includes(value)
          ? old.filter((item) => item !== value)
          : [...old, value]
        : [...old, value].filter((item) => item !== CLEAR_ALL_TEXT);
    });
  };

  const handleFlexibilityClick = (value: string) => {
    setWorkFlexibility((old) => {
      return value === CLEAR_ALL_TEXT
        ? old.includes(value)
          ? old.filter((item) => item !== value)
          : [...old, value]
        : [...old, value].filter((item) => item !== CLEAR_ALL_TEXT);
    });
  };

  const isSelected = (key: string, value: string) => {
    switch (key) {
      case 'motherhood':
        return motherhoodSupport.includes(value);
      case 'flexibility':
        return workFlexibility.includes(value);
      default:
        return false;
    }
  };

  const onClearClick = (key: string) => {
    switch (key) {
      case 'motherhood':
        return setMotherhoodSupport([]);
      case 'flexibility':
        return setWorkFlexibility([]);
      default:
        return undefined;
    }
  };

  const onAnswerClick = (key: string, value: string) => {
    switch (key) {
      case 'motherhood':
        return handleMotherhoodClick(value);
      case 'flexibility':
        return handleFlexibilityClick(value);
      default:
        return undefined;
    }
  };

  const hasValues = (key: string) => {
    switch (key) {
      case 'motherhood':
        return !!motherhoodSupport.length;
      case 'flexibility':
        return !!workFlexibility.length;
      default:
        return false;
    }
  };

  const clearForm = () => {
    reset({ paid_maternity_weeks: null, unpaid_maternity_weeks: null });
  };

  useEffect(() => {
    setAddRatingForm({
      ...addRatingForm,
      motherhood_support_options: motherhoodSupport,
      work_flexibility_options: workFlexibility,
    });
  }, [motherhoodSupport, workFlexibility]);

  useEffect(() => {
    const subscription = watch((formValue) => {
      setAddRatingForm({
        ...addRatingForm,
        paid_maternity_weeks: formValue['paid_maternity_weeks']
          ? parseInt(formValue['paid_maternity_weeks'])
          : null,
        unpaid_maternity_weeks: formValue['unpaid_maternity_weeks']
          ? parseInt(formValue['unpaid_maternity_weeks'])
          : null,
      });

      setIsFormEmpty(!Object.keys(formValue).some((item) => formValue[item]));
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <PageInfoCard classList={['center', 'no-margin']}>
      <PageTitle
        type={'card'}
        title={'Family Support'}
        subTitle={'Please answer the following questions. Choose N/A if you don’t know the answer.'}
      />

      <div className="info-card-content">
        <div className="card-section">
          <InfoCardTitle
            text={'Maternity Leave'}
            clearButton={true}
            hasValue={!isFormEmpty}
            onClear={clearForm}
          />
          <div className="form vertical no-padding">
            <Input
              inputLabel="Number of paid weeks:"
              label="paid_maternity_weeks"
              register={register}
              type="number"
              required={false}
              placeholder="Enter #"
            />
            <Input
              inputLabel="Number of unpaid week:"
              label="unpaid_maternity_weeks"
              register={register}
              required={false}
              type="number"
              placeholder="Enter #"
            />
          </div>
        </div>

        {cardSections.map((item, index) => (
          <div className="card-section" key={index}>
            <InfoCardTitle
              {...item}
              clearButton={true}
              hasValue={hasValues(item.key)}
              onClear={() => onClearClick(item.key)}
            />
            <div className={'flexWrapper'}>
              {item.answers.map((answer, index) => (
                <JobTrend
                  key={index}
                  {...answer}
                  clickable={true}
                  selected={isSelected(item.key, answer.value)}
                  onClick={(value) => {
                    if (value === CLEAR_ALL_TEXT) {
                      onClearClick(item.key);
                      onAnswerClick(item.key, value);
                    } else {
                      onAnswerClick(item.key, value);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="buttons-group">
          <Button text={'Go Back'} classList={['white']} onClick={goBack} />
          <Button text={'Next Step'} onClick={() => goNext()} />
        </div>
      </div>
    </PageInfoCard>
  );
};

export default AddRatingStepThree;
