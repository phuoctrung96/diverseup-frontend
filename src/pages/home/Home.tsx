import React, { FC, useEffect, useState } from 'react';
import MainBanner from 'pages/home/components/main-banner/MainBanner';
import Cards from 'components/shared/cards/Cards';
import { ICard } from 'interfaces/card';
import SecondaryBanner from 'pages/home/components/secondary-banner/SecondaryBanner';
import PageTitle from 'components/common/page-title/PageTitle';
import { useNavigate } from 'react-router-dom';
import { ROUTE_BLOG, ROUTE_COMPANY_RATING } from 'app-constants';
import { blogsApi, businessesApi, highlightedBusinesses } from 'api';

export const HomePage: FC = () => {
  const navigate = useNavigate();
  const [businesses, setBusinesses] = useState<ICard[] | []>([]);
  const [blogs, setBlogs] = useState<ICard[] | []>([]);
  const [isBusinessLoading, setIsBusinessLoading] = useState<boolean>(true);
  const [isBlogsLoading, setIsBlogsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsBlogsLoading(true);
    setIsBusinessLoading(true);

    highlightedBusinesses().then((res) => {
      const newData: ICard[] | [] = res.items?.map((el) => ({
        type: 'company',
        description: el.short_description || '',
        imageUrl: el.logo || '',
        link: `/${ROUTE_COMPANY_RATING}/${el.slug}`,
        rating: el.rating || 0,
        title: el.name,
      }));

      setBusinesses(newData || []);
      setIsBusinessLoading(false);
    });

    blogsApi({ page: 1, size: 3 }).then((res) => {
      const newData: ICard[] | [] = res.items?.map((el) => ({
        type: 'card',
        description: el.short_description,
        imageUrl: el.image,
        link: `/${ROUTE_BLOG}/${el.slug}`,
        title: el.title,
      }));

      setBlogs(newData || []);
      setIsBlogsLoading(false);
    });
  }, []);

  return (
    <>
      <MainBanner />
      <section className="section">
        <div className="section__block">
          <PageTitle
            title={'Companies Ratings'}
            subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            classList={['sectionTitle']}
          />
          <Cards
            cards={businesses}
            button={{ text: 'View more', onClick: () => navigate(ROUTE_COMPANY_RATING) }}
            isLoading={isBusinessLoading}
          />
        </div>
      </section>
      <SecondaryBanner />
      <section className={'section'}>
        <div className="section__block">
          <PageTitle
            title={'More from DiverseUp'}
            subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
            classList={['sectionTitle']}
          />
          <Cards
            cards={blogs}
            button={{ text: 'View more', onClick: () => navigate(ROUTE_BLOG) }}
            isLoading={isBlogsLoading}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
