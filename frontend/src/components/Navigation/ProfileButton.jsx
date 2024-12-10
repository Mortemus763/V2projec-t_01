import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal/LoginFormModal';
import SignupFormModal from '../SignupFormModal/SignupFormModal';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();
    
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
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li className="greeting">Hello, {user.firstName}</li>
            <li className="user-info">
              <p><strong>Email:</strong> {user.email}</p>
            </li>
            <li>
              <Link to="/manage-spots" className="manage-spots-link">
                Manage Spots
              </Link>
            </li>
            <li>
              <button onClick={logout} className="logout-button">Log Out</button>
            </li>
          </>
          ) : (
            <>
              <OpenModalMenuItem
                itemText="Log In"
                onItemClick={closeMenu}
                modalComponent={<LoginFormModal />}
              />
              <OpenModalMenuItem
                itemText="Sign Up"
                onItemClick={closeMenu}
                modalComponent={<SignupFormModal />}
              />
            </>
          )}
        </ul>
      </>
    );
  }
  
  export default ProfileButton;