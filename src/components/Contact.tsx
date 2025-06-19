import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
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

  const handleGmailClick = () => {
    const email = "sujithnagaraj20@gmail.com";
    const subject = "Hello from your portfolio";
    const gmailUrl = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${email}&su=${encodeURIComponent(subject)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

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
              <p className="text-gray-600 text-lg">I'd love to hear from you. Feel free to reach out!</p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg bg-white/80 hover:bg-white transition-colors duration-300 shadow-md hover:shadow-lg group"
                >
                  <div className={`p-3 rounded-full ${info.color} bg-opacity-10`}>
                    <info.icon className={`${info.color} w-6 h-6 group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">{info.label}</h3>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Gmail Compose Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleGmailClick}
                className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-ink-blue to-amber-600 text-amber-200 rounded-xl 
                hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl 
                text-lg font-semibold min-h-[4rem] cursor-pointer active:scale-[0.98]"
                style={{ touchAction: 'manipulation' }}
              >
                <Mail className="w-6 h-6" />
                <span>Compose in Gmail</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;