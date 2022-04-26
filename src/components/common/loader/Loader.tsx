import React, { FC } from 'react';
import styles from './Loader.module.scss';

export const Loader: FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.ldsRing}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
