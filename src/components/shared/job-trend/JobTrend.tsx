import React, { FC, useEffect, useState } from 'react';
import styles from './JobTrend.module.scss';

interface IJobTrend {
  text: string;
  value?: string;
  clickable?: boolean;
  onClick?: (value: string) => void;
  selected?: boolean;
}

export const JobTrend: FC<IJobTrend> = ({ text, value, clickable, onClick, selected }) => {
  const [itemSelected, setItemSelected] = useState<boolean>(!!selected);

  const handleClick = () => {
    if (clickable) {
      setItemSelected(!itemSelected);
      onClick && onClick(value || '');
    }
  };

  useEffect(() => {
    setItemSelected(!!selected);
  }, [selected]);

  return (
    <div
      className={`
			${styles.jobTrend} 
			${clickable && styles.clickable}
			${itemSelected || !clickable ? styles.active : ''}
		`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default JobTrend;
