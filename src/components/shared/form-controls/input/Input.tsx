import React, { FC, useEffect, useState } from 'react';
import { Path, useForm, UseFormRegister } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';

type InputType = 'text' | 'password' | 'number' | 'date';

type InputProps = {
  label: Path<any>;
  register: UseFormRegister<any>;
  type: InputType;
  placeholder?: string;
  errors?: FieldErrors<any>;
  required?: boolean;
  inputLabel?: string;
  value?: any;
};

export const Input: FC<InputProps> = ({
  label,
  inputLabel,
  register,
  required = false,
  type,
  placeholder = '',
  errors = {},
}) => {
  const [showPass, setShowPass] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (type === 'password') {
      setInputType(showPass ? 'text' : 'password');
    }
  }, [showPass]);

  return (
    <div className={`form-group ${type === 'number' ? 'number' : ''}`}>
      {inputLabel && <label className="label">{inputLabel}</label>}
      <div className="input-wrapper">
        <input
          className={`input ${errors && errors[label] && 'field-invalid'}`}
          type={inputType}
          placeholder={placeholder}
          {...register(label, { required })}
        />
        {type === 'password' && (
          <span
            className={`eye-icon ${showPass && 'show'}`}
            onClick={() => setShowPass(!showPass)}
          />
        )}
      </div>
      {errors && errors[label]?.type && errors[label]?.type === 'required' ? (
        <span className={'validation-error'}>This field must be filled</span>
      ) : (
        <span className={'validation-error'}>{errors[label]?.message}</span>
      )}
    </div>
  );
};

export default Input;
