import React, { FC } from 'react';
import MainBanner from 'pages/home/components/main-banner/MainBanner';
import Cards from 'components/shared/cards/Cards';
import { ICard } from 'interfaces/card';
import JobTrend from 'components/shared/job-trend/JobTrend';
import SecondaryBanner from 'pages/home/components/secondary-banner/SecondaryBanner';

export const HomePage: FC = () => {
	const cardsCompany: ICard[] = [
		{
			type: 'company',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-company.png',
			link: '',
			rating: 5,
			title: 'Company Name',
		},
		{
			type: 'company',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-company.png',
			link: '',
			rating: 4.5,
			title: 'Company Name',
		},
		{
			type: 'company',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-company.png',
			link: '',
			rating: 2.9,
			title: 'Company Name',
		},
	];

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
	];

	return (
		<>
			<MainBanner />
			<section className="section">
				<div className="section__block">
					<div className="section__block--title">
						<h1>Trending Jobs</h1>
						<span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
					</div>
					{/*TODO refactor this*/}
					<div className={'flexWrapper flexWrapper--center'} style={{ 'maxWidth': '955px' }}>
						<JobTrend text={'Front end Developer'} />
						<JobTrend text={'Front end Developer'} />
						<JobTrend text={'Front end Developer'} />
						<JobTrend text={'Accountant'} />
						<JobTrend text={'Accountant'} />
						<JobTrend text={'Accountant'} />
						<JobTrend text={'Front end Developer'} />
						<JobTrend text={'Front end Developer'} />
						<JobTrend text={'Front end Developer'} />
					</div>
				</div>
				<div className="section__block">
					<div className="section__block--title">
						<h1>Companies Ratings</h1>
						<span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
					</div>
					<Cards cards={cardsCompany} button={{ text: 'View more', onClick: () => void 0 }} />
				</div>
			</section>
			<SecondaryBanner />
			<section className={'section'}>
				<div className="section__block">
					<div className="section__block--title">
						<h1>More from DiverseUp</h1>
						<span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</span>
					</div>
					<Cards cards={cardsCard} button={{ text: 'View more', onClick: () => void 0 }} />
				</div>
			</section>
		</>
	);
};

export default HomePage;
