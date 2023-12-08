import React, { useState } from "react";

export default function SignUpForm() {
  return (
   <>
   <p className="p-signup">Choose your profile</p>

      <div className="tabs">
        <input type="radio" name="tabs" id="tabone" defaultChecked />
        <label className="tabone" htmlFor="tabone">NEW GAST</label>
        <div className="tab">
        <div className="signup-form">

          
          <form action="/api/signup.php" method="POST" className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="gast_first_name">FIRSTNAME</label>
              <input type="text" id="gast_first_name" name="gast_first_name" placeholder="Firstname" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_last_name">LASTNAME</label>
              <input type="text" id="gast_last_name" name="gast_last_name" placeholder="Lastname" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_birthday">BIRTHDAY</label>
              <input type="date" id="gast_birthday" name="gast_birthday" placeholder="Birthday" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_profile_text">PROFILE TEXT</label>
              <input type="text" id="gast_profile_text" name="gast_profile_text" placeholder="Write a short text about yourself" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_address">ADDRESS</label>
              <input type="text" id="gast_address" name="gast_address" placeholder="Street name" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_city">CITY</label>
              <input type="text" id="gast_city" name="gast_city" placeholder="New York" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_postal_no">POSTAL NO.</label>
              <input type="text" id="gast_postal_no" name="gast_postal_no" placeholder="888888" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_phone">PHONE NO.</label>
              <input type="text" id="gast_phone" name="gast_phone" placeholder="Phone no" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_email">EMAIL</label>
              <input type="email" id="gast_email" name="gast_email" placeholder="example@mail.com" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_password">PASSWORD</label>
              <input type="password" id="gast_password" name="gast_password" placeholder="Password" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_confirmPassword">CONFIRM PASSWORD</label>
              <input
                type="password"
                id="gast_confirmPassword"
                name="gast_confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_image">ADD PHOTO</label>
              <input type="file" id="gast_image" name="gast_image" placeholder="Choose a file" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="gast_skills">SKILLS</label>
              <input type="text" id="gast_skills" name="gast_skills" placeholder="Write your skills" />
            </div>

            <button className="signup-button" type="submit">
              CREATE ACCOUNT
            </button>

            <div className="checkbox">
    <input className="checkbox-input" type="checkbox" id="gast_privacyCheckbox" name="gast_privacyCheckbox" required />
    <label className="checkbox-label" htmlFor="gast_privacyCheckbox">I accept the privacy policy</label>
  </div>
        
          </form>
        </div>
        </div>
       

{/* Tab 2 */}

        <input type="radio" name="tabs" id="tabtwo" />
        <label className="tabtwo" htmlFor="tabtwo">NEW CAPTAIN</label>
        <div className="tab">

<div className="signup-form">
        <form className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="captain_first_name">FIRSTNAME</label>
              <input type="text" id="captain_first_name" name="captain_first_name" placeholder="Firstname" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_last_name">LASTNAME</label>
              <input type="text" id="captain_last_name" name="captain_last_name" placeholder="Lastname" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_birthday">BIRTHDAY</label>
              <input type="date" id="captain_birthday" name="captain_birthday" placeholder="Birthday" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_profile_text">PROFILE TEXT</label>
              <input type="text" id="captain_profile_text" name="captain_profile_text" placeholder="Write a short text about yourself" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_address">ADDRESS</label>
              <input type="text" id="captain_address" name="captain_address" placeholder="Street name" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_city">CITY</label>
              <input type="text" id="captain_city" name="captain_city" placeholder="New York" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_postal_no">POSTAL NO.</label>
              <input type="text" id="captain_postal_no" name="captain_postal_no" placeholder="888888" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_phone">PHONE NO.</label>
              <input type="text" id="captain_phone" name="captain_phone" placeholder="Phone no" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_email">EMAIL</label>
              <input type="email" id="captain_email" name="captain_email" placeholder="example@mail.com" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_password">PASSWORD</label>
              <input type="password" id="captain_password" name="captain_password" placeholder="Password" required />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_confirmPassword">CONFIRM PASSWORD</label>
              <input
                type="password"
                id="captain_confirmPassword"
                name="captain_confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_image">ADD PHOTO</label>
              <input type="file" id="captain_image" name="captain_image" placeholder="Choose a file" />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="captain_skills">SKILLS</label>
              <input type="text" id="captain_skills" name="captain_skills" placeholder="Write your skills" required />
            </div>

            <button className="signup-button" type="submit">CREATE ACCOUNT</button>


            <div className="checkbox">
    <input className="checkbox-input" type="checkbox" id="captain_privacyCheckbox" name="captain_privacyCheckbox" required />
    <label className="form-label" htmlFor="captain_privacyCheckbox">I accept the privacy policy</label>
  </div>

          </form>
        </div>
        </div>
        </div>
        
    </>
  );
}
