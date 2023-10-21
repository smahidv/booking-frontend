import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (baseUrl, endpoint) => { // Accept `baseUrl` as a prop
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${baseUrl}/${endpoint}`); // Use baseUrl in the URL
        setData(res.data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [baseUrl, endpoint]); // Include baseUrl and endpoint in the dependencies array

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}/${endpoint}`); // Use baseUrl in the URL
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
