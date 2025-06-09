
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'PLC Programming',
      skills: ['Siemens S7-200', 'S7-300', 'S7-1200', 'S7-1500'],
      icon: '⚡',
      color: 'bg-blue-500'
    },
    {
      title: 'HMI & SCADA',
      skills: ['KTP-700', 'KTP-900', 'SCADA Development', 'Remote Monitoring'],
      icon: '🖥️',
      color: 'bg-green-500'
    },
    {
      title: 'Robotics',
      skills: ['KUKA Robot Programming', 'Welding Applications', 'Pick & Place', 'Machining'],
      icon: '🤖',
      color: 'bg-purple-500'
    },
    {
      title: 'Circuit Design',
      skills: ['Pneumatic Circuits', 'Hydraulic Circuits', 'Electrical AutoCAD', 'Panel Design'],
      icon: '⚙️',
      color: 'bg-orange-500'
    },
    {
      title: 'Integration',
      skills: ['Multi-PLC to Single HMI', 'System Integration', 'Data Logging', 'Node-RED'],
      icon: '🔗',
      color: 'bg-red-500'
    },
    {
      title: 'Software Tools',
      skills: ['AutoCAD', 'MasterCAM', 'MySQL', 'SCADA Dashboards'],
      icon: '💻',
      color: 'bg-teal-500'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Comprehensive technical skills in automation, mechanical engineering, and industrial systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="w-full justify-center py-2 bg-slate-100 text-slate-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
