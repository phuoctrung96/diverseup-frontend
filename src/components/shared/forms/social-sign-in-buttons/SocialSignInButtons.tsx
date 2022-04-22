import React, { FC } from 'react';
import style from 'styles/modules/Auth.module.scss';
import linkedin from 'assets/images/auth/Linkedin.svg';
import gmail from 'assets/images/auth/Gmail.svg';

interface ISocialSignInButtons {
  classList?: string[];
}

export const SocialSignInButtons: FC<ISocialSignInButtons> = ({ classList }) => {
  return (
    <div className={`${style.social} ${classList?.map((item) => style[item]).join(' ')}`}>
      <a className={style.linkedin}>
        <img src={linkedin} alt="linkedin button" />
      </a>
      <a className={style.gmail}>
        <img src={gmail} alt="gmail button" />
      </a>
    </div>
  );
};

export default SocialSignInButtons;
