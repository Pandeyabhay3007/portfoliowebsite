import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowDown, Sparkles, Code, Cpu } from 'lucide-react';

interface HeroProps {
  scrollToSection: (section: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1-n7uvF-1TxvQRjfp1Abczl3zLjm2OAZC/view?usp=sharing';
    link.download = 'Abhay_Pandey_Resume';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-white/30 to-blue-200/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-tl from-white/25 to-blue-300/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-gradient-to-r from-white/40 to-blue-100/20 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white/30 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-16 text-white/20 animate-bounce delay-300">
          <Code size={24} />
        </div>
        <div className="absolute top-1/3 right-24 text-white/20 animate-bounce delay-700">
          <Cpu size={20} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-white/20 animate-bounce delay-500">
          <Sparkles size={18} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Glass Morphism Greeting Badge */}
              <div className="mb-8 inline-flex items-center">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 shadow-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-white/90">
                      👋 Hello, Abhay here How can I Help You
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Name Typography - Single Row */}
              <div className="relative mb-8">
                <h1 className="text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    ABHAY PANDEY
                  </span>
                </h1>
                
                {/* Decorative underline */}
                <div className=".underline 
  width: 100%;
  height: 2px;
  margin-top: 8px;
 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent lg:mx-0 mx-auto rounded-full"></div>
              </div>
              
              {/* Enhanced Role Description */}
              <div className="mb-8">
                <p className="text-lg md:text-2xl lg:text-xl xl:text-2xl font-light mb-4 text-blue-50 leading-relaxed">
                  <span className="font-medium text-white">Automation Engineer</span> 
                  <span className="text-blue-200 mx-2">•</span>
                  <span className="font-medium text-white">Mechanical Specialist</span>
                  <span className="text-blue-200 mx-2">•</span>
                  <span className="font-medium text-white">Industrial Project Developer</span>
                </p>
              </div>
              
              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center mb-8">
                <Button 
                  onClick={handleDownloadResume}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 border-0 px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </Button>
                
                <Button 
                  onClick={() => scrollToSection('projects')}
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 border-0 px-10 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 mr-3" />
                  View Projects
                </Button>
              </div>

              {/* Projects, Experience and Client Satisfaction Row */}
              <div className="flex justify-center lg:justify-start gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10+</div>
                  <div className="text-sm text-blue-200">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">1+</div>
                  <div className="text-sm text-blue-200">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-blue-200">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">100+</div>
                  <div className="text-sm text-blue-200">Awards</div>
                </div>
              </div>
            </div>

            {/* Right Image Section - Circular with Your Image */}
            <div className="relative flex justify-center">
              <div className="relative z-10">
                {/* Main Circular Image Container */}
                <div className="relative">
                  <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-full p-6 shadow-2xl">
                    <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-white/20 to-white/5 rounded-full overflow-hidden relative">
                      <img 
                        src="https://i.postimg.cc/pLyZNvvJ/20231215-114455.jpg" 
                        alt="Abhay Pandey - Automation Engineer"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/10 rounded-full blur-sm"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-blue-300/20 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Scroll Indicator */}
          <div className="mt-16 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-blue-200 font-medium">Discover More</span>
              <Button
                onClick={() => scrollToSection('about')}
                variant="ghost"
                className="text-white hover:bg-white/10 animate-bounce rounded-full p-3 backdrop-blur-sm border border-white/20"
              >
                <ArrowDown className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
