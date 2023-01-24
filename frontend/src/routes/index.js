import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Blogs from "../pages/Blogs";
import Register from '../pages/Register'
import { PrivateRoute } from "./PrivateRoutes";

const MainRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path="/blogs" element={<Blogs />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default MainRoutes;