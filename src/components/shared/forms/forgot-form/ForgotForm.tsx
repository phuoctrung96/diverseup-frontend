import React, { FC } from 'react';
import style from 'styles/modules/Auth.module.scss';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { forgotPasswordApi } from '../../../../api';

interface IForgotForm {
  onSend: () => void;
}

interface IForm {
  email: string;
}

export const ForgotForm: FC<IForgotForm> = ({ onSend }) => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    getValues,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async ({ email }) => {
    if (getValues('email') == '') {
      return setError('email', {
        type: 'required',
        message: 'This is required',
      });
    }
    try {
      await forgotPasswordApi({ email });
      localStorage.setItem('forgot', getValues('email'));
      reset();
      onSend();
    } catch (e: any) {
      console.log(e.data);
      setError('email', {
        type: 'required',
        message: e.data.detail[0].msg,
      });
    }
  };

  return (
    <>
      <h2 className={style.title}>Forgot your password?</h2>
      <span className={style.text}>
        Please enter the email address you’d like us to send reset password instructions to.
      </span>

      <form className={`form ${style.form}`} onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputLabel="E-mail address"
          label="email"
          register={register}
          type="text"
          placeholder="Enter you e-mail address"
          errors={errors}
        />
        <Button text="Send" classList={['auth']} />
      </form>
    </>
  );
};

export default ForgotForm;
