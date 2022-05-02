import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from 'styles/modules/Auth.module.scss';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import { getUserApi, loginApi } from 'api/user';
import AuthHelpers from '../../../../utils/AuthHelpers';
import { useGlobalModalContext } from 'contexts/GlobalModalContext';

interface ISignInForm {
  switchOnSignUpForm: () => void;
  switchOnForgotForm: () => void;
  formClassList?: string[];
  onSignInClick?: () => void;
}

interface IForm {
  email: string;
  password: string;
}

export const SignInForm: FC<ISignInForm> = ({
  switchOnSignUpForm,
  formClassList = [],
  switchOnForgotForm,
  onSignInClick,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IForm>();
  const { hideModal } = useGlobalModalContext();
  const [isDisabled, setIsDisabled] = useState(false);

  const onLogin: SubmitHandler<IForm> = async ({ password, email }) => {
    setIsDisabled(true);
    try {
      const response = await loginApi({
        username: email,
        password: password,
      });
      AuthHelpers.storeAccessToken(response.access_token);
      const user = await getUserApi(response.access_token);
      AuthHelpers.storeUserInfo(user);
      reset();
      hideModal();
      onSignInClick?.();
    } catch (error: any) {
      setError('password', {
        type: 'required',
        message: 'incorrect email or password',
      });
      setError('email', {
        type: 'required',
      });
      setIsDisabled(false);
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
          errors={errors}
        />
        <Input
          inputLabel="Password"
          label="password"
          register={register}
          type="password"
          placeholder="Enter you password"
          errors={errors}
        />

        <Button
          classList={['linkBtn']}
          text="Forgot your password?"
          onClick={(e: any) => {
            e.preventDefault();
            switchOnForgotForm();
          }}
        />

        <Button text={'Sign In'} classList={['auth']} disabled={isDisabled} />
      </form>
      <div className={style.variant}>
        <span>{'Don’t have an account?'}</span>
        <Button text={'Sign Up'} classList={['linkBtn']} onClick={switchOnSignUpForm} />
      </div>
    </>
  );
};

export default SignInForm;
