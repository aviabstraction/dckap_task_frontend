import React, { createContext, useState } from 'react';

import { API_END_POINT } from '../config';

const appDetails = {
  appName: 'Blog App',
  appHost: 'localhost',
  apiEndPoint: API_END_POINT,
};

export const GlobalContext = createContext(appDetails);

export const GlobalProvider = ({ children }) => {
  const [globalCtx, setGlobalCtx] = useState(appDetails);

  // useEffect(() => {
  //   const fetchConnectionStatus = async () => {
  //     const data = await Axios.get(API_END_POINT);
  //     setGlobalCtx({
  //       ...globalCtx,
  //       status: data.data.status,
  //       statusMsg: data.data.message,
  //     });
  //   };
  //   fetchConnectionStatus();
  // }, []);

  return (
    <GlobalContext.Provider value={{ globalCtx, setGlobalCtx }}>
      {children}
    </GlobalContext.Provider>
  );
};
