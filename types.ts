export enum SectionId {
  HOME = 'inicio',
  ABOUT = 'sobre-mi',
  APPROACH = 'enfoque',
  SERVICES = 'servicios',
  FAQ = 'faq',
  CONTACT = 'contacto'
}

export interface NavItem {
  label: string;
  id: SectionId;
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}