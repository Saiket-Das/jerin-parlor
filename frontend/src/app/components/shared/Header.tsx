import Link from "./CustomLink";
import logo from "../../assets/images/Hero/logo.png";
import routes from "../../confiq/routes";
import AppButton from "./AppButton";

const Header = () => {
  // const [user] = useAuthState(auth);

  // const logout = () => {
  //     signOut(auth);
  //     localStorage.removeItem('accessToken')
  // };

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
      {/* 
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }

        {
            user
                ?
                <button className="btn btn-ghost text-xs mt-1"
                    onClick={logout}>
                    Sign out
                </button>
                :
                <li>
                    <Link to='/login'>Login</Link>
                </li>
        } */}
    </>
  );

  return (
    // <div className="lg:mx-40">
    //   <div className="navbar border-2 bg-base-100 py-5 ">
    //     {/* ------ MOBILE - MENU ICON ------ */}
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />
    //           </svg>
    //         </label>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //         >
    //           {/* ------ MOBILE - MENU ITEMS LIST ------ */}
    //           {menuItems}
    //           <li className="navbar-end flex lg:hidden">
    //             <AppButton navigate={routes.SIGNIN}>Login</AppButton>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* --------- LOGO --------- */}
    //       <Link to="/">
    //         <div className="navbar-start flex items-center border-2">
    //           <img
    //             src={logo}
    //             className="mr-2 h-12 sm:h-9"
    //             alt="Flowbite Logo"
    //           />
    //           <h2 className="self-center text-xl font-semibold whitespace-nowrap text-black">
    //             Jerin's Parlor
    //           </h2>
    //         </div>
    //       </Link>
    //     </div>

    //     {/* ------ MOBILE - DASHBOARD ICON ------ */}
    //     <div className="navbar-end">
    //       <label
    //         htmlFor="dashboard-sidebar"
    //         tabIndex={1}
    //         className="btn btn-ghost lg:hidden"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </label>
    //     </div>

    //     {/* ------ WEB - MENU ITEMS LIST ------ */}
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="menu menu-horizontal">{menuItems}</ul>
    //     </div>

    //     <div className="navbar-end hidden lg:flex">
    //       <AppButton navigate={routes.SIGNIN}>Login</AppButton>
    //     </div>
    //   </div>
    // </div>

    <div className="lg:mx-[130px]">
      <div className="bg-base-100 py-2">
        <div className="navbar ">
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

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>

          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <AppButton navigate={routes.SIGNIN}>Login</AppButton>
              </li>
            </ul>
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
