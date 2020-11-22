import React, { useState, useEffect, useRef } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Alarm = ({ sendSignal }) => {
  const [currentTime, setCurrentTime] = useState("");
  const [myAlarmTime, setMyAlarmTime] = useState(undefined);
  const [alarmMessage, setAlarmMessage] = useState(undefined);

  useInterval(()=>{
    setCurrentTime(
      new Date().toLocaleTimeString("en-US", { hour12: false })
    )
    checkAlarmClock()
  },1000)

  const setAlarmTime = (event) => {
    event.preventDefault();
    const inputAlarmTimeModified = event.target.value + ":00";
    setMyAlarmTime(inputAlarmTimeModified);

  };

  const checkAlarmClock = () => {
    console.log(myAlarmTime)
    if (myAlarmTime === undefined || !myAlarmTime) {
      setAlarmMessage("Please set your alarm.");
    } else {
      setAlarmMessage("Your alarm is set for " + myAlarmTime + ".");
      if (currentTime === myAlarmTime) {
        sendSignal();
      } else {
        console.log("not yet");
      }
    }
  };

  return (
    <div>
      <h2 style={{textAlign:'center'}}>It is {currentTime}.</h2>
      <h2 style={{textAlign:'center'}}>{alarmMessage}</h2>
      <form style={{textAlign:'center'}} >
        <input type="time" onChange={setAlarmTime}></input>
      </form>
    </div>
  );
};

export default Alarm;
