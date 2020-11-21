import React, { useState, useEffect, useRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import { Route, Switch, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addline, addbar } from "../redux/actions";
import firebase from "firebase";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

var ps;

const AdminLayout = (props) => {
  const history = useHistory();
  const mainPanel = useRef();
  const [barData, setBarData] = useState({});

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.mainPanel.current);
      document.body.classList.toggle("perfect-scrollbar-on");
    }

    firebase
      .database()
      .ref("/GraphData/LineData")
      .on(
        "value",
        (snapshot) => {
          if (
            Object.keys(snapshot.val()).map(function (key) {
              return snapshot.val()[key];
            }) !== undefined
          ) {
            props.addline(
              Object.keys(snapshot.val()).map(function (key) {
                return snapshot.val()[key];
              })
            );
          }
        },
        function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      );

    firebase
      .database()
      .ref("/GraphData/BarData")
      .on(
        "value",
        function (snapshot) {
          console.log(snapshot);
          if (
            Object.keys(snapshot.val()).map(function (key) {
              return snapshot.val()[key];
            }) !== undefined
          ) {
            console.log(barData);
            setBarData(
              Object.keys(snapshot.val()).map(function (key) {
                return snapshot.val()[key];
              })
            );
            props.addbar(
              Object.keys(snapshot.val()).map(function (key) {
                return snapshot.val()[key];
              })
            );
          }
        },
        function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      );

    return () => {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.body.classList.toggle("perfect-scrollbar-on");
      }
    };
  }, [props]);

  useEffect(() => {
    if (history.action === "PUSH") {
      mainPanel.current.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }, [history.action]);

  const [backgroundColor] = useState("black");
  const [activeColor] = useState("info");
  return (
    <div className="wrapper">
      <Sidebar
        {...props}
        routes={routes}
        bgColor={backgroundColor}
        activeColor={activeColor}
      />
      <div className="main-panel" ref={mainPanel}>
        <DemoNavbar {...props} />
        <Switch>
          {routes.map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
        </Switch>
        <Footer fluid />
      </div>
    </div>
  );
};

export default connect(null, { addline, addbar })(AdminLayout);
