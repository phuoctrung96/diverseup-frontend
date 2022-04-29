import React, { FC, useState } from 'react';
import styles from './InfoCardRating.module.scss';

import RatingStars from 'components/shared/rating-stars/RatingStars';
import Button from 'components/shared/button/Button';

interface IInfoCardRating {
  rating: number;
  question: string;
  editable?: boolean;
}

export const InfoCardRating: FC<IInfoCardRating> = ({ rating, question, editable = false }) => {
  const [starRating, setStarRating] = useState<number>(rating);

  const onRatingChanged = (rating: number) => {
    setStarRating(rating);
  };

  const onBtnNAClick = () => {
    setStarRating(-1);
  };

  return (
    <div className={`${styles.infoCardRating} ${editable && styles.editable}`}>
      <span className={styles.question}>{question}</span>
      <div className={styles.ratingWrapper}>
        <RatingStars rating={starRating} clickable={editable} onRatingChange={onRatingChanged} />
        {editable && (
          <Button
            text={'N/A'}
            classList={['btnNA', `${starRating === -1 ? 'active' : ''}`]}
            onClick={onBtnNAClick}
          />
        )}
      </div>
    </div>
  );
};

export default InfoCardRating;
