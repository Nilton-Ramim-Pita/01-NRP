import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, MessageSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeToggle } from './components/ThemeToggle';
import { LanguageToggle } from './components/LanguageToggle';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Testimonials } from './components/Testimonials';
import { CV } from './components/CV';
import { QRCode } from './components/QRCode';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './i18n/translations';

const sections = ['Home', 'About', 'Projects', 'Services', 'Testimonials', 'CV', 'Contact'];

const services = [
  {
    title: 'Computer Maintenance',
    description: 'Professional computer repair and maintenance services',
    icon: '💻'
  },
  {
    title: 'Python Development',
    description: 'Custom software development using Python',
    icon: '🐍'
  },
  {
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns',
    icon: '📱'
  },
  {
    title: 'Graphic Design',
    description: 'Creative design solutions for your brand',
    icon: '🎨'
  }
];

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Python and React',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Marketing Dashboard',
    description: 'Analytics dashboard for digital marketing campaigns',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Brand Identity Design',
    description: 'Complete brand identity package for local businesses',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800'
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                NRP
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {t.nav[section.toLowerCase()]}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => {
                      setActiveSection(section);
                      setIsMenuOpen(false);
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                      activeSection === section
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    {t.nav[section.toLowerCase()]}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Main Content */}
      <main className="pt-16">
        {/* Home Section */}
        {activeSection === 'Home' && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-6xl font-bold mb-4"
              >
                {t.home.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              >
                {t.home.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center space-x-6"
              >
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:contact@example.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* About Section */}
        {activeSection === 'About' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 min-h-screen"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">{t.about.title}</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {t.about.description}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {t.about.approach}
                  </p>
                  <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                    <Download size={20} className="mr-2" />
                    {t.about.downloadCV}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">{t.about.technicalSkills}</h3>
                    <ul className="text-gray-600 dark:text-gray-300">
                      {t.about.skills.technical.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h3 className="font-bold mb-2">{t.about.creativeSkills}</h3>
                    <ul className="text-gray-600 dark:text-gray-300">
                      {t.about.skills.creative.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Projects Section */}
        {activeSection === 'Projects' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 min-h-screen"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">{t.projects.title}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <button className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                        {t.projects.viewProject} <ExternalLink size={16} className="ml-2" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Services Section */}
        {activeSection === 'Services' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 min-h-screen"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">{t.services.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {t.services.items.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all"
                  >
                    <div className="text-4xl mb-4">{services[index].icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Testimonials Section */}
        {activeSection === 'Testimonials' && <Testimonials />}

        {/* CV Section */}
        {activeSection === 'CV' && <CV />}

        {/* Contact Section */}
        {activeSection === 'Contact' && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 min-h-screen"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8">{t.contact.title}</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                        {t.contact.form.name}
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                        {t.contact.form.email}
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300">
                        {t.contact.form.message}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="mt-1 block w-full rounded-xl bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      <MessageSquare size={20} className="mr-2" />
                      {t.contact.form.send}
                    </button>
                  </form>
                </div>
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Phone size={24} className="text-blue-600 dark:text-blue-400 mr-4" />
                      <div>
                        <p className="font-medium">{t.contact.info.phone}</p>
                        <p className="text-gray-600 dark:text-gray-300">876450559 / 844060984</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={24} className="text-blue-600 dark:text-blue-400 mr-4" />
                      <div>
                        <p className="font-medium">{t.contact.info.location}</p>
                        <p className="text-gray-600 dark:text-gray-300">Moçambique - Tete - Cidade</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail size={24} className="text-blue-600 dark:text-blue-400 mr-4" />
                      <div>
                        <p className="font-medium">{t.contact.info.email}</p>
                        <p className="text-gray-600 dark:text-gray-300">contact@example.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className="font-medium mb-4">{t.contact.info.whatsapp}</p>
                    <QRCode />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </main>
    </div>
  );
}

export default App;