import type { FooterProps, MenuItem } from '../../types';

// Links de navegação padrão
const defaultNavItems: MenuItem[] = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

/**
 * Footer - Rodapé do site
 * Contém logo, navegação, redes sociais e copyright
 */
export function Footer({
  name = 'Thiago Botelho',
  socialLinks = {
    linkedin: 'https://linkedin.com/in/thiagobotelho',
    github: 'https://github.com/thiagobotelho',
    email: 'contato@thiagobotelho.com',
  },
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Logo e descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">{name}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Desenvolvedor e consultor de tecnologia, transformando ideias em soluções digitais inovadoras.
            </p>
          </div>

          {/* Links de navegação */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Navegação
            </h4>
            <nav className="space-y-3">
              {defaultNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    block text-gray-600 dark:text-gray-300
                    hover:text-blue-500 dark:hover:text-blue-400 hover:translate-x-1
                    transition-all duration-200
                  "
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Redes Sociais
            </h4>
            <div className="space-y-3">
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-3 text-gray-600 dark:text-gray-300
                    hover:text-blue-500 dark:hover:text-blue-400
                    transition-colors duration-200
                  "
                >
                  <span className="text-xl">💼</span>
                  <span>LinkedIn</span>
                </a>
              )}
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center gap-3 text-gray-600 dark:text-gray-300
                    hover:text-purple-500 dark:hover:text-purple-400
                    transition-colors duration-200
                  "
                >
                  <span className="text-xl">💻</span>
                  <span>GitHub</span>
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="
                    flex items-center gap-3 text-gray-600 dark:text-gray-300
                    hover:text-pink-500 dark:hover:text-pink-400
                    transition-colors duration-200
                  "
                >
                  <span className="text-xl">✉️</span>
                  <span>Email</span>
                </a>
              )}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
              Vamos Conversar?
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Estou disponível para novos projetos e parcerias.
            </p>
            <a
              href="#contato"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5
                bg-gradient-to-r from-blue-500 to-indigo-600
                rounded-full
                text-sm font-semibold text-white
                hover:from-blue-400 hover:to-indigo-500
                transition-all duration-300
                hover:shadow-lg hover:shadow-blue-500/25
              "
            >
              Entre em Contato
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} {name}. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm flex items-center gap-1">
              Feito com <span className="text-red-500">❤️</span> e React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
