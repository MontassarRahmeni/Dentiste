import { ShieldCheck, Award, HeartPulse, Clock } from "lucide-react";
import dentistImg from "@/assets/dentist-portrait.jpg";

const features = [
  { icon: Award, title: "Professionnalisme", desc: "Expertise reconnue et approche méthodique pour des soins de qualité." },
  { icon: HeartPulse, title: "Patience et écoute", desc: "Prend le temps d'expliquer chaque geste pour vous rassurer." },
  { icon: ShieldCheck, title: "Cabinet moderne et propre", desc: "Équipements modernes dans un environnement impeccablement hygiénique." },
  { icon: Clock, title: "Confiance et sérénité", desc: "Construit une relation de confiance avec chaque patient." },
];

const AboutSection = () => (
  <section id="apropos" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={dentistImg} alt="Dr Khedher Mouwahed - Dentiste à Tunis" loading="lazy" width={800} height={800} className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-6 py-3 shadow-soft font-heading text-lg font-semibold">
            Dr Khedher Mouwahed
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">À propos</p>
            <h2 className="section-title">Un dentiste patient et professionnel</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Le Dr Khedher Mouwahed vous accueille dans son cabinet moderne du Passage à Tunis. Professionnel et particulièrement patient, il prend le temps d'expliquer chaque étape du traitement pour instaurer une relation de confiance. Son cabinet propre et équipé des dernières technologies garantit des soins dentaires en toute sérénité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors">
                <f.icon className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{f.title}</p>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
