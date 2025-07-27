import {
  Brain,
  Code,
  Container,
  EarthLock,
  Handshake,
  Search,
} from "lucide-react";

export const AboutSection = () => {
  const title: string =
    "Développeur Logiciel | Expert Cybersécurité Cloud | Aspirant DevSecOps";
  const description: string =
    "Passionné par le développement Full-Stack (Blazor, React) et Mobile (Flutter, Kotlin), j'ai renforcé mes compétences avec un Master en Cybersécurité & Cloud. ";
  const description2: string =
    "Je me spécialise désormais en DevSecOps pour intégrer la sécurité dès la conception, en automatisant les processus sans compromettre performance et conformité.";

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À Propos de <span className="text-primary">Moi</span>
        </h2>

        <div className="center grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">{title}</h3>

            <p className="text-muted-foreground">{description}</p>

            <p className="text-muted-foreground">{description2}</p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button text-center">
                Entrer en contact
              </a>

              <a
                href="/cv/cv.pdf"
                className="text-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Télécharger le CV
              </a>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Développement</h4>
                    <p className="text-muted-foreground italic mb-1 mt-1">
                      Polyvalent - FullStack/Mobile/Desktop
                    </p>
                    <p className="text-muted-foreground">
                      Maîtrise des écosystèmes JavaScript, C# et Dart pour créer
                      des applications cross-platform performantes (React,
                      Blazor, Flutter). Capacité à m'adapter rapidement aux
                      nouveaux frameworks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <EarthLock className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Sécurité</h4>
                    <p className="text-muted-foreground italic mb-1 mt-1">
                      Débutant certifié - En pleine montée en compétence
                    </p>
                    <p className="text-muted-foreground">
                      Nouveau diplômé en cybersécurité cloud, j'intègre les
                      bonnes pratiques OWASP et apprends à implémenter des tests
                      SAST/DAST dans les pipelines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Container className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">DevOps</h4>
                    <p className="text-muted-foreground italic mb-1 mt-1">
                      Aspirant autodidacte
                    </p>
                    <p className="text-muted-foreground">
                      J'automatise progressivement les déploiements (GitHub
                      Actions) et explore les outils comme Docker et Kubernetes
                      pour améliorer la qualité des livraisons.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Handshake className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Collaboration</h4>
                    <p className="text-muted-foreground italic mb-1 mt-1">
                      Team Player orienté solutions
                    </p>
                    <p className="text-muted-foreground">
                      Expérience en méthodologies agiles. J'aime documenter mon
                      travail et partager des retours constructifs pour faire
                      avancer les projets collectivement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Résolution Problèmes
                    </h4>
                    <p className="text-muted-foreground italic mb-1 mt-1">
                      Esprit analytique
                    </p>
                    <p className="text-muted-foreground">
                      Je décortique les challenges techniques sous
                      plusieurs angles avant de proposer des solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Search className="h-6 w-6 text-primary" />
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Apprentissage Continu
                    </h4>
                    <p className="text-muted-foreground italic mb-1 mt-1">
                      Curiosité proactive
                    </p>
                    <p className="text-muted-foreground">
                      Veille technologique active.
                      J'expérimente régulièrement de nouvelles technologies via
                      des projets personnels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
