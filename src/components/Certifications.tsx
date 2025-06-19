import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "MongoDB Associate Developer",
      issuer: "MongoDB Inc.",
      date: "2024",
      type: "Database Certification",
      skills: ["NoSQL", "Database Design", "Aggregation", "Indexing"],
      badge: "🍃"
    },
    {
      title: "Oracle APEX Cloud Developer",
      issuer: "Oracle Corporation",
      date: "2024",
      type: "Cloud Development",
      skills: ["APEX", "Cloud Computing", "Application Development", "SQL"],
      badge: "☁️"
    },
    {
      title: "PCB Design Certification",
      issuer: "TNSDC (Tamil Nadu Skill Development Corporation)",
      date: "2023",
      type: "Hardware Design",
      skills: ["PCB Design", "Circuit Analysis", "Electronics", "CAD Tools"],
      badge: "⚡"
    },
    {
      title: "Data Entry Specialist",
      issuer: "KPC (Knowledge Processing Center)",
      date: "2023",
      type: "Professional Skills",
      skills: ["Data Management", "Accuracy", "Speed Typing", "Documentation"],
      badge: "📊"
    },
    {
      title: "Sci-Tech Industrial Needs",
      issuer: "TNSCST (Tamil Nadu State Council for Science and Technology)",
      date: "2023",
      type: "Industrial Training",
      skills: ["Industrial Processes", "Technology Applications", "Problem Solving"],
      badge: "🔬"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8" data-section="certifications">
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
              <h2 className="handwriting text-3xl sm:text-4xl lg:text-5xl text-ink-blue font-bold mb-2">Certifications</h2>
              <div className="absolute -top-1 -right-2 tape w-8 sm:w-12 h-4 sm:h-6 transform rotate-6" />
              <div className="w-16 sm:w-24 h-1 bg-ink-brown rounded-full opacity-30 mx-auto sm:mx-0" />
            </div>
            
            <p className="handwriting text-lg sm:text-xl lg:text-2xl text-ink-brown text-center sm:text-left">Badges of Learning & Achievement</p>
            
            {/* Certifications Display - Corkboard Style */}
            <div className="relative">
              {/* Corkboard Background */}
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-4 sm:p-6 lg:p-8 border-4 border-amber-300 shadow-inner">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {certifications.map((cert, index) => (
                    <div 
                      key={cert.title}
                      className={`relative bg-white rounded-lg p-4 sm:p-6 shadow-lg transform ${
                        index % 3 === 0 ? 'rotate-2' : index % 3 === 1 ? '-rotate-1' : 'rotate-1'
                      } hover:rotate-0 transition-all duration-300 hover:scale-105 border-l-4 ${
                        index % 5 === 0 ? 'border-blue-500' :
                        index % 5 === 1 ? 'border-green-500' :
                        index % 5 === 2 ? 'border-purple-500' :
                        index % 5 === 3 ? 'border-orange-500' :
                        'border-pink-500'
                      }`}
                    >
                      {/* Pin */}
                      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-red-400 rounded-full shadow-lg border-2 border-red-600" />
                      
                      {/* Certificate Badge */}
                      <div className="text-center mb-3 sm:mb-4">
                        <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">{cert.badge}</div>
                        <div className={`inline-flex items-center space-x-1 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${
                          index % 5 === 0 ? 'bg-blue-100 text-blue-800' :
                          index % 5 === 1 ? 'bg-green-100 text-green-800' :
                          index % 5 === 2 ? 'bg-purple-100 text-purple-800' :
                          index % 5 === 3 ? 'bg-orange-100 text-orange-800' :
                          'bg-pink-100 text-pink-800'
                        }`}>
                          <Award size={10} />
                          <span>{cert.type}</span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="handwriting text-base sm:text-lg lg:text-xl font-bold text-ink-blue text-center">
                          {cert.title}
                        </h3>
                        
                        <div className="text-center">
                          <p className="text-xs sm:text-sm font-semibold text-ink-brown">{cert.issuer}</p>
                          <div className="flex items-center justify-center space-x-1 text-xs text-pencil-gray mt-1">
                            <Calendar size={10} />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                        
                        {/* Skills */}
                        <div className="space-y-1 sm:space-y-2">
                          <p className="text-xs font-semibold text-pencil-gray">Skills Gained:</p>
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.map((skill, skillIndex) => (
                              <span 
                                key={skill}
                                className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-gray-100 text-gray-700 rounded text-xs"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* View Certificate Button */}
                        <button className="w-full flex items-center justify-center space-x-1 sm:space-x-2 bg-ink-blue text-white px-2 py-1.5 sm:px-3 sm:py-2 rounded text-xs hover:bg-blue-700 transition-colors">
                          <ExternalLink size={10} />
                          <span>View Certificate</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Decorative Push Pins */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-md" />
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full shadow-md" />
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-md" />
                <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shadow-md" />
              </div>
            </div>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              <div className="sticky-note p-2 sm:p-4 text-center transform rotate-1">
                <div className="handwriting text-lg sm:text-2xl font-bold text-ink-blue">5+</div>
                <div className="text-xs text-pencil-gray">Certifications</div>
              </div>
              
              <div className="sticky-note p-2 sm:p-4 text-center transform -rotate-1" style={{ background: 'linear-gradient(135deg, #E8F4FD 0%, #B3D9F2 100%)' }}>
                <div className="handwriting text-lg sm:text-2xl font-bold text-ink-blue">3</div>
                <div className="text-xs text-pencil-gray">Domains</div>
              </div>
              
              <div className="sticky-note p-2 sm:p-4 text-center transform rotate-2" style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #BBF7D0 100%)' }}>
                <div className="handwriting text-lg sm:text-2xl font-bold text-ink-blue">2024</div>
                <div className="text-xs text-pencil-gray">Latest</div>
              </div>
            </div>
            
            {/* Bottom Note */}
            <div className="text-center mt-6 sm:mt-8">
              <blockquote className="handwriting text-lg sm:text-xl text-ink-brown italic">
                "Learning never stops, certificates are just milestones"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;