import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oups ! Cette page n’existe pas.</p>
      <Link
        to="/"
        className="cosmic-button"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
};