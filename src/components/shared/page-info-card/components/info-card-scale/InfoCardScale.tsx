import React, { FC, useState } from 'react';
import styles from './InfoCardScale.module.scss';

interface IInfoCardScale {
  selected?: number;
  clickable?: boolean;
  onSelect?: (index: number) => void;
}

export const InfoCardScale: FC<IInfoCardScale> = ({ clickable = false, onSelect, selected }) => {
  const [selectedItem, setSelectedItem] = useState(selected || -1);
  const totalCircles = 5;
  const descriptions = ['not likely', '', 'neutral', '', 'very likely'];

  const handleClick = (index: number) => {
    if (clickable) {
      setSelectedItem(index);
      onSelect && onSelect(index);
    }
  };

  return (
    <div className={styles.scaleWrapper}>
      {[...new Array(totalCircles)].map((arr, index) => {
        return (
          <div className={styles.circleContent} onClick={() => handleClick(index)} key={index}>
            <div
              key={index}
              className={`${styles.circle} ${index === selectedItem && styles.selected} ${
                clickable && styles.clickable
              }`}
            >
              <span className={styles.circleNumber}>{index + 1}</span>
            </div>
            <span className={styles.circleDescription}>{descriptions[index]}</span>
          </div>
        );
      })}
    </div>
  );
};

export default InfoCardScale;
