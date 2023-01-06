import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url);
      setFetchedData(data);
    }

    fetchData();
  }, [url])

  return fetchedData;
}

export default useFetchData;