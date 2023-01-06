import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import useFetchData from './hooks/fetchData';
import MOCK_DATA from '../src/utils/testData.json'

const BASE_URL = 'https://cerulean-marlin-wig.cyclic.app'

const defaultValue = {};
const AppContext = createContext(defaultValue);

// create the provider
function AppContextProvider(props) {
    // const data = useFetchData(`${BASE_URL}/activities`);
    const fetchedData = MOCK_DATA;

    const arrayOfObjects = fetchedData.map(item => ({
      direction: item.direction,
      from: item.from,
      to: item.to,
      via: item.via,
      duration: item.duration,
      callType: item.call_type,
      isArchived: item.is_archived,
      id: item.id,
      createdAt: item.created_at
    }));
    
    const contextValues = { 
      data: arrayOfObjects || []
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