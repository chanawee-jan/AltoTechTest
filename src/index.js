import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import db from "./firebase";
import { Provider } from "react-redux";
import { store } from "redux/store";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";

const hist = createBrowserHistory();

store.subscribe(() => {
  alert("Updated");
  console.log("update store", store.getState());
});

db.on("value", (data) => {
  if (data.val()) {
    store.dispatch({ type: "addGraph", payload: data.val()["GraphData"] });
    store.dispatch({ type: "addRoom", payload: data.val()["Room"] });
  }
});

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Redirect to="/admin/dashboard" />
        </Switch>
      </Router>
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
);
