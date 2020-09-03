import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Header({ username, role }) {
  const classes = useStyles();
  const activeStyle = { color: "white" };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {username}
          </Typography>
          {role === "staff" ? (
            <>
              <NavLink to="/Staff/CheckIn" activeStyle={activeStyle} exact>
                CheckIn
              </NavLink>
              <NavLink exact to="/Staff/InFlight" activeStyle={activeStyle}>
                InFlight
              </NavLink>
            </>
          ) : null}

          <Button color="inherit">
            <a href="/api/logout">Log out</a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  username: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default Header;
