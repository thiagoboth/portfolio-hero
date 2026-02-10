import type { AboutSectionProps } from '../../types';
import { useInView } from '../../hooks/useInView';
import { SectionHeader } from '../ui';

/**
 * AboutSection - Seção Sobre Mim
 * Layout split: texto (60%) | imagem (40%)
 * Mobile: stack vertical com imagem primeiro
 */
export function AboutSection({
  title = 'Sobre Mim',
  description = [
    'Sou um desenvolvedor apaixonado por criar soluções tecnológicas que fazem a diferença. Com mais de 8 anos de experiência em desenvolvimento de software e consultoria, ajudo empresas a transformar suas ideias em realidade digital.',
    'Minha expertise abrange desde o desenvolvimento de sistemas ERP complexos até a criação de interfaces intuitivas e experiências de usuário memoráveis.',
    'Acredito que a tecnologia deve ser uma ferramenta que simplifica a vida das pessoas, e é isso que busco entregar em cada projeto.',
  ],
  metrics = [
    { value: '8+', label: 'Anos de Experiência' },
    { value: '50+', label: 'Projetos Entregues' },
    { value: '30+', label: 'Clientes Atendidos' },
  ],
  imageSrc = 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=600&h=800&fit=crop',
}: AboutSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      id="sobre"
      ref={ref}
      className="
        relative
        py-20 sm:py-28 md:py-32
        px-6 sm:px-8 md:px-12 lg:px-16
        bg-gray-50 dark:bg-gray-900
        transition-colors duration-300
        overflow-hidden
      "
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader title={title} gradient align="center" />

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Imagem - Mobile first */}
          <div
            className={`
              lg:col-span-2 order-1 lg:order-2
              transition-all duration-700 delay-200
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            `}
          >
            <div className="relative">
              {/* Moldura decorativa */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500 to-pink-500 rounded-2xl opacity-20 blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl transform rotate-3" />
              <img
                src={imageSrc}
                alt="Sobre mim"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Conteúdo */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Descrição */}
            <div
              className={`
                space-y-4 sm:space-y-6 mb-10 sm:mb-12
                transition-all duration-700
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              {description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Métricas */}
            <div
              className={`
                grid grid-cols-3 gap-4 sm:gap-8
                transition-all duration-700 delay-300
                ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="
                    text-center p-4 sm:p-6
                    bg-white dark:bg-gray-800
                    rounded-2xl shadow-lg
                    hover:shadow-xl
                    border border-gray-100 dark:border-gray-700
                    transition-all duration-300
                  "
                >
                  <span className="block text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    {metric.value}
                  </span>
                  <span className="block mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
