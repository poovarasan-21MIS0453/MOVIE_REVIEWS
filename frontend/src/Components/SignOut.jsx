import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    navigate('/signin');
  };

  return (
    <button onClick={handleSignOut} className="signout-button">
      Sign Out <FontAwesomeIcon icon={faPowerOff} />
    </button>
  );
};

export default SignOut;
