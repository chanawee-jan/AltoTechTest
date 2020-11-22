import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import db from "./firebase";
import { store } from "redux/store";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";

const hist = createBrowserHistory();

const App = () => {
  db.on("value", (data) => {
    if (data.val()) {
      store.dispatch({ type: "addGraph", payload: data.val()["GraphData"] });
      store.dispatch({ type: "addRoom", payload: data.val()["Room"] });
    }
  });

  return (
    <Router history={hist}>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Redirect to="/admin/dashboard" />
      </Switch>
    </Router>
  );
};
export default App;
