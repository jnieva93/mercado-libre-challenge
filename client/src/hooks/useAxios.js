import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = url => {
  const [error, setError] = useState({});
  const [response, setResponse] = useState({});

  useEffect(() => {
    const fetchData = () => {
      axios.get(url)
        .then(res => setResponse(res.data))
        .catch(error => {
          console.error(error.response);
          setError(error.response);
        });
    };

    fetchData();
  }, [url]);

  return { response, error };
}

export default useAxios;
