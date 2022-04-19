import React, { FC } from 'react';

interface IAppLogo {
	width: number;
	height: number;
}

export const AppLogo: FC<IAppLogo> = ({
	width,
	height,
}) => {
	return (
		<div>
			<img src="/Logo.svg" alt="Logo" width={width} height={height} />
		</div>
	);
};

export default AppLogo;
