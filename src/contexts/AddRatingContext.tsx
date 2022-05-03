import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { IAddRatingRequest } from 'api/add-rating';
import { ROUTE_COMPANY_RATING } from 'app-constants';
import { useNavigate, useParams } from 'react-router-dom';
import AuthHelper from 'utils/AuthHelpers';

interface IStepModel {
  id: number;
  name: string;
  route: string;
  isActivated: boolean;
}

type AddRatingContext = {
  setAddRatingForm: (body: IAddRatingRequest, resolve?: () => void) => void;
  setSteps: (body: IStepModel[], resolve?: () => void) => void;
  getStepById: (id: number) => IStepModel | undefined;
  handleClickStep: (step: IStepModel, resolve?: () => void) => void;
  goNext: (data?: IAddRatingRequest) => void;
  goBack: () => void;
  store: {
    addRatingForm: IAddRatingRequest;
    steps: {
      id: number;
      name: string;
      route: string;
      isActivated: boolean;
    }[];
  };
};

const getStepUrl = (slug: string, step: number) => {
  return `/${ROUTE_COMPANY_RATING}/${slug}/add-rating${step === 1 ? '' : `/step${step}`}`;
};

/* eslint-disable */
const initialState: AddRatingContext = {
  setAddRatingForm: () => {},
  setSteps: () => {},
  handleClickStep: () => {},
  getStepById: (step: number) => undefined,
  goNext: () => {},
  goBack: () => {},
  store: {
    addRatingForm: {
      business_slug: '',
      location: '',
      gender: '',
      employer_status: '',
      last_year_at_employer: 2022,
      employment_status: '',
      job_function: '',
      job_title: '',
      rate_sponsorship_mentorship_opportunity: 0,
      rate_equal_treatment_of_men_and_women: 0,
      rate_equal_pay_for_equal_performance: 0,
      rate_equal_opportunities_to_move_up_organization: 0,
      paid_maternity_weeks: null,
      unpaid_maternity_weeks: null,
      motherhood_support_options: [],
      work_flexibility_options: [],
      like_most_about_company_options: [],
      like_least_about_company_options: [],
      how_likely_to_recommend_company: 0,
      other_notes_about_company: '',
      user_status: '',
      user_age: '',
      user_ethnicity: '',
    },
    steps: [],
  },
};

export const AddRatingContext = createContext(initialState);
export const useAddRatingContext = () => useContext(AddRatingContext);

export const GlobalAddRating: FC<{ children: ReactNode }> = ({ children }) => {
  const [store, setStore] = useState(initialState.store);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const navigate = useNavigate();

  const { slug } = useParams();

  useEffect(() => {
    window.addEventListener('beforeunload', handleReloadPage);
    return () => {
      window.removeEventListener('beforeunload', handleReloadPage);
    };
  }, []);

  const handleReloadPage = (e) => {
    e.preventDefault();
    const message = 'Are you sure you want to leave? All provided data will be lost.';
    e.returnValue = message;
    return message;
  };

  useEffect(() => {
    setStore({
      ...store,
      addRatingForm: {
        ...store.addRatingForm,
        business_slug: slug || '',
      },
      steps: [
        { id: 0, name: 'Step 1', route: getStepUrl(slug || '', 1), isActivated: false },
        { id: 1, name: 'Step 2', route: getStepUrl(slug || '', 2), isActivated: false },
        { id: 2, name: 'Step 3', route: getStepUrl(slug || '', 3), isActivated: false },
        { id: 3, name: 'Step 4', route: getStepUrl(slug || '', 4), isActivated: false },
        { id: 4, name: 'Step 5', route: getStepUrl(slug || '', 5), isActivated: false },
      ],
    });
  }, [slug]);

  const setAddRatingForm = (body: IAddRatingRequest, resolve?: () => void) => {
    setStore({
      ...store,
      addRatingForm: {
        ...store.addRatingForm,
        ...body,
      },
    });
    resolve?.();
  };

  const setSteps = (steps: IStepModel[], resolve?: () => void) => {
    setStore({
      ...store,
      steps,
    });
    resolve?.();
  };

  const getStepById = (id: number): IStepModel => {
    return store.steps.find((item) => item.id === id) || store.steps[0];
  };

  const goNext = (data?: IAddRatingRequest) => {
    const newSteps = store.steps.map((step) => {
      return {
        ...step,
        isActivated: step.id <= currentStep,
      };
    });

    if (Object.keys(data || {}).length) {
      setStore({
        addRatingForm: {
          ...store.addRatingForm,
          ...data,
        },
        steps: newSteps,
      });
    } else {
      setSteps(newSteps);
    }
    setCurrentStep(currentStep + 1);
  };

  const goBack = () => {
    setStore({
      ...store,
      steps: store.steps.map((step) => {
        return {
          ...step,
          isActivated: currentStep > step.id + 1,
        };
      }),
    });

    setCurrentStep(currentStep - 1);
  };

  const handleClickStep = (step: IStepModel, resolve?: () => void) => {
    const newStep = store.steps.map((item: IStepModel) => {
      item.isActivated = step.id >= item.id;

      return item;
    });
    setSteps(newStep);
    resolve?.();
  };

  useEffect(() => {
    const nextStep = store.steps.find((step) => step.id === currentStep);

    if (nextStep) {
      navigate(nextStep.route);
    }
  }, [currentStep]);

  // useEffect(() => {
  //   if (accessToken) {
  //     const newSteps = store.steps.filter((item) => {
  //       if (item.name === 'Step 3') return null;
  //       if (item.name === 'Step 4') item.name = 'Step 3';
  //       if (item.name === 'Step 5') item.name = 'Step 4';
  //       return item;
  //     });
  //     setSteps(newSteps);
  //   }
  // }, [accessToken]);

  return (
    <AddRatingContext.Provider
      value={{
        store,
        setAddRatingForm,
        setSteps,
        handleClickStep,
        getStepById,
        goNext,
        goBack,
      }}
    >
      {children}
    </AddRatingContext.Provider>
  );
};
/* eslint-enable */
