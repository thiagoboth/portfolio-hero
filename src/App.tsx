import { HeroSection } from './components';

function App() {
  const handleContactClick = () => {
    // Implementar lógica de contato
    // Ex: abrir modal, redirecionar para WhatsApp, etc.
    console.log('Abrir contato');
    alert('Funcionalidade de contato!');
  };

  return (
    <div className="font-sans antialiased">
      <HeroSection
        profileImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
        name="Thiago Botelho"
        greeting="Olá mundo, eu sou"
        roleHighlight="programador"
        role="durante o dia"
        ctaText="Entre em Contato"
        onCtaClick={handleContactClick}
      />
    </div>
  );
}

export default App;
