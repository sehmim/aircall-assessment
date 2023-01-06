import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const BASE_URL = 'https://cerulean-marlin-wig.cyclic.app'


const defaultValue = {};
const AppContext = createContext(defaultValue);

// create the provider
function AppContextProvider(props) {
    const [state, setState] = useState({});
    const [fetchedData, setFetchedData] = useState({});

    useEffect(() => {
      async function fetchData() {
        const { data } = await axios.get(`${BASE_URL}/activities`)
        setFetchedData(data);
      }
  
      fetchData();
    }, [])

    const contextValues = {
        fetchedData,
        state,
        setState,
        setFetchedData,
    }
    
    return (
      <AppContext.Provider value={contextValues}>
        {props.children}
      </AppContext.Provider>
    );
  }

export function useAppContext() {
    return useContext(AppContext);
}
  
export default AppContextProvider;