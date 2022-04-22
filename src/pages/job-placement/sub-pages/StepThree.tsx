import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import linkedin from '../../../assets/images/auth/Linkedin.svg';
import gmail from '../../../assets/images/auth/Gmail.svg';

export const JPStepThree: FC = () => {
  const { register, handleSubmit, reset } = useForm<any>();
  return (
    <div className="ls-multi-form">
      <div className="login-form">
        <h2 className="ls-form-heading">Sign in</h2>
        <p className="ls-form-subheading">
          Before saving your job placement info please login. We do not collect any personal
          information such as name, address, etc. which could reveal your identity
        </p>

        <form className="form">
          <p className="ls-form-subheading color-fade">
            Please fill in all the fields below to sign in or choose the option to sign with any of
            social networks below.
          </p>

          <div className="social-login">
            <a href="#">
              <img src={linkedin} alt="linkedin button" />
            </a>
            <a href="#">
              <img src={gmail} alt="gmail button" />
            </a>
          </div>
          <Input
            inputLabel="E-mail address"
            label="email"
            register={register}
            type="text"
            placeholder="Enter you e-mail address"
          />
          <Input
            inputLabel="Password"
            label="password"
            register={register}
            type="password"
            placeholder="Enter you password"
          />

          <div className="forgot-password">
            <Button classList={['linkBtn']} text="Forgot your password?" />
          </div>
          <div className="action-button">
            <Button text={'Sign In'} classList={['auth']} />
          </div>
          <div className="login-footer">
            <span>Don’t have an account?</span>
            <Button text={'Sign up'} classList={['linkBtn']} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default JPStepThree;
