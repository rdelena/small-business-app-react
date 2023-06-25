import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Login from "./components/Login";
import Listings from "./components/Listings";
import Details from "./components/Details";
import AdminView from "./components/AdminView";
import NewListing from "./components/NewListing";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies.loggedIn ? true : false;
};

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;

  return checkAuth() === true ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Listings" element={<Listings />} />
      <Route path="/Details/:id" element={<Details />} />
      <Route
        path="/AdminView"
        element={<ProtectedRoute component={AdminView} />}
      />
      <Route
        path="/NewListing"
        element={<ProtectedRoute component={NewListing} />}
      />
    </Routes>
  );
};
export default Router;
