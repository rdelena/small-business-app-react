import React from "react";
import { Container } from "@mui/material";
import image from "../img/Map.jpg";
import AddListing from "../containers/AddListing";
import cookie from "cookie";

const NewListing = (props) => {
  const isLoggedIn = cookie.parse(document.cookie).loggedIn === "true";
  return (
    <Container maxWidth="fullwidth">
      {isLoggedIn && (
        <h5 className="username">Logged in as: {props.user.username}</h5>
      )}
      <div className="add-form">
        <AddListing />
        <img
          src={image}
          alt="image"
          className="map1"
          style={{
            width: "500px",
            height: "auto",
          }}
        />
      </div>
    </Container>
  );
};

export default NewListing;
