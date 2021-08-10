import React, { useState } from "react";

const useHttp = async (requestConfig, applyData) => {

    const { url, method, body} = requestConfig;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const sendRequest = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, {
            method,
            headers,
            body: JSON.stringify(body)
          });
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();
        applyData(data);

      } catch (err) {
        setError(err.message || 'Something went wrong!');
      }
      setIsLoading(false);
    };
    
    return {
        isLoading,
        error,
        sendRequest
    }
}

export default useHttp;