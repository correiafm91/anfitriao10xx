import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-light mb-3">
            C4 <span className="text-foreground font-normal">Sales</span>
          </h3>
          <p className="text-sm text-muted-foreground font-light leading-relaxed">
            Aceleradora de vendas para empresas. Processo, time treinado e prospecção ativa para multiplicar o faturamento da sua operação.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Links</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
            <li><a href="#etapas" className="hover:text-primary transition-colors">Etapas</a></li>
            <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#formulario" className="hover:text-primary transition-colors">Diagnóstico gratuito</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">Redes Sociais</h4>
          <div className="space-y-2 text-sm font-light">
            <a
              href="https://instagram.com/c4sales_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" /> @c4sales_
            </a>
            <a
              href="https://youtube.com/@c4sales_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Youtube className="w-4 h-4" /> @c4sales_
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4" /> contato@c4sales.com.br
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} C4 Sales. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
