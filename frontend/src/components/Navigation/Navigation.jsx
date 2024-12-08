import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ProfileButton from './ProfileButton';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignupFormModal from '../SignupFormModal/SignupFormModal';
import { FaUserCircle } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import { SiAirbnb } from "react-icons/si";
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  const sessionLinks = sessionUser ? (
    <li>
      <ProfileButton user={sessionUser} />
    </li>
  ) : (
    <div className="dropdown-container">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
      <TfiMenu size={24} className="menu-icon" color="black" />
        <FaUserCircle size={24} color="black"/>
      </button>
      {showDropdown && (
        <ul className="dropdown-menu">
          <li>
            <OpenModalButton
              buttonText="Log In"
              modalComponent={<LoginFormModal />}
            />
          </li>
          <li>
            <OpenModalButton
              buttonText="Sign Up"
              modalComponent={<SignupFormModal />}
            />
          </li>
        </ul>
      )}
    </div>
  );

  return (
    <header className="navigation">
    <NavLink to="/" className="logo">
      <SiAirbnb size={40} color="#FF5A5F"/>
      <span className="logo-text">airbnb</span>
    </NavLink>

      <nav className="navigation-menu">{isLoaded && sessionLinks}</nav>
    </header>
  );
}

export default Navigation;