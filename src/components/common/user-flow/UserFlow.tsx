import React, { FC, useState } from 'react';
import ForgotForm from 'components/shared/forms/forgot-form/ForgotForm';
import EmailSent from 'components/shared/forms/email-sent/EmailSent';
import authStyles from 'styles/modules/Auth.module.scss';
import SocialSignInButtons from 'components/shared/forms/social-sign-in-buttons/SocialSignInButtons';
import SignInForm from 'components/shared/forms/sign-in-form/SignInForm';
import SignUpForm from 'components/shared/forms/sign-up-form/SignUpForm';
import PageTitle from 'components/common/page-title/PageTitle';

interface IUserFlow {
  loginFirst: boolean;
  title: string;
  subTitle: string;
  note: string;
  socialButtonsLabel?: boolean;
}

export const UserFlow: FC<IUserFlow> = ({
  loginFirst,
  title,
  subTitle,
  note,
  socialButtonsLabel,
}) => {
  const [isLogin, setIsLogin] = useState<boolean>(loginFirst);
  const [showForgot, setShowForgot] = useState<boolean>(false);
  const [isEmailSend, setIsEmailSend] = useState<boolean>(false);

  const handleEmailSent = () => {
    setIsEmailSend(true);
    setShowForgot(false);
  };

  return (
    <>
      {!showForgot && !isEmailSend && <PageTitle type={'card'} title={title} subTitle={subTitle} />}
      <div className="info-card-content center short-form">
        {showForgot ? (
          <ForgotForm onSend={handleEmailSent} />
        ) : isEmailSend ? (
          <EmailSent />
        ) : (
          <>
            <div className={authStyles.cardFlexWrapper}>
              <span className={authStyles.cardText}>{note}</span>
              {socialButtonsLabel && (
                <span className={`${authStyles.cardText} ${authStyles.bold}`}>Sign in with:</span>
              )}
            </div>
            <SocialSignInButtons classList={socialButtonsLabel ? [] : ['top-margin']} />
            {isLogin ? (
              <SignInForm
                switchOnSignUpForm={() => setIsLogin(!isLogin)}
                switchOnForgotForm={() => setShowForgot(!showForgot)}
              />
            ) : (
              <>
                <div className={authStyles.cardFlexWrapper}>
                  <span className={authStyles.cardText}>OR</span>
                  <span className={`${authStyles.cardText} ${authStyles.bold}`}>
                    Sign up using your E-mail:
                  </span>
                </div>
                <SignUpForm
                  showSubscribeCheckbox={false}
                  switchOnLogin={() => setIsLogin(!isLogin)}
                />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default UserFlow;
