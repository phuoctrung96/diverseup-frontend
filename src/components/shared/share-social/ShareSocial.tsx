import React, { FC } from 'react';
import style from './ShareSocial.module.scss';

const ShareSocial: FC = () => {
  return (
    <p className={style.wrapper}>
      SHARE
      <a href="#" className={style.facebook} />
      <a href="#" className={style.twitter} />
      <a href="#" className={style.linkedin} />
    </p>
  );
};

export default ShareSocial;
