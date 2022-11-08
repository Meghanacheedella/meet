import './App.css';
// import Meetingcard from './components/Meetingcard';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import AddMeetings from './pages/AddMeetings';
import ImportantMeetings from './pages/ImportantMeetings';
import Notfound from './pages/Notfound';
import Nav from './navigation/Nav';
import Signin from './pages/signin';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<AddMeetings/>}></Route>
        <Route path='/important' element={<ImportantMeetings/>}></Route>
        <Route path='*' element={<Notfound/>} ></Route>
        <Route path='/signin' element={<Signin/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
