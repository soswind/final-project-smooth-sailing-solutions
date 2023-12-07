import React from "react";

export default function SignUpForm() {
  return (
   <>
   <p className="p-signup">Choose your profile</p>

      <div className="tabs">
        <input type="radio" name="tabs" id="tabone" checked="checked" />
        <label htmlFor="tabone">NEW GAST</label>
        <div className="tab">
        <div className="signup-form">

          
          <form className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="name">FIRSTNAME</label>
              <input type="text" id="gast_first_name" name="gast_first_name" placeholder="Firstname" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="name">LASTNAME</label>
              <input type="text" id="gast_last_name" name="gast_last_name" placeholder="Lastname" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="address">ADDRESS</label>
              <input type="text" id="gast_address" name="gast_address" placeholder="Street name" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="city">CITY</label>
              <input type="text" id="gast_city" name="gast_city" placeholder="New York" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="postal-no">POSTAL NO.</label>
              <input type="text" id="gast_postal_no" name="gast_postal_no" placeholder="888888" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">PHONE NO.</label>
              <input type="text" id="gast_phone" name="gast_phone" placeholder="Phone no" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">EMAIL</label>
              <input type="email" id="gast_email" name="gast_email" placeholder="example@mail.com" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">PASSWORD</label>
              <input type="password" id="gast_password" name="gast_password" placeholder="Password" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <input
                type="password"
                id="gast_confirmPassword"
                name="gast_confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="image">ADD PHOTO</label>
              <input type="file" id="gast_image" name="gast_image" placeholder="Choose a file" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="skills">SKILLS</label>
              <input type="text" id="gast_skills" name="gast_skills" placeholder="Write your skills" required />
            </div>

            <button className="signup-button" type="submit">
              CREATE ACCOUNT
            </button>

            <div className="checkbox">
    <input className="checkbox-input" type="checkbox" id="gast_privacyCheckbox" name="gast_privacyCheckbox" required />
    <label className="checkbox-label" htmlFor="privacyCheckbox">I accept the privacy policy</label>
  </div>

        
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
              <label className="form-label" htmlFor="name">FIRSTNAME</label>
              <input type="text" id="captain_first_name" name="captain_first_name" placeholder="Firstname" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="name">LASTNAME</label>
              <input type="text" id="captain_last_name" name="captain_last_name" placeholder="Lastname" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="address">ADDRESS</label>
              <input type="text" id="captain_address" name="captain_address" placeholder="Street name" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="city">CITY</label>
              <input type="text" id="captain_city" name="captain_city" placeholder="New York" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="postal-no">POSTAL NO.</label>
              <input type="text" id="captain_postal_no" name="captain_postal_no" placeholder="888888" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="phone">PHONE NO.</label>
              <input type="text" id="captain_phone" name="captain_phone" placeholder="Phone no" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">EMAIL</label>
              <input type="email" id="captain_email" name="captain_email" placeholder="example@mail.com" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">PASSWORD</label>
              <input type="password" id="captain_password" name="captain_password" placeholder="Password" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="confirmPassword">CONFIRM PASSWORD</label>
              <input
                type="password"
                id="captain_confirmPassword"
                name="captain_confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="image">ADD PHOTO</label>
              <input type="file" id="captain_image" name="captain_image" placeholder="Choose a file" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="skills">SKILLS</label>
              <input type="text" id="captain_skills" name="captain_skills" placeholder="Write your skills" required />
            </div>

            <button className="signup-button" type="submit">CREATE ACCOUNT</button>


            <div className="checkbox">
    <input className="checkbox-input" type="checkbox" id="captain_privacyCheckbox" name="captain_privacyCheckbox" required />
    <label className="form-label" htmlFor="privacyCheckbox">I accept the privacy policy</label>
  </div>

          </form>
        </div>
        </div>
        </div>
        
    </>
  );
}
