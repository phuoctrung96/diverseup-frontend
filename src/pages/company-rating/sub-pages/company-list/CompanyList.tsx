import React, { FC, useEffect, useState } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import Cards from 'components/shared/cards/Cards';
import { ICard } from 'interfaces/card';
import { businessesApi } from 'api/business';
import { ROUTE_COMPANY_RATING } from 'app-constants';
import Select from 'components/shared/form-controls/select/Select';
import { useForm } from 'react-hook-form';
import { Pagination } from 'interfaces';
import { useLocation } from 'react-router-dom';

export const CompanyList: FC = () => {
  const [businesses, setBusinesses] = useState<ICard[] | []>([]);
  const [pagination, setPagination] = useState<Pagination>();
  const { register, handleSubmit, reset, control } = useForm<any>();

  const location = useLocation();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const page = parseInt(params.page) || 1;

    setBusinesses([]);
    getBusinesses({ page, size: 12 });
  }, [location]);

  const getBusinesses = (params: Pick<Pagination, 'page' | 'size'>) => {
    businessesApi(params).then((res) => {
      const newData: ICard[] | [] = res.items?.map((el) => ({
        type: 'company',
        description: el.short_description || '',
        imageUrl: el.logo || '',
        link: `/${ROUTE_COMPANY_RATING}/${el.slug}`,
        rating: el.rating || 5,
        title: el.name,
      }));

      setPagination({ total: res.total, page: res.page, size: res.size });
      setBusinesses(newData || []);
    });
  };

  return (
    <>
      <PageTitle title={'Company Rating'} />
      <div className="filters">
        <form className="form">
          <Select
            options={[]}
            control={control}
            name={'sort'}
            selectLabel={'Sort by:'}
            selectPlaceholder={'Select the option'}
          />
        </form>
      </div>
      <Cards cards={businesses} button={null} pagination={pagination} />
    </>
  );
};

export default CompanyList;
