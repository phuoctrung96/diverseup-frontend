import React, { FC, useEffect, useState } from 'react';
import PageTitle from '../../../../components/common/page-title/PageTitle';
import Cards from '../../../../components/shared/cards/Cards';
import { ICard, Pagination } from 'interfaces';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { blogsApi } from 'api';
import { ROUTE_BLOG } from 'app-constants';

export const BlogList: FC = () => {
  const [blogs, setBlogs] = useState<ICard[] | []>([]);
  const [pagination, setPagination] = useState<Pagination>();
  const { register, handleSubmit, reset, control } = useForm<any>();

  const location = useLocation();

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const page = parseInt(params.page) || 1;

    setBlogs([]);
    getBlogs({ page, size: 12 });
  }, [location]);

  const getBlogs = (params: Pick<Pagination, 'page' | 'size'>) => {
    blogsApi(params).then((res) => {
      const newData: ICard[] | [] = res.items?.map((el) => ({
        type: 'card',
        description: el.short_description,
        imageUrl: el.image,
        link: `/${ROUTE_BLOG}/${el.slug}`,
        title: el.title,
      }));

      setPagination({ total: res.total, page: res.page, size: res.size });
      setBlogs(newData || []);
    });
  };

  return (
    <div>
      <PageTitle title={'Blog'} />

      <Cards cards={blogs} button={null} pagination={pagination} />
    </div>
  );
};

export default BlogList;
