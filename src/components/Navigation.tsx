import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/ABHAY PANDEY RESUME.pdf';
    link.download = 'Abhay_Pandey_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl text-gradient">
          Abhay D. Pandey
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === item.id ? 'text-primary' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          <Button 
            onClick={handleDownloadResume}
            className="gradient-hero text-white border-0"
            size="sm"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>

        <div className="md:hidden">
          <Button 
            onClick={handleDownloadResume}
            size="sm"
            variant="outline"
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
