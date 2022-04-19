import React, { Dispatch, FC, SetStateAction } from 'react';
import ModalWindow from '../../../shared/modal-window/ModalWindow';
import style from '../Auth.module.scss';
import Input from '../../../shared/form-controls/input/Input';
import Button from '../../../shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';

interface INewPassword {
  showNewPassword: boolean;
  setShowNewPassword: Dispatch<SetStateAction<boolean>>
}

const NewPassword: FC<INewPassword> = ({showNewPassword, setShowNewPassword}) => {

  const {register, handleSubmit} = useForm<any>();

  const onSubmit: SubmitHandler<any> = data => {
    alert('forgot' + JSON.stringify(data));
    setShowNewPassword(false)
  };

  return (
      <>
        <ModalWindow setVisible={setShowNewPassword} visible={showNewPassword}>
          <h2 className={style.title}>Create new password</h2>
          <form className={`form ${style.form}`} onSubmit={handleSubmit(onSubmit)}>
            <label className={style.label}>E-mail address</label>
            <Input
              label="new password"
              register={register}
              type="text"
              placeholder="Enter new password"
            />
            <label className={style.label}>E-mail address</label>
            <Input
              label="confirm password"
              register={register}
              type="text"
              placeholder="Confirm new password"
            />
            <Button
              text="Save"
              classList={['auth']}
            />
          </form>
        </ModalWindow>
      </>
  );
};

export default NewPassword;