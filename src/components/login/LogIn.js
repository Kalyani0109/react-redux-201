import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as logInCheck from "../../redux/actions/loginActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import {
  Grid,
  Paper,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

function LogIn({ user, logInCheck }) {
  const [logIn, setLogIn] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      logInCheck.getLogInDetails();
    }
  }, [user]);

  function handleChange(event) {
    event.preventDefault();
    const logInObj = { ...logIn };
    logInObj[event.target.name] = event.target.value;
    setLogIn({ ...logInObj });
  }

  function onSubmit(event) {
    event.preventDefault();
    logInCheck.logInAuth(logIn);
  }

  return (
    <>
      {Object.keys(user).length === 0 || user.error ? (
        <Container maxWidth="sm" style={{ marginTop: 100 }}>
          <Grid container justify="center">
            <Grid item xm={4}></Grid>
            <Grid item xm={4}>
              <form onSubmit={onSubmit}>
                <Paper variant="outlined" style={{ height: 300, width: 300 }}>
                  <Typography component="h2" style={{ margin: 10 }}>
                    Please sign in
                  </Typography>
                  {user.error ? (
                    <Typography
                      component="h2"
                      style={{ margin: 10 }}
                      color="secondary"
                    >
                      {" "}
                      User name or password Incorrect{" "}
                    </Typography>
                  ) : null}
                  <TextField
                    error={user.error != null}
                    label="User Name"
                    onChange={handleChange}
                    value={logIn.username}
                    name="username"
                    style={{ margin: 10 }}
                  ></TextField>
                  <TextField
                    error={user.error != null}
                    label="Password"
                    onChange={handleChange}
                    value={logIn.password}
                    name="password"
                    type="password"
                    style={{ margin: 10 }}
                  ></TextField>
                  <Typography style={{ margin: 10 }}>
                    <a href="/api/auth/facebook">FaceBook Login</a>
                  </Typography>
                  <Typography style={{ margin: 10 }}>
                    <a href="/api/auth/google">Google Login</a>
                  </Typography>
                  <Typography style={{ margin: 10 }}>
                    <Button
                      className="float-right"
                      type="submit"
                      color="primary"
                      variant="outlined"
                    >
                      Sign In
                    </Button>
                  </Typography>
                </Paper>
              </form>
            </Grid>
            <Grid item xm={4}></Grid>
          </Grid>
        </Container>
      ) : user.role === "ADMIN" ? (
        <Redirect to="/Admin" />
      ) : (
        <Redirect to="/Staff/CheckIn" />
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logInCheck: bindActionCreators(logInCheck, dispatch),
  };
}

LogIn.propTypes = {
  user: PropTypes.object.isRequired,
  logInCheck: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
