import React, { FC } from 'react';
import styles from './Employer.module.scss';

export const EmployerPage: FC = () => {
	return (
		<div className={styles.bgImage}>
			<div className={styles.employerWrapper}>
				<div className={styles.employerWrapperContent}>
					<h1 className={styles.title}>Unlock your <span className={styles.titleColored}>Free Employer Account</span></h1>
					<div className={styles.subText}>Contact us via Phone call or E-mail</div>
					<div className={styles.contactsInfo}>
						<a href="tel:650-397-1446" className={styles.infoPhone}>650-397-1446</a>
						<a href="mailto:info@diverseup.com" className={styles.infoEmail}>info@diverseup.com</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EmployerPage;
