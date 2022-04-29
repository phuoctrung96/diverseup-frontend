import { submitJobPlacement } from 'api/job-placement';
import { ROUTE_JOB_PLACEMENT } from 'app-constants';
import Button from 'components/shared/button/Button';
import Checkbox from 'components/shared/form-controls/checkbox/Checkbox';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGlobalJobPlacementContext } from '../GlobalJobPlacement';

export const JPStepFour: FC = () => {
  const { register } = useForm<any>();
  const {
    store: { jobPlacementForm },
    setJobPlacementForm,
    setJobPlacementStep,
  } = useGlobalJobPlacementContext();
  const navigate = useNavigate();

  const handleOnClickCheckBox = (type, value) => {
    setJobPlacementForm({
      [type]: value,
    });
  };

  const handleSubmitForm = () => {
    submitJobPlacement(jobPlacementForm).then((res: any) => {
      setJobPlacementStep(5, () => {
        navigate(`/${ROUTE_JOB_PLACEMENT}/step5`);
      });
    });
  };

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
              checked={jobPlacementForm.notification_new_companies_are_rated}
              onChange={(value) =>
                handleOnClickCheckBox('notification_new_companies_are_rated', value)
              }
            />
          </li>
          <li>
            <Checkbox
              label="workplace"
              required={false}
              checkboxLabel="I would like to receive latest news related to woman in workplace"
              register={register}
              checked={jobPlacementForm.notification_latest_women_news}
              onChange={(value) => handleOnClickCheckBox('notification_latest_women_news', value)}
            />
          </li>
          <li>
            <Checkbox
              label="job-alerts"
              required={false}
              checkboxLabel="I would like to receive job alerts"
              register={register}
              checked={jobPlacementForm.notification_receive_job_alerts}
              onChange={(value) => handleOnClickCheckBox('notification_receive_job_alerts', value)}
            />
          </li>
        </ul>
      </div>

      <div className="action-button">
        <Button text={'Submit'} onClick={handleSubmitForm} />
      </div>
    </div>
  );
};

export default JPStepFour;
