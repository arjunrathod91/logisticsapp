import {Route,Routes}from 'react-router-dom';
import ChooseAuth from './components/ChooseAuth'
import Hero from './components/Hero'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header';
import AskForHelp from './components/AskForHelp';
import UserEmergencyInfo from './components/userEmergencyInfo';
import Responsemsg from './components/ResponseMsg';
import NearbyHelpers from './components/NearbyHelpers';
import VolunteerProfile from './components/VolunteerProfile';
import Verify from './components/Verify';
import VolRegister from './components/VolRegister';

function App() {

  return (
    <div className=" App">
      <Routes>
       <Route exact path="/" element={<Hero />}/>
       <Route  path="/Chooseauth" element={<ChooseAuth />}/>
       <Route  path="/signupasuser" element={<SignUp />}/>
       <Route  path="/login" element={<Login />}/>
       <Route  path="/header" element={<Header />}/>
       <Route  path="/askforhelp" element={<AskForHelp />}/>
       <Route  path="/useremergencyinfo" element={<UserEmergencyInfo />}/>
       <Route  path="/responsemsg" element={<Responsemsg />}/>
       <Route  path="/nearbyhelpers" element={<NearbyHelpers />}/>
       <Route  path="/volunteerprofile" element={<VolunteerProfile />}/>
       <Route  path="/verify" element={<Verify />}/>
       <Route  path="/volregister" element={<VolRegister />}/>
      </Routes>
      </div>  
      )
}

export default App
