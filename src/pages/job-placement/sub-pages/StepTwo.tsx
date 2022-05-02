import React, { FC, useMemo, useState } from 'react';
import JobTrend from 'components/shared/job-trend/JobTrend';
import Button from 'components/shared/button/Button';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import { SECOND_JOB_PLACEMENT_STEP } from 'app-constants/job-placement-steps';
import { useNavigate } from 'react-router-dom';
import AuthHelper from '../../../utils/AuthHelpers';
import { ROUTE_JOB_PLACEMENT } from 'app-constants';
import { useGlobalJobPlacementContext } from '../../../contexts/GlobalJobPlacementContext';

const KEY_STEP_2 = {
  important: 'selected_choosing_employer_importance_options',
  motivation: 'selected_what_motivates_best_job_options',
  deal_break: 'selected_deal_breaker_options',
};

export const JPStepTwo: FC = () => {
  const {
    store: { jobPlacementForm, steps },
    handleClickStep,
    setJobPlacementForm,
  } = useGlobalJobPlacementContext();

  const navigate = useNavigate();
  const accessToken = AuthHelper.getAccessToken();

  const disabledButton = useMemo(() => {
    return (
      jobPlacementForm.selected_choosing_employer_importance_options.length === 0 ||
      jobPlacementForm.selected_what_motivates_best_job_options.length === 0 ||
      jobPlacementForm.selected_deal_breaker_options.length === 0
    );
  }, [
    jobPlacementForm.selected_choosing_employer_importance_options,
    jobPlacementForm.selected_what_motivates_best_job_options.length,
    jobPlacementForm.selected_deal_breaker_options.length,
  ]);

  const handleClickItem = (item, answer) => {
    if (item.key === 'important') {
      if (jobPlacementForm.selected_choosing_employer_importance_options.includes(answer.value)) {
        const filterSelected =
          jobPlacementForm.selected_choosing_employer_importance_options.filter(
            (typFilter: any) => typFilter !== answer.value
          );
        setJobPlacementForm({
          selected_choosing_employer_importance_options: filterSelected,
        });
      } else {
        setJobPlacementForm({
          selected_choosing_employer_importance_options: [
            ...jobPlacementForm.selected_choosing_employer_importance_options,
            answer.value,
          ],
        });
      }
    } else if (item.key === 'motivation') {
      if (jobPlacementForm.selected_what_motivates_best_job_options.includes(answer.value)) {
        const filterSelected = jobPlacementForm.selected_what_motivates_best_job_options.filter(
          (typFilter: any) => typFilter !== answer.value
        );
        setJobPlacementForm({
          selected_what_motivates_best_job_options: filterSelected,
        });
      } else {
        setJobPlacementForm({
          selected_what_motivates_best_job_options: [
            ...jobPlacementForm.selected_what_motivates_best_job_options,
            answer.value,
          ],
        });
      }
    } else if (item.key === 'deal_break') {
      if (jobPlacementForm.selected_deal_breaker_options.includes(answer.value)) {
        const filterSelected = jobPlacementForm.selected_deal_breaker_options.filter(
          (typFilter: any) => typFilter !== answer.value
        );
        setJobPlacementForm({
          selected_deal_breaker_options: filterSelected,
        });
      } else {
        setJobPlacementForm({
          selected_deal_breaker_options: [
            ...jobPlacementForm.selected_deal_breaker_options,
            answer.value,
          ],
        });
      }
    }
  };

  const handleClickNext = () => {
    const numberStep = accessToken ? 3 : 2;
    const filterStep = steps.find((item) => item.id === numberStep);
    handleClickStep(filterStep, () => {
      navigate(accessToken ? `/${ROUTE_JOB_PLACEMENT}/step4` : `/${ROUTE_JOB_PLACEMENT}/step3`);
    });
  };

  const handleClickBack = () => {
    const filterStep = steps.find((item) => item.id === 0);
    handleClickStep(filterStep, () => {
      navigate(`/${ROUTE_JOB_PLACEMENT}`);
    });
  };

  return (
    <PageInfoCard classList={['center']}>
      <PageTitle
        type={'card'}
        title={'Tell Us about your cultural Preferences'}
        subTitle={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'}
      />

      <div className="info-card-content">
        {SECOND_JOB_PLACEMENT_STEP.map((item, index) => (
          <div className="card-section" key={index}>
            <InfoCardTitle {...item} stepItem={true} />
            <div className={'flexWrapper'}>
              {item.answers.map((answer: any, i) => (
                <JobTrend
                  key={i}
                  {...answer}
                  clickable={true}
                  onClick={() => handleClickItem(item, answer)}
                  selected={jobPlacementForm[KEY_STEP_2[item.key]].includes(answer.value)}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="buttons-group">
          <Button text={'Go Back'} classList={['white']} onClick={handleClickBack} />
          <Button text={'Next Step'} onClick={handleClickNext} disabled={disabledButton} />
        </div>
      </div>
    </PageInfoCard>
  );
};
export default JPStepTwo;
