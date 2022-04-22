import React, { FC } from 'react';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import UserFlow from 'components/common/user-flow/UserFlow';

export const JPStepThree: FC = () => {
  return (
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
      />
    </PageInfoCard>
  );
};
export default JPStepThree;
