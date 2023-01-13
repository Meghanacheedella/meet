import React, { useEffect, useState } from "react";

export const meetcontext = React.createContext();

export const Meetings = () => {
  const [meet, setMeet] = useState([]);

  useEffect(() => {
    fetch("https://meetings-32c4a-default-rtdb.firebaseio.com/meetings.json")
      .then((res) => res.json())
      .then((data) => {
        const meeting = [];
        for (const key in data) {
          const meeting = {
            id: key,
            ...data[key],
          };
          meet.push(meeting);
        }
      });
  }, []);
  return (
    <meetcontext.Provider value={{ meet, setMeet }}></meetcontext.Provider>
  );
};
