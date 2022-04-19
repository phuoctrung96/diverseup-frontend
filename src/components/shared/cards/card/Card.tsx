import React, { FC } from 'react';
import styles from 'components/shared/cards/card/Card.module.scss';
import { Link } from 'react-router-dom';
import Button from 'components/shared/button/Button';
import { ICard } from 'interfaces/card';

export const Card: FC<ICard> = ({
	type,
	description,
	imageUrl,
	link,
	rating,
	title,
}) => {
	return (
		<Link className={styles.card} to={link}>
			{
				type === 'card' && <img className={styles.cardImage} src={imageUrl} alt={'card'}/>
			}
			<div className={`${styles.cardWrapper} ${styles[`cardWrapper--${type}`]}`}>
				{
					type === 'company' &&
						<div className={styles.companyInfo}>
							<img src={imageUrl} alt={'company logo'} />
							<div className={styles.ratingWrapper}>
								<div className={styles.starRating}>
									<span style={{width: (rating || 0) / 5 * 100 + '%'}} />
								</div>
							</div>
						</div>
				}
				{ title && <span className={styles.title}>{ title }</span> }
				<p className={styles.description}>{ description }</p>
				<Button text={'Learn More'} classList={['link']} />
			</div>
		</Link>
	);
};

export default Card;
