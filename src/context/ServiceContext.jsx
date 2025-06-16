import React, { createContext, useContext, useState } from "react";

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const [serviceType, setServiceType] = useState(null);

  return (
    <ServiceContext.Provider value={{ serviceType, setServiceType }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => useContext(ServiceContext);
