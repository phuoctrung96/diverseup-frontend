import Auth from 'components/common/auth/Auth';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const StepThree: FC = () => {
  return (

    <div className="ls-multi-form">
      <div className="login-form">
      <Auth />
      </div>
    </div>
  );
};
export default StepThree;
