import React, { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  text: string;
  onClick?: (e?: any) => void;
  classList?: string[];
}

export const Button: FC<IButton> = ({ text, onClick, classList }) => {
  const getClassString = (): string => {
    return classList?.length ? classList?.map((classItem) => styles[classItem]).join(' ') : '';
  };

  return (
    <button className={`${styles.button} ${getClassString()}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
