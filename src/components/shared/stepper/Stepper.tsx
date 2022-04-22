import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Stepper.module.scss';

interface StepModel {
  name: string;
  route: string;
}
interface IStepperProps {
  steps: StepModel[];
}

const StepperComponent: FC<IStepperProps> = ({ steps }) => {
  const [activeKey, setActiveKey] = useState(0);

  return (
    <div className={styles.stepperWrapper}>
      <ul className={styles.stepList}>
        {steps.map((step, index) => {
          return (
            <li
              className={`${location.pathname == step.route ? styles.active : ''} ${
                activeKey > index ? styles.completed : ''
              }`}
              key={index}
              onClick={() => setActiveKey(index)}
            >
              <Link to={step.route}>
                <span>{index + 1}</span>
                <h6>{step.name}</h6>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StepperComponent;
