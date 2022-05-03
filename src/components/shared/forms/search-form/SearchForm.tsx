import React, { FC, useEffect, useState } from 'react';
import styles from 'components/shared/forms/search-form/SearchForm.module.scss';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTE_COMPANY_RATING } from 'app-constants';
import { removeEmptyValues } from 'utils/object.utils';
import { getParams } from 'utils/http.utils';

interface ISearchForm {
  hideOnMobile?: boolean;
}

interface IForm {
  term: string;
}

export const SearchForm: FC<ISearchForm> = ({ hideOnMobile = false }) => {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const [showForm, setShowForm] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = getParams();

    setValue('term', params.search_term || '');
  }, [location]);

  const onSubmit: SubmitHandler<IForm> = ({ term }) => {
    setSearchParams({ ...searchParams, page: '1', search_term: term });
    navigate(
      {
        pathname: ROUTE_COMPANY_RATING,
        search: createSearchParams(
          removeEmptyValues({
            ...searchParams,
            page: '1',
            search_term: term,
          })
        ).toString(),
      },
      { replace: true }
    );
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
          label="term"
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
