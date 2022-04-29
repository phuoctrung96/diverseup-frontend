import React, { FC, useEffect, useState } from 'react';
import PageTitle from '../../../../components/common/page-title/PageTitle';
import Cards from '../../../../components/shared/cards/Cards';
import { ICard, Pagination } from 'interfaces';
import { useLocation } from 'react-router-dom';
import { blogsApi } from 'api';
import { ROUTE_BLOG } from 'app-constants';
import { getParams } from '../../../../utils/http.utils';

export const BlogList: FC = () => {
  const [blogs, setBlogs] = useState<ICard[] | []>([]);
  const [isBlogsLoading, setIsBlogsLoading] = useState<boolean>(true);
  const [pagination, setPagination] = useState<Pagination>();

  const location = useLocation();

  useEffect(() => {
    const params = getParams();
    const page = parseInt(params.page) || 1;

    setBlogs([]);
    getBlogs({ page, size: 12 });
    setIsBlogsLoading(true);
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
      setIsBlogsLoading(false);
    });
  };

  return (
    <div>
      <PageTitle title={'Blog'} />

      <Cards cards={blogs} button={null} pagination={pagination} isLoading={isBlogsLoading} />
    </div>
  );
};

export default BlogList;
