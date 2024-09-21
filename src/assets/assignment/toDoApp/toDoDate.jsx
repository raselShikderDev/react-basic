import React, { useEffect } from "react";
import { useState } from "react";

export default function toDoDate() {
  const [timeDate, setTimeDate] = useState("");
  useEffect(() => {
    setInterval(() => {
      const now = new Date();
      const currentDate = now.toLocaleDateString();
      const currentTime = now.toLocaleTimeString();
      setTimeDate(`${currentDate} - ${currentTime}`);
    }, 1000);
  }, []);

  return <h4>{timeDate}</h4>;
}
