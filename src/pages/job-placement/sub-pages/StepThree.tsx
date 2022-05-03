import UserFlow from 'components/common/user-flow/UserFlow';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import { useGlobalJobPlacementContext } from 'contexts/GlobalJobPlacementContext';
import React, { FC, useEffect, useState } from 'react';
import AuthHelper from '../../../utils/AuthHelpers';
import JPStepFour from './StepFour';

export const JPStepThree: FC = () => {
  const {
    store: { steps },
    handleClickStep,
  } = useGlobalJobPlacementContext();
  const accessToken = AuthHelper.getAccessToken();
  const [isLogin, setIsLogin] = useState(accessToken);

  const handleOnSignInClick = () => {
    setIsLogin(true);
  };

  useEffect(() => {
    const filterStep = steps.find((item) => item.id === 2);
    handleClickStep(filterStep);
  }, []);

  return (
    <>
      {isLogin ? (
        <JPStepFour />
      ) : (
        <PageInfoCard classList={['center']}>
          <UserFlow
            loginFirst={true}
            title={'Sign in'}
            subTitle={
              'Before saving your job placement info please login. We do not collect any personal information such as name, address, etc. which could reveal your identify.'
            }
            note={
              'Please fill in all the fields below to sign in or choose the option to sign with any of social networks below.'
            }
            onSignInClick={handleOnSignInClick}
          />
        </PageInfoCard>
      )}
    </>
  );
};
export default JPStepThree;
