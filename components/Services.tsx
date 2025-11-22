import React from 'react';
import { Heart, Users, Brain, Sparkles, Leaf, BookOpen } from 'lucide-react';
const ServiceCard = ({
  title,
  description,
  icon
}) => {
  const Icon = icon;
  return <div className="service-card bg-background p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mb-4">
        <Icon className="text-[#d4af37]" size={24} />
      </div>
      <h3 className="text-xl font-serif font-medium mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};
const Services = () => {
  const services = [{
    title: 'Terapia Individual',
    description: 'Sesiones personalizadas para abordar tus necesidades específicas en un espacio confidencial y seguro.',
    icon: Heart
  }, {
    title: 'Terapia de Parejas',
    description: 'Acompañamiento para mejorar la comunicación y resolver conflictos en la relación de pareja.',
    icon: Users
  }, {
    title: 'Evaluación Psicológica',
    description: 'Evaluación completa para identificar fortalezas y áreas de oportunidad en tu desarrollo personal.',
    icon: Brain
  }, {
    title: 'Manejo de Ansiedad',
    description: 'Técnicas efectivas para controlar la ansiedad y reducir el estrés en tu vida cotidiana.',
    icon: Sparkles
  }, {
    title: 'Mindfulness',
    description: 'Aprende a vivir en el presente y desarrollar una mayor consciencia de tus pensamientos y emociones.',
    icon: Leaf
  }, {
    title: 'Orientación Vocacional',
    description: 'Descubre tu verdadera vocación y toma decisiones profesionales alineadas con tus valores y habilidades.',
    icon: BookOpen
  }];
  return <section id="servicios" className="py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Mis Servicios
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Ofrezco diversos servicios terapéuticos adaptados a tus necesidades
            específicas, siempre con un enfoque humano y profesional.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />)}
        </div>
      </div>
    </section>;
};
export default Services;