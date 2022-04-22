import React, { FC } from 'react';
import PageTitle from '../../../../components/common/page-title/PageTitle';
import Cards from '../../../../components/shared/cards/Cards';
import { ICard } from '../../../../interfaces/card';

const BlogList: FC = () => {
  const cardsCard: ICard[] = [
    {
      type: 'card',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
      imageUrl: '/images/mock-card.png',
      link: '2',
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
    <div>
      <PageTitle title={'Blog'} />

      <Cards cards={cardsCard} button={null} pagination={true} />
    </div>
  );
};

export default BlogList;
