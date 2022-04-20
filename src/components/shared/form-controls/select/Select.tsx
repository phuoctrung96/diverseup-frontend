import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import Select from 'react-select';

interface ISelect {
  options: any[];
  control: any;
  name: string;
  required?: boolean;
  selectLabel?: string;
  errors?: FieldErrors<any>;
}

export const FormSelect: FC<ISelect> = ({
  selectLabel,
  options,
  control,
  errors,
  name,
  required,
}) => {
  return (
    <div className="form-group">
      {selectLabel && <label className="label">{selectLabel}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Select {...field} styles={customStyles} options={options} />}
      />
      {errors && errors['filter']?.type === 'required' && (
        <span className={'validation-error'}>This field must be filled</span>
      )}
    </div>
  );
};

export default FormSelect;

const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: '1px solid var(--color-secondary-light-gray)',
    borderRadius: state.menuIsOpen ? '8px 8px 0 0' : '8px',
    background: 'var(--color-secondary-extra-light-gray)',
    fontSize: '14px',
    fontWeight: '400',
    '&:hover': {
      border: '1px solid var(--color-secondary-light-gray)',
    },
    boxShadow: 'unset !important',
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    fontSize: 16,
    padding: '10px 14px',
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided: any) => ({
    ...provided,
    margin: 0,
    background: 'var(--color-secondary-extra-light-gray)',
    border: '1px solid var(--color-secondary-light-gray)',
    borderRadius: '0 0 8px 8px',
    boxShadow: 'unset',
  }),
  menuList: (provided: any) => ({
    ...provided,
    padding: 0,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    padding: '8px 16px',
    backgroundColor: '',
    color: 'var(--color-primary-black)',
    ':last-child': {
      borderRadius: '0 0 8px 8px',
    },
    '&:before': {
      content: state.isSelected
        ? `url(${require('../../../../assets/images/icons/selected.svg').default})`
        : `""`,
      width: 16,
      height: 11,
      position: 'absolute',
      right: 19,
    },
    '&:hover': {
      backgroundColor: state.isSelected ? '' : 'var(--color-primary-yellow)',
    },
  }),
};

// border: 1px solid var(--color-secondary-gray);
// box-sizing: border-box;
// border-radius: 8px;
// background: var(--color-secondary-extra-light-gray) !important;
// font-size: 16px;
// color: var(--color-primary-black);
// line-height: 22px;
// margin-bottom: 22px;
