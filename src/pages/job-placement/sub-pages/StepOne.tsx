import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import Checkbox from 'components/shared/form-controls/checkbox/Checkbox';
import Button from 'components/shared/button/Button';

export const JPStepOne: FC = () => {
  const { register } = useForm<any>();
  return (
    <div className="ls-multi-form">
      <h3 className="ls-form-heading">Tell Us about your Job Preferences</h3>
      <p className="ls-form-subheading">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </p>

      <div className="check-item-field">
        <h4 className="input-heading">What Kind of job opportunity are you looking for?</h4>
        <ul>
          <li>
            <Checkbox
              label="full-time"
              required={false}
              checkboxLabel="Full Time"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="intership"
              required={false}
              checkboxLabel="Internship"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="part-time"
              required={false}
              checkboxLabel="Part time"
              register={register}
            />
          </li>
        </ul>
      </div>

      <div className="check-item-field">
        <h4 className="input-heading">
          Which of the following work flexibility options are you interested in?
        </h4>
        <ul>
          <li>
            <Checkbox
              label="flexible-hours"
              required={false}
              checkboxLabel="Flexible hours"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="telecommuting"
              required={false}
              checkboxLabel="Telecommuting"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="job-sharing"
              required={false}
              checkboxLabel="Job Sharing"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="part-time"
              required={false}
              checkboxLabel="Part time"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="alternative-work-hour"
              required={false}
              checkboxLabel="Alernative work hour"
              register={register}
            />
          </li>
        </ul>
      </div>

      <div className="check-item-field">
        <h4 className="input-heading">How much commute are you willing to do for you job?</h4>
        <ul>
          <li>
            <Checkbox
              label="25mi"
              required={false}
              checkboxLabel="Less than 25mi"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="25-50mi"
              required={false}
              checkboxLabel="25-50mi"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="50-100mi"
              required={false}
              checkboxLabel="50-100mi"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="relocate"
              required={false}
              checkboxLabel="Willing to relocate"
              register={register}
            />
          </li>
        </ul>
      </div>

      <div className="check-item-field">
        <h4 className="input-heading">How much travel are you willing to do for you job?</h4>
        <ul>
          <li>
            <Checkbox label="none" required={false} checkboxLabel="None" register={register} />
          </li>
          <li>
            <Checkbox
              label="10%"
              required={false}
              checkboxLabel="Less than 10%"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="10%-25%"
              required={false}
              checkboxLabel="10%-25%"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="25%-50%"
              required={false}
              checkboxLabel="25%-50%"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="50%"
              required={false}
              checkboxLabel="More than 50%"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="international%"
              required={false}
              checkboxLabel="No international travel"
              register={register}
            />
          </li>
        </ul>
      </div>
      <div className="step-buttons">
        <Button text={'Next Step'} />
      </div>
    </div>
  );
};
export default JPStepOne;
