import React, { FC, ReactNode } from 'react';
import styles from './PageInfoCard.module.scss';

interface IPageInfoCard {
  children: ReactNode;
}

export const PageInfoCard: FC<IPageInfoCard> = ({ children }) => {
  return <div className={styles.pageInfoCardWrapper}>{children}</div>;
};

export default PageInfoCard;
