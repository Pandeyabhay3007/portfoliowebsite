
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Home as HomeIcon, User } from 'lucide-react';

const About = () => {
  const personalDetails = [
    { icon: Calendar, label: 'Date of Birth', value: '30/07/2003' },
    { icon: HomeIcon, label: 'Location', value: 'Surat, Gujarat, India' },
    { icon: User, label: 'Languages', value: 'English, Hindi, Gujarati' },
  ];

  const hobbies = ['Cycling', 'WorkOut', 'Gaming', 'Exploring New Things'];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              I am an automation and mechanical engineer with a diploma in Mechanical Engineering 
              and a specialized course in Mechatronics from Indo German Tool Room. Currently working 
              at <span className="font-semibold text-primary">BReVal Consulting Services LLP</span>, 
              I've led or contributed to more than <span className="font-semibold text-primary">10 industrial automation projects</span>.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              I specialize in <span className="font-semibold text-primary">PLC-HMI-SCADA systems</span>, 
              robot programming, and electrical panel design, bringing innovative solutions to complex 
              industrial challenges.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-medium"
                  >
                    🎯 {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {personalDetails.map((detail, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <detail.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800">{detail.label}</h3>
                      <p className="text-slate-600">{detail.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
