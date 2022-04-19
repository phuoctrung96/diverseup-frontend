import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FieldErrors } from 'react-hook-form/dist/types/errors';
import Select from 'react-select';

interface ISelect {
	options: any[];
	control: any;
	name: string;
	required?: boolean,
	selectLabel?: string;
	errors?: FieldErrors<any>,
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
			{ selectLabel && <label className="label">{ selectLabel }</label> }
			<Controller
				name={name}
				control={control}
				render={({ field }) => (
					<Select
						{ ...field }
						styles={customStyles}
						options={options}
						// onChange={(selectedOption: ICategory) => {
						// 	onChange(selectedOption.value);
						// }}
					/>
				)}
			/>
			{ errors && errors['filter']?.type === 'required' && <span className={'validation-error'}>This field must be filled</span> }
		</div>
	);
};

export default FormSelect;

const customStyles = {
	container: (provided: any) => ({
		...provided,
		border: '1px solid var(--color-secondary-gray)',
		borderRadius: '8px',
		background: 'var(--color-secondary-extra-light-gray)',
		fontSize: '14px',
		fontWeight: '400',
	})
};

// border: 1px solid var(--color-secondary-gray);
// box-sizing: border-box;
// border-radius: 8px;
// background: var(--color-secondary-extra-light-gray) !important;
// font-size: 16px;
// color: var(--color-primary-black);
// line-height: 22px;
// margin-bottom: 22px;