import React, { FC } from 'react';
import styles from 'components/shared/forms/search-form/SearchForm.module.scss';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';

export const SearchForm: FC = () => {
  const { register, handleSubmit } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={styles.searchFormWrapper}>
      <form className={'form horizontal'} onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="companyName"
          type={'text'}
          placeholder={'Company Name/Location'}
          register={register}
        />
        <Button text={'Search'} />
      </form>
    </div>
  );
};

export default SearchForm;
