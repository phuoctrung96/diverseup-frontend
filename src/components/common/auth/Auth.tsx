import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import ModalWindow from '../../shared/modal-window/ModalWindow';
import Input from '../../shared/form-controls/input/Input';
import { Checkbox } from '../../shared/form-controls/checkbox/Checkbox';
import Forgot from './forgot/Forgot';
import Button from '../../shared/button/Button';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from './Auth.module.scss';
import linkedin from '../../../assets/images/auth/Linkedin.svg';
import gmail from '../../../assets/images/auth/Gmail.svg';

interface IAuth {
  show: boolean;
  isHide: Dispatch<SetStateAction<boolean>>;
}

const Auth: FC<IAuth> = ({show, isHide}) => {

  const {register, handleSubmit} = useForm<any>();
  const [login, setLogin] = useState<boolean>(true)
  const [showForgot, setShowForgot] = useState<boolean>(false)

  const onSubmit: SubmitHandler<any> = data => {
    if (login) {
      isHide(false)
      return alert('sigIn' + JSON.stringify(data))
    }
    alert('signUp' + JSON.stringify(data));
    isHide(false)
  };

  return (
    <>
      <ModalWindow visible={show} setVisible={isHide}>
        <h2 className={style.title}>{login ? 'Sign in' : 'Sign Up'}</h2>
        <span className={style.text}>
        {login ?
          'Please fill in all the fields below to sign in or choose the option to sign with any of social networks below.'
          :
          'Please fill in all the fields below to sign up or choose one of the options below.'
        }
      </span>
        <div className={style.social}>
          <a className={style.linkedin}>
            <img src={linkedin} alt="linkedin button"/>
          </a>
          <a className={style.gmail}>
            <img src={gmail} alt="gmail button"/>
          </a>
        </div>
        <form className={`form ${style.form}`} onSubmit={handleSubmit(onSubmit)}>
          {!login &&
            <>
              <label className={style.label}>Username</label>
              <Input
                label="username"
                register={register}
                type="text"
                placeholder="Enter you username"
              />
            </>
          }
          <label className={style.label}>E-mail address</label>
          <Input
            label="email"
            register={register}
            type="text"
            placeholder="Enter you e-mail address"
          />
          <label className={style.label}>Password</label>
          <Input
            label="password"
            register={register}
            type="password"
            placeholder="Enter you password"
          />

          {login ?
            <button
              className={style.forgot}
              onClick={(e) => {
                e.preventDefault()
                isHide(false)
                setShowForgot(true)
              }}
            >
              Forgot your password?
            </button>
            :
            <Checkbox
              label="subscribe"
              register={register}
              required={true}
              checkboxLabel="I want to subscribe to a newsletter"
            />
          }

          <Button
            text={login ? 'Sign In' : 'Log In'}
            classList={['auth']}
          />
        </form>
        <div className={style.variant}>
          <span>
          {login ?
            'Don’t have an account?'
            :
            'Already have an account?'
          }
          </span>
          <button className={style.selectLogin} onClick={() => setLogin(!login)}>
            {login ?
              'Sign up'
              :
              'Sign in'
            }
          </button>
        </div>
      </ModalWindow>
      <Forgot showForgot={showForgot} setShowForgot={setShowForgot}/>
      {/*<NewPassword showNewPassword={} setShowNewPassword={}/>*/}
    </>
  );
};

export default Auth;