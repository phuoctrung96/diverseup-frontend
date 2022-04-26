import React, { FC, useEffect } from 'react';
import PageTitle from '../../../../components/common/page-title/PageTitle';
import Image from '../../../../components/shared/image/Image';
import Text from '../../../../components/shared/text/Text';

import style from './BlogInfoPage.module.scss';

import banner from '../../../../assets/images/blog/content.jpg';
import content1 from '../../../../assets/images/blog/content1.jpg';
import content2 from '../../../../assets/images/blog/content2.jpg';
import Note from '../../../../components/shared/note/Note';
import { ICard } from '../../../../interfaces/card';
import Cards from '../../../../components/shared/cards/Cards';
import ShareSocial from '../../../../components/shared/share-social/ShareSocial';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const BlogInfoPage: FC = () => {
  const breadcrumbs = useBreadcrumbs();

  useEffect(() => {
    breadcrumbs[2].match.pathname = '5';
  }, []);

  const images = [
    { src: banner, alt: 'banner image', author: 'Photo of London by Alex M., 01.05.2021 ' },
  ];

  const images2 = [
    { src: content1, alt: 'content1 image', author: 'Photo of London by Alex M., 01.05.2021 ' },
    { src: content2, alt: 'content2 image', author: 'Photo of London by Alex M., 01.05.2021 ' },
    // { src: content1, alt: 'content1 image', author: 'Photo of London by Alex M., 01.05.2021 ' },
  ];

  const content = {
    title: 'H2',
    paragraph: [
      'One of the world’s most visited cities, London has something for everyone: from history and culture to fine food and exceedingly good times. 2000 years of history has made the ‘Big Smoke’ deeply cosmopolitan and exotic. With such diversity, London’s cultural dynamism makes it among the world’s most international cities.',
      'It is a city of ideas – an innovator of art and culture. Here, you’ll find a city filled with independent thinkers with larger-than-life imaginations. Think: theatrical innovation, contemporary art, pioneering music, writing, poetry, architecture and design. Oh, and the food, let’s not even talk about the glorious food. From literature to pubs, history to the Queen, here are 13 reasons why London is the greatest city on Earth.',
      'With over 2,000 years of history, there are more iconic buildings and landmarks in London than pretty much any other city in the world. Free culture. From museums to art galleries, verdant royal parks to art house exhibitions, London is one of the few cities in the world where you can see a masterpiece for absolutely nothing at all. The Queen. Well, because, the Queen. She also represents over 1000 years of British tradition, values and democracy. With over 8.4 million trees, 300,000 gardens and hectares upon hectares of green space, London is pretty much the UN definition of a National Park.',
    ],
  };

  const content_2 = {
    title: 'H2',
    paragraph: [
      'In terms of population, London is widely reported to be the sixth biggest French city (270,000) and the second biggest Hungarian city (200,000). There are 150,000 Poles and, a decade since the big EU bang, many of them have grown up here. These figures are endlessly disputed, for the truth is that nobody really knows. The numbers are too great to count, the immigration churn too epic, the magnetic lure of London too strong to be quantified.',
      "But if you are going to live in London, then you have to take on the world. You have to compete - and it doesn't matter if you are a self-made millionaire or a van driver. The long-term Londoners who work hard are now contending with newcomers who work seven days a week. Londoners who fly first class are suddenly vying - for houses, for school places, for restaurant tables - with people who fly in private planes. In this new London, there is always someone richer than you, there is always someone who is prepared to work harder than you do, there is always someone who wants it much more than you do. At least that is the way London feels today.",
    ],
  };
  const note =
    'What they once sang about New York is actually truer of London today - if you can make it here then you can make it anywhere.';

  const blogCards: ICard[] = [
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
  ];

  return (
    <>
      <div className={style.wrapper}>
        <PageTitle
          title={'How to make an impression on my first interview'}
          classList={['blogTitle']}
        />
        <Image images={images} />
        <Text content={content} />
        <Note text={note} />
        <Image images={images2} />
        <Text content={content_2} />
        <ShareSocial />
      </div>
      <PageTitle title={'Related articles'} classList={['blogTitle']} />
      <Cards cards={blogCards} button={null} pagination={undefined} />
    </>
  );
};

export default BlogInfoPage;
