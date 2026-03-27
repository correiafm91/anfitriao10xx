import { Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-light mb-3">
            Anfitrião <span className="text-primary font-normal">10x</span>
          </h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Transformando imóveis em negócios rentáveis com marketing imobiliário profissional.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Links</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#formulario" className="hover:text-primary transition-colors">Solicitar Análise</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Contato</h4>
          <div className="space-y-2 text-sm font-light">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" /> contato@anfitriao10x.com.br
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4" /> (11) 99999-9999
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Anfitrião 10x. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
