import React, { FC } from 'react';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import PageTitle from 'components/common/page-title/PageTitle';
import Select from 'components/shared/form-controls/select/Select';
import Button from 'components/shared/button/Button';
import { useForm } from 'react-hook-form';

export const AddRatingStepFive: FC = () => {
  const { register, handleSubmit, reset, control } = useForm<any>();

  return (
    <PageInfoCard classList={['center', 'no-margin']}>
      <PageTitle
        type={'card'}
        title={'Just a little bit more about you'}
        subTitle={
          'Please answer the following questions (Optional). Please note that we do NOT display or disclose this information. We only collect this data for our own internal research'
        }
      />

      <div className="info-card-content center">
        <form className="form vertical">
          <Select
            options={[]}
            control={control}
            name={'status'}
            selectLabel={'Status:'}
            selectPlaceholder={'Select your status'}
          />
          <Select
            options={[]}
            control={control}
            name={'age'}
            selectLabel={'Age:'}
            selectPlaceholder={'Select your age'}
          />
          <Select
            options={[]}
            control={control}
            name={'ethnicity'}
            selectLabel={'Ethnicity:'}
            selectPlaceholder={'Select your ethnicity'}
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

export default AddRatingStepFive;
