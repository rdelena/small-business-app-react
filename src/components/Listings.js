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

const Listings = (props) => {
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
            </TableRow>
          </TableHead>
          {props.listing.map((list, idx) => (
            <TableBody key={idx}>
              <TableCell>
                <Link style={{ color: "black" }} to={`/details/${list.id}`}>
                  {list["Name"]}{" "}
                </Link>
              </TableCell>
              <TableCell>{list["Description"]}</TableCell>
              <TableCell>{list["Hours"]}</TableCell>
              <TableCell>{list["Address"]}</TableCell>
            </TableBody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default Listings;
