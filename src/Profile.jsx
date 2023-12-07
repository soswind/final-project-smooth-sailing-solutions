import React from 'react';
import './App.css';

const Profile = ({ data }) => {
  return (
    <div className='outer-profile'>
       {data.map(item => (
    <div className="profile" key={item.id}>
      <h2>{item.first_name} {item.last_name}</h2>
      <p>Age: {item.age}</p>
      <p>ID: {item.id}</p>
      <p>Image: {item.image_url}</p>
      <p>Description: {item.profile_text}</p>
    </div>
  ))
  }
    </div>
  )
 
};

export default Profile;
    
    
  

