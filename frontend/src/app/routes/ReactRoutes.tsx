import { Routes, Route } from "react-router-dom";

import routes from "../config/routes";

import {
  Home,
  Login,
  Register,
  Dashboard,
  Book,
  BookingList,
  Review,
  OrderList,
  AddService,
  MakeStaff,
  ManageService,
  NotFound,
} from "../pages/index";

const ReactRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path={routes.HOME} element={<Home />}></Route>

    <Route path={routes.DASHBOARD} element={<Dashboard />}>
      {/* Nested routes into DASHBOARD */}
      <Route index element={<Book />}></Route>
      <Route path={routes.BOOKING_LIST} element={<BookingList />}></Route>
      <Route path={routes.REVIEW} element={<Review />}></Route>

      {/* Admin  */}
      <Route path={routes.ORDER_LIST} element={<OrderList />}></Route>
      <Route path={routes.ADD_SERVICE} element={<AddService />}></Route>
      <Route path={routes.MAKE_STAFF} element={<MakeStaff />}></Route>
      <Route path={routes.MANAGE_SERVICES} element={<ManageService />}></Route>
    </Route>

    <Route path={routes.SIGNIN} element={<Login />}></Route>
    <Route path={routes.SIGNUP} element={<Register />}></Route>

    <Route path="*" element={<NotFound />}></Route>
  </Routes>
);

export default ReactRoutes;
