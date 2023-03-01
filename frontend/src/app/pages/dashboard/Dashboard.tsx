import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
  faCartShopping,
  faMessage,
  faListCheck,
  faPlus,
  faUserPlus,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

import { Icon, CustomLink } from "../../components/shared/index";

import routes from "../../config/routes";

const Dashboard = () => {
  const user = true;
  const admin = true;

  useEffect(() => {
    document.title = "Dashboard";
  });

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

        {/* ------ WEB SIDE DRWAER ------*/}
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-3 lg:mx-5 lg:px-6 overflow-y-aut w-56 bg-base-100 text-base-content">
            {user && (
              <>
                <li>
                  <CustomLink to={routes.BOOK}>
                    <Icon icon={faCartShopping}></Icon>
                    Book
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to={routes.BOOKING_LIST}>
                    <Icon icon={faListCheck}></Icon>
                    Booking List
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to={routes.REVIEW}>
                    <Icon icon={faMessage}></Icon>
                    Review
                  </CustomLink>
                </li>
              </>
            )}

            {admin && (
              <>
                <li>
                  <CustomLink to={routes.ORDER_LIST}>
                    <Icon icon={faListCheck}></Icon>
                    Order List
                  </CustomLink>
                </li>

                <li>
                  <CustomLink to={routes.ADD_SERVICE}>
                    <Icon icon={faPlus}></Icon>
                    Add Service
                  </CustomLink>
                </li>
                <li>
                  <CustomLink to={routes.MAKE_STAFF}>
                    <Icon icon={faUserPlus}></Icon>
                    Make Staff
                  </CustomLink>
                </li>

                <li>
                  <CustomLink to={routes.MANAGE_SERVICES}>
                    <Icon icon={faEdit}></Icon>
                    Manage Services
                  </CustomLink>
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
