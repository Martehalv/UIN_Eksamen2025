import { Link } from "react-router-dom";

export default function Nav({ isLoggedIn }) {
  return (
    <nav className="navigation">
      <p className="logo-home">
        <Link to="/">BillettLyst</Link> {/*Link til hjemmesiden*/}
      </p>
      <p className="categories">
        <Link to="/category/musikk">Musikk</Link> {/*Link til categorypage musik*/}
        <Link to="/category/sport">Sport</Link> {/*Link til categorypage sport*/}
        <Link to="/category/teater">Teater/Show</Link> {/*Link til categorypage teater*/}
      </p>
      <p>
        {/*Se om brukeren er logget inn eller ikke, velger tittel ut i fra det. */}
        <Link to="/dashboard">{isLoggedIn ? "Min side" : "Logg inn"}</Link>
      </p>
    </nav>
  );
}
