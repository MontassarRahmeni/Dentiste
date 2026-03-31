import { Stethoscope, Sparkles, Heart, Wrench, AlignVerticalSpaceAround, Clock } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Soins dentaires généraux", desc: "Traitement des caries, dévitalisations et restaurations pour une santé bucco-dentaire optimale." },
  { icon: Sparkles, title: "Détartrage et nettoyage", desc: "Nettoyage professionnel pour éliminer le tartre et prévenir les maladies parodontales." },
  { icon: Heart, title: "Traitement des douleurs dentaires", desc: "Diagnostic et traitement rapide des douleurs pour soulager votre inconfort." },
  { icon: Wrench, title: "Extraction des dents de sagesse", desc: "Extraction experte des dents de sagesse avec des techniques modernes et peu douloureuses." },
  { icon: AlignVerticalSpaceAround, title: "Orthodontie", desc: "Redressement des dents avec des solutions modernes pour un sourire harmonieux." },
  { icon: Clock, title: "Sur rendez-vous uniquement", desc: "Nous prenons le temps nécessaire pour chaque patient afin d'assurer des soins de qualité." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-dental-warm">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Nos services</p>
        <h2 className="section-title">Soins dentaires professionnels à Tunis</h2>
        <p className="section-subtitle">Dr Khedher Mouwahed propose une gamme complète de soins dentaires avec patience et professionnalisme.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
              <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
