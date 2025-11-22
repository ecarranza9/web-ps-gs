import React from 'react';
import { Navbar } from './components/Navbar';
import { ChatWidget } from './components/ChatWidget';
import { SectionId } from './types';
import { 
  Brain, 
  Heart, 
  Sparkles, 
  Users, 
  Calendar, 
  MapPin, 
  Mail, 
  Phone,
  ArrowRight
} from 'lucide-react';
import logo from './assets/img/logo.jpeg';
import meImage from './assets/img/me.jpeg';
import Services from './components/Services';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <Navbar />
      
      {/* HERO SECTION */}
      <section id={SectionId.HOME} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#faf3f4] to-background">
        {/* Decorative Background Elements */}
        {/* Psychology Symbol Background as requested */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
             <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Psychology_symbol.svg/1024px-Psychology_symbol.svg.png" 
                alt="Psychology Symbol"
                className="w-[80%] max-w-3xl h-auto object-contain"
             />
        </div>
        
        {/* Geometric Decoration (Hexagon concept from logo) */}
        <div className="absolute top-1/4 right-10 md:right-1/4 w-64 h-64 border-2 border-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 md:left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left md:flex md:items-center md:gap-16">
          <div className="md:w-1/2 space-y-6 animate-fade-in-up">
             <div className="inline-block px-4 py-1 border border-primary/50 rounded-full text-primary-dark text-sm font-medium tracking-wider mb-2 bg-white/50 backdrop-blur-sm">
                PSICOLOGÍA CLÍNICA
             </div>
             <h1 className="text-5xl md:text-7xl font-serif text-text font-medium leading-tight">
               Tu espacio seguro para <br />
               <span className="text-primary italic">transformar</span> tu vida.
             </h1>
             <p className="text-lg md:text-xl text-text-light leading-relaxed max-w-xl">
               Acompaño procesos de ansiedad, estrés y desarrollo personal con una mirada humana y basada en evidencia.
             </p>
             <div className="flex flex-col md:flex-row gap-4 pt-4">
               <a href="#contacto" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl text-center font-medium tracking-wide">
                 Agendar Consulta
               </a>
               <a href="#sobre-mi" className="bg-white text-text border border-gray-200 px-8 py-3 rounded-lg hover:border-primary hover:text-primary transition-all text-center font-medium flex items-center justify-center gap-2">
                 Conocer más <ArrowRight size={18}/>
               </a>
             </div>
          </div>
          
          {/* Image/Visual */}
          <div className="hidden md:block md:w-1/2 relative">
            <div className="relative max-w-sm mx-auto aspect-square">
                {/* Frame imitating the logo geometric shape */}
                <div className="absolute inset-0 border-2 border-secondary rotate-3 rounded-full transform translate-x-4 translate-y-4"></div>
                <img 
                  src={logo} 
                  alt="Logo de Giuliana Segura" 
                  className="w-full h-full object-cover rounded-full shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id={SectionId.ABOUT} className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="hidden md:block md:w-1/2 relative">
            <div className="relative max-w-md mx-auto aspect-[3/4]">
                {/* Frame imitating the logo geometric shape */}
                <div className="absolute inset-0 border-2 border-secondary rotate-3 rounded-xl transform translate-x-4 translate-y-4"></div>
                <img 
                  src={meImage} 
                  alt="Espacio Terapéutico" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
            </div>
          </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-secondary font-sans uppercase tracking-widest text-sm font-bold mb-3">Sobre Mí</h2>
              <h3 className="text-4xl font-serif text-text mb-6">Lic. Giuliana Segura</h3>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                Soy psicóloga especializada en <strong>Terapia Cognitivo-Conductual</strong> e <strong>Integrativa</strong> para adultos. Mi vocación es acompañar a las personas en sus procesos de cambio, brindando herramientas prácticas y efectivas.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                Creo firmemente que cada persona es única, por lo que mi enfoque combina técnicas basadas en evidencia con una mirada humana y flexible, adaptada a tus necesidades específicas.
              </p>
              <ul className="space-y-3 mt-8">
                <li className="flex items-center gap-3 text-text">
                    <span className="bg-primary/20 p-1 rounded-full text-primary-dark"><Sparkles size={16} /></span>
                    <span>Espacio seguro y confidencial</span>
                </li>
                <li className="flex items-center gap-3 text-text">
                    <span className="bg-primary/20 p-1 rounded-full text-primary-dark"><Sparkles size={16} /></span>
                    <span>Enfoque flexible y empático</span>
                </li>
                <li className="flex items-center gap-3 text-text">
                    <span className="bg-primary/20 p-1 rounded-full text-primary-dark"><Sparkles size={16} /></span>
                    <span>Herramientas para la vida diaria</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH (ENFOQUE) */}
      <section id={SectionId.APPROACH} className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl font-serif text-text mb-4">Mi Enfoque Terapéutico</h2>
            <p className="text-text-light mb-12">
                Trabajo desde una perspectiva integradora, utilizando principalmente la Terapia Cognitivo-Conductual (TCC), reconocida por su eficacia científica.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
                    <Brain className="w-12 h-12 text-primary mb-6 mx-auto" />
                    <h4 className="text-xl font-bold mb-3 text-text">Cognitivo-Conductual</h4>
                    <p className="text-sm text-text-light leading-relaxed">
                        Identificamos y modificamos patrones de pensamiento y comportamiento que generan malestar, buscando soluciones prácticas.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-secondary">
                    <Heart className="w-12 h-12 text-secondary mb-6 mx-auto" />
                    <h4 className="text-xl font-bold mb-3 text-text">Integrativo & Humano</h4>
                    <p className="text-sm text-text-light leading-relaxed">
                        Más allá de la técnica, priorizo el vínculo terapéutico. Adaptamos las herramientas a tu historia y personalidad.
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
                    <Users className="w-12 h-12 text-primary mb-6 mx-auto" />
                    <h4 className="text-xl font-bold mb-3 text-text">Autonomía</h4>
                    <p className="text-sm text-text-light leading-relaxed">
                        El objetivo no es que dependas de la terapia por siempre, sino que desarrolles tus propias herramientas para el futuro.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* SERVICES */}
      <Services />

      {/* CONTACT / FAQ */}
      <section id={SectionId.CONTACT} className="py-24 bg-[#333] text-white relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16">
                
                {/* Contact Info */}
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-serif mb-6">Comienza tu proceso</h2>
                    <p className="text-gray-300 mb-10 text-lg">
                        Dar el primer paso es lo más importante. Si tienes dudas o quieres agendar una sesión, no dudes en escribirme.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Ubicación</h4>
                                <p className="text-gray-400">Consultorio Privado / Atención Online</p>
                                <p className="text-gray-500 text-sm mt-1">Córdoba, Argentina</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Horarios</h4>
                                <p className="text-gray-400">Lunes a Viernes: 9:00 - 20:00 hs</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">WhatsApp</h4>
                                <p className="text-gray-400">(03462)-15330678</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Email</h4>
                                <p className="text-gray-400">hola@giulianasegura.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="lg:w-1/2 bg-white text-text p-8 rounded-2xl shadow-2xl">
                    <h3 className="text-2xl font-serif font-bold mb-6 text-center">Envíame un mensaje</h3>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-2 text-text-light">Nombre</label>
                                <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Tu nombre" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-2 text-text-light">Teléfono</label>
                                <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Tu teléfono" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-text-light">Email</label>
                            <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="tucorreo@ejemplo.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-text-light">Mensaje</label>
                            <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Cuéntame brevemente cómo puedo ayudarte..."></textarea>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                            Enviar Consulta
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#222] text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <h2 className="font-serif text-2xl font-bold text-primary">Giuliana Segura</h2>
                <p className="text-gray-500 text-sm mt-1">Licenciada en Psicología</p>
            </div>
            <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a>
            </div>
            <div className="text-gray-600 text-sm">
                &copy; {new Date().getFullYear()} Todos los derechos reservados.
            </div>
        </div>
      </footer>

      <ChatWidget />
    </div>
  );
};

export default App;