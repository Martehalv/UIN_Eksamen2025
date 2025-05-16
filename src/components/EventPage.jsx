import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EventPage() {
  // henter id parameteren fra URLen
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  const getEvent = async () => {
    const API_KEY = "5OYpmz3EGOfKvtU8vlLA3cC6ASbAeGgE";

    //Gjøre en fetch til Api med gitt Id
    fetch(
      `https://app.ticketmaster.com/discovery/v2/attractions/${id}.json?apikey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((error) =>
        //lage en feilmelding tilfelle det skjer noe feil under fetch
        console.error("Det skjedde noe rart ved henting av event")
      );
  };

  useEffect(() => {
    getEvent();
    console.log(event);
  }, [id]);

  const image = event?.images?.[0]?.url;

  // vise event informasjonen via return
  return (
    <section className="eventdetaljer">
      {event ? (
        <>
          <h2>{event.name}</h2>
          {image && <img src={image} width="300" />}
        </>
      ) : (
        <p>Later inn...</p>
      )}
    </section>
  );
}
