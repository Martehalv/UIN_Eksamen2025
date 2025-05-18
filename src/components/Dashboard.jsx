import { useState } from "react";

export default function Dashboard() {
  const [loggedIn, isLoggedIn] = useState(false);

  const buttonClick = (event) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event hjulpet litt med funksjonen.
    event.preventDefault(); //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault hjulpet med event.preventDefault()
    const username = event.target.elements.username.value.trim(); // https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks brukt til å bruke useState og input funksjon sammen.
    if (username !== "") {
      isLoggedIn(true);
    }
  };

  return (
    <section className="loggin">
      <h1>{loggedIn ? "Min side" : "Logg inn"}</h1>

      {!loggedIn && (
        <form onSubmit={buttonClick}>
          {" "}
          {/*https://www.w3schools.com/jsref/event_onsubmit.asp hjelpet med onsubmit. */}
          <label>Brukernavn: </label>
          <input type="text" name="username" />
          <button type="submit">Logg inn</button>
        </form>
      )}
    </section>
  );
}
