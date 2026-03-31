import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sophie L.", text: "Un cabinet exceptionnel ! Le Dr. Martin est très professionnel et à l'écoute. Je recommande vivement.", rating: 5 },
  { name: "Mohamed K.", text: "Excellent accueil et soins de qualité. Le détartrage a été rapide et indolore. Merci beaucoup !", rating: 5 },
  { name: "Claire D.", text: "J'avais très peur du dentiste, mais l'équipe m'a mise en confiance. Le cabinet est très moderne et propre.", rating: 5 },
  { name: "Pierre M.", text: "Implant dentaire réalisé avec succès. Résultat parfait et suivi impeccable. Je suis très satisfait.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="avis" className="section-padding bg-dental-warm">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Témoignages</p>
        <h2 className="section-title">Ce que disent nos patients</h2>
        <p className="section-subtitle">La satisfaction de nos patients est notre plus grande récompense.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow">
            <Quote className="h-8 w-8 text-primary/20 mb-3" />
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-semibold text-foreground text-sm">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
