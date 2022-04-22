import React, { FC, useEffect, useState } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import Button from 'components/shared/button/Button';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import JobTrend from 'components/shared/job-trend/JobTrend';
import Input from 'components/shared/form-controls/input/Input';
import { useForm } from 'react-hook-form';
import { THIRD_STEP_CARD_SECTIONS } from 'app-constants';

export const AddRatingStepThree: FC = () => {
  const [motherhoodSupport, setMotherhoodSupport] = useState<string[]>([]);
  const [workFlexibility, setWorkFlexibility] = useState<string[]>([]);
  const [isFormEmpty, setIsFormEmpty] = useState<boolean>();

  const { register, handleSubmit, reset, getValues, watch } = useForm<any>();
  const watchAllFields = watch();

  const cardSections = THIRD_STEP_CARD_SECTIONS;

  const handleMotherhoodClick = (value: string) => {
    setMotherhoodSupport((old) => {
      return old.includes(value) ? old.filter((item) => item !== value) : [...old, value];
    });
  };

  const handleFlexibilityClick = (value: string) => {
    setWorkFlexibility((old) => {
      return old.includes(value) ? old.filter((item) => item !== value) : [...old, value];
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
    reset({ paidWeeks: null, unpaidWeeks: null });
  };

  useEffect(() => {
    const formValues = getValues();

    setIsFormEmpty(Object.keys(formValues).some((item) => formValues[item]));
  }, [watchAllFields]);

  return (
    <PageInfoCard classList={['center']}>
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
            hasValue={isFormEmpty}
            onClear={clearForm}
          />
          <div className="form vertical no-padding">
            <Input
              inputLabel="Number of paid weeks:"
              label="paidWeeks"
              register={register}
              type="number"
              placeholder="Enter #"
            />
            <Input
              inputLabel="Number of unpaid week:"
              label="unpaidWeeks"
              register={register}
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
                  onClick={(value) => onAnswerClick(item.key, value)}
                />
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

export default AddRatingStepThree;
