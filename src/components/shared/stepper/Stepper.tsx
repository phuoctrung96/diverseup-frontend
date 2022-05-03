import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Stepper.module.scss';

interface StepModel {
  id: number;
  name: string;
  route: string;
  isActivated: boolean;
}
interface IStepperProps {
  steps: StepModel[];
  onClick?: (step: StepModel) => void;
  disabled?: boolean;
}

const StepperComponent: FC<IStepperProps> = ({ steps, onClick, disabled = false }) => {
  const [activeKey, setActiveKey] = useState(0);

  return (
    <div className={styles.stepperWrapper}>
      <ul className={styles.stepList}>
        {steps.map((step, index) => {
          return (
            <li
              className={`${location.pathname == step.route ? styles.active : ''} ${
                activeKey > index || step.isActivated ? styles.completed : ''
              }`}
              key={index}
              onClick={() => {
                if (!disabled) {
                  onClick?.(step);
                  setActiveKey(index);
                }
              }}
            >
              <Link to={!disabled ? step.route : '#'}>
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
