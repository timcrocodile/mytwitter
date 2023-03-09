import { useRef, useEffect } from "react";
import "./index.css";

// const CustomTextInput = () => {
//   const textInput = useRef();

//   const focusTextInput = () => textInput.current.focus();

//   return (
//     <>
//       <input type="text" ref={textInput} />
//       <button onClick={focusTextInput}>Focus the text input</button>
//     </>
//   );
// };

// export default CustomTextInput;

const Funzia = () => {
  // create a ref
  const divElement = useRef();

  // trigger on the first render of the component
  useEffect(() => {
    // get the height of the div element
    console.log("The height of the div is: ", divElement.current.offsetHeight);
  }, []);

  return (
    <section ref={divElement} className="altezza">
      <h1>Learn about useRef!</h1>
    </section>
  );
};

export default Funzia;
