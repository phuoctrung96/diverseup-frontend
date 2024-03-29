import React, { FC } from 'react';

interface IAppLogo {
  footer?: boolean;
}

export const AppLogo: FC<IAppLogo> = ({ footer = false }) => {
  return (
    <div>
      <img src="/Logo.png" alt="Logo" className={`logo ${footer && 'footer'}`} />
    </div>
  );
};

export default AppLogo;
