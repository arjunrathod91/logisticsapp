import React, { createContext, useState } from 'react';

// Create a new context
const MyContext = createContext();

// Create a provider component to wrap components that need access to this context
const MyContextProvider = ({ children }) => {
  // Define state or any values you want to share across components
  const [voldata,setVolData] = useState({});

  return (
    <MyContext.Provider value={{ voldata, setVolData }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };