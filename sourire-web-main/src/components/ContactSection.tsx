import { useState } from "react";
import { MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    toast.success("Merci ! Votre message a bien été envoyé.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-dental-warm">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Contact</p>
          <h2 className="section-title">Contactez-nous</h2>
          <p className="section-subtitle">Une question ? N'hésitez pas à nous contacter par téléphone, WhatsApp ou via le formulaire ci-dessous.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* CTA buttons */}
          <div className="space-y-6 flex flex-col justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full justify-center shadow-elevated" asChild>
              <a href="https://wa.me/33123456789" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Écrire sur WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full justify-center" asChild>
              <a href="tel:+33123456789">
                <Phone className="mr-2 h-5 w-5" />
                Appeler : +33 1 23 45 67 89
              </a>
            </Button>
            <div className="bg-card rounded-2xl p-6 shadow-card">
              <p className="text-foreground font-semibold mb-1">Horaires d'ouverture</p>
              <p className="text-muted-foreground text-sm">Lun-Ven : 08h - 18h · Sam : 09h - 13h</p>
              <p className="text-muted-foreground text-sm mt-2">Urgences disponibles en dehors des heures d'ouverture. Contactez-nous par WhatsApp.</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-card space-y-4">
            <Input
              placeholder="Votre nom *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              required
            />
            <Input
              type="email"
              placeholder="Votre email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
            />
            <Input
              type="tel"
              placeholder="Votre téléphone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              maxLength={20}
            />
            <Textarea
              placeholder="Votre message *"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              rows={4}
              required
            />
            <Button type="submit" size="lg" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
