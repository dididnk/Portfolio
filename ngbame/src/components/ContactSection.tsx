import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, omnis.
          Soluta laborum, accusamus aut ducimus omnis dicta natus magnam
          mollitia!
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
                  <h4 className="text-lg font-semibold">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Strasbourg, France
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs text-center">
            <h3 className="font-medium mb-4"> Connect With Me</h3>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/emmanuel-ngbame-04b33b1b7/"
                target="_blank"
              >
                <Linkedin />
              </a>
              <a href="#" target="_blank">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
