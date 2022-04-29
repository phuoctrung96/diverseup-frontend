import { recommendToFriends } from 'api/job-placement';
import PageTitle from 'components/common/page-title/PageTitle';
import Button from 'components/shared/button/Button';
import Input from 'components/shared/form-controls/input/Input';
import RadioButtonGroup from 'components/shared/form-controls/radio-button-group/RadioButtonGroup';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import { MODAL_TYPES, useGlobalModalContext } from 'GlobalModal';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface IForm {
  share?: string;
  name?: string;
  email1?: string;
  email2?: string;
  email3?: string;
  email4?: string;
  email5?: string;
  message?: string;
}

export const JPStepFive: FC = () => {
  const { register, handleSubmit, reset, control } = useForm<IForm>();
  const navigate = useNavigate();
  const { showModal } = useGlobalModalContext();

  const shareRadio = [
    { label: 'An Iphone/wallet case with DiverseUp Logo', value: '1' },
    { label: 'Free resume review by your career professionals', value: '2' },
  ];

  const handleRecommendToFriend = (data: any) => {
    const groupEmail = [data.email1, data.email2, data.email3, data.email4, data.email5].filter(
      (item) => item
    );
    const body = {
      selected_prize_option: parseInt(data.share, 10) || 1,
      user_fullname: data.name,
      friend_emails: groupEmail,
      message: data.message,
    };

    recommendToFriends(body).then(() => {
      showModal(MODAL_TYPES.JOB_PLACEMENT_FINISH_MODAL);
    });

    return null;
  };

  return (
    <PageInfoCard classList={['center']}>
      <PageTitle
        type={'card'}
        title={'Thanks for using diverseUp!'}
        subTitle={
          'Please check back frequesntly to see the latest ratings. Help us spread the word!'
        }
      />

      <div className="info-card-content left">
        <div className="card-section">
          <InfoCardTitle
            text={'Be among the first 100 to recommend to 5 of your friends to recieve:'}
          />
          <div className="info-card-content">
            <form className="form vertical form-group-vertical no-padding">
              <RadioButtonGroup label={'share'} register={register} radioButtons={shareRadio} />
              <div className="card-section">
                <Input
                  label={'name'}
                  register={register}
                  type={'text'}
                  inputLabel={'Your name:'}
                  placeholder={'Enter your name'}
                />
              </div>
              <div className="card-section">
                {[...new Array(5)].map((arr, index) => {
                  return (
                    <Input
                      key={index}
                      inputLabel={index === 0 ? 'Your friends E-mails:' : ''}
                      label={`email${index + 1}`}
                      placeholder={`Enter your friend e-mail ${index + 1}`}
                      register={register}
                      type={'text'}
                    />
                  );
                })}
              </div>
              <div className="card-section">
                <div className="form-group">
                  <label className="label">Your message:</label>
                  <textarea
                    className="input textarea"
                    placeholder="Enter your message"
                    {...register('message')}
                    name="message"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="buttons-group">
          <Button text={'Skip'} classList={['white']} onClick={() => navigate('/')} />
          <Button
            text={'Recommend to friends'}
            onClick={handleSubmit((data) => handleRecommendToFriend(data))}
          />
        </div>
      </div>
    </PageInfoCard>
  );
};

export default JPStepFive;
