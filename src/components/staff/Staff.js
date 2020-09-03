import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link, Route, Switch } from "react-router-dom";
import Header from "../common/Header";
// eslint-disable-next-line import/no-named-as-default
import FlightCheckIn from "../checkin/FlightCheckIn";
import InFlight from "../inFlight/InFlight";
import PageNotFound from "../404page/404Page";

function Staff({ user }) {
  return (
    <>
      {Object.keys(user).length === 0 ? (
        <div>
          {" "}
          You are not Logged In. Click <Link to="/">here</Link> to login.
        </div>
      ) : (
        <>
          <Header
            username={user.username ? user.username : user.displayName}
            role="staff"
          />
          <Switch>
            <Route
              exact
              path="/Staff/CheckIn"
              component={() => <FlightCheckIn title="Check In Here" />}
            ></Route>
            <Route exact path="/Staff/InFlight" component={InFlight}></Route>
            <Route component={PageNotFound} />
          </Switch>
        </>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

Staff.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(Staff);
