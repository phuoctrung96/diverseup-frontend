import React, { FC, useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

type CheckboxProps = {
  label: Path<any>;
  register: UseFormRegister<any>;
  checkboxLabel: string;
  required: boolean;
  checked?: boolean;
};

const Checkbox: FC<CheckboxProps> = ({
  label,
  register,
  checkboxLabel,
  required,
  checked = false,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const { name } = register(label);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-group">
      <input
        className={`checkbox ${isChecked && 'checked'}`}
        type="checkbox"
        id={label}
        checked={isChecked}
        {...register(label)}
        onChange={handleChange}
      />
      <label className="checkbox--label" htmlFor={name}>
        {checkboxLabel}
      </label>
    </div>
  );
};

export default Checkbox;
