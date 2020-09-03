import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      Page not found. Click <Link to="/">here</Link> to login again
    </div>
  );
}

export default PageNotFound;
