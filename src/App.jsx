import {Route,Routes}from 'react-router-dom';
import ChooseAuth from './components/ChooseAuth'
import Hero from './components/Hero'
import Login from './components/User/Login';
import SignUp from './components/User/SignUp';
import Header from './components/User/Header';
import AskForHelp from './components/User/AskForHelp';
import UserEmergencyInfo from './components/User/userEmergencyInfo';
import Responsemsg from './components/User/ResponseMsg';
import NearbyHelpers from './components/User/NearbyHelpers';
import VolunteerProfile from './components/User/VolunteerProfile';
import Verify from './components/User/Verify';
import VolRegister from './components/Volunteer/VolRegister';
import Organization from './components/Volunteer/Organization';
import ContactDetails from './components/Volunteer/ContactDetails';
import { useState } from 'react';
import Mainpage from './components/Volunteer/Mainpage';
import { MyContextProvider } from './Contexts/AllContext';
import UserInfo from './components/Volunteer/UserInfo';
import VolProfile from './components/Volunteer/VolProfile';
import VolVerify from './components/Volunteer/VolVerify';
import VolLogin from './components/Volunteer/VolLogin';
import UserProfile from './components/User/UserProfile';
import EditInfo from './components/User/EditInfo';
import VolEditInfo from './components/Volunteer/VolEditInfo';

function App() {

  return (
    <MyContextProvider>
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
       <Route  path="/userprofile" element={<UserProfile />}/>
       <Route  path="/editinfo" element={<EditInfo />}/>
       <Route  path="/verify" element={<Verify />}/>
       <Route  path="/volregister" element={<VolRegister />}/>
       <Route  path="/vol-login" element={<VolLogin />}/>
       <Route  path="/volorganization" element={<Organization />}/>
       <Route  path="/volcontact" element={<ContactDetails />}/>
       <Route  path="/volvarify" element={<VolVerify />}/>
       <Route path='/mainpage' element={<Mainpage/>}/>
       <Route path='/user-info' element={<UserInfo/>}/>
       <Route path='/volprofile' element={<VolProfile/>}/>
       <Route  path="/vol-editinfo" element={<VolEditInfo/>}/>
      </Routes>
      </div> 
      </MyContextProvider>
      )
}

export default App
