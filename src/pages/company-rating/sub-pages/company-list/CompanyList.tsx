import React, { FC, useEffect, useState } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import Cards from 'components/shared/cards/Cards';
import { ICard } from 'interfaces/card';
import { businessesApi, businessesWithSearchApi, IBusinessesRes } from 'api/business';
import { ROUTE_COMPANY_RATING } from 'app-constants';
import Select from 'components/shared/form-controls/select/Select';
import { useForm } from 'react-hook-form';
import { Pagination } from 'interfaces';
import { useLocation } from 'react-router-dom';

export const CompanyList: FC = () => {
  const [businesses, setBusinesses] = useState<ICard[] | []>([]);
  const [pagination, setPagination] = useState<Pagination>();
  const [isBusinessLoading, setIsBusinessLoading] = useState<boolean>(true);
  const { register, handleSubmit, reset, control } = useForm<any>();

  const location = useLocation();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const page = parseInt(params.page) || 1;
    const term = params.term || '';

    setBusinesses([]);
    setIsBusinessLoading(true);
    term ? searchBusinesses({ page, size: 12 }, term) : getBusinesses({ page, size: 12 });
  }, [location]);

  const searchBusinesses = (params: Pick<Pagination, 'page' | 'size'>, term: string) => {
    businessesWithSearchApi(params, term).then((res) => {
      setBusinesses(mapBusinessResponse(res));
    });
  };

  const getBusinesses = (params: Pick<Pagination, 'page' | 'size'>) => {
    businessesApi(params).then((res) => {
      setBusinesses(mapBusinessResponse(res));
    });
  };

  const mapBusinessResponse = (res: IBusinessesRes): ICard[] => {
    const newData: ICard[] | [] = res.items?.map((el) => ({
      type: 'company',
      description: el.short_description || '',
      imageUrl: el.logo || '',
      link: `/${ROUTE_COMPANY_RATING}/${el.slug}`,
      rating: el.rating || 5,
      title: el.name,
    }));

    setPagination({ total: res.total, page: res.page, size: res.size });
    setIsBusinessLoading(false);

    return newData;
  };

  return (
    <div className="section__block no-top-padding">
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
      <Cards
        cards={businesses}
        button={null}
        pagination={pagination}
        isLoading={isBusinessLoading}
      />
    </div>
  );
};

export default CompanyList;
