import React, { createContext, useState } from 'react';

// Create a new context
const MyContext = createContext();

// Create a provider component to wrap components that need access to this context
const MyContextProvider = ({ children }) => {
  // Define state or any values you want to share across components

  const [voldata, setVolData] = useState();
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmPassword] = useState('')
  const [organizationName, setOrganizationName] = useState('')
  const [aboutOrganization, setAboutOrganization] = useState('')
  const [area, setArea] = useState('')
  const [organizationHead, setOrganizationHead] = useState('')
  const [experience, setExperience] = useState('')
  const [numberOfWorkers, setNumberOfWorkers] = useState('')
  const [licence, setLicence] = useState('')
  const [contact1, setContact1] = useState('')
  const [contact2, setContact2] = useState('')
  const [tollFreeNumber, setTollFreeNumber] = useState('')
  const [address, setAddress] = useState('')
  const [loginEmail,setLoginEmail] = useState('')
  const [loginPassword,setLoginPassword] = useState('')
  const [userData,setUserData] = useState()
  const [requestData,setRequestData] = useState()



  return (
    <MyContext.Provider value={{ username, setUsername, email, setEmail, password, setPassword, confirmpassword, setConfirmPassword, organizationName, setOrganizationName,area,setArea, organizationHead, setOrganizationHead, aboutOrganization, setAboutOrganization, setNumberOfWorkers, numberOfWorkers, experience, setExperience, licence, setLicence, contact1, setContact1, contact2, setContact2, tollFreeNumber, setTollFreeNumber, address, setAddress,loginEmail,setLoginEmail,loginPassword,setLoginPassword,userData,setUserData,voldata,setVolData,requestData,setRequestData}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };