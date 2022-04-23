import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import style from 'styles/modules/Auth.module.scss';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import Checkbox from 'components/shared/form-controls/checkbox/Checkbox';
import { registerApi } from 'api/user';

interface ISignUpForm {
  switchOnLogin: () => void;
  formClassList?: string[];
  showSubscribeCheckbox?: boolean;
}

export const SignUpForm: FC<ISignUpForm> = ({
  switchOnLogin,
  showSubscribeCheckbox = true,
  formClassList = [],
}) => {
  const { register, handleSubmit, reset } = useForm<any>();

  const onRegister = async (data: any) => {
    try {
      await registerApi({
        email: data.email,
        password: data.password,
        is_active: true,
        is_superuser: false,
        is_verified: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className={`form ${style.form}`} onSubmit={handleSubmit(onRegister)}>
        <Input
          inputLabel="Username"
          label="username"
          register={register}
          type="text"
          placeholder="Enter you username"
        />
        <Input
          inputLabel="E-mail address"
          label="email"
          register={register}
          type="text"
          placeholder="Enter you e-mail address"
        />
        <Input
          inputLabel="Password"
          label="password"
          register={register}
          type="password"
          placeholder="Enter you password"
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
