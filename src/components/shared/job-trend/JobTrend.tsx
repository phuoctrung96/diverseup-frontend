import React, { FC } from 'react';
import styles from './JobTrend.module.scss';

interface IJobTrend {
  text: string;
}

export const JobTrend: FC<IJobTrend> = ({ text }) => {
  return <div className={styles.jobTrend}>{text}</div>;
};

export default JobTrend;
