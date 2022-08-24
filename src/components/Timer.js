import React, { useEffect, useState } from "react";

export default function Timer({ state }) {
  const [timeData, setTimeData] = useState({
    seconds: 0,
    minutes: 0,
  });

  let timer;
  useEffect(() => {
    if (state === "ongoing") {
      timer = setTimeout(() => {
        setTimeData((prevTime) => ({
          seconds: prevTime.seconds === 59 ? 0 : prevTime.seconds + 1,
          minutes:
            prevTime.seconds === 59 ? prevTime.minutes + 1 : prevTime.minutes,
        }));
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [timeData, state]);

  useEffect(() => {
    if (state === "new game") {
      clearInterval(timer);
    }

    if (state === "start") {
      setTimeData({
        seconds: 0,
        minutes: 0,
      });
    }
  }, [state]);

  const { seconds, minutes } = timeData;
  return (
    <div className="timer">
      <p>
        Time : {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
    </div>
  );
}
