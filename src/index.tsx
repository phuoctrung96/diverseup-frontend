import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalModal } from 'contexts/GlobalModalContext';
import { DynamicBreadcrumb } from 'contexts/DynamicBreadcrumbContext';
import { BlogContextContainer } from 'contexts/BlogContext';
import { GlobalJobPlacement } from 'contexts/GlobalJobPlacementContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <DynamicBreadcrumb>
      <GlobalJobPlacement>
        <GlobalModal>
          <BlogContextContainer>
            <App />
          </BlogContextContainer>
        </GlobalModal>
      </GlobalJobPlacement>
    </DynamicBreadcrumb>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
