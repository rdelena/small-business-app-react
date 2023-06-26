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
import DeleteIcon from "@mui/icons-material/Delete";

const adminView = (props) => {
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
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.removeListing(idx)}
                    className="icon text-red"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default adminView;
