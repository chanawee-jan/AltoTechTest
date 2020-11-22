import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";
import styled from "styled-components";
import { Card, CardHeader, CardBody, Col } from "reactstrap";

const RoomInterface = styled.div`
  position: relative;
  float: left;
  margin: 10px;
  padding: 10px;
  width: 100px;
  height: 100px;
  background-color: tomato;
  border-radius: 5px;
`;

const Container = styled.div``;

const RoomNo = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const RoomModalContainer = styled.div`
  margin: 10px;
  padding: 30px;
  width: 70vw;
  background-color: white;
  border-radius: 5px;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: black;
`;

const Info = styled.p`
  font-size: 14px;
  color: black;
`;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function Room({ roomNumber, guest, type }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <RoomInterface type="button" onClick={handleOpen}>
        <RoomNo>{roomNumber}</RoomNo>
      </RoomInterface>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <RoomModalContainer>
            <Col>
              <Card>
                <Col lg="12" md="12" sm="12">
                  <CardHeader>
                    <RoomNo>Room:{roomNumber}</RoomNo>
                  </CardHeader>
                </Col>
              </Card>
              <Card>
                <Col lg="12" md="12" sm="12">
                  <CardBody>
                    <Col lg="6" md="6" sm="6">
                      <Title>Guest Name:</Title>
                    </Col>
                    <Col lg="6" md="6" sm="6">
                      <Info>{guest}</Info>
                    </Col>
                  </CardBody>
                </Col>
              </Card>
              <Card>
                <Col lg="12" md="12" sm="12">
                  <CardBody>
                    <Col lg="6" md="6" sm="6">
                      <Title>Room type:</Title>
                    </Col>
                    <Col lg="6" md="6" sm="6">
                      <Info>{type}</Info>
                    </Col>
                  </CardBody>
                </Col>
              </Card>
            </Col>
          </RoomModalContainer>
        </Fade>
      </Modal>
    </Container>
  );
}
