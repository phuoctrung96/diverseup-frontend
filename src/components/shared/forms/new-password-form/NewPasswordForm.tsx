import React, { FC } from 'react';
import Input from '../../../shared/form-controls/input/Input';
import Button from '../../../shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { confirmValidate } from 'utils/confirm-validate.utils';
import { useNavigate } from 'react-router-dom';
import { resetPasswordApi } from 'api';
import { getParams } from 'utils/http.utils';
import { MODAL_TYPES, useGlobalModalContext } from 'GlobalModal';
import style from './NewPasswordForm.module.scss';

interface IForm {
  password: string;
  confirm: string;
}

const NewPassword: FC = () => {
  const { showModal } = useGlobalModalContext();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    clearErrors,
    getValues,
    formState: { errors },
  } = useForm<IForm>();

  confirmValidate(getValues('confirm'), getValues('password'), setError, watch, clearErrors);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IForm> = async ({ password }) => {
    try {
      const { token } = getParams();
      await resetPasswordApi({ password, token });
      navigate('/');
      showModal(MODAL_TYPES.SIGN_IN_MODAL);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className={`form ${style.form}`} onSubmit={handleSubmit(onSubmit)}>
      <Input
        inputLabel="Enter new password"
        label="password"
        register={register}
        type="password"
        placeholder="Enter new password"
      />
      <Input
        inputLabel="Confirm new password"
        label="confirm"
        register={register}
        type="password"
        placeholder="Confirm new password"
        errors={errors}
      />
      <div className={style.btn}>
        <Button text="Save" classList={['auth']} disabled={!!errors?.confirm} />
      </div>
    </form>
  );
};

export default NewPassword;
