import React, { useState } from "react";
import NotificationAlert from "react-notification-alert";
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import Alarm from "components/Alarm/Alarm";

const Schedule = () => {
  //const [visible, setVisible] = useState(false);
  const notificationAlert = React.createRef();
  const notify = (place) => {
    var color = Math.floor(Math.random() * 5 + 1);
    var type;
    switch (color) {
      case 1:
        type = "primary";
        break;
      case 2:
        type = "success";
        break;
      case 3:
        type = "danger";
        break;
      case 4:
        type = "warning";
        break;
      case 5:
        type = "info";
        break;
      default:
        break;
    }
    var options = {};
    options = {
      place: place,
      message: (
        <div>
          <div>
            Welcome to <b>Paper Dashboard React</b> - a beautiful freebie for
            every web developer.
          </div>
        </div>
      ),
      type: type,
      icon: "nc-icon nc-bell-55",
      autoDismiss: 7,
    };
    notificationAlert.current.notificationAlert(options);
  };
  
  return (
    <>
      <div className="content">
        <NotificationAlert ref={notificationAlert} />
        <Row>
          <Col md="12">
            <Card>
              <CardBody>
                <div className="places-buttons">
                  <Row>
                    <Col className="ml-auto mr-auto text-center" md="6">
                      <CardTitle tag="h4">Notifications</CardTitle>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="8">
                      <Alarm sendSignal={() => notify("tl")} />
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Schedule;
