import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import ModalWindow from '../../../shared/modal-window/ModalWindow';
import style from '../Auth.module.scss';
import Input from '../../../shared/form-controls/input/Input';
import Button from '../../../shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import EmailSent from '../emailSent/EmailSent';

interface IForgot {
  showForgot: boolean;
  setShowForgot: Dispatch<SetStateAction<boolean>>
}

const Forgot: FC<IForgot> = ({setShowForgot, showForgot}) => {

  const {register, handleSubmit} = useForm<any>();
  const [showEmailSent, setShowEmailSent] = useState<boolean>(false)

  const onSubmit: SubmitHandler<any> = data => {
    alert('forgot' + JSON.stringify(data));
    setShowForgot(false)
    setShowEmailSent(true)
  };

  return (
    <>
      <ModalWindow setVisible={setShowForgot} visible={showForgot}>
        <h2 className={style.title}>Forgot your password?</h2>
        <span className={style.text}>
          Please enter the email address you’d like us to send reset password instructions to.
        </span>
        <form className={`form ${style.form}`} onSubmit={handleSubmit(onSubmit)}>
          <label className={style.label}>E-mail address</label>
          <Input
            label="email"
            register={register}
            type="text"
            placeholder="Enter you e-mail address"
          />
          <Button
            text="Send"
            classList={['auth']}
          />
        </form>
      </ModalWindow>
      <EmailSent showEmailSent={showEmailSent} setShowEmailSent={setShowEmailSent}/>
    </>
  );
};

export default Forgot;