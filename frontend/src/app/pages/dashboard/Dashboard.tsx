import { Outlet } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import Icon from "../../components/shared/Icon";
import Link from "../../components/shared/CustomLink";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <h2 className="text-3xl text-purple-500 font-bold text-center">
            My Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">
                <Icon icon={faCartShopping}></Icon>
                Book
              </Link>
            </li>
            <li>
              <Link to="/dashboard/review">Booking List</Link>
            </li>
            <li>
              <Link to="/dashboard/history">
                {/* <Icon /> */}
                Review
              </Link>
            </li>
            {/* {
                        admin && <>
                            <li><CustomLink to='/dashboard/users'> All Users</CustomLink></li>
                            <li><CustomLink to='/dashboard/doctors'> Add a doctors</CustomLink></li>
                            <li><CustomLink to='/dashboard/manageDoctors'> Manage Doctors</CustomLink></li>
                        </>
                    } */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
