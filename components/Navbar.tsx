import React, { useState, useEffect } from 'react';
import { NavItem, SectionId } from '../types';
import { Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'Inicio', id: SectionId.HOME },
  { label: 'Sobre Mí', id: SectionId.ABOUT },
  { label: 'Enfoque', id: SectionId.APPROACH },
  { label: 'Tratamientos', id: SectionId.SERVICES },
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
           <div className="font-serif text-2xl font-bold text-text tracking-wide group-hover:text-primary transition-colors">
             GS
             <span className="block text-xs font-sans font-normal text-primary uppercase tracking-widest">Lic. Giuliana Segura</span>
           </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-text-light hover:text-primary font-medium text-sm tracking-wide transition-colors uppercase"
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