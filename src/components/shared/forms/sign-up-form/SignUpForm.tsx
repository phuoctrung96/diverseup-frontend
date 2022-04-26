import React, { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from 'styles/modules/Auth.module.scss';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import Checkbox from 'components/shared/form-controls/checkbox/Checkbox';
import { registerApi } from 'api/user';
import { MODAL_TYPES, useGlobalModalContext } from '../../../../GlobalModal';

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

  const { showModal } = useGlobalModalContext();
  const [validateTimeout, setValidateTimeout] = useState<any>(false);

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
      console.log(e);
      if (e.detail === 'REGISTER_USER_ALREADY_EXISTS') {
        setError('email', {
          type: 'required',
          message: `user with email: ${email} already exist`,
        });
      }
    }
  };

  useEffect(() => {
    if (validateTimeout != false) {
      clearTimeout(validateTimeout);
    }
    setValidateTimeout(
      setTimeout(() => {
        if (getValues('confirm') !== getValues('password')) {
          setError('confirm', {
            type: 'confirm',
            message: 'Passwords do not match',
          });
        } else {
          clearErrors();
        }
      }, 500)
    );
  }, [watch('confirm')]);

  return (
    <>
      <form className={`form ${style.form}`} onSubmit={handleSubmit(onRegister)}>
        <Input
          inputLabel="E-mail address"
          label="email"
          register={register}
          type="text"
          placeholder="Enter your e-mail address"
          errors={errors}
        />
        <Input
          inputLabel="Password"
          label="password"
          register={register}
          type="password"
          placeholder="Enter your password"
        />
        <Input
          inputLabel="Confirm password"
          label="confirm"
          register={register}
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
        <Button text={'Sign up'} classList={['auth']} />
      </form>
      <div className={style.variant}>
        <span>{'Already have an account?'}</span>
        <Button text={'Sign In'} classList={['linkBtn']} onClick={switchOnLogin} />
      </div>
    </>
  );
};

export default SignUpForm;
