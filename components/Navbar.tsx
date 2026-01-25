
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when view changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentView]);

  const firstInternalLink: { name: string; view: View } = { name: 'About', view: 'ABOUT' };
  const lastInternalLink: { name: string; view: View } = { name: '공지사항', view: 'NOTICE' };

  const externalLinks = [
    { name: 'S-Lotte', url: 'https://skaical.netlify.app/' },
    { name: 'K-Ria', url: 'https://k-ria.netlify.app/' },
    { name: '연세대', url: 'https://go.yonsei.ac.kr/fro_end/html/main/' },
    { name: 'WKC', url: 'https://w-kpop.com/' },
  ];

  const handleNavClick = (view: View) => {
    setView(view);
    setIsMobileMenuOpen(false);
  };

  const NavButton = ({ item }: { item: { name: string; view: View } }) => (
    <button
      onClick={() => handleNavClick(item.view)}
      className={`text-[12px] font-bold tracking-tight transition-all relative group uppercase ${
        currentView === item.view ? 'text-rose-600' : 'text-zinc-500 hover:text-zinc-900'
      }`}
    >
      {item.name}
      <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-rose-600 origin-right transition-transform duration-500 scale-x-0 group-hover:scale-x-100 group-hover:origin-left ${currentView === item.view ? 'scale-x-100' : ''}`}></span>
    </button>
  );

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-2' : 'py-6'}`}>
      <div className={`max-w-[98%] mx-auto px-4 flex items-center justify-between transition-all duration-700 ${scrolled ? 'glass rounded-full shadow-lg shadow-zinc-200/20 py-3' : ''}`}>
        <button 
          onClick={() => handleNavClick('HOME')} 
          className="text-xl md:text-2xl tracking-tighter text-zinc-900 font-serif font-semibold flex items-center gap-1 group whitespace-nowrap px-2 z-[60]"
        >
          <span className="text-rose-600 transition-transform duration-500 group-hover:rotate-12">Kai</span>
          <span className="font-light italic">Culture</span>
          <span className="hidden sm:inline ml-1 opacity-50 font-sans text-[9px] tracking-[0.2em] uppercase font-bold">Academy</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-5">
          <NavButton item={firstInternalLink} />
          <div className="w-[1px] h-3 bg-zinc-200 mx-1"></div>
          {externalLinks.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] font-bold text-zinc-400 hover:text-rose-600 transition-all uppercase tracking-tight flex items-center gap-1"
            >
              {item.name}
              <svg className="w-2.5 h-2.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          ))}
          <div className="w-[1px] h-3 bg-zinc-200 mx-1"></div>
          <NavButton item={lastInternalLink} />
          <div className="w-[1px] h-3 bg-zinc-200 mx-1"></div>
          
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-zinc-900 leading-none">{user.username}</span>
                {user.tier && <span className="text-[8px] font-bold text-rose-500 tracking-widest uppercase">{user.tier}</span>}
              </div>
              {user.role === 'admin' && (
                <button 
                  onClick={() => handleNavClick('ADMIN')}
                  className={`text-[10px] font-bold px-3 py-1 rounded-full border border-rose-200 text-rose-600 hover:bg-rose-50 transition-all uppercase tracking-widest ${currentView === 'ADMIN' ? 'bg-rose-50' : ''}`}
                >
                  Admin
                </button>
              )}
              <button 
                onClick={onLogout}
                className="text-[10px] font-bold text-zinc-400 hover:text-zinc-900 transition-colors uppercase"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleNavClick('LOGIN')}
                className="text-[10px] font-bold text-zinc-500 px-3 py-1.5 uppercase"
              >
                Login
              </button>
              <button 
                onClick={() => handleNavClick('SIGNUP')}
                className="text-[10px] font-bold text-white bg-zinc-950 px-5 py-2 rounded-full hover:bg-rose-600 transition-all uppercase shadow-lg shadow-zinc-900/10"
              >
                Join
              </button>
            </div>
          )}
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden text-zinc-900 p-2 z-[60] relative"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`h-[1.5px] bg-zinc-900 transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`}></span>
            <span className={`h-[1.5px] bg-zinc-900 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
            <span className={`h-[1.5px] bg-zinc-900 transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-[9.5px]' : 'w-5'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`xl:hidden fixed inset-0 bg-white z-50 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-32 px-10 pb-10">
          <div className="flex flex-col gap-8">
            <button onClick={() => handleNavClick('HOME')} className="text-3xl font-serif italic text-zinc-900 text-left border-b border-zinc-50 pb-2">Home</button>
            <button onClick={() => handleNavClick('ABOUT')} className="text-3xl font-serif italic text-zinc-900 text-left border-b border-zinc-50 pb-2">Philosophy</button>
            <button onClick={() => handleNavClick('NOTICE')} className="text-3xl font-serif italic text-zinc-900 text-left border-b border-zinc-50 pb-2">Archives</button>
            
            <div className="mt-4 flex flex-col gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300 mb-2">Network</span>
              {externalLinks.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-zinc-500 hover:text-rose-600 transition-colors uppercase"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-10 border-t border-zinc-100 flex flex-col gap-6">
            {user ? (
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-zinc-900">{user.username}</span>
                    <span className="text-[10px] font-bold text-rose-500 tracking-widest uppercase">{user.tier || 'Silver Member'}</span>
                  </div>
                  {user.role === 'admin' && (
                    <button 
                      onClick={() => handleNavClick('ADMIN')}
                      className="text-[10px] font-bold px-4 py-2 rounded-full border border-rose-200 text-rose-600 uppercase tracking-widest"
                    >
                      Admin Panel
                    </button>
                  )}
                </div>
                <button 
                  onClick={() => { onLogout(); setIsMobileMenuOpen(false); }}
                  className="w-full py-4 rounded-xl border border-zinc-200 text-sm font-bold text-zinc-500 uppercase tracking-widest"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => handleNavClick('LOGIN')}
                  className="py-4 rounded-xl border border-zinc-200 text-sm font-bold text-zinc-900 uppercase tracking-widest"
                >
                  Login
                </button>
                <button 
                  onClick={() => handleNavClick('SIGNUP')}
                  className="py-4 rounded-xl bg-zinc-950 text-white text-sm font-bold uppercase tracking-widest shadow-lg"
                >
                  Join
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
