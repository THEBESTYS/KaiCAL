
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-5">
            <div className="text-3xl font-serif font-bold tracking-tighter mb-8 italic">
              <span className="text-rose-600 not-italic font-sans">Kai</span> Culture Academy
            </div>
            <p className="text-zinc-500 font-light text-base leading-relaxed max-w-sm keep-all mb-8">
              에듀테크와 K-문화의 예술적 융합을 지향하는 프리미엄 교육 플랫폼입니다. 
              우리는 배움이 즐거운 일상의 예술이 되는 순간을 만듭니다.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all cursor-pointer">
                <span className="text-[10px] font-bold">IG</span>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-zinc-950 transition-all cursor-pointer">
                <span className="text-[10px] font-bold">YT</span>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm font-light text-zinc-400">
              <li className="hover:text-white transition-colors cursor-pointer">Philosophy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Technology</li>
              <li className="hover:text-white transition-colors cursor-pointer">Archives</li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8">Legal</h4>
            <ul className="space-y-4 text-sm font-light text-zinc-400">
              <li className="hover:text-white transition-colors cursor-pointer">Privacy</li>
              <li className="hover:text-white transition-colors cursor-pointer">Terms</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cookies</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-600 mb-8">Address</h4>
            <p className="text-sm font-light text-zinc-400 leading-relaxed italic">
              Lotte World Tower 83F<br />
              Olympic-ro, Seoul, Korea<br />
              <span className="text-white mt-4 block not-italic font-medium">contact@kaica.edu</span>
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[10px] text-zinc-600 uppercase tracking-widest">© 2024 Kai Culture Academy. All rights reserved.</span>
          <span className="text-[10px] text-zinc-800 uppercase tracking-widest font-bold">Powered by Yonsei x World K-Pop</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
