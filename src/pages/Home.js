import { useEffect, useState } from "react";
import Meetingcard from "../components/Meetingcard";
import { BsHeart } from "react-icons/bs";

function Home() {
  const [loading, setloading] = useState(true);
  const [meetings, setmeetings] = useState([]);

  useEffect(() => {
    fetch("https://meetings-32c4a-default-rtdb.firebaseio.com/meetings.json")
      .then((response) => response.json())
      .then((data) => {
        const meeting = [];
        console.log(data);
        for (const key in data) {
          const meeting = {
            id: key,
            ...data[key],
          };
          meetings.push(meeting);
          // console.log(meetings)
        }
        setmeetings(meetings);
        setloading(false);
      });
  }, []);

  return (
    <div className="container-home">
      <h1>Welcome to Zoom Meetings</h1>
      <div className={loading ? "loading" : "d-none"}>Loading</div>
      <div className="meeting-container">
        {meetings.map((meeting) => {
          return (
            <Meetingcard
              title={meeting.title}
              desc={meeting.desc}
              date={meeting.date}
              time={meeting.time}
              id={meeting.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Home;
