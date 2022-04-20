import React, { FC } from 'react';
import style from '../Auth.module.scss';
import Input from '../../../shared/form-controls/input/Input';
import Button from '../../../shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IModalProps } from '../../AuthModal';

const NewPassword: FC<IModalProps> = ({ isHide }) => {
  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    alert('forgot' + JSON.stringify(data));
    if (isHide) {
      isHide(false);
      reset();
    }
  };

  return (
    <>
      <h2 className={style.title}>Create new password</h2>
      <form className={`form ${style.form}`} onSubmit={handleSubmit(onSubmit)}>
        <Input
          inputLabel="Enter new password"
          label="new password"
          register={register}
          type="text"
          placeholder="Enter new password"
        />
        <Input
          inputLabel="Confirm new password"
          label="confirm password"
          register={register}
          type="text"
          placeholder="Confirm new password"
        />
        <Button text="Save" classList={['auth']} />
      </form>
    </>
  );
};

export default NewPassword;
