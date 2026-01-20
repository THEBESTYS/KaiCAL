
import React, { useEffect, useRef } from 'react';
import { View } from '../types';

const Home: React.FC<{ setView: (v: View) => void }> = ({ setView }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white overflow-hidden">
      {/* Immersive Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-zinc-950 px-6">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Artistic Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950"></div>
          {/* Animated decorative orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-600/20 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div className="max-w-5xl w-full text-center relative z-10 fade-in">
          <span className="inline-block text-rose-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-8 border border-rose-500/30 px-4 py-1.5 rounded-full backdrop-blur-md">
            The Future of K-Culture
          </span>
          <h1 className="text-6xl md:text-9xl font-serif text-white tracking-tighter leading-[0.9] mb-12 italic">
            Artistry <span className="text-rose-600 font-sans not-italic font-black">&</span> Intelligence
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed keep-all mb-12">
            연세대학교와 월드케이팝센터가 제안하는 차세대 에듀테크. 일상을 예술로 바꾸는 몰입형 경험, 카이 컬처 아카데미에서 시작됩니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => setView('KAICA-L')}
              className="group relative bg-white text-zinc-950 px-10 py-5 rounded-full text-[11px] font-bold uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
            >
              <span className="relative z-10">Experience the Tech</span>
              <div className="absolute inset-0 bg-rose-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <span className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 text-white transition-opacity duration-500">Experience the Tech</span>
            </button>
            <button 
              onClick={() => setView('ABOUT')}
              className="text-white text-[11px] font-bold uppercase tracking-widest border-b border-white/20 pb-1 hover:border-rose-600 transition-colors"
            >
              Our Philosophy
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[10px] text-white uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Partners / Statement Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal">
              <h2 className="text-5xl md:text-7xl font-serif tracking-tighter leading-tight mb-8">
                Crafting <span className="italic">Excellence</span> through Collaboration
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed keep-all mb-12 max-w-lg font-light">
                최고 수준의 학문적 깊이와 현장의 생동감이 만났습니다. 우리는 단순히 지식을 전달하는 것을 넘어, 예술적 감수성과 기술적 혁신이 공존하는 공간을 창조합니다.
              </p>
              <div className="flex flex-wrap gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="font-bold tracking-tighter text-2xl">Yonsei</span>
                <span className="font-bold tracking-tighter text-2xl">World K-Pop</span>
                <span className="font-bold tracking-tighter text-2xl">O&E Lab</span>
              </div>
            </div>
            <div className="reveal flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] bg-zinc-100 rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Artistic Focus" />
                <div className="absolute inset-0 bg-rose-600/10 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Magazine Grid */}
      <section className="py-32 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center reveal">
            <span className="text-rose-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4 block">Curated Programs</span>
            <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight text-zinc-900">KaiCA Collections</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ArtCard 
              image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000" 
              category="K-Beauty" 
              title="Aesthetic Precision" 
              desc="AR 뷰티 메이크업 튜토리얼을 통한 차세대 코스메틱 경험."
            />
            <ArtCard 
              image="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000" 
              category="K-Pop" 
              title="Sonic Resonance" 
              desc="VR 댄스 스튜디오에서 만나는 감각의 한계를 넘는 퍼포먼스 교육."
            />
            <ArtCard 
              image="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000" 
              category="Lifestyle" 
              title="Modern Rituals" 
              desc="AI 맞춤형 학습 기술로 설계된 당신만을 위한 문화 생활 큐레이션."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-zinc-950 relative overflow-hidden text-center px-6">
        <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900 via-transparent to-transparent blur-3xl scale-150"></div>
        </div>
        <div className="max-w-3xl mx-auto relative z-10 reveal">
          <h2 className="text-5xl md:text-7xl font-serif italic text-white mb-12">Experience the <span className="text-rose-600 not-italic font-sans font-bold">New Era</span> of Culture</h2>
          <button 
            onClick={() => setView('SIGNUP')}
            className="bg-white text-zinc-950 px-12 py-6 rounded-full text-[12px] font-bold uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl shadow-rose-600/10"
          >
            Join the Academy
          </button>
        </div>
      </section>
    </div>
  );
};

const ArtCard: React.FC<{image: string; category: string; title: string; desc: string}> = ({ image, category, title, desc }) => (
  <div className="reveal group cursor-pointer">
    <div className="aspect-[4/5] bg-zinc-200 overflow-hidden relative rounded-[2rem] shadow-xl transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-rose-600/10">
      <img src={image} className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
      <div className="absolute bottom-8 left-8 right-8">
        <span className="text-rose-500 font-bold text-[9px] uppercase tracking-[0.3em] mb-2 block">{category}</span>
        <h3 className="text-2xl font-serif italic text-white tracking-tight mb-2">{title}</h3>
        <p className="text-white/60 text-xs font-light leading-relaxed line-clamp-2 keep-all transition-opacity duration-500 group-hover:opacity-100">
          {desc}
        </p>
      </div>
    </div>
  </div>
);

export default Home;
