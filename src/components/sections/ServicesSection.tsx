import type { ServicesSectionProps, Service } from '../../types';
import { useInView } from '../../hooks/useInView';
import { SectionHeader, Card } from '../ui';

// Serviços padrão
const defaultServices: Service[] = [
  {
    icon: '💻',
    title: 'Consultoria em Tecnologia',
    description: 'Análise e recomendações estratégicas para otimizar sua infraestrutura tecnológica e processos de desenvolvimento.',
  },
  {
    icon: '🏢',
    title: 'Desenvolvimento de ERP',
    description: 'Sistemas integrados de gestão empresarial personalizados para automatizar e otimizar operações do seu negócio.',
  },
  {
    icon: '📊',
    title: 'Análise de Negócios',
    description: 'Mapeamento de processos, identificação de gargalos e propostas de melhorias baseadas em dados.',
  },
  {
    icon: '🏗️',
    title: 'Arquitetura de Sistemas',
    description: 'Design de soluções escaláveis e robustas, garantindo performance e manutenibilidade a longo prazo.',
  },
  {
    icon: '⚙️',
    title: 'Automação de Processos',
    description: 'Implementação de workflows automatizados para reduzir trabalho manual e aumentar a produtividade.',
  },
  {
    icon: '🎓',
    title: 'Treinamento Técnico',
    description: 'Capacitação de equipes em tecnologias modernas, metodologias ágeis e boas práticas de desenvolvimento.',
  },
];

/**
 * ServicesSection - Seção de Serviços
 * Grid de cards com ícones e descrições
 */
export function ServicesSection({
  title = 'Serviços',
  subtitle = 'Soluções completas para transformar seu negócio através da tecnologia',
  services = defaultServices,
}: ServicesSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="servicos"
      ref={ref}
      className="
        relative
        py-20 sm:py-28 md:py-32
        px-6 sm:px-8 md:px-12 lg:px-16
        bg-white dark:bg-gray-950
        transition-colors duration-300
      "
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={title} subtitle={subtitle} gradient align="center" />

        {/* Grid de serviços */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              variant="outlined"
              className={`
                p-6 sm:p-8
                group
                border-gray-200 dark:border-gray-800
                transition-all duration-500
                hover:border-blue-500 dark:hover:border-blue-400
                hover:bg-gradient-to-br hover:from-blue-500/5 hover:to-pink-500/5
                ${isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                }
              `}
              style={{ transitionDelay: `${index * 100}ms` } as React.CSSProperties}
            >
              {/* Ícone */}
              <div className="
                w-14 h-14 sm:w-16 sm:h-16
                flex items-center justify-center
                text-3xl sm:text-4xl
                bg-gradient-to-br from-blue-500/10 to-indigo-500/10
                dark:from-blue-500/20 dark:to-indigo-500/20
                rounded-2xl
                mb-5 sm:mb-6
                group-hover:scale-110 group-hover:rotate-3
                transition-transform duration-300
              ">
                {service.icon}
              </div>

              {/* Título */}
              <h3 className="
                text-lg sm:text-xl font-bold
                text-gray-900 dark:text-white
                mb-3
                group-hover:text-blue-600 dark:group-hover:text-blue-400
                transition-colors duration-300
              ">
                {service.title}
              </h3>

              {/* Descrição */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
