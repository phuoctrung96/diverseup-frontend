import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const StepFour: FC = () => {
  return (
    <div className="ls-multi-form">
      <h3 className="ls-form-heading">Notifications</h3>
      <div className="check-item-field notification">
        <ul>
          <li>
            <input type="checkbox" name="" id="full-time" />
            <label htmlFor="full-time" className="input-label">
              I would Like to receive notifications when new companies are rated
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="internship" />
            <label htmlFor="internship" className="input-label">
              I would like to receive latest news related to woman in workplace
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="parttime" />
            <label htmlFor="parttime" className="input-label">
              I would like to receive job alerts
            </label>
          </li>
        </ul>
      </div>

      <div className="action-button">
        <Link to={'/job-placement/step5'}>Submit</Link>
      </div>
    </div>
  );
};

export default StepFour;
