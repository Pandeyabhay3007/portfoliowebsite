import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PhoneCall, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: PhoneCall,
      title: 'Phone',
      details: ['+91 78619 58668', '+91 90542 41277'],
      color: 'bg-blue-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['pandeyabhay3007@gmail.com'],
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['205 Swastik Avenue-B, Sargam Complex', 'Kadodara, Surat – 394327'],
      color: 'bg-purple-500'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "⚠️ Form Submission Warning",
      description: (
        <div className="mt-2">
          <p className="mb-2">For immediate response, please contact directly:</p>
          <div className="space-y-1 text-sm">
            <p>📧 Email: pandeyabhay3007@gmail.com</p>
            <p>📱 Phone: +91 78619 58668</p>
            <p>📱 Phone: +91 90542 41277</p>
          </div>
        </div>
      ),
      variant: "destructive",
      duration: 10000, // Show for 10 seconds
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto">
            Ready to discuss your next automation project? Let's connect and bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="gradient-card border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center shadow-lg`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-600 text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="gradient-card border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">Send Message</CardTitle>
                <p className="text-slate-600">
                  Fill out the form below and I'll respond as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full resize-none"
                      placeholder="Tell me about your project requirements, timeline, and any specific needs..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full gradient-hero text-white border-0 py-3 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
