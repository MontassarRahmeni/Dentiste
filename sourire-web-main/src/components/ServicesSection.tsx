import { Stethoscope, Sparkles, Sun, Wrench, AlignVerticalSpaceAround, Siren } from "lucide-react";

const services = [
  { icon: Stethoscope, title: "Soins dentaires", desc: "Traitement des caries, dévitalisations et restaurations pour une santé bucco-dentaire optimale." },
  { icon: Sparkles, title: "Détartrage", desc: "Nettoyage professionnel pour éliminer le tartre et prévenir les maladies parodontales." },
  { icon: Sun, title: "Blanchiment des dents", desc: "Techniques avancées pour un sourire éclatant et naturel en toute sécurité." },
  { icon: Wrench, title: "Implants dentaires", desc: "Remplacement durable des dents manquantes grâce aux implants de dernière génération." },
  { icon: AlignVerticalSpaceAround, title: "Orthodontie", desc: "Alignement dentaire avec des solutions modernes, discrètes et efficaces." },
  { icon: Siren, title: "Urgences dentaires", desc: "Prise en charge rapide des douleurs, traumatismes et urgences dentaires." },
];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-dental-warm">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Nos services</p>
        <h2 className="section-title">Des soins complets pour toute la famille</h2>
        <p className="section-subtitle">Nous proposons une gamme complète de soins dentaires pour répondre à tous vos besoins.</p>
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
