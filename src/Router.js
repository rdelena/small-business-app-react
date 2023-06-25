import React from "react";
import { Routes, Route, Navigate } from "react-router";
import cookie from "cookie";
import Login from "./components/Login";
import Listings from "./containers/Listings";
import Details from "./containers/Details";
import AdminView from "./containers/AdminView";
import NewListing from "./containers/NewListing";

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
      <Route path="/login" element={<Login />} />
      <Route path="/listings" element={<Listings />} />
      <Route path="/details/:id" element={<Details />} />
      <Route
        path="/adminView"
        element={<ProtectedRoute component={AdminView} />}
      />
      <Route
        path="/newListing"
        element={<ProtectedRoute component={NewListing} />}
      />
    </Routes>
  );
};
export default Router;
