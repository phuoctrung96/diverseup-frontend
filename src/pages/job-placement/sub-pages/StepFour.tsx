import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import Checkbox from 'components/shared/form-controls/checkbox/Checkbox';
import Button from 'components/shared/button/Button';

export const JPStepFour: FC = () => {
  const { register } = useForm<any>();
  return (
    <div className="ls-multi-form">
      <h3 className="ls-form-heading">Notifications</h3>
      <div className="check-item-field notification">
        <ul>
          <li>
            <Checkbox
              label="notifications"
              required={false}
              checkboxLabel="I would Like to receive notifications when new companies are rated"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="workplace"
              required={false}
              checkboxLabel="I would like to receive latest news related to woman in workplace"
              register={register}
            />
          </li>
          <li>
            <Checkbox
              label="job-alerts"
              required={false}
              checkboxLabel="I would like to receive job alerts"
              register={register}
            />
          </li>
        </ul>
      </div>

      <div className="action-button">
        <Button text={'Submit'} />
      </div>
    </div>
  );
};

export default JPStepFour;
