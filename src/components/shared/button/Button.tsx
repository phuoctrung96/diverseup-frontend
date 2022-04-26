import React, { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  text: string;
  onClick?: (e?: any) => void;
  classList?: string[];
  disabled?: boolean;
}

export const Button: FC<IButton> = ({ text, onClick, classList, disabled }) => {
  const getClassString = (): string => {
    if (disabled) {
      classList?.push('disabled');
    }
    return classList?.length ? classList?.map((classItem) => styles[classItem]).join(' ') : '';
  };

  return (
    <button
      className={`${styles.button} ${getClassString()}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
