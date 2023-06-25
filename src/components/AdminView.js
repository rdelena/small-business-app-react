import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from "@mui/material";
import Listing from "../listing.json";
import { Link } from "react-router-dom";

const Listings = () => {
  return (
    <div>
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          {Listing.map((list, idx) => (
            <TableBody key={idx}>
              <TableCell>
                <Link style={{ color: "black" }} to={`/Details/${list.id}`}>
                  {list["Name"]}{" "}
                </Link>
              </TableCell>
              <TableCell>{list["Description"]}</TableCell>
              <TableCell>{list["Hours"]}</TableCell>
              <TableCell>{list["Address"]}</TableCell>
              <TableCell>Delete</TableCell>
            </TableBody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default Listings;
