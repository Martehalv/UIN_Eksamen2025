export default function Api() {
  const fetchEvents = async () => {
    const API_KEY = "5OYpmz3EGOfKvtU8vlLA3cC6ASbAeGgE";
    const response = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=festival&countryCode=NO&size=100&apikey=${API_KEY}`
    );
  };
}
