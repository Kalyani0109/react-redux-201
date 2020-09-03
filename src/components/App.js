import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import LogIn from "./login/LogIn";
import Spinner from "./common/spinner/Spinner";
import PageNotFound from "./404page/404Page";

const Admin = lazy(() => import("./admin/Admin"));
const Staff = lazy(() => import("./staff/Staff"));
// import Admin from "./admin/Admin";
// import Staff from "./staff/Staff";

function App() {
  return (
    <div className="container-fluid">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/Admin" component={Admin} />
          <Route path="/Staff" component={Staff} />
          <Route component={PageNotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
