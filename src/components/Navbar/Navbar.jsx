import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import logoImage from '../../assets/logo.png';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink className="hover:text-blue-600 text-lg font-medium" to="/">Home</NavLink></li>
        <li><NavLink className="hover:text-blue-600 text-lg font-medium" to="/availableFoods">Available Foods</NavLink></li>
        {
            user && <>
                <li><NavLink className="hover:text-blue-600 text-lg font-medium" to="/addFood">Add Food</NavLink></li>
                <li><NavLink className="hover:text-blue-600 text-lg font-medium" to="/myFoods">My Foods</NavLink></li>
                <li><NavLink className="hover:text-blue-600 text-lg font-medium" to="/foodRequests">Food Requests</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-28' src={logoImage} alt="" />
                {/* <a className="btn btn-ghost text-xl">Foods</a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                          {user && (
            <>
              {/* Profile Image Dropdown */}
              <div className="relative group">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border cursor-pointer"
                />

                {/* Dropdown */}
                <div className="absolute hidden group-hover:block bg-white shadow-lg p-3 rounded-md right-0 mt-2">
                  <p className="text-sm font-semibold">{user.displayName}</p>
                  <li><NavLink className="hover:text-blue-600" to="/addFood">Add Food</NavLink></li>
                <li><NavLink className="hover:text-blue-600" to="/myFoods">My Foods</NavLink></li>
                <li><NavLink className="hover:text-blue-600" to="/foodRequests">Food Requests</NavLink></li>
                  <a className="mt-2 text-left text-red-500 hover:text-red-700 btn" onClick={handleSignOut}>Log Out</a>
                </div>
              </div>
            </>
          )}
                {
                    user ?
                        <a className="btn mx-2 text-left text-red-500 hover:text-red-700  text-lg font-medium" onClick={handleSignOut}>Log Out</a> :
                        <Link className='mt-4 bg-blue-400 px-6 py-3 text-sm rounded-lg font-semibold text-white shadow hover:bg-blue-800' to="/login">Login</Link>
                }
          
            </div>
        </div>
    );
};

export default Navbar;


// import { Link, NavLink } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth"; 
// import logoImage from "../../assets/logo.png";

// const Navbar = () => {
//   const { user, logoutUser } = useAuth();

//   return (
//     <div className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        
//         {/* Logo + Website Name */}
//         <Link to="/" className="flex items-center gap-2">
//           <img src={logoImage} alt="Website Logo" className="w-10 h-10" />
//           <h2 className="text-xl font-bold">Fahim Chowdhury</h2>
//         </Link>

//         {/* Menu Items */}
//         <div className="flex items-center gap-5">
//           <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
//           <NavLink to="/foods" className="hover:text-blue-600">Available Foods</NavLink>

//           {/* If User Logged In */}
//           {user && (
//             <>
//               <NavLink to="/add-food" className="hover:text-blue-600">Add Food</NavLink>
//               <NavLink to="/manage-foods" className="hover:text-blue-600">Manage My Foods</NavLink>
//               <NavLink to="/my-requests" className="hover:text-blue-600">My Food Requests</NavLink>

//               {/* Profile Image Dropdown */}
//               <div className="relative group">
//                 <img
//                   src={user.photoURL}
//                   alt="Profile"
//                   className="w-10 h-10 rounded-full border cursor-pointer"
//                 />

//                 {/* Dropdown */}
//                 <div className="absolute hidden group-hover:block bg-white shadow-lg p-3 rounded-md right-0 mt-2">
//                   <p className="text-sm font-semibold">{user.displayName}</p>
//                   <button
//                     onClick={logoutUser}
//                     className="mt-2 w-full text-left text-red-500 hover:text-red-700"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}

//           {/* If User Not Logged In */}
//           {!user && (
//             <NavLink to="/login" className="hover:text-blue-600 font-semibold">
//               Login
//             </NavLink>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
