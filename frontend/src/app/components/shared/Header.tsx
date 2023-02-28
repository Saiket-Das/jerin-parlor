import Link from "./CustomLink";

import AppButton from "./AppButton";
import routes from "../../config/routes";

import logo from "../../assets/images/Hero/logo.png";
import { useState } from "react";

const Header = () => {
  // const [user] = useAuthState(auth);
  const [user, setUser] = useState(true);
  const logout = () => {
    setUser(!user);

    console.log(user);

    // signOut(auth);
    // localStorage.removeItem('accessToken')
  };

  const menuItems = (
    <>
      <li>
        <Link to={routes.HOME}>Home</Link>
      </li>
      {/* <li>
        <Link to={routes.HOME}>About</Link>
      </li> */}
      <li>
        <Link to={routes.APPOINTMENT}>Appoinment</Link>
      </li>
      <li>
        <Link to={routes.CONTACT_US}>Contact us</Link>
      </li>
      <li>
        <Link to={routes.DASHBOARD}>Dashboard</Link>
      </li>
    </>
  );

  return (
    <div className="lg:mx-[130px]">
      <div className="lg:py-5">
        <div className="navbar ">
          {/* ------------ Mobile ------------ */}

          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}

                {user ? (
                  <li className="hover:none">
                    <AppButton onClick={logout}>Sign out</AppButton>
                  </li>
                ) : (
                  <li className="hover:none">
                    <AppButton navigate={routes.SIGNIN}>Login</AppButton>
                  </li>
                )}
              </ul>
            </div>
            <Link to="/">
              <div className="flex items-center">
                <img
                  src={logo}
                  className="mr-2 h-12 sm:h-9"
                  alt="Flowbite Logo"
                />
                <h2 className="self-center text-xl font-semibold whitespace-nowrap text-black">
                  Jerin's Parlor
                </h2>
              </div>
            </Link>
          </div>

          {/* ------------ Web ------------ */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>

          <div className="navbar-end hidden lg:flex">
            {user ? (
              <ul className="menu menu-horizontal">
                <AppButton onClick={logout}>Sign out</AppButton>
              </ul>
            ) : (
              <ul className="menu menu-horizontal">
                <AppButton navigate={routes.SIGNIN}>Login</AppButton>
              </ul>
            )}
          </div>

          <div className="navbar-end lg:hidden flex">
            <label
              htmlFor="dashboard-sidebar"
              tabIndex={1}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
