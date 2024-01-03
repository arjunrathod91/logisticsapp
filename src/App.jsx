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
import VolRegister from './components/Volunteer/VolRegister';
import Organization from './components/Volunteer/Organization';
import ContactDetails from './components/Volunteer/ContactDetails';
import MyContext from './Contexts/AllContext';
import { useState } from 'react';

function App() {
  const [latitude,setLatitude] = useState(0)
  const [longitude,setLongitude] = useState(0)
  return (
    <MyContext.Provider value={{latitude,setLatitude,longitude,setLongitude}}>
    <div className=" App">
      <Routes>
       <Route exact path="/" element={<Hero />}/>
       <Route  path="/Chooseauth" element={<ChooseAuth />}/>
       <Route  path="/signupasuser" element={<SignUp />}/>
       <Route  path="/login" element={<Login />}/>
       <Route  path="/header" element={<Header />}/>
       <Route  path="/userpage" element={<AskForHelp />}/>
       <Route  path="/useremergencyinfo" element={<UserEmergencyInfo />}/>
       <Route  path="/responsemsg" element={<Responsemsg />}/>
       <Route  path="/nearbyhelpers" element={<NearbyHelpers />}/>
       <Route  path="/volunteerprofile" element={<VolunteerProfile />}/>
       <Route  path="/verify" element={<Verify />}/>
       <Route  path="/volregister" element={<VolRegister />}/>
       <Route  path="/volorganization" element={<Organization />}/>
       <Route  path="/volcontact" element={<ContactDetails />}/>
      </Routes>
      </div> 
      </MyContext.Provider> 
      )
}

export default App
