import React, { FC } from 'react';
import style from './ShareSocial.module.scss';

const ShareSocial: FC = () => {
  return (
    <div className={style.wrapper}>
      <p className={style.title}>SHARE</p>
      <div className={style.links}>
        <a href="#" className={style.facebook} />
        <a href="#" className={style.twitter} />
        <a href="#" className={style.linkedin} />
      </div>
    </div>
  );
};

export default ShareSocial;
