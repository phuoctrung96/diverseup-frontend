import React, { FC } from 'react';
import style from '../Auth.module.scss';
import Input from '../../../shared/form-controls/input/Input';
import Button from '../../../shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IModalProps } from '../../AuthModal';

const Forgot: FC<IModalProps> = ({ setShow, isHide }) => {
  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    alert('forgot' + JSON.stringify(data));
    if (isHide) {
      isHide(false);
      reset();
    }
    if (setShow) {
      setShow(true);
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
        />
        <Button text="Send" classList={['auth']} />
      </form>
    </>
  );
};

export default Forgot;
