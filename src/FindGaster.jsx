import React from 'react';
import Header from './Header';
import './App.css';
import MobileMenu from './MobileMenu';
import Profile from './Profile';

export default function FindGaster() {
  const profiles = [
    { id: 1, name: 'John Doe', age: 30, description: 'A brief description of John.' },
    { id: 2, name: 'Jane Doe', age: 25, description: 'A brief description of Jane.' },
    { id: 3, name: 'John Smith', age: 35, description: 'A brief description of John.' },
    // ... tilføj flere profiler efter behov
  ];

  return (
    <div>
      <img className="find-gast-image" src="../src/images/GAST_pexels.jpeg" alt="Find Gast Image" />
      <h1 className="h1-on-find-gast">Find Gaster</h1>
      <p className="p-on-find-gast">
        Here you can see all the Gasts who are seeking a captain. You can contact them
        by sending them a message, if you want them to be a part of your crew for the next journey.
      </p>

    <div className='profiles-container'>
      {/* Vis profiler baseret på data i `profiles` arrayet */}
      {profiles.map((profile) => (
        <Profile key={profile.id} {...profile} />
      ))}
      </div>
    </div>
  );
}
