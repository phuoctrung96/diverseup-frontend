import React, { FC } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import { Link } from 'react-router-dom';
export const JobPlacementPage: FC = () => {
  return (
    <>
      <PageTitle title={'Job Placement'} />
      <Link to={'/job-placement/step1'}>Click here</Link>
    </>
  );
};

export default JobPlacementPage;
