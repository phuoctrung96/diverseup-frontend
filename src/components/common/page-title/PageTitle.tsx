import React, { FC } from 'react';
import styles from './PageTitle.module.scss';

interface IPageTitle {
	title: string;
	subTitle?: string;
}

export const PageTitle: FC<IPageTitle> = ({
	title,
	subTitle,
}) => {
	return (
		<div className={styles.pageTitleWrapper}>
			<h1 className={styles.pageTitle}>{ title }</h1>
			{ subTitle && <span className={styles.pageSubtitle}>{ subTitle }</span> }
		</div>
	);
};

export default PageTitle;
