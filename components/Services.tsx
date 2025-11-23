import React from 'react';
import { Heart, Users, Brain, Sparkles, Leaf, BookOpen } from 'lucide-react';
const ServiceCard = ({
  title,
  description,
  icon
}) => {
  const Icon = icon;
  return <div className="service-card bg-background p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center shrink-0">
          <Icon className="text-[#d4af37]" size={24} />
        </div>
        <h4 className="text-xl font-bold mb-1 text-text">{title}</h4>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>;
};
const Services = () => {
  const services = [{
    title: 'Terapia Individual',
    description: 'La terapia individual es un proceso de crecimiento personal, donde trabajas junto a un profesional para comprenderte mejor, y superar dificultades. Te propongo sesiones personalizadas para abordar tus necesidades específicas en un espacio confidencial y seguro.',
    icon: Heart
  }, {
    title: 'Terapia Presencial',
    description: 'La terapia cara a cara permite una conexión humana directa y profunda, favorece la percepción no verbal completa, algunos pacientes la sienten más “real” o contenida, es ideal cuando se prefiere un espacio físico neutral para procesar emociones, salir de casa y entrar en un entorno terapéutico ayuda a muchas personas a concentrarse, reflexionar y separarse del estrés cotidiano.',
    icon: Users
  }, {
    title: 'Terapia Online',
    description: 'La psicoterapia online se ha convertido en un recurso esencial, brindando flexibilidad y comodidad sin reducir la calidad del acompañamiento terapéutico. Ofrece ventajas como: la posibilidad de conectarter desde cualquier lugar privado, ahorro de tiempo y desplazamientos, continuidad incluso si cambias de ciudad. La terapia online es tan efectiva como la presencial.',
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
  return <section id="servicios" className="scroll-mt-26 py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Mis Servicios
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />)}
        </div>
        <div className="w-24 h-1 bg-gold mx-auto mb-10"></div>
      </div>
    </section>;
};
export default Services;