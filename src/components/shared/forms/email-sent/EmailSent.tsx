import React, { FC, useState } from 'react';
import style from 'styles/modules/Auth.module.scss';
import Button from 'components/shared/button/Button';

export const EmailSent: FC = () => {
  const [canResend, setCanResend] = useState<boolean>(true);

  return (
    <>
      <h2 className={style.title}>{canResend ? 'Email sent!' : 'Email resent!'}</h2>
      <span className={style.text}>
        Check your inbox, we’ve sent you the link to reset your password. Please click on that link
        to change your password.
      </span>
      {canResend && (
        <div className={style.variant}>
          <span>Didn’t recieve the link?</span>
          <Button text="Resend" classList={['linkBtn']} onClick={() => setCanResend(false)} />
        </div>
      )}
    </>
  );
};

export default EmailSent;
