//Jeg starter med at importere useEffect og useState, som er react-hooks.
import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/todos";

const Fetch = () => {
//Jeg deklarerer, via useState, en state-variabel - apiData og sætter den til et tomt array. Dette er dens aktuelle værdi,
//som react vil huske og som jeg skal bruge som en 'pakke' til at returnere mine data i.

  const [apiData, setApiData] = useState([]);

//useEffect lader komponentet køre sideeffekter efter det er rendered. Det betyder at den husker den tidligere
//værdi, indtil den bliver bedt om at fortsætte.
  useEffect(() => {
//Jeg laver et promise-baseret fetch til et REST-API, for at hente en todo-liste.
//(promise: Jeg forventer at få et response på min request) 
//(REST: Representational State Transfer: Tillader to programmer at kommunikere med hinanden.)
    fetch(URL)
//Efter min fetch, skal jeg have et response som skal være i json-format. 
      .then((res) => res.json())
//Det json jeg får tilbage, er min todo-liste, som også er min nye state. Derfor bruger jeg 'setApiData' til
//at opdatere min forrige state til den nye. Jeg fylder altså mine data ind i mit tomme array.
      .then((data) => {
        setApiData(data.todos.slice(0, 10));
      })
//Hvis min fetch fejler, vil jeg gerne have min error vist i consollen.
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <article>
     <h2>To-Dos</h2> 

    <ol>
      {apiData.map((item, i) => (
        <li key={i}>{item.todo}</li>
      ))}
    </ol> 
    
    </article>
    
  );
};

export default Fetch;