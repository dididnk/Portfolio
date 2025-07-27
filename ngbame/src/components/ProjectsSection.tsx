import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio",
    description:
      "Ce site même - une vitrine ReactJS de mes compétences en développement moderne.",
    image: "/projects/project.png",
    tags: [
      "React.js (Vite)",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    demoUrl: "#",
    githubUrl: "#",
    isPublic: false,
  },
  {
    id: 2,
    title: "SportVille",
    description:
      "Application mobile innovante qui connecte les sportifs de tous niveaux autour d'expériences locales partagées.",
    image: "/projects/project2.png",
    tags: [
      "Flutter",
      "Firebase",
      "Google Cloud",
      "ReactJs",
      "REST Api",
      "BaaS",
    ],
    demoUrl: "https://www.sport-ville.fr/",
    githubUrl: "#",
    isPublic: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Me <span className="text-primary">Projets</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Les projets présentés ici sont aboutis ou en phase finale de
          développement. Pour découvrir mes expérimentations en cours et
          contributions open-source, n'hésitez pas à visiter mon GitHub.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col items-center text-center"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="capitalize px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground /80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.isPublic && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/dididnk"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mon Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
