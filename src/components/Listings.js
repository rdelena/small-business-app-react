import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import cookie from "cookie";
import DeleteIcon from "@mui/icons-material/Delete";

const Listings = (props) => {
  const isLoggedIn = cookie.parse(document.cookie).loggedIn === "true";
  return (
    <Container>
      {isLoggedIn && (
        <h5 className="username">Logged in as: {props.user.username}</h5>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
        </TableHead>
        {props.listing.map((list, idx) => (
          <TableBody key={idx}>
            <TableRow>
              <TableCell>
                <Link style={{ color: "black" }} to={`/details/${list.id}`}>
                  {list["name"]}{" "}
                </Link>
              </TableCell>
              <TableCell>{list["description"]}</TableCell>
              <TableCell>{list["hours"]}</TableCell>
              <TableCell>{list["address"]}</TableCell>
              {isLoggedIn && (
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.removeListing(idx)}
                    className="icon text-red"
                  />
                </TableCell>
              )}
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </Container>
  );
};

export default Listings;
