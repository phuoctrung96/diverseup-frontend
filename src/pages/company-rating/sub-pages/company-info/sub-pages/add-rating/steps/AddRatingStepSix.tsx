import React, { FC } from 'react';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import UserFlow from 'components/common/user-flow/UserFlow';

export const AddRatingStepSix: FC = () => {
  return (
    <PageInfoCard classList={['center']}>
      <UserFlow
        loginFirst={false}
        title={'Sign in or Sign up'}
        subTitle={'Please Sign in or Sign up to submit your rating.'}
        note={
          'This is only way we can verify that you are a real person. Your review will remain 100% anonymous.'
        }
        socialButtonsLabel={true}
      />
    </PageInfoCard>
  );
};

export default AddRatingStepSix;
