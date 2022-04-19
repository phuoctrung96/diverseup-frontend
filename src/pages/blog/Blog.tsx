import React, { FC } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import { ICard } from 'interfaces/card';
import Cards from 'components/shared/cards/Cards';

export const BlogPage: FC = () => {
	const cardsCard: ICard[] = [
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
		{
			type: 'card',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-card.png',
			link: '',
			title: 'How to make an impression on my first interview',
		},
	];

	return (
		<section className={'section'}>
			<div className="section__block no-top-padding">
				<PageTitle title={'Blog'} />

				<Cards cards={cardsCard} button={null} pagination={true} />
			</div>
		</section>
	);
};

export default BlogPage;
