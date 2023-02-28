import { Routes, Route } from "react-router-dom";
import NotFound from "../components/shared/NotFound";
import routes from "../config/routes";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AddService from "../pages/dashboard/admin/AddService";
import MakeStaff from "../pages/dashboard/admin/MakeStaff";
import ManageService from "../pages/dashboard/admin/ManageService";
import OrderList from "../pages/dashboard/admin/OrderList";
import Book from "../pages/dashboard/customer/Book";
import BookingList from "../pages/dashboard/customer/BookingList";
import Review from "../pages/dashboard/customer/Review";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";

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
