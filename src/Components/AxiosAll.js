import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosAll = () => {
  const [quote, setQuote] = useState([]);
  const [todo, setTodo] = useState([]);

//Jeg bruger axios til at fetche fra to forskellige endpoints. Dernæst deklarerer jeg en variabel 'controller',
//så jeg kan bruge den indbyggede cleanup-function 'new AbortController' for at rydde op i min memory efter fetchen.
//Derved stopper funktionen med at fetche når jeg navigerer væk og jeg undgår at browseren crasher pgs for meget data.

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const request1 = axios.get("https://dummyjson.com/todos");
    const request2 = axios.get(`https://dummyjson.com/quotes`);

    axios
      .all([request1, request2], {
        signal: signal,
      })
      .then(
        axios.spread((res1, res2) => {
          setTodo(res1.data.todos.sort().slice(0, 10));
          setQuote(res2.data.quotes.slice(0, 10));
        })
      )
      .catch((error) => {
        console.error(error);
      });

    return () => {
      // cancel the request before component unmounts
      controller.abort();
    };
  }, []);

  return (
    <article>
    <div>
      <h2>AxiosAll</h2>
      <div>
        <h2>Loop igennem Quotes</h2>
        <ol>
          {quote.map((item, i) => (
            <li key={i}>{item.quote}</li>
          ))}
        </ol>
      </div>
      <div>
        <h2>Loop igennem To-Dos</h2>
        <ol>
          {todo.map((item, i) => (
            <li key={i}>{item.todo}</li>
          ))}
        </ol>
      </div>
    </div></article>
  );
};

export default AxiosAll;