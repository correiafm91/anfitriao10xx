import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-light mb-3">
            Anfitrião <span className="text-primary font-normal">10x</span>
          </h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Estratégias de marketing imobiliário para anfitriões que querem resultados extraordinários. Método criado por Gustavo Correia.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Links</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Gustavo</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#formulario" className="hover:text-primary transition-colors">Análise Gratuita</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Redes Sociais</h4>
          <div className="space-y-2 text-sm font-light">
            <a
              href="https://instagram.com/anfitriao10x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" /> @anfitriao10x
            </a>
            <a
              href="https://youtube.com/@anfitrião10x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="w-4 h-4" /> @anfitrião10x
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" /> contato@anfitriao10x.com.br
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Anfitrião 10x — Gustavo Correia. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
