import React from 'react';
import { Code, Database, Cloud, Palette, Wrench, Laptop } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Languages",
      icon: Code,
      color: "from-blue-400 to-blue-600",
      skills: ["Java", "C", "Python", "JavaScript", "HTML/CSS"]
    },
    {
      category: "Frameworks",
      icon: Laptop,
      color: "from-green-400 to-green-600",
      skills: ["ReactJS", "NodeJS", "Flask", "TailwindCSS"]
    },
    {
      category: "Database",
      icon: Database,
      color: "from-purple-400 to-purple-600",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      category: "Cloud",
      icon: Cloud,
      color: "from-cyan-400 to-cyan-600",
      skills: ["AWS (Beginner)"]
    },
    {
      category: "Tools",
      icon: Wrench,
      color: "from-orange-400 to-orange-600",
      skills: ["Figma", "VS Code", "Capcut", "After Effects", "PCB Design"]
    },
    {
      category: "Design",
      icon: Palette,
      color: "from-pink-400 to-pink-600",
      skills: ["UI/UX", "Creative Design", "Video Editing"]
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8" data-section="skills">
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
              <h2 className="handwriting text-3xl sm:text-4xl lg:text-5xl text-ink-blue font-bold mb-2">Skills & Tools</h2>
              <div className="absolute -top-1 -right-2 tape w-8 sm:w-12 h-4 sm:h-6 transform rotate-6" />
              <div className="w-16 sm:w-24 h-1 bg-ink-brown rounded-full opacity-30 mx-auto sm:mx-0" />
            </div>
            
            {/* Subtitle */}
            <p className="handwriting text-lg sm:text-xl lg:text-2xl text-ink-brown text-center sm:text-left">My Technical Toolbox</p>
            
            {/* Skills Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div 
                    key={category.category} 
                    className={`polaroid p-4 sm:p-6 ${index % 3 === 0 ? 'transform rotate-1' : index % 3 === 1 ? 'transform -rotate-1' : 'transform rotate-0.5'}`}
                  >
                    {/* Category Header */}
                    <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="text-white" size={16} />
                      </div>
                      <h3 className="handwriting text-lg sm:text-xl lg:text-2xl font-bold text-ink-blue">{category.category}</h3>
                    </div>
                    
                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skill}
                          className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-105 ${
                            skillIndex % 4 === 0 ? 'bg-yellow-200 text-yellow-800' :
                            skillIndex % 4 === 1 ? 'bg-green-200 text-green-800' :
                            skillIndex % 4 === 2 ? 'bg-blue-200 text-blue-800' :
                            'bg-purple-200 text-purple-800'
                          }`}
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                    
                    {/* Proficiency Bar */}
                    <div className="mt-3 sm:mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                        <div 
                          className={`bg-gradient-to-r ${category.color} h-1.5 sm:h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${Math.random() * 30 + 70}%` }}
                        />
                      </div>
                    </div>
                    
                    {/* Tape decoration */}
                    <div className={`absolute ${index % 2 === 0 ? '-top-1 -right-1 sm:-top-2 sm:-right-2' : '-top-1 -left-1 sm:-top-2 sm:-left-2'} tape w-8 sm:w-12 h-4 sm:h-6 transform ${index % 2 === 0 ? 'rotate-12' : '-rotate-12'}`} />
                  </div>
                );
              })}
            </div>
            
            {/* Learning Section */}
            <div className="mt-8 sm:mt-12 text-center sm:text-left">
              <div className="sticky-note p-4 sm:p-6 transform -rotate-1 inline-block max-w-sm">
                <h3 className="handwriting text-lg sm:text-xl lg:text-2xl font-bold text-ink-blue mb-2 sm:mb-3">Currently Learning</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  <span className="bg-red-200 text-red-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">Docker</span>
                  <span className="bg-indigo-200 text-indigo-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">Kubernetes</span>
                  <span className="bg-teal-200 text-teal-800 px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">TypeScript</span>
                </div>
              </div>
            </div>
            
            {/* Bottom Quote */}
            <div className="text-center mt-6 sm:mt-8">
              <blockquote className="handwriting text-lg sm:text-xl text-ink-brown italic">
                "The best way to learn is by building something meaningful"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;