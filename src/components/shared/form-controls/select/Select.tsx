import React, { FC, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import Select from 'react-select';

export interface ISelectOption {
  label: string;
  value: unknown;
}

interface ISelect {
  options: ISelectOption[];
  control: any;
  name: string;
  required?: boolean;
  selectLabel?: string;
  errors?: FieldErrors<any>;
  selectPlaceholder?: string;
}

export const FormSelect: FC<ISelect> = ({
  selectLabel,
  options,
  control,
  errors,
  name,
  required,
  selectPlaceholder,
}) => {
  const [value, setValue] = useState(
    options.find((item) => item.value === control._formValues[name]) || null
  );

  return (
    <div className="form-group">
      {selectLabel && <label className="label">{selectLabel}</label>}
      <Controller
        name={name}
        control={control}
        rules={{ required: required }}
        render={({ field, fieldState }) => (
          <>
            <div className="input-wrapper select-input">
              <Select
                {...field}
                styles={{
                  ...customStyles,
                  control: (provided, state) => ({
                    ...customStyles.control(provided, state),
                    borderColor: fieldState.error
                      ? 'var(--color-validation-error) !important'
                      : 'var(--color-secondary-light-gray) !important',
                  }),
                }}
                options={options}
                placeholder={selectPlaceholder || ''}
                isOptionSelected={(option) => option?.value === field?.value}
                value={[value]}
                getOptionLabel={(option) => option?.label || ''}
                onChange={(option) => {
                  setValue(option);
                  field?.onChange(option?.value);
                }}
              />
            </div>
            {errors && errors[name]?.type === 'required' && (
              <span className={'validation-error'}>This field must be filled</span>
            )}
          </>
        )}
      />
    </div>
  );
};

export default FormSelect;

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    width: '100%',
  }),
  control: (provided: any, state: any) => ({
    ...provided,
    border: '1px solid',
    borderRadius: state.menuIsOpen ? '8px 8px 0 0' : '8px',
    borderColor: 'var(--color-secondary-light-gray)',
    backgroundColor: 'var(--color-secondary-extra-light-gray) !important',
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
    '@media only screen and (max-width: 992px)': {
      ...provided['@media only screen and (max-width: 992px)'],
      fontSize: 14,
    },
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
