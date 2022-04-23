import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import style from 'styles/modules/Auth.module.scss';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import { loginApi } from 'api/user';

interface ISignInForm {
  switchOnSignUpForm: () => void;
  switchOnForgotForm: () => void;
  formClassList?: string[];
}

export const SignInForm: FC<ISignInForm> = ({
  switchOnSignUpForm,
  formClassList = [],
  switchOnForgotForm,
}) => {
  const { register, handleSubmit, reset } = useForm<any>();

  const onLogin = async (data: any) => {
    try {
      const res = await loginApi({
        username: data.email,
        password: data.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form
        className={`form ${style.form} ${formClassList?.join(' ')}`}
        onSubmit={handleSubmit(onLogin)}
      >
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

        <Button
          classList={['linkBtn']}
          text="Forgot your password?"
          onClick={(e: any) => {
            e.preventDefault();
            switchOnForgotForm();
          }}
        />

        <Button text={'Sign In'} classList={['auth']} />
      </form>
      <div className={style.variant}>
        <span>{'Don’t have an account?'}</span>
        <Button text={'Sign Up'} classList={['linkBtn']} onClick={switchOnSignUpForm} />
      </div>
    </>
  );
};

export default SignInForm;
