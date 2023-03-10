// import TrendList from "../trendList";
// import "./index.css";

// import { useEffect, useRef, useState } from "react";

// const SideTrends = () => {
//tramite use ref riesco ad accedere alle proprietà di 2 elementi del dom,
//da notare che una volta lanciata l'Hook useRef non cambia al variare
//delle dimensioni degli elementi, infatti per fare si che ci dica la nuova
// dimensione degli elementi della pagina al variare delle dimensione
//bisogna ricaricare la pagina

//questo perchè useRef è una funzione che ci ritorna un oggetto Ref mutabile
//che però non cambierà per tutta la vita del componente (che quindi al ricaricare della pagina cambia, perchè la vecchia vita del componente non c'è più)

//questa è stata l'applicazione di useRef che meglio mi ha fatto capire il suo funzionamento
//   const domElement = useRef();

//   const inputElement = useRef();

//   const onHandleclick = () => alert("ciao!");

//   useEffect(() => {
//     console.log(
//       "The width of the grey div in SideTrends is: ",
//       domElement.current.offsetWidth
//     );
//   }, []);

//   useEffect(() => {
//     console.log(
//       "The width of the grey div in SideTrends is: ",
//       domElement.current.offsetWidth,
//       "and the height is",
//       domElement.current.offsetHeight
//     );
//   }, []);

//   useEffect(() => {
//     console.log(
//       "The height of the input section in SideTrends is: ",
//       inputElement.current.offsetHeight
//     );
//   }, []);

//   return (
//     <div className="SideTrends" ref={domElement}>
//       <input type="text" placeholder="what's trending?" ref={inputElement} />

//       <TrendList />
//       <button onClick={onHandleclick}>cliccami</button>
//     </div>
//   );
// };

// export default SideTrends;

import { useState } from "react";
import TrendList from "../trendList";
import "./index.css";

const SideTrends = () => {
  const onHandleSubmit = (e) => {
    e.preventDefault();
  };
  // setTrendsInputValue(TrendsInputValue);
  const [TrendsInputValue, setTrendsInputValue] = useState("");

  return (
    <div className="SideTrends">
      <form onSubmit={onHandleSubmit}>
        {/* <form onSubmit="ciao"> */}
        <input
          type="text"
          placeholder="what's trending?"
          value={TrendsInputValue}
          onChange={(e) => setTrendsInputValue(e.target.value)}
          required
        />
      </form>
      <TrendList TrendsInputValue={TrendsInputValue} />
    </div>
  );
};

export default SideTrends;
