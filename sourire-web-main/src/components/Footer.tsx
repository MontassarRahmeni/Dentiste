import { Phone, MapPin, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12 px-4">
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-heading text-lg font-semibold mb-3">Cabinet Dentaire</h3>
          <p className="text-primary-foreground/70 text-sm">Votre sourire, notre priorité. Des soins dentaires de qualité dans un cadre moderne.</p>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-3">Contact</h3>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +33 1 23 45 67 89</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 12 Rue de la Santé, Paris</p>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold mb-3">Horaires</h3>
          <div className="space-y-1 text-sm text-primary-foreground/70">
            <p>Lun-Ven : 08h - 18h</p>
            <p>Sam : 09h - 13h</p>
            <p>Dim : Fermé</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Cabinet Dentaire. Tous droits réservés.
      </div>
    </div>

    {/* Floating WhatsApp */}
    <a
      href="https://wa.me/33123456789"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent hover:bg-accent/90 rounded-full flex items-center justify-center shadow-elevated transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-accent-foreground" />
    </a>
  </footer>
);

export default Footer;
