import React, { FC, useState } from 'react';
import styles from 'components/shared/forms/search-form/SearchForm.module.scss';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ISearchForm {
  hideOnMobile?: boolean;
}

export const SearchForm: FC<ISearchForm> = ({ hideOnMobile = false }) => {
  const { register, handleSubmit } = useForm<any>();
  const [showForm, setShowForm] = useState<boolean>(false);

  const onSubmit: SubmitHandler<any> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={`${styles.searchFormWrapper} ${showForm && styles.opened}`}>
      {hideOnMobile && (
        <Button
          text={'Search'}
          onClick={() => setShowForm(!showForm)}
          classList={['hideBtn', `${showForm && 'opened'}`]}
        />
      )}
      <form
        className={`form horizontal ${hideOnMobile && styles.form}`}
        onSubmit={handleSubmit(onSubmit)}
      >
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
