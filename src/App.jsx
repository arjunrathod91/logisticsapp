import {Route,Routes}from 'react-router-dom';
import ChooseAuth from './components/ChooseAuth'
import Hero from './components/Hero'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header';
import AskForHelp from './components/AskForHelp';

function App() {

  return (
    <div className ="App">
      <Routes>
       <Route exact path="/" element={<Hero />}/>
       <Route  path="/Chooseauth" element={<ChooseAuth />}/>
       <Route  path="/signupasuser" element={<SignUp />}/>
       <Route  path="/login" element={<Login />}/>
       <Route  path="/header" element={<Header />}/>
       <Route  path="/askforhelp" element={<AskForHelp />}/>
      </Routes>
      </div>  
      )
}

export default App
