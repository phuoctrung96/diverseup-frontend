import React, { FC } from 'react';
import styles from './PageTitle.module.scss';

type TitleType = 'page' | 'card';

interface IPageTitle {
  title: string;
  type?: TitleType;
  subTitle?: string;
  classList?: string[];
}

export const PageTitle: FC<IPageTitle> = ({ title, type = 'page', subTitle, classList }) => {
  return (
    <div
      className={`
			${styles.pageTitleWrapper} 
			${type === 'card' ? styles.card : ''} 
			${classList?.map((item) => styles[item]).join(' ')}`}
    >
      {type === 'page' && (
        <>
          <h1 className={styles.pageTitle}>{title}</h1>
          {subTitle && <span className={styles.pageSubtitle}>{subTitle}</span>}
        </>
      )}
      {type === 'card' && (
        <>
          <h2 className={styles.pageTitle}>{title}</h2>
          {subTitle && <span className={styles.pageSubtitle}>{subTitle}</span>}
        </>
      )}
    </div>
  );
};

export default PageTitle;
