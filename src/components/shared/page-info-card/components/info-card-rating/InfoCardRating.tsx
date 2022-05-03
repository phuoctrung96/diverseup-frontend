import React, { FC, useState } from 'react';
import styles from './InfoCardRating.module.scss';

import RatingStars from 'components/shared/rating-stars/RatingStars';
import Button from 'components/shared/button/Button';

interface IInfoCardRating {
  rating: number;
  question: string;
  editable?: boolean;
  onRatingClick?: (rating: number) => void;
}

export const InfoCardRating: FC<IInfoCardRating> = ({
  rating,
  question,
  editable = false,
  onRatingClick,
}) => {
  const [starRating, setStarRating] = useState<number>(rating);

  const onRatingChanged = (rating: number) => {
    setStarRating(rating);
    onRatingClick?.(rating);
  };

  const onBtnNAClick = () => {
    setStarRating(0);
    onRatingClick?.(0);
  };

  return (
    <div className={`${styles.infoCardRating} ${editable && styles.editable}`}>
      <span className={styles.question}>{question}</span>
      <div className={styles.ratingWrapper}>
        <RatingStars rating={starRating} clickable={editable} onRatingChange={onRatingChanged} />
        {editable && (
          <Button
            text={'N/A'}
            classList={['btnNA', `${starRating === 0 ? 'active' : ''}`]}
            onClick={onBtnNAClick}
          />
        )}
      </div>
    </div>
  );
};

export default InfoCardRating;
