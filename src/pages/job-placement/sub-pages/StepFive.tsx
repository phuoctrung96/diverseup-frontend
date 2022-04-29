import React, { FC, useState } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import PageInfoCard from 'components/shared/page-info-card/PageInfoCard';
import RadioButtonGroup from 'components/shared/form-controls/radio-button-group/RadioButtonGroup';
import { useForm } from 'react-hook-form';
import InfoCardTitle from 'components/shared/page-info-card/components/info-card-title/InfoCardTitle';
import Input from 'components/shared/form-controls/input/Input';
import Button from 'components/shared/button/Button';
import { useNavigate } from 'react-router-dom';
import { recommendToFriends } from 'api/job-placement';
import ModalWindow from 'components/shared/modal-window/ModalWindow';
import AuthHelper from '../../../utils/AuthHelpers';

export const JPStepFive: FC = () => {
  const { register, handleSubmit, reset, control } = useForm<any>();
  const navigate = useNavigate();
  const [isAlertSubmit, setIsAlertSubmit] = useState(false);
  const userInfo = AuthHelper.getUserInfo();

  const shareRadio = [
    { label: 'An Iphone/wallet case with DiverseUp Logo', value: '1' },
    { label: 'Free resume review by your career professionals', value: '2' },
  ];

  const handleRecommendToFriend = (data: any) => {
    console.log(data);
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
      setIsAlertSubmit(true);
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

      <ModalWindow
        visible={isAlertSubmit}
        setVisible={() => {
          setIsAlertSubmit(false);
          navigate('/');
        }}
      >
        <div>
          Thank you {userInfo.username || userInfo.email} for filling out DiverseUp job placement.
          Once we find your ideal match, we will contact you.
        </div>
      </ModalWindow>
    </PageInfoCard>
  );
};

export default JPStepFive;
