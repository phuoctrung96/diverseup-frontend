import React, { FC } from 'react';
import style from './Note.module.scss';

interface INoteProps {
  text: string;
}

const Note: FC<INoteProps> = ({ text }) => {
  return (
    <div className={style.wrapper}>
      <p>{text}</p>
    </div>
  );
};

export default Note;
