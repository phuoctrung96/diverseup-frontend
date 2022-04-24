import React, { FC, useEffect, useState } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import Cards from 'components/shared/cards/Cards';
import { ICard } from 'interfaces/card';
import { businessesApi, IBusinessesItem } from 'api/business';

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

  const [businesses, setBusinesses] = useState<ICard[] | []>([]);

  useEffect(() => {
    businessesApi().then((res) => {
      const newData: ICard[] | [] = res.items?.map((el) => ({
        type: 'company',
        description: el.sector,
        imageUrl: el.logo,
        link: el.website,
        rating: 5,
        title: el.name,
      }));
      setBusinesses(newData || []);
    });
  }, []);

  return (
    <>
      <PageTitle title={'Company Rating'} />
      <Cards cards={businesses} button={null} pagination={true} />
    </>
  );
};

export default CompanyList;
