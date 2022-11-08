import Link from "./CustomLink";
import logo from "../../assets/images/Hero/logo.png";

const Header = () => {
  // const [user] = useAuthState(auth);

  // const logout = () => {
  //     signOut(auth);
  //     localStorage.removeItem('accessToken')
  // };

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/appointment">Appoinment</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
      <li>
        <Link to="/contact">Contact us</Link>
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
    <div className="lg:mx-[130px] ">
      <div className="navbar bg-base-100 py-5">
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

          <a href="https://flowbite.com/" className="flex items-center">
            <img src={logo} className="mr-2 h-12 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Jerin's Parlor
            </span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">{menuItems}</ul>
        </div>

        <div className="navbar-end">
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
  );
};

export default Header;
