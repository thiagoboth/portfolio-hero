import type { ContactSectionProps, ContactFormData } from '../../types';
import { useInView } from '../../hooks/useInView';
import { useForm } from '../../hooks/useForm';
import { SectionHeader, Button, Input, Textarea } from '../ui';

/**
 * ContactSection - Seção de Contato
 * Layout split: formulário | informações de contato
 */
export function ContactSection({
  title = 'Entre em Contato',
  subtitle = 'Tem um projeto em mente? Vamos conversar!',
  contactInfo = {
    email: 'contato@thiagobotelho.com',
    linkedin: 'linkedin.com/in/thiagobotelho',
    github: 'github.com/thiagobotelho',
    location: 'São Paulo, Brasil',
  },
  onSubmit,
}: ContactSectionProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  // Validação do formulário
  const validateForm = (values: ContactFormData) => {
    const errors: Record<string, string> = {};
    if (!values.name.trim()) errors.name = 'Nome é obrigatório';
    if (!values.email.trim()) {
      errors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Email inválido';
    }
    if (!values.message.trim()) errors.message = 'Mensagem é obrigatória';
    return errors;
  };

  const {
    values,
    errors,
    status,
    handleChange,
    handleSubmit,
  } = useForm<ContactFormData>({
    initialValues: { name: '', email: '', message: '' },
    validate: validateForm,
    onSubmit: async (data) => {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Formulário enviado:', data);
      }
    },
  });

  // Ícones de contato
  const contactItems = [
    {
      icon: '✉️',
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    contactInfo.linkedin && {
      icon: '💼',
      label: 'LinkedIn',
      value: contactInfo.linkedin,
      href: `https://${contactInfo.linkedin}`,
    },
    contactInfo.github && {
      icon: '💻',
      label: 'GitHub',
      value: contactInfo.github,
      href: `https://${contactInfo.github}`,
    },
    contactInfo.location && {
      icon: '📍',
      label: 'Localização',
      value: contactInfo.location,
      href: null,
    },
  ].filter(Boolean);

  return (
    <section
      id="contato"
      ref={ref}
      className="
        relative
        py-20 sm:py-28 md:py-32
        px-6 sm:px-8 md:px-12 lg:px-16
        bg-white dark:bg-gray-950
        transition-colors duration-300
      "
    >
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          gradient
          align="center"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Formulário */}
          <div
            className={`
              transition-all duration-700
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
            `}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                name="name"
                label="Seu Nome"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
                disabled={status === 'loading'}
              />

              <Input
                name="email"
                type="email"
                label="Seu Email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
                disabled={status === 'loading'}
              />

              <Textarea
                name="message"
                label="Sua Mensagem"
                value={values.message}
                onChange={handleChange}
                error={errors.message}
                disabled={status === 'loading'}
                rows={5}
              />

              <Button
                variant={status === 'success' ? 'secondary' : 'primary'}
              >
                {status === 'loading' && 'Enviando...'}
                {status === 'success' && 'Mensagem Enviada!'}
                {status === 'error' && 'Erro ao enviar. Tente novamente.'}
                {status === 'idle' && 'Enviar Mensagem'}
              </Button>
            </form>
          </div>

          {/* Informações de contato */}
          <div
            className={`
              transition-all duration-700 delay-200
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
            `}
          >
            <div className="
              bg-gray-50 dark:bg-gray-900
              rounded-2xl p-8 sm:p-10
              border border-gray-200 dark:border-gray-800
              transition-colors duration-300
            ">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {contactItems.map((item, index) => item && (
                  <div key={index} className="flex items-start gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 dark:text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mensagem adicional */}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  Respondo a todas as mensagens em até 24 horas.
                  Para projetos urgentes, entre em contato diretamente pelo LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
