import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3000";

export default function useFetch(value) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(BASE_URL + "/" + value);
      if (!response.ok) {
        throw {
          msg: "fail to fecth your data",
        };
      }

      const data = await response.json();

      setData(data);
    } catch (error) {
      console.log("======================");
      console.log(error);
      console.log("======================");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isLoading,
  };
}
