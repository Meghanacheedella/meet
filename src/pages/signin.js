import {useNavigate } from 'react-router-dom'
const usersdetails=[]
const url= 'https://meetlogins-2b861-default-rtdb.firebaseio.com/register.json'
let nam,password;
function Signin(){
    const Navigate=useNavigate()
    async function signinhandler(){
        const response= await fetch(url)
        console.log(response)
        const data=await response.url
        // if(response.ok==true)
        // console.log("Logged in")
        // else
        // console.log("mismatch")
        console.log(data)
        // Navigate('/')
    }
    function namechangehandler(event){
        
     nam=event.target.value;
    }
    function passwordchangehandler(event){
        
         password=event.target.value
       }

    function signuphandler(){
        const userdetails={
            Name:nam,
            password:password
        }
        fetch('https://meetlogins-2b861-default-rtdb.firebaseio.com/register.json',
        {
            method:'post',
            body:JSON.stringify(userdetails)
        })
        usersdetails.push(userdetails)
        console.log(usersdetails)
    }
    return(
        <div className=" signin ">
            <input type="text" placeholder="Enter Your username" onChange={namechangehandler}/>
            <input type="password" placeholder="Enter Your Password" onChange={passwordchangehandler}></input>
            <button className="btn" onClick={signinhandler}>Signin</button>
            <button className='btn' onClick={signuphandler}>Signup</button>
        </div>
    )
}
export default Signin;