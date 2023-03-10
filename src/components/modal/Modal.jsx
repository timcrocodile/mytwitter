import "./index.css";

const Modal = () => {
  return (
    <div className="pippo">
      <div className="paperinocontainer">
        <p>scrivi il tuo tweet</p>
        <form action="" className="paperino">
          <input type="text" placeholder="dai un titolo al post" />
          <input type="text" placeholder="scrivo qui il tuo messaggio" />
          <input type="number" placeholder="metti l'id" />
          <input type="submit" value="invia il tweet" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
