import React, { FC } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import Cards from 'components/shared/cards/Cards';
import { ICard } from 'interfaces/card';

export const CompanyList: FC = () => {
  const cardsCompany: ICard[] = [
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '/company-rating/1',
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
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '',
      rating: 2.9,
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
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '',
      rating: 2.9,
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
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '',
      rating: 2.9,
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
    {
      type: 'company',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-company.png',
      link: '',
      rating: 2.9,
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

  return (
    <>
      <PageTitle title={'Company Rating'} />
      <Cards cards={cardsCompany} button={null} pagination={true} />
    </>
  );
};

export default CompanyList;
