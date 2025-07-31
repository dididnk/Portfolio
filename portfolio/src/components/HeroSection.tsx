import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="#"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Bonjour, je suis</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Emmanuel
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              NGBAME
            </span>
          </h1>

          <p>
            Fort d'une expérience en développement logiciel et fraîchement
            diplômé d'un Master en Cybersécurité & Cloud, je me spécialise dans
            l'intégration de la sécurité au cœur du cycle DevOps.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Mes réalisations
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Défilement</span>
        <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
      </div>
    </section>
  );
};
