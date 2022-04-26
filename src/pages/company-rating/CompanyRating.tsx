import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const CompanyRatingPage: FC = () => {
  return (
    <section className="section">
      <Outlet />
    </section>
  );
};

export default CompanyRatingPage;
