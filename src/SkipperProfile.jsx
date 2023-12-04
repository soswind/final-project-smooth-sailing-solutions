import react from 'react';
import './App.css';
import './SkipperProfile.css';
import NavbarTop from './NavbarTop';
import Navbar from './Navbar';
import NavbarBottom from './NavbarBottom';

function SkipperProfile() {
    return (
        <>
            <div>
                <NavbarTop />
            </div>

            <div>
                <Navbar />
            </div>

            <div className="skipperprofile">
                <p className="skipperName">Sailor John</p>
                <p className="profileType">Skipper</p>

                <div className="skipperProfileInfo">
                    <img src="../scr/skipperJohn.jpg" alt="Skipper profile image"/>
                    <div className="skipperProfileText">
                        <p className="skipperAge">Age</p>
                        <p className="skipperAgeYear">65 years</p>
                        <p className="skipperExperience">experience</p>
                        <p className="skipperExperienceYears">21 years</p>
                        <p className="skipperArea">Sailing area</p>
                        <p className="skipperAreaName">jylland</p>
                    </div>
                </div>
                <button className="sendChat"> send chat</button>
                <button className="requestNo"> request no.</button>
            </div>

            <div className="skipperCompleted">
                <h2>completed sail fairs</h2>
                <p className="skipperCompletedText">105 completed </p>
            </div>

            <div className="skipperPlanned">
                <h2>planned sea fairs</h2>
                <div className="skipperPlannedText">
                    <p className="planned1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic maiores sit corporis quaerat ea, minus cupiditate, nihil vel aut ut explicabo earum minima consequatur a velit fugiat nemo pariatur laboriosam.</p>
                    <p className="planned2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor fuga odio molestiae atque dignissimos nesciunt ullam aperiam ipsa aspernatur. Non doloribus minima eligendi architecto voluptas magnam tempora consequatur exercitationem.</p>
               
                </div>
            </div>
        </>
    );     
}

