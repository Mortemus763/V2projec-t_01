import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { FaUserCircle } from "react-icons/fa";
import { TfiMenu } from "react-icons/tfi";
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignupFormModal from '../SignupFormModal/SignupFormModal';
import { Link } from 'react-router-dom';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [loading, setLoading] = useState(true);
    const ulRef = useRef();
    useEffect(() => {
      // Simulate a loading period for user data
      if (user) {
        setLoading(false); // Stop loading when user is available
      } else {
        setLoading(true); // Show loading if user is not defined
      }
    }, [user]);

    const toggleMenu = (e) => {
      e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
      setShowMenu(!showMenu);
    };
    
    useEffect(() => {
      if (!showMenu) return;
  
      const closeMenu = (e) => {
        if (!ulRef.current.contains(e.target)) {
          setShowMenu(false);
        }
      };
  
      document.addEventListener('click', closeMenu);
  
      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
  
    const closeMenu = () => setShowMenu(false);
  
    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logout());
      closeMenu();
    };
    const ulClassName = `profile-dropdown ${showMenu ? "visible" : "hidden"}`;
  
    return (
      <>
        <button className="dropdown-toggle" onClick={toggleMenu}>
          <TfiMenu size={24} className="menu-icon" color="black" />
          <FaUserCircle size={24} color="black" />
        </button>
        <ul className={ulClassName} ref={ulRef}>
          {loading ? ( // Show a loading message while user is loading
            <li>Loading...</li>
          ) : user ? ( // Show user details if available
            <>
              <li className="greeting">Hello, {user.firstName}</li>
              <li className="user-info">{user.email}</li>
              <li>
                <Link to="/manage-spots" className="manage-spots-link">
                  Manage Spots
                </Link>
              </li>
              <li>
                <button onClick={logout} className="logout-button">
                  Log Out
                </button>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </>
    );
  }
  
  export default ProfileButton;