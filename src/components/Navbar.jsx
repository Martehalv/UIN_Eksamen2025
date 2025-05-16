import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <p className="logo-home">
        <Link to="/">BillettLyst</Link>
      </p>
      <p className="categories">
        <Link to="/category/musikk">Musikk</Link>
        <Link to="/category/sport">Sport</Link>
        <Link to="/category/teater">Teater/Show</Link>
      </p>
      <p>
        <Link to="/dashboard">Logg inn</Link>
      </p>
    </nav>
  );
}
