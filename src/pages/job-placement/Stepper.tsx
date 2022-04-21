
import React, { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';
interface StepperProps {
    steps: {
        name: string;
        route: string;
    }[];
}
export const Stepper: FC<StepperProps> = ({steps}) => {
    return (
            <ul className="stepper">
               {
                     steps.map((step, index) => {
                            return (
                                <li className={
                                    `${location.pathname == step.route? 'active' : ''}`
                                    } key={index}>
                                    <span>{index+1}</span>
                                    <h6>{step.name}</h6>
                                </li>
                            )
                        })
               }

            </ul>
    );
};

export default Stepper;
