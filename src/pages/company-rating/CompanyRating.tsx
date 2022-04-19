import React, { FC } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import { ICard } from 'interfaces/card';
import Cards from 'components/shared/cards/Cards';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export const CompanyRatingPage: FC = () => {
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
		{
			type: 'company',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-company.png',
			link: '',
			rating: 2.9,
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
		{
			type: 'company',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-company.png',
			link: '',
			rating: 2.9,
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
		{
			type: 'company',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-company.png',
			link: '',
			rating: 2.9,
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
		{
			type: 'company',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-company.png',
			link: '',
			rating: 2.9,
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
		{
			type: 'company',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et aliqua.',
			imageUrl: '/images/mock-company.png',
			link: '',
			rating: 2.9,
			title: 'Company Name',
		},
	];

	const { control, formState: { errors }, handleSubmit, register } = useForm<any>();

	const onSubmit: SubmitHandler<any> = data => {
		alert(JSON.stringify(data));
	};

	const options = [
		{ value: 'active', label: 'Active' },
		{ value: 'inactive', label: 'In Active' },
		{ value: 'deleted', label: 'Delete' }
	];

	return (
		<>
			<section className="section">
				<div className="section__block no-top-padding">
					<PageTitle title={'Company Rating'} />

					<DevTool control={control} placement="bottom-right" />

					<Cards cards={cardsCompany} button={null} pagination={true} />
				</div>
			</section>
		</>
	);
};

export default CompanyRatingPage;
