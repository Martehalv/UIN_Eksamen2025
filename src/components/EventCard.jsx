export default function EventCard({ event, isWishlisted, onToggleWishlist }) {
  const image = event.images?.[0]?.url; //En const som prøver å hente bilde-url fra event.images, ? sjekker at "images" finnes først

  return (
    <li className="event-card"> {/*Bare navn på komponenten*/}
      {<img src={image} alt={event.name} width="200" />} {/*Viser bildet, lager alternativ tekst*/}
      
      <h3>{event.name}</h3> {/* Viser navn på event */}
      
      {/*Sette icon under bilde kilde: https://legacy.reactjs.org/docs/handling-events.html */}
      <button onClick={() => onToggleWishlist(event)}> {/*Når knappen trykkes skjer endring*/}
        {isWishlisted ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>  //endrer ikon når den trykkes på
        )}
      </button>
    </li>
  );
}