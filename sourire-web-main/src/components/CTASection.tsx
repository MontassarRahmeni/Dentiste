import { Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section id="rendez-vous" className="section-padding bg-primary">
    <div className="container mx-auto text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
          <Heart className="h-4 w-4 text-primary-foreground" />
          <span className="text-primary-foreground text-sm font-medium">Urgence dentaire ?</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground leading-tight">
          Prenez rendez-vous dès aujourd'hui
        </h2>
        
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          Ne laissez pas les douleurs dentaires gâcher votre quotidien. Dr Khedher Mouwahed vous offre des soins rapides et efficaces pour retrouver le sourire en toute confiance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated text-lg px-8 py-6" asChild>
            <a href="tel:+2162271531">
              <Phone className="mr-2 h-5 w-5" />
              Appeler maintenant : 22 271 531
            </a>
          </Button>
        </div>
        
        <p className="text-primary-foreground/60 text-sm">
          Cabinet dentaire moderne • 09 Av. Habib Thameur, Le Passage, Tunis • Sur rendez-vous uniquement
        </p>
      </div>
    </div>
  </section>
);

export default CTASection;
