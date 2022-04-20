import React, { FC, useState } from 'react';
import Input from '../../shared/form-controls/input/Input';
import Checkbox from '../../shared/form-controls/checkbox/Checkbox';
import Button from '../../shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from './Auth.module.scss';
import linkedin from '../../../assets/images/auth/Linkedin.svg';
import gmail from '../../../assets/images/auth/Gmail.svg';
import { IModalProps } from '../AuthModal';

const Auth: FC<IModalProps> = ({ setShow, isHide }) => {
  const { register, handleSubmit, reset } = useForm<any>();
  const [login, setLogin] = useState<boolean>(true);

  const onSubmit: SubmitHandler<any> = (data) => {
    if (login) {
      if (setShow) {
        setShow(false);
      }
      return alert('sigIn' + JSON.stringify(data));
    }
    alert('signUp' + JSON.stringify(data));
    if (isHide) {
      reset();
      isHide(false);
    }
  };

  return (
    <>
      <h2 className={style.title}>{login ? 'Sign in' : 'Sign Up'}</h2>
      <span className={style.text}>
        {login
          ? 'Please fill in all the fields below to sign in or choose the option to sign with any of social networks below.'
          : 'Please fill in all the fields below to sign up or choose one of the options below.'}
      </span>
      <div className={style.social}>
        <a className={style.linkedin}>
          <img src={linkedin} alt="linkedin button" />
        </a>
        <a className={style.gmail}>
          <img src={gmail} alt="gmail button" />
        </a>
      </div>
      <form className={`form ${style.form}`} onSubmit={handleSubmit(onSubmit)}>
        {!login && (
          <Input
            inputLabel="Username"
            label="username"
            register={register}
            type="text"
            placeholder="Enter you username"
          />
        )}
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

        {login ? (
          <Button
            classList={['linkBtn']}
            text="Forgot your password?"
            onClick={(e: any) => {
              e.preventDefault();
              if (isHide) {
                isHide(false);
              }
              if (setShow) setShow(true);
            }}
          />
        ) : (
          <Checkbox
            label="subscribe"
            register={register}
            required={true}
            checkboxLabel="I want to subscribe to a newsletter"
          />
        )}

        <Button text={login ? 'Sign In' : 'Log In'} classList={['auth']} />
      </form>
      <div className={style.variant}>
        <span>{login ? 'Don’t have an account?' : 'Already have an account?'}</span>
        <Button
          text={login ? 'Sign up' : 'Sign in'}
          classList={['linkBtn']}
          onClick={() => setLogin(!login)}
        />
      </div>
    </>
  );
};

export default Auth;
