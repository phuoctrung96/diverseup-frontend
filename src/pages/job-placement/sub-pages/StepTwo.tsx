import React, { FC } from 'react';
import JobTrend from 'components/shared/job-trend/JobTrend';
import Button from 'components/shared/button/Button';

export const JPStepTwo: FC = () => {
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
            <JobTrend text={'Maternity Leave'} />
          </li>
          <li>
            <JobTrend text={'Work Remotely'} />
          </li>
          <li>
            <JobTrend text={'Flexible Hours'} />
          </li>
          <li>
            <JobTrend text={'Mentorship Programs'} />
          </li>
          <li>
            <JobTrend text={'Compensation'} />
          </li>
          <li>
            <JobTrend text={'Career Development'} />
          </li>
          <li>
            <JobTrend text={'Leadership Opportunities'} />
          </li>
          <li>
            <JobTrend text={'No Unconscious Bias'} />
          </li>
          <li>
            <JobTrend text={'Onsite Childcare'} />
          </li>
        </ul>
      </div>

      <div className="check-item-field multi-select">
        <h4 className="input-heading">What motivates you to do the best job you possibly can?</h4>
        <h5 className="input-subheading">Choose All this Applies</h5>
        <ul>
          <li>
            <JobTrend text={'Work life balance'} />
          </li>
          <li>
            <JobTrend text={'Reward performance'} />
          </li>
          <li>
            <JobTrend text={'Corporate Perks'} />
          </li>
          <li>
            <JobTrend text={'Workplace Friendship'} />
          </li>
          <li>
            <JobTrend text={'Pride in work'} />
          </li>
          <li>
            <JobTrend text={'PTO flexibility'} />
          </li>
          <li>
            <JobTrend text={'Open communication'} />
          </li>
          <li>
            <JobTrend text={'Team Work'} />
          </li>
          <li>
            <JobTrend text={'Job Security'} />
          </li>
        </ul>
      </div>

      <div className="check-item-field multi-select">
        <h4 className="input-heading">What is a deal breaker for you?</h4>
        <h5 className="input-subheading">Choose All this Applies</h5>
        <ul>
          <li>
            <JobTrend text={'Process heavy'} />
          </li>
          <li>
            <JobTrend text={'Micromanagement'} />
          </li>
          <li>
            <JobTrend text={'Lack work flexibility'} />
          </li>
          <li>
            <JobTrend text={'Too many changes'} />
          </li>
          <li>
            <JobTrend text={'Hight Stress'} />
          </li>
          <li>
            <JobTrend text={'Lack family life balance'} />
          </li>
          <li>
            <JobTrend text={'Incompetent Leadership'} />
          </li>
          <li>
            <JobTrend text={'High Stress'} />
          </li>
          <li>
            <JobTrend text={'Insurance Coverage'} />
          </li>
          <li>
            <JobTrend text={'Office Politics'} />
          </li>
        </ul>
      </div>
      <div className="step-buttons">
        <Button text={'Go Back'} classList={['white']} />
        <Button text={'Next Step'} />
      </div>
    </div>
  );
};
export default JPStepTwo;
