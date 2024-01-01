import {Route,Routes}from 'react-router-dom';
import ChooseAuth from './components/ChooseAuth'
import Hero from './components/Hero'
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {

  return (
    <>
      <Routes>
       <Route exact path="/" element={<Hero />}/>
       <Route  path="/Chooseauth" element={<ChooseAuth />}/>
       <Route  path="/signupasuser" element={<SignUp />}/>
       <Route  path="/login" element={<Login />}/>
      </Routes>
    </>
  )
}

export default App
