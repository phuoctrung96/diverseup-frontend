import { ROUTE_JOB_PLACEMENT } from 'app-constants';
import Button from 'components/shared/button/Button';
import Checkbox from 'components/shared/form-controls/checkbox/Checkbox';
import React, { FC, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGlobalJobPlacementContext } from '../../../contexts/GlobalJobPlacementContext';
import {
  JOB_OPPORTUNITY_TYPE,
  SELECTED_COMMUTE_OPTIONS,
  SELECTED_TRAVEL_OPTIONS,
  SELECTED_WORK_FLEXIBILITY,
} from './data/Step.data';

export const JPStepOne: FC = () => {
  const { register } = useForm<any>();
  const {
    store: { jobPlacementForm, steps },
    setJobPlacementForm,
    handleClickStep,
  } = useGlobalJobPlacementContext();

  const navigate = useNavigate();
  const disabledButton = useMemo(() => {
    return (
      jobPlacementForm.selected_job_opportunity_type.length === 0 ||
      jobPlacementForm.selected_work_flexibility.length === 0 ||
      jobPlacementForm.selected_commute_options.length === 0 ||
      jobPlacementForm.selected_travel_options.length === 0
    );
  }, [
    jobPlacementForm.selected_job_opportunity_type,
    jobPlacementForm.selected_work_flexibility.length,
    jobPlacementForm.selected_commute_options.length,
    jobPlacementForm.selected_travel_options.length,
  ]);

  const handleOnChangeCheckBoxSelectedJob = (item, value: boolean) => {
    if (value) {
      setJobPlacementForm({
        selected_job_opportunity_type: [
          ...jobPlacementForm.selected_job_opportunity_type,
          item.title,
        ],
      });
    } else {
      const filterSelected = jobPlacementForm.selected_job_opportunity_type.filter(
        (typFilter: any) => typFilter !== item.title
      );
      setJobPlacementForm({
        selected_job_opportunity_type: filterSelected,
      });
    }
  };

  const handleOnChangeCheckBoxFlexibility = (item, value: boolean) => {
    if (value) {
      setJobPlacementForm({
        selected_work_flexibility: [...jobPlacementForm.selected_work_flexibility, item.title],
      });
    } else {
      const filterSelected = jobPlacementForm.selected_work_flexibility.filter(
        (typFilter: any) => typFilter !== item.title
      );
      setJobPlacementForm({
        selected_work_flexibility: filterSelected,
      });
    }
  };

  const handleOnChangeCheckBoxCommuteOption = (item, value: boolean) => {
    if (value) {
      setJobPlacementForm({
        selected_commute_options: [...jobPlacementForm.selected_commute_options, item.title],
      });
    } else {
      const filterSelected = jobPlacementForm.selected_commute_options.filter(
        (typFilter: any) => typFilter !== item.title
      );
      setJobPlacementForm({
        selected_commute_options: filterSelected,
      });
    }
  };

  const handleOnChangeCheckBoxTravelOption = (item, value: boolean) => {
    if (value) {
      setJobPlacementForm({
        selected_travel_options: [...jobPlacementForm.selected_travel_options, item.title],
      });
    } else {
      const filterSelected = jobPlacementForm.selected_travel_options.filter(
        (typFilter: any) => typFilter !== item.title
      );
      setJobPlacementForm({
        selected_travel_options: filterSelected,
      });
    }
  };

  const handleClickNext = () => {
    if (disabledButton) return;

    const filterStep = steps.find((item) => item.id === 1);
    handleClickStep(filterStep, () => {
      navigate(`/${ROUTE_JOB_PLACEMENT}/step2`);
    });
  };

  return (
    <div className="ls-multi-form">
      <h3 className="ls-form-heading">Tell Us about your Job Preferences</h3>
      <p className="ls-form-subheading">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </p>

      <div className="check-item-field">
        <h4 className="input-heading">What Kind of job opportunity are you looking for?</h4>
        <ul>
          {JOB_OPPORTUNITY_TYPE.map((item) => (
            <li key={item.id}>
              <Checkbox
                label={item.label}
                required={item.required}
                checkboxLabel={item.title}
                register={register}
                onChange={(value: boolean) => handleOnChangeCheckBoxSelectedJob(item, value)}
                checked={jobPlacementForm.selected_job_opportunity_type.includes(item.title)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="check-item-field">
        <h4 className="input-heading">
          Which of the following work flexibility options are you interested in?
        </h4>
        <ul>
          {SELECTED_WORK_FLEXIBILITY.map((item) => (
            <li key={item.id}>
              <Checkbox
                label={item.label}
                required={item.required}
                checkboxLabel={item.title}
                register={register}
                onChange={(value: boolean) => handleOnChangeCheckBoxFlexibility(item, value)}
                checked={jobPlacementForm.selected_work_flexibility.includes(item.title)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="check-item-field">
        <h4 className="input-heading">How much commute are you willing to do for you job?</h4>
        <ul>
          {SELECTED_COMMUTE_OPTIONS.map((item) => (
            <li key={item.id}>
              <Checkbox
                label={item.label}
                required={item.required}
                checkboxLabel={item.title}
                register={register}
                onChange={(value: boolean) => handleOnChangeCheckBoxCommuteOption(item, value)}
                checked={jobPlacementForm.selected_commute_options.includes(item.title)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="check-item-field">
        <h4 className="input-heading">How much travel are you willing to do for you job?</h4>
        <ul>
          {SELECTED_TRAVEL_OPTIONS.map((item) => (
            <li key={item.id}>
              <Checkbox
                label={item.label}
                required={item.required}
                checkboxLabel={item.title}
                register={register}
                onChange={(value: boolean) => handleOnChangeCheckBoxTravelOption(item, value)}
                checked={jobPlacementForm.selected_travel_options.includes(item.title)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="step-buttons">
        <Button text={'Next Step'} onClick={handleClickNext} disabled={disabledButton} />
      </div>
    </div>
  );
};
export default JPStepOne;
