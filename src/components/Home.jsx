import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const API_KEY = "5OYpmz3EGOfKvtU8vlLA3cC6ASbAeGgE"; //api nøkkel til ticketmaster
  const FESTIVAL_IDS = [ //liste med festival-id som vi ønsker data fra
    "K8vZ917_YJf", //NEON
    "K8vZ917oWOV", //Tons of Rock
    "K8vZ917K7fV", //Findings
    "K8vZ917bJC7", //Skeikampenfestivalen
  ];

  //Under her er ChatGPT. Kilder og prompt i Kilder
  const [festivals, setFestivals] = useState([]); //state som holer festivalene fra api
  const navigate = useNavigate(); //funksjonen som navigerer til en annen side

  const fetchFestival = async (id) => { //henter festival data med hjelp av IDene dems
    const url = `https://app.ticketmaster.com/discovery/v2/attractions/${id}.json?apikey=${API_KEY}`; //url som henter event data 
    const response = await fetch(url); //henter data fra ticketmaster api
    const data = await response.json(); // konvertererfra json til javascript  
    return data; //returnerer data
  };

  useEffect(() => { //kjører når komponenten lastes
    const fetchAllFestivals = async () => { //henter infor om alle festivalene
      const results = await Promise.all(
        FESTIVAL_IDS.map((id) => fetchFestival(id)) //henter data
      );
      setFestivals(results); //setter resultatene i state
    };
    fetchAllFestivals(); //kaller funksjonen for å hente festivalene
  }, []); //tom array for å kjøre kun en gang

  return (
    <div className="home-container">
      <h1>Festivaler 2025</h1>
      <div className="festival-list">
        {festivals.map((festival) => ( // mapper hentet festivaler og viser dem 
          <div
            key={festival.id} //unik key for hver festival
            className="festival-card"
            onClick={() => navigate(`/event/${festival.id}`)} //navigerer til EventPage for den valgte festivalen
          >
            <img
              src={festival.images?.[0]?.url} //bilde til festivalem 
              alt={festival.name}  //navn for bilde
              className="festival-image"
            />
            <h3>{festival.name}</h3> {/* navn på festivalen */}
            <button type="button">Les mer om {festival.name}</button> {/* knapp for å lese mer */}
          </div>
        ))}
      </div>
    </div>
  );
}


