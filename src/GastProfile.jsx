import React from "react";
import "./GastProfile.css";
import "./App.css";
import NavbarTop from "./NavbarTop";
import Navbar from "./Navbar"; 
import NavbarBottom from "./NavbarBottom";

function GastProfile() {
    return (
        <>
        <div>
        <NavbarTop />
        </div>
    
        <div>
        <Navbar />
        </div>
    
        <div className="gastprofile">
            <p className="gastName">Pernille Pernillesen</p>
            <p className="profileType">Gast</p>

            <div className="gastProfileInfo">
                <img src="../scr/gastImage.jgp" alt="Gast profile image"/>
                <div className="gastProfileText">
                    <p className="gastAge">Age</p>
                    <p className="gastAgeYear">45 years</p>
                    <p className="gastArea">Area</p>
                    <p className="gastAgeYear">Aarhus</p>
                </div>
            </div>
            <button className="sendChat"> send chat</button>
            <button className="requestNo"> request no.</button>
        </div>

        <div className="gastAboutMe">
            <h2>About me</h2>
            <p className="gastAboutMeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien ac nisl ultrices ultricies. </p>
        </div>

        <div className="gastSkills">
            <h2>Skills</h2>
            <div className="gastSkillsText">
                <p className="kategorie1">cooking</p>
                <p className="kategorie2">guitar</p>
                <p className="kategorie3">meditation</p>
                <p className="kategorie4">yoga</p>
                <p className="kategorie5">scuba diving</p>
                <p className="kategorie6">fishing</p>
            </div>
        </div>

        <div className="gastReviews">
            <h2>Reviews</h2>
            <div className="gastReviewsText">
                <p className="review1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien ac nisl ultrices ultricies. </p>
                <p className="review2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien ac nisl ultrices ultricies. </p>
                <p className="review3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sapien ac nisl ultrices ultricies. </p>
            </div>
        </div>
        
        <div>
        <NavbarBottom />
        </div>
        </>
    );
}
export default GastProfile