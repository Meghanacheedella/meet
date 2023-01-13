import "../pages/pages.css";
import { BsHeart } from "react-icons/bs";
import React, { useContext, useState } from "react";
import { Redirect } from "react";
// import {FaHeart} from 'react-icons/bs'
// import ImportantMeetings from '../pages/ImportantMeetings'
import { meet, meetcontext } from "./context/Meetingscontext";
import ImportantMeetings from "../pages/ImportantMeetings";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
></link>;

// export const impmeetinglist = React.createContext();

let a = {};
function Meetingcard(Props) {
  // const [impmeet, setImpmeet] = useState([]);
  const [click, setclick] = useState(false);
  // const [impmeet, setImpMeet] = useContext(meetcontext);
  const { meet, impmeet, setImpMeet } = useContext(meetcontext);
  function clickhandler(e) {
    console.log("clicked");
    // setImpmeet(Props.id);
    setclick(true);
    setImpMeet((prev) => [
      ...prev,
      {
        id: Props.id,
        title: Props.title,
        date: Props.date,
        time: Props.time,
        desc: Props.desc,
      },
    ]);
    console.log(e.target);
    console.log(Props.id);
  }
  // <impmeetinglist.Provider value={{ impmeet, setImpmeet }}>
  return (
    <div className="meeting-card">
      <h1>Title :{Props.title}</h1>
      <p>Date :{Props.date}</p>
      <p>Time :{Props.time}</p>
      <p>Description :{Props.desc}</p>
      <BsHeart className="icon" onClick={clickhandler} id="star" />
      {/* {click ? <Redirect to="/important" /> : null} */}
      {/* {click && <ImportantMeetings id={Props.id} />} */}
    </div>
  );
  // </impmeetinglist.Provider>;
}
export default Meetingcard;
