import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';  // Import the context

function Profile() {
  const { email, username, teamzid, phonenumber, setEmail, setUsername, setTeamZid, setPhoneNumber } = useContext(AuthContext);  
  
  // If you want to refresh the context state with the latest localStorage values on mount:
  useEffect(() => {
    // You can skip setting these if you want to just show the values directly from context
    setEmail(localStorage.getItem('usermail') || '');
    setUsername(localStorage.getItem('username') || '');
    setTeamZid(localStorage.getItem('teamzid') || '');
    setPhoneNumber(localStorage.getItem('phonenumber') || '');
    
    // If you are not doing anything additional, just displaying context values,
    // you may not need to set them again unless necessary.

  }, []); // Empty array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h1>Profile</h1>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Team ID:</strong> {teamzid}</p>
      <p><strong>Phone Number:</strong> {phonenumber}</p>
    </div>
  );
}

export default Profile;
