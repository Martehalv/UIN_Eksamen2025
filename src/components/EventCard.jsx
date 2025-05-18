export default function EventCard({ event, isWishlisted, onToggleWishlist }) {
  const image = event.images?.[0]?.url;

  return (
    <li className="event-card">
      {<img src={image} alt={event.name} width="200" />}
      
      <h3>{event.name}</h3> {/* Viser navn på event */}
      
      {/*Sette icon under bilde kilde: https://legacy.reactjs.org/docs/handling-events.html */}
      <button onClick={() => onToggleWishlist(event)}>
        {isWishlisted ? (
          <i className="fa-solid fa-heart"></i>
        ) : (
          <i className="fa-regular fa-heart"></i>  //endrer ikon når den trykkes på
        )}
      </button>
    </li>
  );
}