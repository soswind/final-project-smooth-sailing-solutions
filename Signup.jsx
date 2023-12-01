import React from "react";

export default function SignUpForm() {
  return (
   <>
   <p className="p-signup">Choose your profile </p>

      <div className="tabs">
        <input type="radio" name="tabs" id="tabone" checked="checked" />
        <label htmlFor="tabone">NEW GAST</label>
        <div className="tab">
        <div className="signup-form">

          
          <form className="form-grid">
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" name="name" placeholder="Name and surname" required />
            </div>

            <div className="form-group">
              <label htmlFor="address">ADDRESS</label>
              <input type="text" id="address" name="address" placeholder="High Street" required />
            </div>

            <div className="form-group">
              <label htmlFor="city">CITY</label>
              <input type="text" id="city" name="city" placeholder="New York" required />
            </div>

            <div className="form-group">
              <label htmlFor="postal-no">POSTAL NO.</label>
              <input type="text" id="postal-no" name="postal-no" placeholder="888888" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">PHONE NO.</label>
              <input type="text" id="phone" name="phone" placeholder="Phone no" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" name="email" placeholder="88888" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input type="password" id="password" name="password" placeholder="Password" required />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">ADD PHOTO</label>
              <input type="file" id="image" name="image" placeholder="Add photo" required />
            </div>

            <div className="form-group">
              <label htmlFor="skills">SKILLS</label>
              <input type="text" id="skills" name="skills" placeholder="Skills" required />
            </div>

            <div className="privacy-box">
    <input type="checkbox" id="privacyCheckbox" name="privacyCheckbox" required />
    <label htmlFor="privacyCheckbox">I accept the privacy policy</label>
  </div>

            <button className="signup-button" type="submit">
              CREATE ACCOUNT
            </button>
          </form>
        </div>
        </div>
       

{/* Tab 2 */}

        <input type="radio" name="tabs" id="tabtwo" />
        <label htmlFor="tabtwo">NEW CAPTAIN</label>
        <div className="tab">

<div className="signup-form">
        <form className="form-grid">
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input type="text" id="name" name="name" placeholder="Name and surname" required />
            </div>

            <div className="form-group">
              <label htmlFor="address">ADDRESS</label>
              <input type="text" id="address" name="address" placeholder="High Street" required />
            </div>

            <div className="form-group">
              <label htmlFor="city">CITY</label>
              <input type="text" id="city" name="city" placeholder="New York" required />
            </div>

            <div className="form-group">
              <label htmlFor="postal-no">POSTAL NO.</label>
              <input type="text" id="postal-no" name="postal-no" placeholder="888888" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">PHONE NO.</label>
              <input type="text" id="phone" name="phone" placeholder="Phone no" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input type="email" id="email" name="email" placeholder="88888" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">PASSWORD</label>
              <input type="password" id="password" name="password" placeholder="Password" required />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="image">ADD PHOTO</label>
              <input type="file" id="image" name="image" placeholder="Add photo" required />
            </div>

            <div className="form-group">
              <label htmlFor="skills">SKILLS</label>
              <input type="text" id="skills" name="skills" placeholder="Skills" required />
            </div>

            <div className="privacy-box">
    <input type="checkbox" id="privacyCheckbox" name="privacyCheckbox" required />
    <label htmlFor="privacyCheckbox">I accept the privacy policy</label>
  </div>

            <button className="signup-button" type="submit">CREATE ACCOUNT</button>
          </form>
        </div>
        </div>
        </div>
        
    </>
  );
}
