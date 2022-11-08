import './Nav.css'
import {Link} from 'react-router-dom'
function Nav(){
    return(
        <div>
            <ul className="nav">
                <li className='nav-ul'> <Link className='nav-link' to='/'>Home</Link> </li>
                <li className='nav-ul'><Link className='nav-link' to='/add'>AddMeetings</Link></li>
                <li className='nav-ul'><Link className='nav-link' to='/important'>Important Meetings</Link></li>
                <li className='nav-ul'><Link className='nav-link' to='/Signin'>Signin</Link></li>
            </ul>
        </div>
    )
}
export default Nav;