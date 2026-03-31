import { ShieldCheck, Award, HeartPulse, Sparkles } from "lucide-react";
import dentistImg from "@/assets/dentist-portrait.jpg";

const features = [
  { icon: Award, title: "+15 ans d'expérience", desc: "Un savoir-faire reconnu dans les soins dentaires." },
  { icon: Sparkles, title: "Soins modernes", desc: "Équipements de dernière génération pour un confort optimal." },
  { icon: ShieldCheck, title: "Hygiène irréprochable", desc: "Protocoles stricts de stérilisation et de sécurité." },
  { icon: HeartPulse, title: "Écoute & confiance", desc: "Un accompagnement personnalisé pour chaque patient." },
];

const AboutSection = () => (
  <section id="apropos" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-elevated">
            <img src={dentistImg} alt="Dr. Martin - Chirurgien-dentiste" loading="lazy" width={800} height={800} className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl px-6 py-3 shadow-soft font-heading text-lg font-semibold">
            Dr. Martin
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">À propos</p>
            <h2 className="section-title">Un dentiste à votre écoute</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Le Dr. Martin, chirurgien-dentiste diplômé, vous accueille dans un cadre moderne et chaleureux. Passionné par son métier, il met tout en œuvre pour offrir des soins de qualité, adaptés aux besoins de chaque patient.
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
