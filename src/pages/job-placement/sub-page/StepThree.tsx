import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const StepThree: FC = () => {
  return (
    <div className="ls-multi-form">
      <div className="login-form">
        <h2 className="ls-form-heading">Sign in</h2>
        <p className="ls-form-subheading">
          Before saving your job placement info please login. We do not collect any personal
          information such as name, address, etc. which could reveal your identity
        </p>

        <form className="form">
          <p className="ls-form-subheading color-fade">
            Please fill in all the fields below to sign in or choose the option to sign with any of
            social networks below.
          </p>

          <div className="social-login">
            <a href="#">
              <img
                src="http://localhost:3000/static/media/Linkedin.9c938612b8ed2b8b67c44b0d2b731b7a.svg"
                alt="linkedin button"
              />
            </a>
            <a href="#">
              <img
                src="http://localhost:3000/static/media/Gmail.3771132b7d82bfd587999d4b97e7b5e1.svg"
                alt="linkedin button"
              />
            </a>
          </div>
          <label>E-mail address</label>
          <div className="form-group">
            <input
              className="input"
              type="text"
              placeholder="Enter you e-mail address"
              name="email"
            />
          </div>

          <label>Password</label>
          <div className="form-group">
            <input
              className="input"
              type="password"
              placeholder="Enter you password"
              name="password"
            />
            <span className="eye-icon false"></span>
          </div>
          <div className="forgot-password">
            <a className="">Forgot your password?</a>
          </div>
          <div className="action-button">
            <button>Sign In</button>
          </div>
          <div className="login-footer">
            <span>Don’t have an account?</span>
            <Link to={'/job-placement/step4'}>Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default StepThree;
