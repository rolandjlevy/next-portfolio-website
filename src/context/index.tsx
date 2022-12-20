import { createContext, useEffect, useState } from 'react';

export const MyContextData = createContext(null);

const ENDPOINT = process.env.NEXT_PUBLIC_PROJECTS_DATA_ENDPOINT;

export const MyContext = ({ children }) => {
  const [myState, setMyState] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(ENDPOINT);
      const data = await response.json();
      setMyState(data);
    })();
  }, []);

  return (
    <MyContextData.Provider
      value={myState}
    >
      {children}
    </MyContextData.Provider>
  );
};