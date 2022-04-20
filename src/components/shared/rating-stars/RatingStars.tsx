import React, { FC, useEffect, useState } from 'react';
import styles from './RatingStars.module.scss';

interface IRatingStars {
  rating: number;
  clickable?: boolean;
  onRatingChange?: (index: number) => void;
}

export const RatingStars: FC<IRatingStars> = ({ rating, clickable = true, onRatingChange }) => {
  const [activeStar, setActiveStar] = useState(rating);
  const totalStars = 5;

  const handleClick = (newRating: number) => {
    if (clickable) {
      setActiveStar(newRating);

      onRatingChange && onRatingChange(newRating);
    }
  };

  useEffect(() => {
    setActiveStar(rating);
  }, [rating]);

  return (
    <div className={styles.ratingWrapper}>
      {[...new Array(totalStars)].map((arr, index) => {
        return (
          <div className={styles.star} key={index} onClick={() => handleClick(index + 1)}>
            <span style={{ width: index + 1 <= activeStar ? '100%' : '0%' }} />
          </div>
        );
      })}
    </div>
  );
};

export default RatingStars;
