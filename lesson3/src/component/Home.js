import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bienvenue</h1>
      <nav>
        <Link to="/login">Se connecter</Link>
      </nav>
    </div>
  );
}