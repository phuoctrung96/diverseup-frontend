import React, { FC } from 'react';
import styles from './InfoCardTitle.module.scss';

interface IInfoCardTitle {
  text: string;
}

export const InfoCardTitle: FC<IInfoCardTitle> = ({ text }) => {
  return <h3 className={styles.cardTitle}>{text}</h3>;
};

export default InfoCardTitle;
