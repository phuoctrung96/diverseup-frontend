import React, { FC } from 'react';
import ModalWindow from 'components/shared/modal-window/ModalWindow';
import { useGlobalModalContext } from 'GlobalModal';
import Button from 'components/shared/button/Button';
import Input from 'components/shared/form-controls/input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import auth from 'styles/modules/Auth.module.scss';

export const ContactUsModal: FC = () => {
  const { hideModal } = useGlobalModalContext();
  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) => {
    alert('contact us' + JSON.stringify(data));
  };

  return (
    <ModalWindow visible={true} setVisible={hideModal}>
      <div className="contact-us-modal">
        <h2 className={auth.title}>Contact us</h2>
        <span className={auth.text} style={{ marginBottom: '15px' }}>
          If you want to share something with us, please contact us via:
        </span>
        <div className="contacts">
          <a href="tel:+650-397-1446" className="phone">
            650-397-1446
          </a>
          <a href="mailto:info@diverseup.com" className="mail">
            info@diverseup.com
          </a>
        </div>
        <span className={`${auth.variant} subtext`}>or fill in this Contact form:</span>
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
              className={`input textarea`}
              {...register('message')}
              placeholder="Enter your message"
            />
          </div>

          <Button text="Send" classList={['auth']} />
        </form>
      </div>
    </ModalWindow>
  );
};

export default ContactUsModal;
