import React from 'react';
import { Heart, Lightbulb, Globe, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8" data-section="about">
      <div className="max-w-4xl w-full">
        <div className="page-flip aged-paper rounded-lg p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-amber-200 relative">
          {/* Notebook Holes - Hidden on mobile */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 hidden sm:flex flex-col justify-evenly">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-gray-300 shadow-inner" />
            ))}
          </div>
          
          {/* Margin Line - Hidden on mobile */}
          <div className="absolute left-12 sm:left-20 top-0 bottom-0 w-0.5 bg-red-300 opacity-50 hidden sm:block" />
          
          {/* Page Header */}
          <div className="sm:ml-16 space-y-6 sm:space-y-8">
            <div className="relative text-center sm:text-left">
              <h2 className="handwriting text-3xl sm:text-4xl lg:text-5xl text-ink-blue font-bold mb-2">About Me</h2>
              <div className="absolute -top-1 -right-2 tape w-8 sm:w-12 h-4 sm:h-6 transform rotate-6" />
              <div className="w-16 sm:w-24 h-1 bg-ink-brown rounded-full opacity-30 mx-auto sm:mx-0" />
            </div>
            
            {/* Main Content */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column - Main Story */}
              <div className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <p className="text-base sm:text-lg leading-relaxed text-pencil-gray">
                    I'm a <span className="handwriting text-lg sm:text-xl text-ink-blue font-semibold">motivated and flexible fresher</span> passionate about 
                    <span className="bg-yellow-200 px-1 rounded"> Frontend Development</span>, 
                    <span className="bg-blue-200 px-1 rounded"> Cloud</span>, and 
                    <span className="bg-green-200 px-1 rounded"> UI/UX</span>.
                  </p>
                  
                  <div className="absolute -right-2 sm:-right-4 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-pink-200 rounded-full opacity-50" />
                </div>
                
                <p className="text-base sm:text-lg leading-relaxed text-pencil-gray">
                  I enjoy <span className="handwriting text-lg sm:text-xl text-ink-brown">solving problems</span> and am eager to learn and grow in the tech world. 
                  My curiosity drives me to explore new technologies and create meaningful digital experiences.
                </p>
                
                {/* World Map Doodle */}
                <div className="pencil-sketch p-3 sm:p-4 bg-white bg-opacity-50 rounded-lg">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                    <Globe className="text-ink-blue" size={18} />
                    <span className="handwriting text-base sm:text-lg text-ink-brown">Dream Destinations</span>
                  </div>
                  <div className="text-xs sm:text-sm text-pencil-gray space-y-1">
                    <div>🌍 Silicon Valley - Tech Innovation Hub</div>
                    <div>🏔️ Switzerland - Peaceful Coding Retreats</div>
                    <div>🗾 Japan - Minimalist Design Inspiration</div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Personality Traits */}
              <div className="space-y-3 sm:space-y-4">
                <h3 className="handwriting text-2xl sm:text-3xl text-ink-blue font-semibold text-center sm:text-left">What Drives Me</h3>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="sticky-note p-3 sm:p-4 rounded-lg transform rotate-1">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Heart className="text-red-500 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <div className="handwriting text-base sm:text-lg font-semibold text-ink-blue">Passion for Learning</div>
                        <div className="text-xs sm:text-sm text-pencil-gray">Always curious about new technologies and methodologies</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="sticky-note p-3 sm:p-4 rounded-lg transform -rotate-1" style={{ background: 'linear-gradient(135deg, #E8F4FD 0%, #B3D9F2 100%)' }}>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Lightbulb className="text-yellow-600 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <div className="handwriting text-base sm:text-lg font-semibold text-ink-blue">Creative Problem Solving</div>
                        <div className="text-xs sm:text-sm text-pencil-gray">Finding elegant solutions to complex challenges</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="sticky-note p-3 sm:p-4 rounded-lg transform rotate-2" style={{ background: 'linear-gradient(135deg, #F0FDF4 0%, #BBF7D0 100%)' }}>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <Code className="text-green-600 mt-1 flex-shrink-0" size={16} />
                      <div>
                        <div className="handwriting text-base sm:text-lg font-semibold text-ink-blue">Clean Code Advocate</div>
                        <div className="text-xs sm:text-sm text-pencil-gray">Writing maintainable, readable, and efficient code</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Quote */}
            <div className="mt-8 sm:mt-12 text-center">
              <div className="inline-block relative">
                <blockquote className="handwriting text-lg sm:text-2xl text-ink-brown italic">
                  "Code is poetry written in logic"
                </blockquote>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 bg-ink-brown opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;