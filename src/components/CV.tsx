import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../i18n/translations';

export function CV() {
  const { language } = useLanguage();
  const t = translations[language];

  // This would be replaced with actual CV content
  const cvContent = {
    education: [
      {
        degree: language === 'en' ? 'Computer Science Degree' : 'Graduação em Ciência da Computação',
        institution: language === 'en' ? 'University of Technology' : 'Universidade de Tecnologia',
        year: '2018-2022'
      }
    ],
    experience: [
      {
        role: language === 'en' ? 'Senior Python Developer' : 'Desenvolvedor Python Sênior',
        company: 'TechCorp',
        period: '2022-Present',
        description: language === 'en' 
          ? 'Led development of enterprise software solutions using Python and related technologies.'
          : 'Liderou o desenvolvimento de soluções de software empresarial usando Python e tecnologias relacionadas.'
      },
      {
        role: language === 'en' ? 'Digital Marketing Specialist' : 'Especialista em Marketing Digital',
        company: 'DigitalPro',
        period: '2020-2022',
        description: language === 'en'
          ? 'Managed digital marketing campaigns and developed marketing strategies for clients.'
          : 'Gerenciou campanhas de marketing digital e desenvolveu estratégias de marketing para clientes.'
      }
    ],
    skills: [
      'Python', 'React', 'Node.js', 'Digital Marketing',
      'SEO', 'Graphic Design', 'Computer Maintenance'
    ]
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Curriculum Vitae</h2>
          <button
            onClick={() => window.open('/cv.pdf')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Download size={20} className="mr-2" />
            {language === 'en' ? 'Download CV' : 'Baixar CV'}
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          {/* Education Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Education' : 'Educação'}
            </h3>
            {cvContent.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-medium">{edu.degree}</h4>
                <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))}
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Professional Experience' : 'Experiência Profissional'}
            </h3>
            {cvContent.experience.map((exp, index) => (
              <div key={index} className="mb-6">
                <h4 className="font-medium">{exp.role}</h4>
                <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {language === 'en' ? 'Skills' : 'Habilidades'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cvContent.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}