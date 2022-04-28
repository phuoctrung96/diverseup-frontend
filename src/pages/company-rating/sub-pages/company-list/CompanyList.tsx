import React, { FC, useEffect, useState } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import Cards from 'components/shared/cards/Cards';
import { ICard } from 'interfaces/card';
import { businessesApi, IBusinessesRes, IBusinessReq } from 'api/business';
import { ROUTE_COMPANY_RATING } from 'app-constants';
import Select, { ISelectOption } from 'components/shared/form-controls/select/Select';
import { useForm } from 'react-hook-form';
import { Pagination } from 'interfaces';
import { useLocation } from 'react-router-dom';

export const CompanyList: FC = () => {
  const [businesses, setBusinesses] = useState<ICard[] | []>([]);
  const [pagination, setPagination] = useState<Pagination>();
  const [isBusinessLoading, setIsBusinessLoading] = useState<boolean>(true);
  const { control, watch, getValues } = useForm<any>();
  const watchSort = watch('sort');

  const location = useLocation();
  const filterOptions: ISelectOption[] = [
    { label: 'Company Name (A-Z)', value: { sort_by: 'name', order: 'asc' } },
    { label: 'Company Name (Z-A)', value: { sort_by: 'name', order: 'desc' } },
    { label: 'Company Rating (Low to High)', value: { sort_by: 'rating', order: 'desc' } },
    { label: 'Company Rating (High to Low)', value: { sort_by: 'rating', order: 'asc' } },
    { label: 'Rating Date (New to Oldest)', value: { sort_by: 'ratingDate', order: 'asc' } },
    { label: 'Rating Date (Oldest to New)', value: { sort_by: 'ratingDate', order: 'desc' } },
  ];

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    setBusinesses([]);
    setIsBusinessLoading(true);
    if (watchSort && watchSort.value) {
      getBusinesses({ page: 1, size: 12, ...params, ...watchSort.value });
    } else {
      getBusinesses({ page: 1, size: 12, ...params });
    }
  }, [watchSort]);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const page = parseInt(params.page) || 1;
    const search_term = params.search_term || '';

    setBusinesses([]);
    setIsBusinessLoading(true);
    getBusinesses({ page, size: 12, search_term });
  }, [location]);

  const getBusinesses = (params: IBusinessReq) => {
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
      rating: el.rating || 0,
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
            options={filterOptions}
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
