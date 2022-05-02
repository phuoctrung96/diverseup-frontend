import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import blogBanner from '../assets/images/blog/blog-banner.jpg';

type BlogContextType = {
  setBlogPageBannerImage: (url: string) => void;
  bannerImage: string;
};

/* eslint-disable */
const initialState: BlogContextType = {
  setBlogPageBannerImage: () => {},
  bannerImage: '',
};

export const BlogContext = createContext(initialState);
export const useBlogContext = () => useContext(BlogContext);

export const BlogContextContainer: FC<{ children: ReactNode }> = ({ children }) => {
  const [bannerImage, setBannerImage] = useState(blogBanner);

  const setBlogPageBannerImage = (url: string) => {
    setBannerImage(url);
  };

  return (
    <BlogContext.Provider value={{ bannerImage, setBlogPageBannerImage }}>
      {children}
    </BlogContext.Provider>
  );
};
/* eslint-enable */
