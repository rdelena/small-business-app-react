import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import listing from "../listing.json";
import image from "../img/Map.jpg";

const Details = (props) => {
  const id = useParams().id;
  const list = listing.find((c) => c.id === Number(id));

  // const id = props.match.params.id
  // const list = props.listing.find(c => c.id == id)

  return (
    <Container maxWidth="sm" className="listing-container">
      <Paper className="listing-paper">
        <h2>{list.Name}</h2>
        <h4>{list.Address}</h4>
        <h4>{list.Hours}</h4>
        <p>{list.Description}</p>
        <img
          src={image}
          alt="image"
          className="map1"
          style={{
            width: "500px",
            height: "auto",
          }}
        />
      </Paper>
    </Container>
  );
};

export default Details;
