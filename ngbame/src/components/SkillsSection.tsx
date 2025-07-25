import { act, useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend Skills
  { name: "ReactJs", level: 85, categorie: "frontend" },
  { name: "Angular 2+", level: 80, categorie: "frontend" },
  { name: "Blazor", level: 85, categorie: "frontend" },
  { name: "Aurelia.js", level: 70, categorie: "frontend" },
  { name: "Django", level: 65, categorie: "frontend" },

  // Backend Skills
  { name: "C# .NET", level: 90, categorie: "backend" },
  { name: "Python", level: 75, categorie: "backend" },
  { name: "Java", level: 70, categorie: "backend" },
  { name: "NodeJs", level: 75, categorie: "backend" },

  // Mobile Skills
  { name: "Flutter", level: 80, categorie: "mobile" },
  { name: "Kotlin", level: 70, categorie: "mobile" },

  // IoT Skills
  { name: "Arduino", level: 65, categorie: "iot" },
  { name: "C", level: 60, categorie: "iot" },
  { name: "C++", level: 60, categorie: "iot" },

  // Database Skills
  { name: "MySQL", level: 80, categorie: "database" },
  { name: "PostgreSQL", level: 75, categorie: "database" },
  { name: "MariaDB", level: 75, categorie: "database" },
  { name: "MongoDB", level: 70, categorie: "database" },
  { name: "SQLite", level: 65, categorie: "database" },

  // DevOps Skills
  { name: "Docker", level: 70, categorie: "devops" },
  { name: "Kubernetes", level: 65, categorie: "devops" },
  { name: "Ansible", level: 60, categorie: "devops" },
  { name: "Vagrant", level: 60, categorie: "devops" },
  { name: "GitOps", level: 60, categorie: "devops" },

  // Cloud Skills
  { name: "AWS Cloud", level: 70, categorie: "cloud" },

  // Security Skills
  { name: "Gestion des vulnérabilités", level: 65, categorie: "cybersecurity" },
  {
    name: "Sensibilisation à la sécurité de l’information",
    level: 70,
    categorie: "cybersecurity",
  },

  // Architecture
  { name: "MVC", level: 85, categorie: "architecture" },
  { name: "Microservices", level: 75, categorie: "architecture" },
  { name: "Oignon", level: 70, categorie: "architecture" },
  { name: "CQRS", level: 70, categorie: "architecture" },
  { name: "DDD", level: 70, categorie: "architecture" },

  // Tools
  { name: "Git", level: 90, categorie: "tools" },
  { name: "Jira", level: 80, categorie: "tools" },
  { name: "Azure DevOps", level: 75, categorie: "tools" },
  { name: "Pack Office", level: 80, categorie: "tools" },

  // Methodologies
  { name: "Agile", level: 85, categorie: "methodology" },
  { name: "Merise", level: 70, categorie: "methodology" },

  // Other Technical Skills
  { name: "REST API", level: 85, categorie: "other" },
  { name: "Design Pattern", level: 80, categorie: "other" },
  { name: "Clean Code", level: 80, categorie: "other" },
  { name: "Tests unitaires", level: 75, categorie: "other" },
];

const categories = [
  "all",
  "frontend",
  "backend",
  "mobile",
  "iot",
  "database",
  "devops",
  "cloud",
  "cybersecurity",
  "architecture",
  "tools",
  "methodology",
  "other",
];

export const SkillsSsection = () => {
  const [activeCategory, setActiveCAtegory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.categorie === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCAtegory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="tet-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
