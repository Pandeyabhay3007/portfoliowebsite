
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Fire Alarm Control Panel Design',
      description: 'Comprehensive fire safety system with multiple zone configurations and addressable features for commercial buildings.',
      technologies: ['PLC Programming', 'Panel Design', 'Safety Systems'],
      features: ['2-Zone Configuration', '4-Zone Configuration', 'Addressable System', 'Remote Monitoring'],
      icon: '🔥',
      color: 'border-red-200'
    },
    {
      title: 'SCADA Dashboard with Remote Monitoring',
      description: 'Advanced monitoring system providing real-time data visualization and remote control capabilities for industrial processes.',
      technologies: ['SCADA', 'HMI', 'Remote Access', 'Data Visualization'],
      features: ['Real-time Monitoring', 'Alarm Management', 'Historical Data', 'Mobile Access'],
      icon: '📊',
      color: 'border-blue-200'
    },
    {
      title: 'Water Treatment Panel',
      description: 'Intelligent water treatment system managing 22 motors with smart level control and automated process optimization.',
      technologies: ['Multi-PLC', 'Level Control', 'Motor Management', 'Automation'],
      features: ['22 Motor Control', 'Smart Level Detection', 'Energy Optimization', 'Fault Diagnostics'],
      icon: '💧',
      color: 'border-cyan-200'
    },
    {
      title: 'Load Cell Data Logging System',
      description: 'Precision weighing system with comprehensive data logging using Node-RED and MySQL for industrial applications.',
      technologies: ['Node-RED', 'MySQL', 'Data Logging', 'Load Cells'],
      features: ['High Precision Weighing', 'Database Integration', 'Real-time Logging', 'Report Generation'],
      icon: '⚖️',
      color: 'border-green-200'
    },
    {
      title: 'KUKA Robot Cell Programming',
      description: 'Advanced robotic cell programming using MasterCAM for precision manufacturing and automated production lines.',
      technologies: ['KUKA Programming', 'MasterCAM', 'Robot Integration', 'Manufacturing'],
      features: ['Precision Programming', 'CAM Integration', 'Quality Control', 'Production Optimization'],
      icon: '🤖',
      color: 'border-purple-200'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Showcasing innovative automation solutions and successful industrial implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`gradient-card border-2 ${project.color} shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{project.icon}</div>
                  <div className="flex-1">
                    <CardTitle className="text-lg font-bold text-slate-800 leading-tight">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Key Features:</h4>
                  <div className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline"
                        className="text-xs px-2 py-1 border-primary/30 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
