import React, { FC, ReactNode } from 'react';
import styles from './PageInfoCard.module.scss';

interface IPageInfoCard {
  children: ReactNode;
  classList?: string[];
}

export const PageInfoCard: FC<IPageInfoCard> = ({ children, classList }) => {
  return (
    <div
      className={`${styles.pageInfoCardWrapper} ${
        classList?.length && classList.map((item) => styles[item]).join(' ')
      }`}
    >
      {children}
    </div>
  );
};

export default PageInfoCard;
