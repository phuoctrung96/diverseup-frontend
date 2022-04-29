import Button from 'components/shared/button/Button';
import Checkbox from 'components/shared/form-controls/checkbox/Checkbox';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGlobalJobPlacementContext } from '../JobPlacement';
import {
  JOB_OPPORTUNITY_TYPE,
  SELECTED_COMMUTE_OPTIONS,
  SELECTED_TRAVEL_OPTIONS,
  SELECTED_WORK_FLEXIBILITY,
} from './data/Step.data';

export const JPStepOne: FC = () => {
  const { register } = useForm<any>();
  const {
    store: { jobPlacementForm },
    setJobPlacementForm,
    setJobPlacementStep,
  } = useGlobalJobPlacementContext();

  const navigate = useNavigate();
  const [selectedJobOpportunityType, setSelectedJobOpportunityType] = useState<string[]>([]);
  const [selectedWorkFlexibility, setSelectedWorkFlexibility] = useState<string[]>([]);
  const [selectedCommuteOptions, setSelectedCommuteOptions] = useState<string[]>([]);
  const [selectedTravelOptions, setSelectedTravelOptions] = useState<string[]>([]);

  const handleOnChangeCheckBoxSelectedJob = (item, value: boolean) => {
    if (value) {
      setSelectedJobOpportunityType([...selectedJobOpportunityType, item.title]);
    } else {
      const filterSelected = selectedJobOpportunityType.filter(
        (typFilter: any) => typFilter.id !== item.id
      );
      setSelectedJobOpportunityType(filterSelected);
    }
    setJobPlacementForm({
      selected_job_opportunity_type: [...selectedJobOpportunityType, item.title],
    });
  };

  const handleOnChangeCheckBoxFlexibility = (item, value: boolean) => {
    if (value) {
      setSelectedWorkFlexibility([...selectedWorkFlexibility, item.title]);
    } else {
      const filterSelected = selectedWorkFlexibility.filter(
        (typFilter: any) => typFilter.id !== item.id
      );
      setSelectedWorkFlexibility(filterSelected);
    }
    setJobPlacementForm({
      selected_work_flexibility: [...selectedWorkFlexibility, item.title],
    });
  };

  const handleOnChangeCheckBoxCommuteOption = (item, value: boolean) => {
    if (value) {
      setSelectedCommuteOptions([...selectedCommuteOptions, item.title]);
    } else {
      const filterSelected = selectedCommuteOptions.filter(
        (typFilter: any) => typFilter.id !== item.id
      );
      setSelectedCommuteOptions(filterSelected);
    }
    setJobPlacementForm({
      selected_commute_options: [...selectedCommuteOptions, item.title],
    });
  };

  const handleOnChangeCheckBoxTravelOption = (item, value: boolean) => {
    if (value) {
      setSelectedTravelOptions([...selectedTravelOptions, item.title]);
    } else {
      const filterSelected = selectedTravelOptions.filter(
        (typFilter: any) => typFilter.id !== item.id
      );
      setSelectedTravelOptions(filterSelected);
    }
    setJobPlacementForm({
      selected_travel_options: [...selectedTravelOptions, item.title],
    });
  };

  const handleClickNext = () => {
    setJobPlacementStep(2, () => {
      navigate('/job-placement/step2');
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
        <Button text={'Next Step'} onClick={handleClickNext} />
      </div>
    </div>
  );
};
export default JPStepOne;
