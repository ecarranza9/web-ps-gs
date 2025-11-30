import React from 'react';
import { Heart, Users, Laptop, Sparkles, Leaf, BookOpen, Flower } from 'lucide-react';
const ServiceCard = ({
  title,
  description,
  icon
}: { title: string; description: React.ReactNode; icon: React.ElementType }) => {
  const Icon = icon;
  return <div className="service-card bg-background p-6 rounded-lg shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="flex items-center justify-between gap-2 mb-4 shrink-0">
        <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center shrink-0">
          <Icon className="text-[#d4af37]" size={24} />
        </div>
        <h4 className="text-lg sm:text-xl font-bold text-text text-center flex-grow leading-tight">{title}</h4>
        <div className="w-12 h-12 opacity-0 shrink-0" aria-hidden="true"></div>
      </div>
      <div className="text-gray-600 text-base text-center md:text-left flex-grow">
        {description}
      </div>
    </div>;
};
const Services = () => {
  const services = [{
    title: 'Psicoterapia',
    description: 'Los principales objetivos son; reducir el malestar emocional, aprender a desarrollar habilidades, aprender a resolver conflictos interpersonales, afrontar situaciones, aprender a tomar decisiones, gestionar las emociones, modificar las creencias limitantes, cambiar hábitos, adquirir herramientas, fomentar el autoconocimiento, y mejorar la salud mental.',
    icon: Heart
  }, {
    title: 'Terapia Presencial',
    description: 'La terapia cara a cara permite una conexión humana directa y profunda, favorece la percepción no verbal completa, algunos pacientes la sienten más “real” o contenida, es ideal cuando se prefiere un espacio físico neutral para hablar, salir de casa y entrar en un entorno terapéutico ayuda a muchas personas a concentrarse, reflexionar y separarse del estrés cotidiano.',
    icon: Users
  }, {
    title: 'Terapia Online',
    description: 'La psicoterapia online se convirtio en un recurso esencial, brindando flexibilidad y comodidad sin reducir la calidad del acompañamiento terapéutico. Esta modalidad de terapia ofrece ventajas tales como; la posibilidad de conectarte desde cualquier lugar privado, el ahorro de tiempo y desplazamientos, la continuidad del tratamiento incluso si cambias de ciudad. La terapia online es tan efectiva como la presencial.',
    icon: Laptop
  }, {
    title: 'Manejo de ansiedad',
    description: 'La ansiedad en la vida cotidiana suele manifestarse de formas muy variadas, a veces tan sutiles que pasan desapercibidas. En la terapia se implementan técnicas emocionales, fisiológicas, conductuales, cognitivas, fundamentadas en evidencia científica, para manejar la ansiedad de manera efectiva, y reducir el estrés que interfiere en la vida diaria.',
    icon: Sparkles
  }, {
    title: 'Mindfulness',
    description: 'Aprende a vivir en el presente y desarrollar una mayor consciencia de tus pensamientos, emociones y sensaciones. El Mindfiulness es una técnica que, reduce el estrés y la ansiedad, mejora la concentración y la atención, regula las emociones, mejora el bienestar general, puede ayudar a conciliar el sueño, y contribuye al manejo del dolor crónico.',
    icon: Leaf
  }, {
    title: 'Especializaciones',
    description: (
      <ul className="space-y-2 mt-2 ml-3">
        {[
          'Estrés',
          'Fobias',
          'Ansiedad Social',
          'Ansiedad Generalizada',
          'Ataque de Pánico / Crisis de Angustia',
          'Trastorno Obsesivo Compulsivo (TOC)'
        ].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-text text-left">
            <span className="bg-primary/20 p-1 rounded-full text-primary-dark shrink-0">
              <Flower size={14} />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    ),
    icon: BookOpen
  }];
  return <section id="servicios" className="scroll-mt-22 py-10 md:py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left md:text-center mb-8 md:mb-10">
        <h2 className="text-lg md:text-3xl text-secondary font-sans uppercase tracking-widest font-bold mb-3">
            Servicios
          </h2>
          <div className="w-16 h-1 bg-primary mr-auto md:mx-auto mb-8"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, index) => (
            <div key={index} className="h-full">
                <ServiceCard 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon} 
                />
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default Services;