import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-dental.jpg";

const HeroSection = () => (
  <section id="accueil" className="relative min-h-screen flex items-center pt-16">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Cabinet dentaire moderne" width={1920} height={1080} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
    </div>

    <div className="relative container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-2xl space-y-6">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm">
          🦷 Dr Khedher Mouwahed - Dentiste à Tunis
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
          Soulagez vos douleurs<br />retrouvez le sourire
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
          Un professionnel patient et attentif qui explique chaque geste. Cabinet moderne et propre pour des soins dentaires en toute confiance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-elevated" asChild>
            <a href="tel:+2162271531">
              <MessageCircle className="mr-2 h-5 w-5" />
              Prendre rendez-vous
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="tel:+2162271531">
              <Phone className="mr-2 h-5 w-5" />
              22 271 531
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
