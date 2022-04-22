import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const BlogPage: FC = () => {
  return (
    <section className={'section'}>
      <div className="section__block no-top-padding">
        <Outlet />
      </div>
    </section>
  );
};

export default BlogPage;
