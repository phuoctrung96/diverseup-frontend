import React, { FC } from 'react';
import { Link } from 'react-router-dom';
export const StepOne: FC = () => {
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
            <input type="checkbox" name="" id="full-time" />
            <label htmlFor="full-time" className="input-label">
              Full Time
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="internship" />
            <label htmlFor="internship" className="input-label">
              Internship
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="parttime" />
            <label htmlFor="parttime" className="input-label">
              Part time
            </label>
          </li>
        </ul>
      </div>

      <div className="check-item-field">
        <h4 className="input-heading">
          Which of the following work flexibility options are you interested in?
        </h4>
        <ul>
          <li>
            <input type="checkbox" name="" id="flexible" />
            <label htmlFor="flexible" className="input-label">
              Flexible hours
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="telecommuting" />
            <label htmlFor="telecommuting" className="input-label">
              Telecommuting
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="jobsharing" />
            <label htmlFor="jobsharing" className="input-label">
              Job Sharing
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="parttime" />
            <label htmlFor="parttime" className="input-label">
              Part time
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="work" />
            <label htmlFor="work" className="input-label">
              Alernative work hour
            </label>
          </li>
        </ul>
      </div>

      <div className="check-item-field">
        <h4 className="input-heading">How much commute are you willing to do for you job?</h4>
        <ul>
          <li>
            <input type="checkbox" name="" id="25" />
            <label htmlFor="25" className="input-label">
              Less than 25mi
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="50" />
            <label htmlFor="50" className="input-label">
              25-50mi
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="100" />
            <label htmlFor="100" className="input-label">
              50-100mi
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="relocate" />
            <label htmlFor="relocate" className="input-label">
              Willing to relocate
            </label>
          </li>
        </ul>
      </div>

      <div className="check-item-field">
        <h4 className="input-heading">How much travel are you willing to do for you job?</h4>
        <ul>
          <li>
            <input type="checkbox" name="" id="None" />
            <label htmlFor="None" className="input-label">
              None
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="than" />
            <label htmlFor="than" className="input-label">
              Less than 10%
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="25" />
            <label htmlFor="25" className="input-label">
              10%-25%
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="49" />
            <label htmlFor="49" className="input-label">
              25%-50%
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="more" />
            <label htmlFor="more" className="input-label">
              More than 50%
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="international" />
            <label htmlFor="international" className="input-label">
              No international travel
            </label>
          </li>
        </ul>
      </div>
      <div className="step-buttons">
        <Link to={'/job-placement/step2'} className="btn filled-btn">
          Next Step
        </Link>
      </div>
    </div>
  );
};
export default StepOne;
