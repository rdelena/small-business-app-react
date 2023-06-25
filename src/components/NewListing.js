import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";
import cookie from "cookie";
import image from "../img/Map.jpg";

const NewListing = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    name: "",
    address: "",
    hours: "",
    description: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    document.cookie = cookie.serialize("loggedIn", "true", {
      maxAge: 60,
    });

    navigate("/");
  };

  return (
    <Container maxWidth="fullwidth">
      <div className="add-form">
        <form onSubmit={login} className="create-form" style={{ width: "30%" }}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.name}
            name="name"
            label="Name"
            type="text"
            variant="standard"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.address}
            name="address"
            label="Address"
            type="text"
            variant="standard"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.hours}
            name="hours"
            label="Hours (ex. 8AM-9PM)"
            type="text"
            variant="standard"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.description}
            name="description"
            label="Description"
            type="text"
            variant="standard"
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </form>
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
