import React, { FC, useState } from 'react';
import JobTrend from 'components/shared/job-trend/JobTrend';
import Button from 'components/shared/button/Button';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import { SECOND_JOB_PLACEMENT_STEP } from 'app-constants/job-placement-steps';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setJobPlacementForm, setJobPlacementStep } from 'redux/actions/job-placement';

const KEY_STEP_2 = {
  important: 'selected_choosing_employer_importance_options',
  motivation: 'selected_what_motivates_best_job_options',
  deal_break: 'selected_deal_breaker_options',
};

export const JPStepTwo: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jobPlacementForm = useSelector((state: any) => state?.jobPlacement?.jobPlacementForm);
  const [answerImportant, setAnswerImportant] = useState<string[]>([]);
  const [answerMotivation, setAnswerMotivation] = useState<string[]>([]);
  const [answerDealBreak, setAnswerDealBreak] = useState<string[]>([]);

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
      dispatch(
        setJobPlacementForm({
          selected_choosing_employer_importance_options: [...answerImportant, answer.value],
        })
      );
    } else if (item.key === 'motivation') {
      if (answerMotivation.includes(answer.value)) {
        const filterSelected = answerMotivation.filter(
          (typFilter: any) => typFilter.value !== answer.value
        );
        setAnswerMotivation(filterSelected);
      } else {
        setAnswerMotivation([...answerMotivation, answer.value]);
      }
      dispatch(
        setJobPlacementForm({
          selected_what_motivates_best_job_options: [...answerMotivation, answer.value],
        })
      );
    } else if (item.key === 'deal_break') {
      if (answerDealBreak.includes(answer.value)) {
        const filterSelected = answerDealBreak.filter(
          (typFilter: any) => typFilter.value !== answer.value
        );
        setAnswerDealBreak(filterSelected);
      } else {
        setAnswerDealBreak([...answerDealBreak, answer.value]);
      }
      dispatch(
        setJobPlacementForm({
          selected_deal_breaker_options: [...answerDealBreak, answer.value],
        })
      );
    }
  };

  const handleClickNext = () => {
    dispatch(
      setJobPlacementStep(3, () => {
        navigate('/job-placement/step3');
      })
    );
  };

  const handleClickBack = () => {
    dispatch(
      setJobPlacementStep(1, () => {
        navigate(-1);
      })
    );
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
