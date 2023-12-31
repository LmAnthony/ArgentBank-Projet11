// React
import React from 'react';
import { Link } from 'react-router-dom';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Assets
import logo from './../../assets/img/argentBankLogo.webp';

const Header = () => {
   const store = useSelector((state) => state);
   const user = store.user;
   //TOOLS
   const dispatch = useDispatch();

   /**
    * If user exist : Fullname otherwise SignIn
    * @param { object } user form store
    * @param { string } firstName
    * @param { string } lastName
    */
   const title =
      user !== null ? user.userName : 'SignIn';

   // Logout the user then clear the localStorage
   const handleSignOut = () => {
      dispatch({ type: 'LOGOUT_ACTION' });
   };

   return (
      <header>
         <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
               <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
               <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
               <Link
                  className="main-nav-item" to={store.loggedIn ? '/dashboard' : '/signIn'}>
                  <span className="fa fa-user-circle right"></span>&nbsp;{title}
               </Link>
               {store.loggedIn && (
                  <Link
                     className="main-nav-item" to="/" onClick={() => handleSignOut()} >
                     {/* "&nbsp;" = blank character */}
                     <i className="fa fa-sign-out"></i>&nbsp;Sign Out
                  </Link>
               )}
            </div>
         </nav>
      </header>
   );
};

export default Header;
