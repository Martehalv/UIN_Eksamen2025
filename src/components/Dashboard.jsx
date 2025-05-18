import { useState } from "react";

export default function Dashboard() {
  //Bruker useState til å finne ut om brukeren er logget inn eller ikke
  const [isloggedIn, setIsLoggedIn] = useState(false);

  //Funksjon som settes i gang når brukeren trykker på logg inn (uten at siden lastes inn på nytt: preventDefault)
  const buttonClick = (event) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event hjulpet litt med funksjonen.
    event.preventDefault(); //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault hjulpet med event.preventDefault()
    //Henter brukernavnet i input feltet, og fjerner mellomrom
    const username = event.target.elements.username.value.trim(); // https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks og https://stackoverflow.com/questions/73402093/react-form-state-and-trimming-value er brukt til å bruke useState, trim() og input funksjon sammen.
    //Hvis input feltet ikke er tomt, blir isLoggedIn til true
    if (username !== "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <section className="loggin">
      {/*Bytter overskrift i forhold til om man er logget inn eller ikke */}
      <h1>{isloggedIn ? "Min side" : "Logg inn"}</h1>

      {/*Skjemaet blir bare vist hvis brukeren ikke er logget inn. */}
      {!isloggedIn && (
        <form onSubmit={buttonClick}>
          {" "}
          {/*https://www.w3schools.com/jsref/event_onsubmit.asp hjulpet med onsubmit. */}
          <label>Brukernavn: </label>
          <input type="text" name="username" />
          <button type="submit">Logg inn</button>
        </form>
      )}
    </section>
  );
}
