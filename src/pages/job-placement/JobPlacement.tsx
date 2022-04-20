import React, { FC } from 'react';
import PageTitle from 'components/common/page-title/PageTitle';
import MultiStep from 'react-multistep';
import StepOne from 'components/common/form/StepOne';
import StepTwo from 'components/common/form/StepTwo';
import StepThree from 'components/common/form/StepThree';
import StepFour from 'components/common/form/StepFour';
import StepFive from 'components/common/form/StepFive';

const steps = [
  { name: 'StepOne', component: <StepOne /> },
  { name: 'StepTwo', component: <StepTwo /> },
  { name: 'StepThree', component: <StepThree /> },
  { name: 'StepFour', component: <StepFour /> },
  { name: 'StepFive', component: <StepFive /> },
];
const prevStyle = {
  // background: 'transparent',
  // color: '#565555',
  // border: '1px solid #979797',
  // marginRight: '10px',
  // padding: '12px 23px',
  // fontWeight: '700',
  // borderRadius: '8px',
  // width: 'maxContent',
  // height: 'maxContent',
  // marginTop: '20px',
  // marginBottom: '20px',
  display: 'none',
};
const nextStyle = {
  // color: '#fff',
  // backgroundColor: '#ffa425',
  // padding: '12px 40px',
  // fontWeight: '700',
  // borderRadius: '8px',
  // width: 'maxContent',
  // height: 'maxContent',
  // border: '1px solid transparent',
  // marginTop: '20px',
  // marginBottom: '20px',
  display: 'none',
};
export const JobPlacementPage: FC = () => {
  return (
    <>
      <PageTitle title={'Job Placement'} />
      <div className="lskit-container">
        <MultiStep
          activeStep={0}
          showNavigation={true}
          steps={steps}
          prevStyle={prevStyle}
          nextStyle={nextStyle}
        />
      </div>
    </>
  );
};

export default JobPlacementPage;
