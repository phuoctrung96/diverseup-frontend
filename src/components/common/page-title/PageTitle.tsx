import React, { FC } from 'react';
import styles from './PageTitle.module.scss';

interface IPageTitle {
  title: string;
  subTitle?: string;
  classList?: string[];
}

export const PageTitle: FC<IPageTitle> = ({ title, subTitle, classList }) => {
  return (
    <div
      className={`${styles.pageTitleWrapper} ${classList?.map((item) => styles[item]).join(' ')}`}
    >
      <h1 className={styles.pageTitle}>{title}</h1>
      {subTitle && <span className={styles.pageSubtitle}>{subTitle}</span>}
    </div>
  );
};

export default PageTitle;
