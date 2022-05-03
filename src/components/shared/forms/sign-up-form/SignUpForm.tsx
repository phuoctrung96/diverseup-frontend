import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from 'styles/modules/Auth.module.scss';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import Checkbox from 'components/shared/form-controls/checkbox/Checkbox';
import { registerApi } from 'api/user';
import { MODAL_TYPES, useGlobalModalContext } from 'contexts/GlobalModalContext';
import { confirmValidate } from 'utils/confirm-validate.utils';

interface ISignUpFormProps {
  switchOnLogin: () => void;
  formClassList?: string[];
  showSubscribeCheckbox?: boolean;
}

interface IForm {
  email: string;
  password: string;
  confirm: string;
  subscribe: boolean;
}

export const SignUpForm: FC<ISignUpFormProps> = ({
  switchOnLogin,
  showSubscribeCheckbox = true,
}) => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<IForm>();

  confirmValidate(getValues('confirm'), getValues('password'), setError, watch, clearErrors);

  const { showModal } = useGlobalModalContext();

  const onRegister: SubmitHandler<IForm> = async ({ email, password, subscribe }) => {
    try {
      await registerApi({
        email: email,
        password: password,
        is_active: true,
        is_superuser: false,
        is_verified: false,
        want_newsletter: subscribe,
      });
      showModal(MODAL_TYPES.SIGN_IN_MODAL);
    } catch (e: any) {
      if (
        typeof e.data.detail === 'object' &&
        e.data.detail.find((error) => error.type === 'value_error.email')
      ) {
        setError('email', {
          type: 'invalid-email',
          message: `value is not a valid email address`,
        });
      } else if (e.data.detail === 'REGISTER_USER_ALREADY_EXISTS') {
        setError('email', {
          type: 'exist',
          message: `user with email: ${email} already exist`,
        });
      } else {
        setError(e.data.detail[0].loc[1], {
          type: 'required',
          message: e.data.detail[0].msg,
        });
      }
    }
  };

  return (
    <>
      <form className={`form ${style.form}`} onSubmit={handleSubmit(onRegister)}>
        <Input
          inputLabel="E-mail address"
          label="email"
          register={register}
          required={true}
          type="text"
          placeholder="Enter your e-mail address"
          errors={errors}
        />
        <Input
          inputLabel="Password"
          label="password"
          register={register}
          required={true}
          errors={errors}
          type="password"
          placeholder="Enter your password"
        />
        <Input
          inputLabel="Confirm password"
          label="confirm"
          register={register}
          required={true}
          type="password"
          placeholder="Confirm your password"
          errors={errors}
        />

        {showSubscribeCheckbox && (
          <Checkbox
            label="subscribe"
            register={register}
            required={true}
            checkboxLabel="I want to subscribe to a newsletter"
          />
        )}
        <Button text={'Sign up'} classList={['auth']} disabled={!!errors?.confirm} />
      </form>
      <div className={style.variant}>
        <span>{'Already have an account?'}</span>
        <Button text={'Sign In'} classList={['linkBtn']} onClick={switchOnLogin} />
      </div>
    </>
  );
};

export default SignUpForm;
