import { useContext } from "react";
import { meetcontext } from "../components/context/Meetingscontext";
// import { impmeetinglist } from "../components/Meetingcard";

function ImportantMeetings(props) {
  // const id = useContext(impmeetinglist);
  const { meet, impmeet } = useContext(meetcontext);
  console.log(impmeet);
  console.log(meet);
  let arr = [];
  // meet.filter((item) => {
  //   if (item.id == props.id) {
  //     arr.push(item);
  //   }
  // });
  console.log(arr);
  return (
    <div>
      {impmeet.map((user) => {
        return (
          <div className="meeting-card">
            <h1>Title :{user.title}</h1>
            <p>Date :{user.date}</p>
            <p>Time :{user.time}</p>
            <p>Description :{user.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
export default ImportantMeetings;
