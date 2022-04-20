import React, { FC } from 'react';
import Input from '../../shared/form-controls/input/Input';
import Button from '../../shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import auth from '../auth/Auth.module.scss';
import style from './ContactUs.module.scss';
import { IModalProps } from '../AuthModal';

const ContactUs: FC<IModalProps> = ({ isHide }) => {
  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    alert('contact us' + JSON.stringify(data));
    if (isHide) {
      isHide(false);
      reset();
    }
  };

  return (
    <>
      <h2 className={auth.title}>Contact us</h2>
      <span className={auth.text} style={{ marginBottom: '15px' }}>
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
        <Input
          inputLabel="Name"
          label="name"
          register={register}
          type="text"
          placeholder="Enter your name"
        />
        <Input
          inputLabel="E-mail address"
          label="email"
          register={register}
          type="text"
          placeholder="Enter your e-mail address"
        />
        <Input
          inputLabel="Subject"
          label="subject"
          register={register}
          type="text"
          placeholder="Enter e-mail subject"
        />
        <div className="form-group">
          <label className="label">Message</label>
          <textarea
            className={`input ${style.textarea}`}
            {...register('message')}
            placeholder="Enter your message"
          />
        </div>

        <Button text="Send" classList={['auth']} />
      </form>
    </>
  );
};

export default ContactUs;
