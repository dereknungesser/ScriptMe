import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="navbar_buttons" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navbar_container">
        <div className="navbar_buttons__container">
          <NavLink className="navbar_buttons" exact to="/">Home</NavLink>
          {isLoaded && sessionLinks}
        </div>
    </div>
  );
}

export default Navigation;
