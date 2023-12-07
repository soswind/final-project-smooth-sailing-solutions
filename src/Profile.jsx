import React, { useState, useEffect } from 'react';
import './App.css';

const Profile = ({ data }) => {
  return (
    <div>
       {data.map(item => (
    <div className="profile">
      <h2>{item.first_name} {item.last_name}</h2>
      <p>Age: {item.age}</p>
      <p>ID: {item.id}</p>
      <p>Description: {item.profile_text}</p>
    </div>
  ))
  }
    </div>
  )
 
};

export default Profile;
    
    
  

