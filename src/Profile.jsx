import React, { useState, useEffect } from 'react';
import './App.css'; // Importér den CSS-fil, hvor stylingen er defineret

const Profile = ({ id }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    // Simuleret asynkron datahentning
    const fetchDataFromDatabase = async () => {
      // Simuleret dataobjekt
      const data = {
        id: id,
        name: 'John Doe',
        age: 30,
        description: 'A passionate sailor seeking new adventures.',
      };

      // Vent et kort øjeblik for at simulere asynkron datahentning
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return data;
    };

    // Hent dataene fra din database eller API
    fetchDataFromDatabase().then((data) => {
      setProfileData(data);
    });
  }, [id]);

  if (!profileData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile">
      <h2>{profileData.name}</h2>
      <p>Age: {profileData.age}</p>
      <p>ID: {profileData.id}</p>
      <p>Description: {profileData.description}</p>
      </div>
    
  );
};

export default Profile;

