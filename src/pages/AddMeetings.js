import './pages.css'
import {useRef} from 'react'
import {useNavigate } from 'react-router-dom'
function AddMeetings(){
    const meetingtitleinput=useRef()
    const meetingdate=useRef()
    const meetingtime=useRef()
    const meetingdesc=useRef()
    const Navigate=useNavigate()
    function submithandler(event){
        event.preventDefault();
        console.log("form is submitted")
        const title=meetingtitleinput.current.value;
        const date=meetingdate.current.value;
        const time=meetingtime.current.value;
        const desc=meetingdesc.current.value;
        const meetingdata={
            title:title,
            date:date,
            time:time,
            desc:desc
        }
        fetch('https://meetapp-bad47-default-rtdb.firebaseio.com/meetings.json',{
            method:'post',
            body:JSON.stringify(meetingdata)
        }).then(()=>{
            Navigate('/')
        })
    }
    return(
        <div className="container">
            <form onSubmit={submithandler}>
                <input type="text" placeholder='Enter Meeting title' ref={meetingtitleinput}></input>
                <input type='date' placeholder='Select Meeting date' ref={meetingdate}></input>
                <input type='time' placeholder='Select Meeting time' ref={meetingtime} ></input>
                <textarea className='input' rows={3} placeholder='Enter the brief description'ref={meetingdesc} ></textarea>
                <button type='submit' className='btn'>Add Meeting</button>
            </form>
        </div>
    );
}
export default AddMeetings;