import React, { FC, useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

interface IRadioButtonGroup {
	label: Path<any>;
	register: UseFormRegister<any>;
	radioButtons: any[];
}

export const RadioButtonGroup: FC<IRadioButtonGroup> = ({
	 label,
	 register,
	 radioButtons
}) => {
	const [selectedInput, setSelectedInput] = useState("");
	const { name } = register(label);

	const handleChange = (e: any) => {
		setSelectedInput(e.target.value);
	};

  return (
		<div className="radio-buttons-group">
			{
				radioButtons.map((buttonInfo, index) => {
					return (
						<div className={`radio-button ${selectedInput === buttonInfo.value && 'checked'}`} key={index}>
							<label
								className="radio-button--label"
								htmlFor={`${name}-${index}`}>
									{ buttonInfo.label }
									<input
										type="radio"
										value={buttonInfo.value}
										className="radio-input"
										id={`${name}-${index}`}
										checked={selectedInput === buttonInfo.value}
										{...register(label)}
										name={name}
										onChange={handleChange}
									/>
							</label>
						</div>
					)
				})
			}
		</div>
  );
};

export default RadioButtonGroup;