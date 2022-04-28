import React, { FC } from 'react';
import ModalWindow from 'components/shared/modal-window/ModalWindow';
import { useGlobalModalContext } from 'GlobalModal';
import Button from 'components/shared/button/Button';
import Input from 'components/shared/form-controls/input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import auth from 'styles/modules/Auth.module.scss';
import { contactUsApi } from '../../api/contact-us';

interface IForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactUsModal: FC = () => {
  const { hideModal } = useGlobalModalContext();
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    try {
      await contactUsApi(data);
      hideModal();
      reset();
    } catch (e: any) {
      e.data.detail.map((err) => {
        setError(err.loc[1], {
          type: 'required',
          message: err.msg,
        });
      });
    }
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
            errors={errors}
          />
          <Input
            inputLabel="E-mail address"
            label="email"
            register={register}
            type="text"
            placeholder="Enter your e-mail address"
            errors={errors}
          />
          <Input
            inputLabel="Subject"
            label="subject"
            register={register}
            type="text"
            placeholder="Enter e-mail subject"
            errors={errors}
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
