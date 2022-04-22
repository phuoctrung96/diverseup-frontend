import React, { FC, useId } from 'react';
import PageTitle from '../../common/page-title/PageTitle';
import style from './Text.module.scss';

interface IText {
  title: string;
  paragraph: string[];
}

interface ITextProps {
  content: IText;
}

const Text: FC<ITextProps> = ({ content }) => {
  return (
    <div className={style.wrapper}>
      <PageTitle title={content.title} />
      {content.paragraph.map((text) => {
        return (
          <p key={useId()} className={style.text}>
            {text}
          </p>
        );
      })}
    </div>
  );
};

export default Text;
