import React from 'react';
import { BookOpen, User, GraduationCap, Wrench, FolderOpen, Award, Mail, Home } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  sections: Array<{ id: string; component: React.ComponentType }>;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate, sections }) => {
  const getIcon = (sectionId: string) => {
    const iconMap = {
      cover: Home,
      about: User,
      education: GraduationCap,
      skills: Wrench,
      projects: FolderOpen,
      certifications: Award,
      contact: Mail
    };
    return iconMap[sectionId as keyof typeof iconMap] || BookOpen;
  };

  const getSectionTitle = (sectionId: string) => {
    const titleMap = {
      cover: 'Home',
      about: 'About',
      education: 'Education',
      skills: 'Skills',
      projects: 'Projects',
      certifications: 'Certs',
      contact: 'Contact'
    };
    return titleMap[sectionId as keyof typeof titleMap] || sectionId;
  };

  const allSections = [{ id: 'cover', component: () => null }, ...sections];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col space-y-1 pr-2">
          {allSections.map(({ id }) => {
            const Icon = getIcon(id);
            const isActive = currentSection === id;
            
            return (
              <button
                key={id}
                onClick={() => onNavigate(id)}
                className={`notebook-tab ${isActive ? 'active' : ''} px-3 py-2 flex items-center space-x-2 text-sm font-medium text-ink-brown hover:text-ink-blue transition-all duration-300 group`}
                title={getSectionTitle(id)}
              >
                <Icon size={16} className="group-hover:scale-110 transition-transform" />
                <span className="handwriting text-lg">{getSectionTitle(id)}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile/Tablet Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="bg-white bg-opacity-95 backdrop-blur-sm border-t-2 border-amber-200 shadow-lg">
          <div className="flex justify-around items-center py-2 px-2">
            {allSections.map(({ id }) => {
              const Icon = getIcon(id);
              const isActive = currentSection === id;
              
              return (
                <button
                  key={id}
                  onClick={() => onNavigate(id)}
                  className={`flex flex-col items-center space-y-1 px-2 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-ink-blue text-white shadow-md' 
                      : 'text-ink-brown hover:text-ink-blue hover:bg-amber-50'
                  }`}
                  title={getSectionTitle(id)}
                >
                  <Icon size={18} className="transition-transform hover:scale-110" />
                  <span className="handwriting text-xs font-medium">
                    {getSectionTitle(id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;