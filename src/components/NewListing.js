import React from "react";
import { Container } from "@mui/material";
import image from "../img/Map.jpg";
import AddListing from "../containers/AddListing";

const NewListing = () => {
  return (
    <Container maxWidth="fullwidth">
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
