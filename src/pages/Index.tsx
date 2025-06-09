
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Phone, 
  Calendar,
  Home as HomeIcon,
  User,
  Contact
} from 'lucide-react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactSection from '@/components/ContactSection';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <section id="home">
        <Hero scrollToSection={scrollToSection} />
      </section>

      <section id="about" className="py-20 bg-slate-50">
        <About />
      </section>

      <section id="skills" className="py-20">
        <Skills />
      </section>

      <section id="projects" className="py-20 bg-slate-50">
        <Projects />
      </section>

      <section id="contact" className="py-20">
        <ContactSection />
      </section>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Abhay D. Pandey. All rights reserved.</p>
          <p className="text-slate-400 mt-2">Automation Engineer | Mechanical Specialist</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
