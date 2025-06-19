import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, Heart, User, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thanks for your message! I\'ll get back to you soon. 📧');
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sujithnagaraj20@gmail.com",
      href: "mailto:sujithnagaraj20@gmail.com",
      color: "text-red-600"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8667662913",
      href: "tel:+918667662913",
      color: "text-green-600"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SUJITH-NS",
      href: "https://github.com/SUJITH-NS",
      color: "text-gray-800"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/sujithnrc2005",
      href: "https://linkedin.com/in/sujithnrc2005",
      color: "text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8" data-section="contact">
      <div className="max-w-6xl w-full">
        <div className="page-flip aged-paper rounded-lg p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-amber-200 relative">
          {/* Notebook Holes - Hidden on mobile */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 hidden sm:flex flex-col justify-evenly">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-gray-300 shadow-inner" />
            ))}
          </div>
          
          {/* Margin Line - Hidden on mobile */}
          <div className="absolute left-12 sm:left-20 top-0 bottom-0 w-0.5 bg-red-300 opacity-50 hidden sm:block" />
          
          <div className="sm:ml-16 space-y-6 sm:space-y-8">
            {/* Header */}
            <div className="relative text-center sm:text-left">
              <h2 className="handwriting text-3xl sm:text-4xl lg:text-5xl text-ink-blue font-bold mb-2">Let's Connect!</h2>
              <div className="absolute -top-1 -right-2 tape w-8 sm:w-12 h-4 sm:h-6 transform rotate-6" />
              <div className="w-16 sm:w-24 h-1 bg-ink-brown rounded-full opacity-30 mx-auto sm:mx-0" />
            </div>
            
            <p className="handwriting text-lg sm:text-xl lg:text-2xl text-ink-brown text-center sm:text-left">Drop me a line or just say hello! 💌</p>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Contact Information */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="handwriting text-2xl sm:text-3xl font-bold text-ink-blue text-center sm:text-left">Get in Touch</h3>
                
                {/* Contact Cards */}
                <div className="space-y-3 sm:space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={info.label}
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block polaroid p-3 sm:p-4 hover:scale-105 transition-all duration-300 ${
                          index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'
                        } hover:rotate-0`}
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-md border-2 ${
                            index % 4 === 0 ? 'border-red-200' :
                            index % 4 === 1 ? 'border-green-200' :
                            index % 4 === 2 ? 'border-gray-200' :
                            'border-blue-200'
                          }`}>
                            <Icon className={info.color} size={16} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="handwriting text-base sm:text-lg font-semibold text-ink-blue">{info.label}</div>
                            <div className="text-xs sm:text-sm text-pencil-gray break-all">{info.value}</div>
                          </div>
                        </div>
                        
                        {/* Tape decoration */}
                        <div className={`absolute ${index % 2 === 0 ? '-top-1 -right-1' : '-top-1 -left-1'} tape w-8 sm:w-12 h-3 sm:h-4 transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`} />
                      </a>
                    );
                  })}
                </div>
                
                {/* Location */}
                <div className="sticky-note p-3 sm:p-4 transform rotate-2 mx-auto sm:mx-0 max-w-xs">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-ink-blue" size={16} />
                    <div>
                      <div className="handwriting text-base sm:text-lg font-semibold text-ink-blue">Location</div>
                      <div className="text-xs sm:text-sm text-pencil-gray">Tamil Nadu, India</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form - Postcard Style */}
              <div className="space-y-4 sm:space-y-6">
                <h3 className="handwriting text-2xl sm:text-3xl font-bold text-ink-blue text-center sm:text-left">Send My Note ✉️</h3>
                
                <div className="postcard bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg border-l-4 border-ink-blue transform -rotate-1 hover:rotate-0 transition-all duration-300">
                  {/* Postcard Header */}
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="text-right text-xs sm:text-sm text-pencil-gray">
                      {new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="w-12 h-8 sm:w-16 sm:h-12 bg-red-200 border-2 border-red-400 rounded flex items-center justify-center transform rotate-12">
                      <Heart className="text-red-600" size={12} />
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="handwriting text-base sm:text-lg text-ink-blue font-semibold block mb-2">Dear Sujith,</label>
                    </div>
                    
                    <div>
                      <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-pencil-gray mb-2">
                        <User size={14} />
                        <span>My name is</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-300 focus:border-ink-blue focus:ring-2 focus:ring-ink-blue focus:ring-opacity-20 outline-none bg-white rounded-md transition-all duration-200 text-base sm:text-lg"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-pencil-gray mb-2">
                        <Mail size={14} />
                        <span>You can reach me at</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-300 focus:border-ink-blue focus:ring-2 focus:ring-ink-blue focus:ring-opacity-20 outline-none bg-white rounded-md transition-all duration-200 text-base sm:text-lg"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="flex items-center space-x-2 text-xs sm:text-sm font-medium text-pencil-gray mb-2">
                        <MessageCircle size={14} />
                        <span>I wanted to say</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-3 py-3 sm:px-4 sm:py-3 border-2 border-gray-300 focus:border-ink-blue focus:ring-2 focus:ring-ink-blue focus:ring-opacity-20 outline-none bg-white rounded-md transition-all duration-200 resize-none text-base sm:text-lg"
                        placeholder="Your message here..."
                        required
                      />
                    </div>
                    
                    {/* Submit Button - More Visible */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-ink-blue to-blue-600 text-white px-6 py-4 sm:px-8 sm:py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg font-semibold flex items-center justify-center space-x-3"
                      >
                        <Send size={20} />
                        <span>Send My Note ✉️</span>
                      </button>
                    </div>
                    
                    <div className="text-xs sm:text-sm text-pencil-gray italic handwriting text-center">
                      Sincerely yours,
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Fun CTA */}
            <div className="text-center mt-8 sm:mt-12">
              <div className="sticky-note inline-block p-4 sm:p-6 transform -rotate-1 max-w-md">
                <div className="handwriting text-lg sm:text-2xl text-ink-blue font-bold mb-2">
                  ☕ Let's grab a virtual coffee!
                </div>
                <div className="text-xs sm:text-sm text-pencil-gray">
                  I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology!
                </div>
              </div>
            </div>
            
            {/* Thank You Note */}
            <div className="text-center mt-6 sm:mt-8">
              <blockquote className="handwriting text-lg sm:text-xl text-ink-brown italic">
                "Thanks for taking the time to explore my journey!"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="fixed bottom-16 lg:bottom-4 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 sm:px-6 rounded-full shadow-lg border border-amber-200">
          <div className="handwriting text-xs sm:text-sm text-ink-brown">
            Made with 🧊 by <a href="https://github.com/yugabharathi21" target="_blank" rel="noopener noreferrer" className="hover:text-ink-blue transition-colors"> yugabharathi21 </a> © 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;