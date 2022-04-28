import React, { FC, useEffect, useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';

type InputType = 'text' | 'password' | 'number';

type InputProps = {
  label: Path<any>;
  register: UseFormRegister<any>;
  type: InputType;
  placeholder?: string;
  errors?: FieldErrors<any>;
  required?: boolean;
  inputLabel?: string;
};

export const Input: FC<InputProps> = ({
  label,
  inputLabel,
  register,
  required,
  type,
  placeholder = '',
  errors,
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
      <input
        className={`input ${errors && errors[label] && 'field-invalid'}`}
        type={inputType}
        placeholder={placeholder}
        {...register(label, { required })}
      />
      {type === 'password' && (
        <span className={`eye-icon ${showPass && 'show'}`} onClick={() => setShowPass(!showPass)} />
      )}
      {errors && errors[label]?.type && (
        <span className={'validation-error'}>{errors[label].message}</span>
      )}
    </div>
  );
};

export default Input;
