import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

export const BREADCRUMBS_TYPES = {
  COMPANY: 'COMPANY',
  BLOG: 'BLOG',
};

type DynamicBreadcrumbContext = {
  setDynamicBreadcrumb: (breadcrumbType: string, breadcrumbName?: string) => void;
  store: any;
};

/* eslint-disable */
const initialState: DynamicBreadcrumbContext = {
  setDynamicBreadcrumb: () => {},
  store: {},
};

const DynamicBreadcrumbContext = createContext(initialState);
export const useDynamicBreadcrumbContext = () => useContext(DynamicBreadcrumbContext);

export const DynamicBreadcrumb: FC<{ children: ReactNode }> = ({ children }) => {
  const [store, setStore] = useState({});

  const setDynamicBreadcrumb = (breadcrumbType: string, props?: any) => {
    setStore({
      ...store,
      breadcrumbType,
      props,
    });
  };

  return (
    <DynamicBreadcrumbContext.Provider value={{ store, setDynamicBreadcrumb }}>
      {children}
    </DynamicBreadcrumbContext.Provider>
  );
};
/* eslint-enable */
