import React, { FC, useState } from 'react';
import JobTrend from 'components/shared/job-trend/JobTrend';
import Button from 'components/shared/button/Button';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import { SECOND_JOB_PLACEMENT_STEP } from 'app-constants/job-placement-steps';
import { useNavigate } from 'react-router-dom';
import AuthHelper from '../../../utils/AuthHelpers';
import { useGlobalJobPlacementContext } from '../JobPlacement';

const KEY_STEP_2 = {
  important: 'selected_choosing_employer_importance_options',
  motivation: 'selected_what_motivates_best_job_options',
  deal_break: 'selected_deal_breaker_options',
};

export const JPStepTwo: FC = () => {
  const {
    store: { jobPlacementForm },
    setJobPlacementForm,
    setJobPlacementStep,
  } = useGlobalJobPlacementContext();
  const navigate = useNavigate();
  const [answerImportant, setAnswerImportant] = useState<string[]>([]);
  const [answerMotivation, setAnswerMotivation] = useState<string[]>([]);
  const [answerDealBreak, setAnswerDealBreak] = useState<string[]>([]);
  const accessToken = AuthHelper.getAccessToken();

  const handleClickItem = (item, answer) => {
    if (item.key === 'important') {
      if (answerImportant.includes(answer.value)) {
        const filterSelected = answerImportant.filter(
          (typFilter: any) => typFilter.value !== answer.value
        );
        setAnswerImportant(filterSelected);
      } else {
        setAnswerImportant([...answerImportant, answer.value]);
      }
      setJobPlacementForm({
        selected_choosing_employer_importance_options: [...answerImportant, answer.value],
      });
    } else if (item.key === 'motivation') {
      if (answerMotivation.includes(answer.value)) {
        const filterSelected = answerMotivation.filter(
          (typFilter: any) => typFilter.value !== answer.value
        );
        setAnswerMotivation(filterSelected);
      } else {
        setAnswerMotivation([...answerMotivation, answer.value]);
      }
      setJobPlacementForm({
        selected_what_motivates_best_job_options: [...answerMotivation, answer.value],
      });
    } else if (item.key === 'deal_break') {
      if (answerDealBreak.includes(answer.value)) {
        const filterSelected = answerDealBreak.filter(
          (typFilter: any) => typFilter.value !== answer.value
        );
        setAnswerDealBreak(filterSelected);
      } else {
        setAnswerDealBreak([...answerDealBreak, answer.value]);
      }
      setJobPlacementForm({
        selected_deal_breaker_options: [...answerDealBreak, answer.value],
      });
    }
  };

  const handleClickNext = () => {
    setJobPlacementStep(accessToken ? 4 : 3, () => {
      navigate(accessToken ? '/job-placement/step4' : '/job-placement/step3');
    });
  };

  const handleClickBack = () => {
    setJobPlacementStep(1, () => {
      navigate('/job-placement');
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
          <Button text={'Next Step'} onClick={handleClickNext} />
        </div>
      </div>
    </PageInfoCard>
  );
};
export default JPStepTwo;
