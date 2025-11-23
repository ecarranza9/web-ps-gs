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
  ArrowRight,
  Instagram,
  Linkedin
} from 'lucide-react';
import logo from './assets/img/logo.jpeg';
import meImage from './assets/img/me.jpeg';
import Services from './components/Services';

const App: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, message } = formData;
    
    // Construct WhatsApp message
    const text = `Hola Giuliana, mi nombre es ${name}. \n\nMe contacto desde tu web.\n\nMensaje: ${message}`;
    
    // Encode message for URL
    const encodedText = encodeURIComponent(text);
    
    // WhatsApp API link (using the phone number provided in the contact section: 5493462330678)
    const whatsappUrl = `https://wa.me/5493462330678?text=${encodedText}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

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
               Tu espacio terapéutico para <br />
               <span className="text-primary italic">transformar</span> tu vida.
             </h1>
             <p className="text-lg md:text-xl text-text-light leading-relaxed max-w-xl">
             Acompaño en procesos de ansiedad, estrés, crisis, crecimiento y desarrollo personal. Te ofrezco un espacio seguro donde puedas explorar tus emociones, comprender lo que estás viviendo y avanzar hacia una vida con mayor bienestar y claridad.
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
      <section id={SectionId.ABOUT} className="scroll-mt-23 py-24 bg-white">
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
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <p className="text-text-light leading-relaxed mb-6 text-lg text-justify">
              Mi nombre es Giuliana Segura, soy Licenciada en Psicología, me especialice en Terapia Cognitiva Conductual e Integrativa, me dedico a la atención a adultos. Mi vocación es compañar a las personas en sus procesos de cambios, posibilitando el autoconocimiento y autocuidado, potenciando el crecimiento y desarrollo personal.
              <br /><br />
              Mi objetivo es ofrecerte herramientas prácticas y efectivas, apoyo constante y un espacio de confianza para que puedas gestionar tus emociones, comprender tus patrones y construir cambios sostenibles en el tiempo.
              <br /><br />
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
      <section id={SectionId.APPROACH} className="scroll-mt-28 py-20 bg-background">
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
      <section id={SectionId.CONTACT} className="scroll-mt-34 py-24 bg-[#333] text-white relative overflow-hidden">
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
                            <div className="bg-primary/20 p-3 rounded-lg text-primary shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                                <p className="text-gray-400 leading-relaxed">
                                    Atención presencial: Maipú 1827, Rosario.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Horarios</h4>
                                <p className="text-gray-400">Lunes a Viernes: 9:00 - 21:00 hs</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Teléfono</h4>
                                <p className="text-gray-400">+54 3462 330678</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">Email</h4>
                                <p className="text-gray-400">ps.giuliana.segura@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="lg:w-1/2 bg-white text-text p-8 rounded-2xl shadow-2xl">
                    <h3 className="text-2xl font-serif font-bold mb-6 text-center">Envíame un mensaje</h3>
                    <form className="space-y-4" onSubmit={handleWhatsAppSubmit}>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-text-light">Nombre y apellido</label>
                            <input 
                              type="text" 
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                              placeholder="Tu nombre y apellido" 
                              required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-2 text-text-light">Mensaje</label>
                            <textarea 
                              rows={4} 
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                              placeholder="Cuéntame brevemente cómo puedo ayudarte..."
                              required
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                            Enviar Consulta a WhatsApp
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
            <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/ps.giuliana.segura" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/giuliana-segura-2569422b6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://wa.link/0eicmo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary/10 p-3 rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {/* WhatsApp SVG Brand Icon */}
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
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