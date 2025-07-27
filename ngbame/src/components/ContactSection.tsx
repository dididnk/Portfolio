import { Linkedin, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Entrer en <span className="text-primary">Contact</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionné par les défis techniques et l'innovation, je suis ouvert aux
          opportunités qui allient développement et sécurité. Vous avez un
          projet ambitieux, une problématique complexe ou simplement envie
          d'échanger sur les bonnes pratiques DevSecOps ? Contactez-moi !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a
                    href="mailto:ngbamedistingue@yahoo.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ngbamedistingue@yahoo.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold">Mobilité</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Basé en Alsace, ouvert à Paris/Bordeaux - et flexible pour
                    des projets inspirants ailleurs en France.
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs text-center">
            <h3 className="font-medium mb-4"> On se connecte ?</h3>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/emmanuel-ngbame-04b33b1b7/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={60}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
