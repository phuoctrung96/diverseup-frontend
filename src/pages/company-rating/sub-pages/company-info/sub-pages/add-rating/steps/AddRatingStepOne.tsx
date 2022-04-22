import React, { FC } from 'react';
import cardStyles from 'components/shared/page-info-card/PageInfoCard.module.scss';

import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import PageTitle from 'components/common/page-title/PageTitle';
import Input from 'components/shared/form-controls/input/Input';
import { useForm } from 'react-hook-form';
import Select from 'components/shared/form-controls/select/Select';
import RadioButtonGroup from 'components/shared/form-controls/radio-button-group/RadioButtonGroup';
import Button from 'components/shared/button/Button';

export const AddRatingStepOne: FC = () => {
  const { register, handleSubmit, reset, control } = useForm<any>();

  const employerStatusRadio = [
    { label: 'Current Employee', value: 'qqq' },
    { label: 'Former Employee', value: 'ddd' },
  ];

  return (
    <PageInfoCard classList={['center']}>
      <PageTitle
        type={'card'}
        title={'Tell us about yourself'}
        subTitle={'Please respond to all the fields below'}
      />

      <div className="info-card-content center">
        <form className="form vertical">
          <Input
            inputLabel="Location:"
            label="location"
            register={register}
            type="text"
            placeholder="City, State"
          />
          <Select
            options={[]}
            control={control}
            name={'gender'}
            selectLabel={'Gender:'}
            selectPlaceholder={'Select a gender'}
          />
          <div className="form-group">
            <RadioButtonGroup
              label={'employerStatus'}
              register={register}
              radioButtons={employerStatusRadio}
              groupLabel={'Employer Status:'}
            />
          </div>
          <Select
            options={[]}
            control={control}
            name={'lastYear'}
            selectLabel={'Last year at Employer:'}
            selectPlaceholder={'Select a year'}
          />
          <Select
            options={[]}
            control={control}
            name={'employmentStatus'}
            selectLabel={'Employment Status:'}
            selectPlaceholder={'Select employment status'}
          />
          <Select
            options={[]}
            control={control}
            name={'jobFunction'}
            selectLabel={'Job Function:'}
            selectPlaceholder={'Choose your industry'}
          />
          <Input
            inputLabel="Job Title:"
            label="jobTitle"
            register={register}
            type="text"
            placeholder="Enter your job title"
          />
        </form>
        <Button text={'Next Step'} />
      </div>
    </PageInfoCard>
  );
};

export default AddRatingStepOne;
