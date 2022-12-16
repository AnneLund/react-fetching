import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
    
        const fetchData = async () => {
        
          try {
            const response = await axios.get('https://dummyjson.com/quotes', {
                signal: signal,
              });
            setData(response.data.quotes.slice(0, 10));
          } catch (error) {
            console.log(error.message);
          }
        };
    
        fetchData();

        return () => {
          // cancel the request before component unmounts
          controller.abort();
        };
      }, []);
    
  return (
    <article>
    <h2>Quotes</h2> 

   <ol>
     {data.map((item, i) => (
       <li key={i}>{item.quote}</li>
     ))}
   </ol> 
   </article>
  )
}

export default Axios