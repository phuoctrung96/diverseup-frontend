import React, { FC, useEffect } from 'react';

import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import PageTitle from 'components/common/page-title/PageTitle';
import Input from 'components/shared/form-controls/input/Input';
import { useForm } from 'react-hook-form';
import Select from 'components/shared/form-controls/select/Select';
import RadioButtonGroup from 'components/shared/form-controls/radio-button-group/RadioButtonGroup';
import Button from 'components/shared/button/Button';
import {
  EMPLOYER_STATUS_RADIO,
  EMPLOYMENT_STATUS_OPTIONS,
  GENDER_OPTIONS,
  JOB_FUNCTION_OPTIONS,
} from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/data/add-rating-step-one.data';
import { useAddRatingContext } from 'contexts/AddRatingContext';

interface IFirstStepForm {
  location: string;
  gender: string;
  employer_status: string;
  last_year_at_employer: number;
  employment_status: string;
  job_function: string;
  job_title: string;
}

export const AddRatingStepOne: FC = () => {
  const {
    store: { addRatingForm },
    goNext,
  } = useAddRatingContext();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid },
  } = useForm<IFirstStepForm>({
    mode: 'onTouched',
    defaultValues: {
      location: addRatingForm.location || '',
      gender: addRatingForm.gender || '',
      employer_status: addRatingForm.employer_status || EMPLOYER_STATUS_RADIO[0].value,
      last_year_at_employer: addRatingForm.last_year_at_employer,
      employment_status: addRatingForm.employment_status || '',
      job_function: addRatingForm.job_function || '',
      job_title: addRatingForm.job_title || '',
    },
  });

  const handleNextStep = (data: IFirstStepForm) => {
    goNext({
      ...addRatingForm,
      ...data,
    });
  };

  useEffect(() => {
    reset({
      location: addRatingForm.location || '',
      gender: addRatingForm.gender || '',
      employer_status: addRatingForm.employer_status || EMPLOYER_STATUS_RADIO[0].value,
      last_year_at_employer: addRatingForm.last_year_at_employer,
      employment_status: addRatingForm.employment_status || '',
      job_function: addRatingForm.job_function || '',
      job_title: addRatingForm.job_title || '',
    });
  }, []);

  return (
    <PageInfoCard classList={['center', 'no-margin']}>
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
            required={true}
            errors={errors}
            type="text"
            placeholder="City, State"
          />
          <Select
            options={GENDER_OPTIONS}
            control={control}
            name={'gender'}
            required={true}
            errors={errors}
            selectLabel={'Gender:'}
            selectPlaceholder={'Select a gender'}
          />
          <div className="form-group">
            <RadioButtonGroup
              label={'employer_status'}
              register={register}
              radioButtons={EMPLOYER_STATUS_RADIO}
              groupLabel={'Employer Status:'}
              defaultSelected={EMPLOYER_STATUS_RADIO[0].value}
            />
          </div>
          <Input
            register={register}
            label={'last_year_at_employer'}
            inputLabel={'Last year at Employer:'}
            type={'text'}
            required={true}
            errors={errors}
            placeholder={'Type a year'}
          />
          <Select
            options={EMPLOYMENT_STATUS_OPTIONS}
            control={control}
            name={'employment_status'}
            required={true}
            errors={errors}
            selectLabel={'Employment Status:'}
            selectPlaceholder={'Select employment status'}
          />
          <Select
            options={JOB_FUNCTION_OPTIONS}
            control={control}
            required={true}
            errors={errors}
            name={'job_function'}
            selectLabel={'Job Function:'}
            selectPlaceholder={'Choose your industry'}
          />
          <Input
            inputLabel="Job Title:"
            label="job_title"
            register={register}
            required={true}
            errors={errors}
            type="text"
            placeholder="Enter your job title"
          />
        </form>
        <Button
          text={'Next Step'}
          disabled={!isValid}
          onClick={handleSubmit((data) => handleNextStep(data))}
        />
      </div>
    </PageInfoCard>
  );
};

export default AddRatingStepOne;
