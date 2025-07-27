import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // Frontend Skills
  { name: "ReactJs", level: 80, categorie: "frontend" },
  { name: "Angular 2+", level: 70, categorie: "frontend" },
  { name: "Blazor", level: 70, categorie: "frontend" },

  // Backend Skills
  { name: "C# .NET", level: 90, categorie: "backend" },

  // Mobile Skills
  { name: "Flutter", level: 90, categorie: "mobile" },

  // Database Skills
  { name: "MySQL", level: 80, categorie: "database" },
  { name: "MongoDB", level: 80, categorie: "database" },

  // DevOps Skills
  { name: "Docker", level: 50, categorie: "devops" },
  { name: "Kubernetes", level: 50, categorie: "devops" },

  // Cloud Skills
  { name: "AWS Cloud", level: 50, categorie: "cloud" },
  { name: "Microsoft Azure", level: 50, categorie: "cloud" },

  // Architecture
  { name: "MVC", level: 90, categorie: "architecture" },
  { name: "Microservices", level: 80, categorie: "architecture" },
  { name: "CQRS", level: 60, categorie: "architecture" },

  // Tools
  { name: "Git", level: 90, categorie: "tools" },

  // Methodologies
  { name: "Agile", level: 85, categorie: "methodology" },
  { name: "Merise", level: 85, categorie: "methodology" },

  // Other Technical Skills
  { name: "REST API", level: 80, categorie: "other" },
  { name: "Design Pattern", level: 80, categorie: "other" },
  { name: "Clean Code", level: 80, categorie: "other" },
  { name: "Tests unitaires", level: 60, categorie: "other" },  
];

const categories = [
  "toutes",
  "frontend",
  "backend",
  "mobile",
  "database",
  "devops",
  "cloud",
  "architecture",
  "tools",
  "methodology",
  "other",
];

export const SkillsSsection = () => {
  const [activeCategory, setActiveCAtegory] = useState(categories[0]);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === categories[0] || skill.categorie === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Compétences</span>
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
