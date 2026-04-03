import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-light mb-3">
            Corretor <span className="text-foreground font-normal">10x</span>
          </h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            O maior workshop para corretores de seguros do Brasil. Estratégias de marketing e posicionamento por Gustavo Correia.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Links</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#sobre" className="hover:text-foreground transition-colors">Sobre Gustavo</a></li>
            <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            <li><a href="#formulario" className="hover:text-foreground transition-colors">Inscreva-se</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Redes Sociais</h4>
          <div className="space-y-2 text-sm font-light">
            <a
              href="https://instagram.com/corretor10x_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" /> @corretor10x_
            </a>
            <a
              href="https://youtube.com/@corretor10_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Youtube className="w-4 h-4" /> @corretor10_
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" /> contato@corretor10x.com.br
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Corretor 10x — Gustavo Correia. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
