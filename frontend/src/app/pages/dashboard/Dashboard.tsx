import { Outlet } from "react-router-dom";
import {
  faCartShopping,
  faHardDrive,
  faMessage,
  faListCheck,
  faPlus,
  faUserPlus,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import Icon from "../../components/shared/Icon";
import Link from "../../components/shared/CustomLink";
import routes from "../../confiq/routes";

const Dashboard = () => {
  const user = false;
  const admin = true;
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content bg-base-300 rounded-sm px-10 pt-12">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-3 lg:mx-5 lg:px-6 overflow-y-auto w-56 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}

            {user && (
              <>
                <li>
                  <Link to={routes.BOOK}>
                    <Icon icon={faCartShopping}></Icon>
                    Book
                  </Link>
                </li>
                <li>
                  <Link to={routes.BOOKING_LIST}>
                    <Icon icon={faHardDrive}></Icon>
                    Booking List
                  </Link>
                </li>
                <li>
                  <Link to={routes.REVIEW}>
                    <Icon icon={faMessage}></Icon>
                    Review
                  </Link>
                </li>
              </>
            )}

            {admin && (
              <>
                <li>
                  <Link to={routes.ORDER_LIST}>
                    <Icon icon={faListCheck}></Icon>
                    Order List
                  </Link>
                </li>

                <li>
                  <Link to={routes.ADD_SERVICE}>
                    <Icon icon={faPlus}></Icon>
                    Add Service
                  </Link>
                </li>
                <li>
                  <Link to={routes.MAKE_STAFF}>
                    <Icon icon={faUserPlus}></Icon>
                    Make Staff
                  </Link>
                </li>

                <li>
                  <Link to={routes.MANAGE_SERVICES}>
                    <Icon icon={faEdit}></Icon>
                    Manage Services
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
