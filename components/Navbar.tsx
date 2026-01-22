
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

  const firstInternalLink: { name: string; view: View } = { name: 'About', view: 'ABOUT' };
  const lastInternalLink: { name: string; view: View } = { name: '공지사항', view: 'NOTICE' };

  const externalLinks = [
    { name: 'S-Lotte', url: 'https://skaical.netlify.app/' },
    { name: 'Reservation', url: 'https://ju8gdhk8ep.skywork.website/' },
    { name: 'KaiCA-L', url: 'https://hkpz5ks448.skywork.website/' },
    { name: 'K-Ria', url: 'https://j2su6uas28.skywork.website' },
    { name: '연세대', url: 'https://go.yonsei.ac.kr/fro_end/html/main/' },
    { name: 'WKC', url: 'https://w-kpop.com/' },
  ];

  const NavButton = ({ item }: { item: { name: string; view: View } }) => (
    <button
      onClick={() => setView(item.view)}
      className={`text-[12px] font-bold tracking-tight transition-all relative group uppercase ${
        currentView === item.view ? 'text-rose-600' : 'text-zinc-500 hover:text-zinc-900'
      }`}
    >
      {item.name}
      <span className={`absolute -bottom-1 left-0 w-full h-[1px] bg-rose-600 origin-right transition-transform duration-500 scale-x-0 group-hover:scale-x-100 group-hover:origin-left ${currentView === item.view ? 'scale-x-100' : ''}`}></span>
    </button>
  );

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className={`max-w-[98%] mx-auto px-4 flex items-center justify-between transition-all duration-700 ${scrolled ? 'glass rounded-full shadow-lg shadow-zinc-200/20 py-3' : ''}`}>
        <button 
          onClick={() => setView('HOME')} 
          className="text-xl md:text-2xl tracking-tighter text-zinc-900 font-serif font-semibold flex items-center gap-1 group whitespace-nowrap px-2"
        >
          <span className="text-rose-600 transition-transform duration-500 group-hover:rotate-12">Kai</span>
          <span className="font-light italic">Culture</span>
          <span className="hidden lg:inline ml-1 opacity-50 font-sans text-[9px] tracking-[0.2em] uppercase font-bold">Academy</span>
        </button>

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
                  onClick={() => setView('ADMIN')}
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
                onClick={() => setView('LOGIN')}
                className="text-[10px] font-bold text-zinc-500 px-3 py-1.5 uppercase"
              >
                Login
              </button>
              <button 
                onClick={() => setView('SIGNUP')}
                className="text-[10px] font-bold text-white bg-zinc-950 px-5 py-2 rounded-full hover:bg-rose-600 transition-all uppercase shadow-lg shadow-zinc-900/10"
              >
                Join
              </button>
            </div>
          )}
        </nav>

        <button className="xl:hidden text-zinc-900 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
