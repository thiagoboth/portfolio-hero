import type { ProjectsSectionProps, Project } from '../../types';
import { useInView } from '../../hooks/useInView';
import { SectionHeader, Card, Tag } from '../ui';

// Projetos padrão para demonstração
const defaultProjects: Project[] = [
  {
    id: '1',
    title: 'Sistema ERP Completo',
    description: 'Sistema de gestão empresarial integrado com módulos de vendas, estoque, financeiro e RH. Desenvolvido para uma rede de varejo com mais de 50 lojas.',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    link: '#',
  },
  {
    id: '2',
    title: 'Plataforma de E-commerce',
    description: 'E-commerce de alta performance com checkout otimizado, integração com gateways de pagamento e sistema de recomendação por IA.',
    imageSrc: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'AWS'],
    link: '#',
  },
  {
    id: '3',
    title: 'App de Gestão de Projetos',
    description: 'Aplicação web para gerenciamento de projetos e tarefas com recursos de colaboração em tempo real e integração com ferramentas populares.',
    imageSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=600&fit=crop',
    tags: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    link: '#',
  },
  {
    id: '4',
    title: 'Dashboard Analytics',
    description: 'Painel analítico com visualizações interativas, relatórios customizáveis e exportação de dados para tomada de decisões estratégicas.',
    imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    link: '#',
  },
];

/**
 * ProjectsSection - Seção de Projetos
 * Grid de cards com preview de imagem e tags de tecnologia
 */
export function ProjectsSection({
  title = 'Projetos',
  projects = defaultProjects,
}: ProjectsSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="projetos"
      ref={ref}
      className="
        relative
        py-20 sm:py-28 md:py-32
        px-6 sm:px-8 md:px-12 lg:px-16
        bg-gray-50 dark:bg-gray-900
        transition-colors duration-300
      "
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          title={title}
          subtitle="Alguns dos projetos que desenvolvi ao longo da minha carreira"
          gradient
          align="center"
        />

        {/* Grid de projetos */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              variant="elevated"
              className={`
                overflow-hidden group
                bg-white dark:bg-gray-800
                border border-gray-100 dark:border-gray-700
                transition-all duration-500
                ${isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
                }
              `}
              style={{ transitionDelay: `${index * 150}ms` } as React.CSSProperties}
            >
              {/* Imagem do projeto */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="
                    w-full h-full object-cover
                    transition-transform duration-500
                    group-hover:scale-110
                  "
                />
                {/* Overlay gradiente no hover */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  flex items-end justify-center pb-6
                ">
                  {project.link && (
                    <a
                      href={project.link}
                      className="
                        px-6 py-2
                        bg-white text-gray-900
                        rounded-full
                        font-semibold text-sm
                        hover:bg-blue-500 hover:text-white
                        transition-colors duration-200
                        transform translate-y-4 group-hover:translate-y-0
                      "
                    >
                      Ver Projeto
                    </a>
                  )}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 sm:p-8">
                <h3 className="
                  text-xl sm:text-2xl font-bold
                  text-gray-900 dark:text-white
                  mb-3
                  group-hover:text-blue-600 dark:group-hover:text-blue-400
                  transition-colors duration-300
                ">
                  {project.title}
                </h3>

                <p className="
                  text-sm sm:text-base
                  text-gray-600 dark:text-gray-400
                  leading-relaxed
                  mb-5
                ">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag} variant="brand">
                      {tag}
                    </Tag>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
