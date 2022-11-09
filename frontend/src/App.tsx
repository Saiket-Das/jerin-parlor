import Home from "./app/pages/home/Home";

import Header from "./app/components/shared/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./app/pages/dashboard/Dashboard";
import Book from "./app/pages/dashboard/customer/Book";

const App = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>

        <Route path="dashboard" element={<Dashboard />}>
          {/* NESTED ROUTE into Dashboard */}
          <Route index element={<Book />}></Route>
        </Route>

        {/* <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
