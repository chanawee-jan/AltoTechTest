/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import "bootstrap/dist/css/bootstrap.css";
import "assets/scss/paper-dashboard.scss?v=1.2.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

import AdminLayout from "layouts/Admin.js";
import firebase from "firebase";

let FirebaseConfig = {
  apiKey: "AIzaSyC83gHVgJqz1POzWaxBtn1KK2u43GTRJKU",
  authDomain: "altotech-434c6.firebaseapp.com",
  databaseURL: "https://altotech-434c6.firebaseio.com",
  projectId: "altotech-434c6",
  storageBucket: "altotech-434c6.appspot.com",
  messagingSenderId: "40843153544",
  appId: "1:40843153544:web:0e82098177e27dd738cf3d",
  measurementId: "G-THJDW7TBZS",
};
try {
  firebase.initializeApp(FirebaseConfig);
} catch (err) {}

const hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Redirect to="/admin/dashboard" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
