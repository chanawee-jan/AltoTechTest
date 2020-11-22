import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import { store } from "redux/store";

import { LineChart } from "components/Charts/LineChart";
import { BarChart } from "components/Charts/BarChart";

const Dashboard = () => {
  const [lineMean, setLineMean] = useState();
  const [barMean, setBarMean] = useState();

  useEffect(() => {
    if (
      store.getState().data.GraphData !== undefined &&
      store.getState().data.Room !== undefined
    ) {
      const linedata = store.getState().data.GraphData["LineData"];
      const bardata = store.getState().data.GraphData["BarData"];

      const listOfLine = Object.keys(linedata).map(function (key) {
        return linedata[key];
      });
      var totalline = 0;
      for (var iline = 0; iline < listOfLine.length; iline++) {
        totalline += listOfLine[iline];
      }
      var avgline = totalline / listOfLine.length;
      console.log("setLine");
      setLineMean(avgline.toFixed(2));

      const listOfBar = Object.keys(bardata).map(function (key) {
        return bardata[key];
      });
      var totalbar = 0;
      for (var ibar = 0; ibar < listOfBar.length; ibar++) {
        totalbar += listOfBar[ibar];
      }
      var avgbar = totalbar / listOfBar.length;
      setBarMean(avgbar.toFixed(2));
    }
  }, []);

  store.subscribe(() => {
    if (lineMean === undefined && barMean === undefined) {
      if (
        store.getState().data.GraphData !== undefined &&
        store.getState().data.Room !== undefined
      ) {
        const linedata = store.getState().data.GraphData["LineData"];
        const bardata = store.getState().data.GraphData["BarData"];

        const listOfLine = Object.keys(linedata).map(function (key) {
          return linedata[key];
        });
        var totalline = 0;
        for (var iline = 0; iline < listOfLine.length; iline++) {
          totalline += listOfLine[iline];
        }
        var avgline = totalline / listOfLine.length;
        console.log("setLine");
        setLineMean(avgline.toFixed(2));

        const listOfBar = Object.keys(bardata).map(function (key) {
          return bardata[key];
        });
        var totalbar = 0;
        for (var ibar = 0; ibar < listOfBar.length; ibar++) {
          totalbar += listOfBar[ibar];
        }
        var avgbar = totalbar / listOfBar.length;
        setBarMean(avgbar.toFixed(2));
      }
    }
  });

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="6" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-globe text-warning" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Mean from line chart</p>
                      <CardTitle tag="p">{lineMean}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fas fa-sync-alt" /> Update Now
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col lg="6" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-money-coins text-success" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Mean from bar chart</p>
                      <CardTitle tag="p">{barMean}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="far fa-calendar" /> Last day
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Line Chart</CardTitle>
              </CardHeader>
              <CardBody>
                <LineChart />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Bar Chart</CardTitle>
              </CardHeader>
              <CardBody>
                <BarChart />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
