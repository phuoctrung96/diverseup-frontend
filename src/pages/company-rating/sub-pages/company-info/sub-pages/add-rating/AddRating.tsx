import React, { FC, useEffect } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import StepperComponent from 'components/shared/stepper/Stepper';
import { AddRatingContext, GlobalAddRating } from 'contexts/AddRatingContext';
import { ROUTE_ADD_RATING, ROUTE_COMPANY_RATING } from 'app-constants';
import { BREADCRUMBS_TYPES, useDynamicBreadcrumbContext } from 'contexts/DynamicBreadcrumbContext';
import { businessDetailApi } from 'api';

export const AddRating: FC = () => {
  const renderStepperComponent = () => {
    return (
      <AddRatingContext.Consumer>
        {(value) => {
          return (
            <StepperComponent
              steps={value.store.steps}
              onClick={(step) => value.handleClickStep(step)}
              disabled
            />
          );
        }}
      </AddRatingContext.Consumer>
    );
  };

  const {
    setDynamicBreadcrumb,
    store: { props },
  } = useDynamicBreadcrumbContext();
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!props) {
      setDynamicBreadcrumb(BREADCRUMBS_TYPES.COMPANY, '');
      businessDetailApi({ slug: slug || '' }).then((res) => {
        setDynamicBreadcrumb(BREADCRUMBS_TYPES.COMPANY, res.name);
      });
    }
  }, [location]);

  useEffect(() => {
    navigate(`/${ROUTE_COMPANY_RATING}/${slug}/${ROUTE_ADD_RATING}`);
  }, [slug]);

  return (
    <GlobalAddRating>
      <PageTitle
        title={'Rate your Workplace'}
        subTitle={'All ratings will remain 100% anonymous'}
      />
      {renderStepperComponent()}
      <div className="section__block no-top-padding">
        <Outlet />
      </div>
    </GlobalAddRating>
  );
};

export default AddRating;
