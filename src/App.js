import "./App.css";
// import Meetingcard from './components/Meetingcard';
import { Route, Routes, Switch } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import AddMeetings from "./pages/AddMeetings";
import ImportantMeetings from "./pages/ImportantMeetings";
import Notfound from "./pages/Notfound";
import Nav from "./navigation/Nav";
import Signin from "./pages/signin";
import Meetingcard from "./components/Meetingcard";
import { meetcontext } from "./components/context/Meetingscontext";

import { useState } from "react";
function App() {
  const [meet, setMeet] = useState([]);
  const [impmeet, setImpMeet] = useState([
    { id: null, title: null, date: null, time: null, desc: null },
  ]);

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
  console.log(meet);
  return (
    <meetcontext.Provider value={{ meet, setMeet, impmeet, setImpMeet }}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddMeetings />}></Route>
          <Route path="/important" element={<ImportantMeetings />}></Route>
          <Route path="*" element={<Notfound />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </div>
    </meetcontext.Provider>
  );
}

export default App;
