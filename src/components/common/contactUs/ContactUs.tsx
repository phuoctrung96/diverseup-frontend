import React, { Dispatch, FC, SetStateAction } from 'react';
import Input from '../../shared/form-controls/input/Input';
import Button from '../../shared/button/Button';
import ModalWindow from '../../shared/modal-window/ModalWindow';
import { SubmitHandler, useForm } from 'react-hook-form';
import auth from '../auth/Auth.module.scss';
import style from './ContactUs.module.scss';

interface IContactUs {
  showContactUs: boolean;
  setShowContactUs: Dispatch<SetStateAction<boolean>>;
}

const ContactUs: FC<IContactUs> = ({ showContactUs, setShowContactUs }) => {
  const { register, handleSubmit } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    alert('contact us' + JSON.stringify(data));
    setShowContactUs(false);
  };

  return (
    <ModalWindow visible={showContactUs} setVisible={setShowContactUs}>
      <h2 className={auth.title}>Contact us</h2>
      <span className={auth.text}>
        If you want to share something with us, please contact us via:
      </span>
      <div className={style.contacts}>
        <a href="tel:+650-397-1446" className={style.phone}>
          650-397-1446
        </a>
        <a href="mailto:info@diverseup.com" className={style.mail}>
          info@diverseup.com
        </a>
      </div>
      <span className={[auth.variant, style.subtext].join(' ')}>or fill in this Contact form:</span>
      <form className={`form ${auth.form}`} onSubmit={handleSubmit(onSubmit)}>
        <label className={auth.label}>Name</label>
        <Input label="name" register={register} type="text" placeholder="Enter your name" />
        <label className={auth.label}>E-mail address</label>
        <Input
          label="email"
          register={register}
          type="text"
          placeholder="Enter your e-mail address"
        />
        <label className={auth.label}>Subject</label>
        <Input label="subject" register={register} type="text" placeholder="Enter e-mail subject" />
        <div className="form-group">
          <label className={auth.label}>Message</label>
          <textarea
            className={`input ${style.textarea}`}
            {...register('message')}
            placeholder="Enter your message"
          />
        </div>

        <Button text="Send" classList={['auth']} />
      </form>
    </ModalWindow>
  );
};

export default ContactUs;
