import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sonia T.", text: "Dr Khedher est très professionnel et patient. Il explique chaque détail et prend son temps. Cabinet impeccable !", rating: 5 },
  { name: "Karim B.", text: "J'avais une douleur dentaire importante. Traitement rapide et efficace. Je me suis senti en confiance.", rating: 5 },
  { name: "Fatma R.", text: "Le cabinet est très moderne et propre. Le Dr Mouwahed est rassurant et méticuleux. Je recommande vivement.", rating: 4 },
  { name: "Youssef L.", text: "Extraction des dents de sagesse sans douleur. Explications claires avant et après. Service exceptionnel.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="avis" className="section-padding bg-dental-warm">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Avis patients</p>
        <h2 className="section-title">4.7/5 ⭐ (48 avis)</h2>
        <p className="section-subtitle">Nos patients apprécient notre professionnalisme, patience et cabinet moderne.</p>
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
