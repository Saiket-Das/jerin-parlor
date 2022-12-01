import Home from "./app/pages/home/Home";

import Header from "./app/components/shared/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./app/pages/dashboard/Dashboard";
import Book from "./app/pages/dashboard/customer/Book";
import routes from "./app/confiq/routes";
import NotFound from "./app/components/shared/NotFound";
import BookingList from "./app/pages/dashboard/customer/BookingList";
import Review from "./app/pages/dashboard/customer/Review";
import OrderList from "./app/pages/dashboard/admin/OrderList";
import AddService from "./app/pages/dashboard/admin/AddService";
import MakeStaff from "./app/pages/dashboard/admin/MakeStaff";
import ManageService from "./app/pages/dashboard/admin/ManageService";
import Login from "./app/pages/auth/Login";
import Register from "./app/pages/auth/Register";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />

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
          <Route
            path={routes.MANAGE_SERVICES}
            element={<ManageService />}
          ></Route>
        </Route>

        <Route path={routes.SIGNIN} element={<Login />}></Route>
        <Route path={routes.SIGNUP} element={<Register />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
