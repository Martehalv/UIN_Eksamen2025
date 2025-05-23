import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventCard from "./EventCard";

export default function CategoryPage() {
  const { slug } = useParams(); //Slug (brukes til å vises hvilken kategori brukeren ser på)
  const [events, setEvents] = useState([]); //Eventene våre fra API
  const [wishlist, setWishlist] = useState([]); // Ønskelisten for eventer

  const categoryKeywords = { //Nøkkelord for å leite i API
    musikk: "music",
    sport: "sports",
    teater: "theatre",
  };

  const fetchEventsByCategory = async () => { //Hente eventer basert på nøkkel ord over
    const API_KEY = "5OYpmz3EGOfKvtU8vlLA3cC6ASbAeGgE";
    const keyword = categoryKeywords[slug] || slug; 

    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&countryCode=NO&size=20&apikey=${API_KEY}`
    );

    const data = await response.json();
    setEvents(data._embedded?.events || []); //Embedded finnes her: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
  };

  //Legger til eller fjerner eventet fra ønskelisten 
  const handleToggleWishlist = (event) => {
    setWishlist((prevWishlist) => {
      //Hvis eventet allerede er i ønskelisten, fjern det
      if (prevWishlist.some((e) => e.id === event.id)) { //some sjekker om event.id allerede finnes i ønskelisten. Kilde://https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
        return prevWishlist.filter((e) => e.id !== event.id);
      }
      //Hvis eventet ikke er i ønskelisten, legg det til
      return [...prevWishlist, event];
    });
  };

  //Kjører når komponenten renderes
  useEffect(() => {
    fetchEventsByCategory(); //Henter Eventer basert på kategori 
  }, [slug]); 

  return (
    <section className="category-section">
      <h1>Attraksjoner i {slug}</h1> {/*Overskrift og slug for å få dynamisk navn*/}
      <ul className="event-grid">  {/*Liste med navn*/}
        {events.map((event) => ( //Rendrer EventCard komponenten for hvert event og sender info til benevnte ting 
          <EventCard
            key={event.id}
            event={event}
            isWishlisted={wishlist.some((e) => e.id === event.id)}
            onToggleWishlist={handleToggleWishlist}
          />
        ))}
      </ul>

    <footer>
        <p>Levert av {" "}
            <a href="https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/"> {/*Gjør teksten til en link*/}
            TicketMaster Discovery API 
            </a>
        </p>
    </footer>
    </section>
  );
}
