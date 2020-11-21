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
import store from "../redux/store";

import { LineChart } from "components/Charts/LineChart";
import { BarChart } from "components/Charts/BarChart";

const Dashboard = () => {
  const [lineMean, setLineMean] = useState();
  const [barMean, setBarMean] = useState();
  useEffect(() => {
    if (store.getState().todos.byIds[1] !== undefined) {
      const listOfLine = store.getState().todos.byIds[1].content;
      var total = 0;
      for (var i = 0; i < listOfLine.length; i++) {
        total += listOfLine[i];
      }
      var avg = total / listOfLine.length;
      setLineMean(avg.toFixed(2))
    }
    if (store.getState().todos.byIds[2] !== undefined) {
      const listOfLine = store.getState().todos.byIds[2].content;
      var total = 0;
      for (var i = 0; i < listOfLine.length; i++) {
        total += listOfLine[i];
      }
      var avg = total / listOfLine.length;
      setBarMean(avg.toFixed(2))
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
