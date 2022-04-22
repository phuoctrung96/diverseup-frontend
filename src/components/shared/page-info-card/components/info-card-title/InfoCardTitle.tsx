import React, { FC, useEffect, useState } from 'react';
import styles from './InfoCardTitle.module.scss';
import Button from 'components/shared/button/Button';

interface IInfoCardTitle {
  text: string;
  subText?: string;
  clearButton?: boolean;
  onClear?: () => void;
  hasValue?: boolean;
  stepItem?: boolean;
}

export const InfoCardTitle: FC<IInfoCardTitle> = ({
  text,
  subText,
  clearButton,
  onClear,
  hasValue,
  stepItem,
}) => {
  const [buttonActive, setButtonActive] = useState<boolean>(false);
  const [isValue, setIsValue] = useState<boolean>(!!hasValue);

  const onButtonClick = () => {
    setButtonActive(!buttonActive);
    setIsValue(false);
    onClear && onClear();
  };

  useEffect(() => {
    if (!!hasValue) {
      setButtonActive(!hasValue);
    }
  }, [hasValue]);

  return (
    <div className={`${styles.cardTitleContent} ${(clearButton || stepItem) && styles.withClear}`}>
      <div className={styles.cardTitleWrapper}>
        <h3 className={styles.cardTitle}>{text}</h3>
        {clearButton && (
          <Button
            text={'N/A'}
            classList={['btnNA', `${buttonActive || isValue ? 'active' : ''}`]}
            onClick={onButtonClick}
          />
        )}
      </div>
      {subText && <span className={styles.cardSubText}>{subText}</span>}
    </div>
  );
};

export default InfoCardTitle;
