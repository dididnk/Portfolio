import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SportVille",
    description: "Application mobile sportive",
    image: "/projects/project.png",
    tags: [
      "Flutter",
      "Firebase",
      "API REST",
      "Google Cloud",
      "Github",
      "React",
      "OVH",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Mon portfolio personnel",
    image: "/projects/project.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce",
    description: "Application e-commerce",
    image: "/projects/project.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Blog",
    description: "Application de blog",
    image: "/projects/project.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Chat App",
    description: "Application de chat en temps réel",
    image: "/projects/project.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Weather App",
    description: "Application météo",
    image: "/projects/project.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          officia facilis corrupti rerum sunt dolore omnis aperiam. Deserunt?
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
                  className="w-full h-full object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border"
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
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground /80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
