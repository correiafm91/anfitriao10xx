import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img
              src="https://i.postimg.cc/tJ2vGVrw/658211288-17893525920436451-2969698379029917654-n.jpg"
              alt="Pro Estate Logo"
              className="h-10 object-contain"
            />
            <h3 className="text-xl font-light">
              Pro <span className="text-primary font-normal">Estate</span>
            </h3>
          </div>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            O maior workshop para corretores de imóveis do Brasil. Estratégias de marketing e posicionamento para o mercado imobiliário.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Links</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#formulario" className="hover:text-primary transition-colors">Inscreva-se</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Redes Sociais</h4>
          <div className="space-y-2 text-sm font-light">
            <a
              href="https://instagram.com/corretor10x_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram className="w-4 h-4" /> @corretor10x_
            </a>
            <a
              href="https://youtube.com/@corretor10_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Youtube className="w-4 h-4" /> @corretor10_
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" /> contato@proestate.com.br
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pro Estate. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
