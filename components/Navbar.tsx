import React, { useState, useEffect } from 'react';
import { NavItem, SectionId } from '../types';
import { Menu, X } from 'lucide-react';

import logo from '../assets/img/logo.jpeg';

const navItems: NavItem[] = [
  { label: 'Inicio', id: SectionId.HOME },
  { label: 'Presentación', id: SectionId.ABOUT },
  { label: 'Enfoque Terapéutico', id: SectionId.APPROACH },
  { label: 'Servicios', id: SectionId.SERVICES },
  { label: 'Contacto', id: SectionId.CONTACT },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Text */}
        <div 
          className="cursor-pointer group"
          onClick={() => scrollToSection(SectionId.HOME)}
        >
           <div className="font-serif text-2xl font-bold text-text tracking-wide group-hover:text-primary transition-colors flex items-center gap-3">
             {/* Desktop Logo (GS) */}
             <span className="hidden md:block">
               GS
               <span className="block text-xs font-sans font-normal text-secondary uppercase tracking-widest">Lic. Giuliana Segura</span>
             </span>
             
             {/* Mobile Logo (Image) */}
             <div className="md:hidden w-12 h-12 rounded-full overflow-hidden border border-secondary/30">
               <img src={logo} alt="Logo" className="w-full h-full object-cover" />
             </div>

             <div className="md:hidden flex flex-col items-center">
                <span className="font-serif text-base font-bold text-primary leading-none">Giuliana Segura</span>
                <span className="block text-[0.7rem] text-gray-500 text-center w-full mt-[2px]">Lic. en Psicología</span>
             </div>
           </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-secondary hover:text-primary font-medium text-sm tracking-wide transition-colors uppercase"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 animate-fade-in-down">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="py-3 px-6 text-left text-text hover:bg-gray-50 hover:text-primary transition-colors border-b border-gray-50 last:border-0"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};