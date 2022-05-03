import React, { FC, useEffect, useState } from 'react';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import PageTitle from 'components/common/page-title/PageTitle';
import Select from 'components/shared/form-controls/select/Select';
import Button from 'components/shared/button/Button';
import { useForm } from 'react-hook-form';
import { useAddRatingContext } from 'contexts/AddRatingContext';
import {
  AGE_OPTIONS,
  USER_ETHNICITY_OPTIONS,
  USER_STATUS_OPTIONS,
} from 'pages/company-rating/sub-pages/company-info/sub-pages/add-rating/data/add-rating-step-five.data';
import AuthHelpers from 'utils/AuthHelpers';
import { MODAL_TYPES, useGlobalModalContext } from 'contexts/GlobalModalContext';
import { submitAddRatingApi } from 'api/add-rating';
import { removeEmptyValues } from 'utils/object.utils';
import { useParams } from 'react-router-dom';
import { useDynamicBreadcrumbContext } from 'contexts/DynamicBreadcrumbContext';
import authHelpers from 'utils/AuthHelpers';

interface IAddRatingStepFiveForm {
  user_status: string;
  user_age: string;
  user_ethnicity: string;
}

export const AddRatingStepFive: FC = () => {
  const {
    store: { addRatingForm },
    setAddRatingForm,
    goBack,
  } = useAddRatingContext();

  const { showModal } = useGlobalModalContext();

  const { control, watch, getValues, handleSubmit } = useForm<IAddRatingStepFiveForm>({
    defaultValues: {
      user_status: addRatingForm.user_status || '',
      user_age: addRatingForm.user_age || '',
      user_ethnicity: addRatingForm.user_ethnicity || '',
    },
  });

  const [user, setUser] = useState(AuthHelpers.getUserInfo());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { slug } = useParams();
  const { store } = useDynamicBreadcrumbContext();

  useEffect(() => {
    setAddRatingForm({
      ...addRatingForm,
      user_age: getValues('user_age'),
      user_status: getValues('user_status'),
      user_ethnicity: getValues('user_ethnicity'),
    });
  }, []);

  const handleSubmitAddRating = () => {
    if (!user) {
      showModal(MODAL_TYPES.SIGN_IN_MODAL);
    } else {
      setIsLoading(true);
      submitAddRatingApi(removeEmptyValues(addRatingForm))
        .then(() => {
          setIsLoading(false);
          showModal(MODAL_TYPES.ADD_RATING_FINISH_MODAL, {
            slug,
            companyName: store.props,
          });
        })
        .catch((error) => {
          setIsLoading(false);
          if (error.status === 401) {
            authHelpers.clearStorage();
            showModal(MODAL_TYPES.SIGN_IN_MODAL);
          }
        });
    }
  };

  useEffect(() => {
    const subscription = watch((formValue) => {
      setAddRatingForm({
        ...addRatingForm,
        user_age: formValue['user_age'] || '',
        user_status: formValue['user_status'] || '',
        user_ethnicity: formValue['user_ethnicity'] || '',
      });
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    setUser(AuthHelpers.getUserInfo());
  }, [AuthHelpers.getUserInfo()]);

  return (
    <PageInfoCard classList={['center', 'no-margin']}>
      <PageTitle
        type={'card'}
        title={'Just a little bit more about you'}
        subTitle={
          'Please answer the following questions (Optional). Please note that we do NOT display or disclose this information. We only collect this data for our own internal research'
        }
      />

      <div className="info-card-content center">
        <form className="form vertical">
          <Select
            options={USER_STATUS_OPTIONS}
            control={control}
            name={'user_status'}
            selectLabel={'Status:'}
            selectPlaceholder={'Select your status'}
          />
          <Select
            options={AGE_OPTIONS}
            control={control}
            name={'user_age'}
            selectLabel={'Age:'}
            selectPlaceholder={'Select your age'}
          />
          <Select
            options={USER_ETHNICITY_OPTIONS}
            control={control}
            name={'user_ethnicity'}
            selectLabel={'Ethnicity:'}
            selectPlaceholder={'Select your ethnicity'}
          />
        </form>
        <div className="buttons-group">
          <Button text={'Go Back'} classList={['white']} onClick={goBack} />
          <Button
            text={'Submit'}
            disabled={isLoading}
            onClick={handleSubmit(() => handleSubmitAddRating())}
          />
        </div>
      </div>
    </PageInfoCard>
  );
};

export default AddRatingStepFive;
