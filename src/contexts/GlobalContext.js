import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

import { API_END_POINT } from '../config';

const appDetails = {
  appName: 'Blog App',
  appHost: 'localhost',
  status: null,
  statusMsg: '',
  apiEndPoint: API_END_POINT,
};

export const GlobalContext = createContext(appDetails);

export const GlobalProvider = ({ children }) => {
  const [globalCtx, setGlobalCtx] = useState(appDetails);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Axios.get(API_END_POINT);
      setGlobalCtx({
        ...globalCtx,
        status: data.data.status,
        statusMsg: data.data.message,
      });
    };
    fetchData();
  });

  return (
    <GlobalContext.Provider value={{ globalCtx, setGlobalCtx }}>
      {children}
    </GlobalContext.Provider>
  );
};
