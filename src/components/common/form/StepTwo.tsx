import React, { FC } from 'react';

export const StepTwo: FC = () => {
  return (
    <div className="ls-multi-form">
      <h3 className="ls-form-heading">Tell Us about your cultural Preferences</h3>
      <p className="ls-form-subheading">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
      </p>

      <div className="check-item-field multi-select">
        <h4 className="input-heading">
          As a woman when choosing an employer, what is important to you?
        </h4>
        <h5 className="input-subheading">Choose All this Applies</h5>
        <ul>
          <li>
            <input type="checkbox" name="" id="Maternity" />
            <label htmlFor="Maternity" className="input-label">
              Maternity Leave
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Remotely" />
            <label htmlFor="Remotely" className="input-label">
              Work Remotely
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Flexible" />
            <label htmlFor="Flexible" className="input-label">
              Flexible Hours
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Mentorship" />
            <label htmlFor="Mentorship" className="input-label">
              Mentorship Programs
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Compensation" />
            <label htmlFor="Compensation" className="input-label">
              Compensation
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Development" />
            <label htmlFor="Development" className="input-label">
              Career Development
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Leadership" />
            <label htmlFor="Leadership" className="input-label">
              Leadership Opportunities
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Unconscious" />
            <label htmlFor="Unconscious" className="input-label">
              No Unconscious Bias
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Childcare" />
            <label htmlFor="Childcare" className="input-label">
              Onsite Childcare
            </label>
          </li>
        </ul>
      </div>

      <div className="check-item-field multi-select">
        <h4 className="input-heading">What motivates you to do the best job you possibly can?</h4>
        <h5 className="input-subheading">Choose All this Applies</h5>
        <ul>
          <li>
            <input type="checkbox" name="" id="balance" />
            <label htmlFor="balance" className="input-label">
              Work life balance
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Reward" />
            <label htmlFor="Reward" className="input-label">
              Reward performance
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Corporate" />
            <label htmlFor="Corporate" className="input-label">
              Corporate Perks
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Friendship" />
            <label htmlFor="Friendship" className="input-label">
              Workplace Friendship
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Pride" />
            <label htmlFor="Pride" className="input-label">
              Pride in work
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="PTO" />
            <label htmlFor="PTO" className="input-label">
              PTO flexibility
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Open" />
            <label htmlFor="Open" className="input-label">
              Open communication
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Team" />
            <label htmlFor="Team" className="input-label">
              Team Work
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Security" />
            <label htmlFor="Security" className="input-label">
              Job Security
            </label>
          </li>
        </ul>
      </div>

      <div className="check-item-field multi-select">
        <h4 className="input-heading">What is a deal breaker for you?</h4>
        <h5 className="input-subheading">Choose All this Applies</h5>
        <ul>
          <li>
            <input type="checkbox" name="" id="heavy" />
            <label htmlFor="heavy" className="input-label">
              Process heavy
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Micromanagement" />
            <label htmlFor="Micromanagement" className="input-label">
              Micromanagement
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Lack" />
            <label htmlFor="Lack" className="input-label">
              Lack work flexibility
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="changes" />
            <label htmlFor="changes" className="input-label">
              Too many changes
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Stress" />
            <label htmlFor="Stress" className="input-label">
              Hight Stress
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="balance" />
            <label htmlFor="balance" className="input-label">
              Lack family life balance
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Incompetent" />
            <label htmlFor="Incompetent" className="input-label">
              Incompetent Leadership
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="High1" />
            <label htmlFor="High1" className="input-label">
              High Stress
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Insurance" />
            <label htmlFor="Insurance" className="input-label">
              Insurance Coverage
            </label>
          </li>
          <li>
            <input type="checkbox" name="" id="Politics" />
            <label htmlFor="Politics" className="input-label">
              Office Politics
            </label>
          </li>
        </ul>
      </div>
      <div className="step-buttons">
        <button className="btn outline-btn">Go Back</button>
        <button className="btn filled-btn">Next Step</button>
      </div>
    </div>
  );
};
export default StepTwo;
