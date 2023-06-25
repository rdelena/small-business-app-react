import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#50C878",
    },
  },
});

const Navigation = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1", color: "white" }}>
            Small Business App
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link
                to="/Listings"
                style={{ textDecoration: "none", color: "white" }}
              >
                Listings
              </Link>
            </li>
            <li className="nav-list-item">
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navigation;
