import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { store } from "redux/store";
import Room from "components/Room/Room";

const Rooms = () => {
  const [roomInfo, setRoomInfo] = useState();

  useEffect(() => {
      if (
        store.getState().data.Room !== undefined &&
        store.getState().data.Room !== null
      ) {
        const jsonRoom = store.getState().data.Room
        const listOfRoom = Object.keys(jsonRoom).map(function (key) {
          return jsonRoom[key];
        });
        setRoomInfo(listOfRoom);
      }
  },[]); 
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <h5 className="title">Rooms</h5>
              </CardHeader>
              <CardBody>
                {roomInfo
                  ? roomInfo.map((data) => (
                      <Room
                        key={data.number}
                        roomNumber={data.number}
                        guest={data.guest}
                        type={data.type}
                      >
                        {data.number}
                      </Room>
                    ))
                  : "null"}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Rooms;
