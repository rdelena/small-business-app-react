import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";
import listing from "../listing.json";

const Details = (props) => {
  const id = useParams().id;
  const list = listing.find((c) => c.id === Number(id));

  return (
    <Container maxWidth="sm" className="listing-container">
      <Paper className="listing-paper">
        <h2>{list.Name}</h2>
        {Object.keys(list).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${list[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Details;
