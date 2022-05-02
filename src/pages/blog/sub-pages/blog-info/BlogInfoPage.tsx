import React, { FC, useEffect, useState } from 'react';
import PageTitle from '../../../../components/common/page-title/PageTitle';
import style from './BlogInfoPage.module.scss';
import Cards from '../../../../components/shared/cards/Cards';
import ShareSocial from '../../../../components/shared/share-social/ShareSocial';
import { ICard } from 'interfaces';
import { getBlogApi, IBlogDetails, relatedBlogsApi } from 'api';
import { ROUTE_BLOG } from 'app-constants';
import { useLocation, useParams } from 'react-router-dom';
import { BREADCRUMBS_TYPES, useDynamicBreadcrumbContext } from 'DynamicBreadcrumb';
import Loader from 'components/common/loader/Loader';

const BlogInfoPage: FC = () => {
  const [blogDetails, setBlogDetails] = useState<IBlogDetails>();
  const [isBlogDetailsLoading, setIsBlogDetailsLoading] = useState<boolean>(true);
  const [isBlogsLoading, setIsBlogsLoading] = useState<boolean>(true);
  const [relatedBlogs, setRelatedBlogs] = useState<ICard[]>([]);
  const { setDynamicBreadcrumb } = useDynamicBreadcrumbContext();

  const location = useLocation();
  const { slug } = useParams();

  useEffect(() => {
    setIsBlogsLoading(true);
    relatedBlogsApi(slug || '').then((res) => {
      const newData: ICard[] | [] = res.items?.map((el) => ({
        type: 'card',
        description: el.short_description,
        imageUrl: el.image,
        link: `/${ROUTE_BLOG}/${el.slug}`,
        title: el.title,
      }));

      setRelatedBlogs(newData || []);
      setIsBlogsLoading(false);
    });

    loadBlogDetails();
  }, [location]);

  const loadBlogDetails = () => {
    setDynamicBreadcrumb(BREADCRUMBS_TYPES.BLOG, '');
    getBlogApi(slug || '').then((res) => {
      setBlogDetails(res);
      setDynamicBreadcrumb(BREADCRUMBS_TYPES.COMPANY, res.title);
      setIsBlogDetailsLoading(false);
    });
  };

  return (
    <>
      {!blogDetails || isBlogDetailsLoading ? (
        <div className="flexWrapper flexWrapper--center">
          <Loader />
        </div>
      ) : (
        <>
          <div className={style.wrapper}>
            <PageTitle title={blogDetails.title} classList={['blogTitle']} />
            <div dangerouslySetInnerHTML={{ __html: blogDetails.body }}></div>
            <ShareSocial />
          </div>
          <PageTitle title={'Related articles'} classList={['blogTitle']} />
          <Cards
            cards={relatedBlogs}
            button={null}
            pagination={undefined}
            isLoading={isBlogsLoading}
          />
        </>
      )}
    </>
  );
};

export default BlogInfoPage;
