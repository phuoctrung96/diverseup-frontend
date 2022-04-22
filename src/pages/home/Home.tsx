import React, { FC } from 'react';
import MainBanner from 'pages/home/components/main-banner/MainBanner';
import Cards from 'components/shared/cards/Cards';
import { ICard } from 'interfaces/card';
import SecondaryBanner from 'pages/home/components/secondary-banner/SecondaryBanner';
import PageTitle from 'components/common/page-title/PageTitle';
import { useNavigate } from 'react-router-dom';
import { ROUTE_BLOG, ROUTE_COMPANY_RATING } from 'app-constants';

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const cardsCompany: ICard[] = [
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '',
      rating: 5,
      title: 'Company Name',
    },
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '',
      rating: 4.5,
      title: 'Company Name',
    },
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '',
      rating: 2.9,
      title: 'Company Name',
    },
  ];

  const cardsCard: ICard[] = [
    {
      type: 'card',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-card.png',
      link: '',
      title: 'How to make an impression on my first interview',
    },
    {
      type: 'card',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-card.png',
      link: '',
      title: 'How to make an impression on my first interview',
    },
    {
      type: 'card',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-card.png',
      link: '',
      title: 'How to make an impression on my first interview',
    },
  ];

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
            cards={cardsCompany}
            button={{ text: 'View more', onClick: () => navigate(ROUTE_COMPANY_RATING) }}
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
            cards={cardsCard}
            button={{ text: 'View more', onClick: () => navigate(ROUTE_BLOG) }}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
