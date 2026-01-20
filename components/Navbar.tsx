
import React, { useState, useEffect } from 'react';
import { User, View } from '../types';

interface NavbarProps {
  currentView: View;
  setView: (view: View) => void;
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, user, onLogout }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: { name: string; view: View }[] = [
    { name: 'Philosophy', view: 'ABOUT' },
    { name: 'Technology', view: 'KAICA-L' },
    { name: 'Archives', view: 'NOTICE' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-700 ${scrolled ? 'glass rounded-full shadow-lg shadow-zinc-200/20 py-3' : ''}`}>
        <button 
          onClick={() => setView('HOME')} 
          className="text-2xl tracking-tighter text-zinc-900 font-serif font-semibold flex items-center gap-1 group"
        >
          <span className="text-rose-600 transition-transform duration-500 group-hover:rotate-12">Kai</span>
          <span className="font-light italic">Culture</span>
          <span className="hidden md:inline ml-1 opacity-50 font-sans text-[10px] tracking-[0.2em] uppercase font-bold">Academy</span>
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`text-[13px] font-medium tracking-wide transition-all relative group ${
                currentView === item.view ? 'text-rose-600' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              {item.name}
              <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-rose-600 origin-right transition-transform duration-500 scale-x-0 group-hover:scale-x-100 group-hover:origin-left ${currentView === item.view ? 'scale-x-100' : ''}`}></span>
            </button>
          ))}
          
          <div className="w-[1px] h-4 bg-zinc-200 mx-2"></div>
          
          {user ? (
            <div className="flex items-center gap-6">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                {user.username}
              </span>
              <button 
                onClick={onLogout}
                className="text-[11px] font-bold text-zinc-900 hover:text-rose-600 transition-colors uppercase tracking-widest"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setView('LOGIN')}
                className="text-[11px] font-bold text-zinc-500 hover:text-zinc-900 px-4 py-2 transition-all uppercase tracking-widest"
              >
                Login
              </button>
              <button 
                onClick={() => setView('SIGNUP')}
                className="text-[11px] font-bold text-white bg-zinc-900 px-6 py-2.5 rounded-full hover:bg-rose-600 transition-all uppercase tracking-widest shadow-xl shadow-zinc-900/10"
              >
                Join
              </button>
            </div>
          )}
        </nav>

        <button className="md:hidden text-zinc-900 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
