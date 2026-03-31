import {
  Header,
  HeroSection,
  AboutSection,
  ServicesSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from './components';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDark, toggleTheme } = useTheme();

  const handleContactClick = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = async (data: { name: string; email: string; message: string }) => {
    console.log('Formulário enviado:', data);
  };

  return (
    <div className={`font-sans antialiased ${isDark ? 'dark' : ''}`}>
      {/* Header fixo */}
      <Header isDark={isDark} onToggleTheme={toggleTheme} />

      {/* Hero Section */}
      <HeroSection
        profileImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
        name="Thiago Botelho"
        greeting="Prazer, eu sou"
        role="para pessoas reais"
        ctaText="Vamos conversar"
        onCtaClick={handleContactClick}
      />

      {/* About Section */}
      <AboutSection
        title="Sobre Mim"
        description={[
          'Sou um desenvolvedor apaixonado por criar soluções tecnológicas que fazem a diferença. Com mais de 8 anos de experiência em desenvolvimento de software e consultoria, ajudo empresas a transformar suas ideias em realidade digital.',
          'Minha expertise abrange desde o desenvolvimento de sistemas ERP complexos até a criação de interfaces intuitivas e experiências de usuário memoráveis.',
          'Acredito que a tecnologia deve ser uma ferramenta que simplifica a vida das pessoas, e é isso que busco entregar em cada projeto.',
        ]}
        metrics={[
          { value: '8+', label: 'Anos de Experiência' },
          { value: '50+', label: 'Projetos Entregues' },
          { value: '30+', label: 'Clientes Atendidos' },
        ]}
      />

      {/* Services Section */}
      <ServicesSection
        title="Serviços"
        subtitle="Soluções completas para transformar seu negócio através da tecnologia"
      />

      {/* Projects Section */}
      <ProjectsSection title="Projetos" />

      {/* Contact Section */}
      <ContactSection
        title="Entre em Contato"
        subtitle="Tem um projeto em mente? Vamos conversar!"
        contactInfo={{
          email: 'contato@thiagobotelho.com',
          linkedin: 'linkedin.com/in/thiagobotelho',
          github: 'github.com/thiagobotelho',
          location: 'São Paulo, Brasil',
        }}
        onSubmit={handleContactSubmit}
      />

      {/* Footer */}
      <Footer
        name="Thiago Botelho"
        socialLinks={{
          linkedin: 'https://linkedin.com/in/thiagobotelho',
          github: 'https://github.com/thiagobotelho',
          email: 'contato@thiagobotelho.com',
        }}
      />
    </div>
  );
}

export default App;
