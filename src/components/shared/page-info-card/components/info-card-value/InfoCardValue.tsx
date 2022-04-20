import React, { FC } from 'react';
import styles from './InfoCardValue.module.scss';

interface IInfoCardValue {
  label: string;
  value: string;
  classList?: string[];
}

export const InfoCardValue: FC<IInfoCardValue> = ({ label, value, classList }) => {
  return (
    <div
      className={`${styles.valueWrapper} ${
        classList?.length && classList.map((style) => styles[style]).join(' ')
      }`}
    >
      <div className={styles.valueLabel}>{label}:</div>
      <div className={styles.valueText}>{value}</div>
    </div>
  );
};

export default InfoCardValue;
