import React, { FC } from 'react';

export const StepFive: FC = () => {
  return (
    <div className="ls-multi-form">
      <h3 className="ls-form-heading">Thanks for using diverseUp!</h3>
      <p className="ls-form-subheading">
        Please check back frequesntly to see the latest ratings. Help us spread the word!
      </p>
      <div className="check-item-field final-step">
        <h4 className="input-heading">
          Be among the first 100 to recommend to 5 of your friends to recieve:
        </h4>
        <ul>
          <li>
            <input type="radio" name="radio_select" id="full-time" />
            <label htmlFor="full-time" className="input-label">
              An iPhone/wallet case with DiverseUp Logo
            </label>
          </li>
          <li>
            <input type="radio" name="radio_select" id="internship" />
            <label htmlFor="internship" className="input-label">
              Free Resume review by your career professionals
            </label>
          </li>
        </ul>
        <form>
          <div className="form-group">
            <h4 className="input-heading">Your Name:</h4>
            <div className="input-field">
              <input type="text" placeholder="Enter your name" />
            </div>
          </div>
          <div className="form-group">
            <h4 className="input-heading">Your Friend's Email:</h4>
            <div className="input-field">
              <input type="emial" placeholder="Enter your friend e-mail 1" />
              <input type="emial" placeholder="Enter your friend e-mail 2" />
              <input type="emial" placeholder="Enter your friend e-mail 3" />
              <input type="emial" placeholder="Enter your friend e-mail 4" />
              <input type="emial" placeholder="Enter your friend e-mail 5" />
            </div>
          </div>
          <div className="form-group">
            <h4 className="input-heading">Your Message:</h4>
            <div className="input-field">
              <textarea>Enter your message</textarea>
            </div>
          </div>
        </form>
      </div>

      <div className="step-buttons">
        <button className="btn outline-btn">Skip</button>
        <button className="btn filled-btn">Recommend to friends</button>
      </div>
    </div>
  );
};

export default StepFive;
