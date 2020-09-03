import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Dashboard from "./DashBoard.js";
import Header from "../common/Header";
import { Link } from "react-router-dom";

function Admin({ user }) {
  useEffect(() => {
    console.log("user after Admin log in", user);
  });

  return (
    <>
      {user.role !== "ADMIN" ? (
        <div>
          {" "}
          You are not Logged In. Click <Link to="/">here</Link> to login.
        </div>
      ) : (
        <>
          <Header username={user.username} role="admin" /> <Dashboard />
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

Admin.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, null)(Admin);
