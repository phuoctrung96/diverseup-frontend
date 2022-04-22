import React, { FC } from 'react';
import Input from '../../../shared/form-controls/input/Input';
import Button from '../../../shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';

const NewPassword: FC = () => {
  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    alert('forgot' + JSON.stringify(data));
  };

  return (
    <form className={`form`} onSubmit={handleSubmit(onSubmit)}>
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
  );
};

export default NewPassword;
