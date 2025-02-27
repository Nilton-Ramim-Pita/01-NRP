import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

const testimonials = [
  {
    name: 'João Silva',
    role: 'CEO, TechCorp',
    content: {
      en: 'Nilton provided exceptional service in maintaining our company\'s computer systems. His expertise and professionalism are outstanding.',
      pt: 'Nilton forneceu um serviço excepcional na manutenção dos sistemas de computador da nossa empresa. Sua experiência e profissionalismo são excepcionais.'
    },
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Maria Santos',
    role: 'Marketing Director',
    content: {
      en: 'The digital marketing campaign developed by Nilton exceeded our expectations. The results were impressive.',
      pt: 'A campanha de marketing digital desenvolvida pelo Nilton superou nossas expectativas. Os resultados foram impressionantes.'
    },
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Pedro Costa',
    role: 'Small Business Owner',
    content: {
      en: 'Nilton\'s Python development skills helped automate our business processes, saving us countless hours of manual work.',
      pt: 'As habilidades de desenvolvimento Python do Nilton ajudaram a automatizar nossos processos de negócios, economizando inúmeras horas de trabalho manual.'
    },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Ana Oliveira',
    role: 'Creative Director',
    content: {
      en: 'The graphic design work for our brand was exceptional. Nilton has a great eye for detail and understands client needs perfectly.',
      pt: 'O trabalho de design gráfico para nossa marca foi excepcional. Nilton tem um ótimo olho para detalhes e entende perfeitamente as necessidades do cliente.'
    },
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Carlos Mendes',
    role: 'IT Manager',
    content: {
      en: 'We rely on Nilton for all our computer maintenance needs. His quick response time and technical expertise are invaluable.',
      pt: 'Contamos com o Nilton para todas as nossas necessidades de manutenção de computadores. Seu tempo de resposta rápido e experiência técnica são inestimáveis.'
    },
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Sofia Almeida',
    role: 'Startup Founder',
    content: {
      en: 'Nilton helped us establish our entire digital presence. His comprehensive knowledge of digital marketing and development was crucial.',
      pt: 'Nilton nos ajudou a estabelecer toda nossa presença digital. Seu conhecimento abrangente de marketing digital e desenvolvimento foi crucial.'
    },
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Ricardo Santos',
    role: 'E-commerce Manager',
    content: {
      en: 'The e-commerce solution developed by Nilton transformed our business. The attention to detail and user experience is remarkable.',
      pt: 'A solução de e-commerce desenvolvida pelo Nilton transformou nosso negócio. A atenção aos detalhes e experiência do usuário é notável.'
    },
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
  }
];

export function Testimonials() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-2">{t.testimonials.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">{t.testimonials.subtitle}</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="relative">
                <span className="absolute top-0 left-0 text-6xl text-blue-500/20">"</span>
                <p className="text-gray-700 dark:text-gray-300 pl-6 pt-4 italic">
                  {testimonial.content[language]}
                </p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}