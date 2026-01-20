
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white py-32 px-6 fade-in">
      <div className="max-w-5xl mx-auto">
        <header className="mb-40 text-center">
          <span className="text-rose-600 font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">Our Vision</span>
          <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter mb-12 text-zinc-900 leading-none">The Alchemy of Culture</h1>
          <div className="w-24 h-px bg-zinc-200 mx-auto mb-12"></div>
          <p className="text-2xl text-zinc-500 font-light leading-relaxed keep-all italic max-w-3xl mx-auto">
            "예술적 영감과 기술적 혁신이 만나는 지점, <br className="hidden md:block" />그곳에 카이 컬처 아카데미의 철학이 있습니다."
          </p>
        </header>

        <div className="space-y-48">
          {/* Section 1: Legacy & Future */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-40">
              <h2 className="text-4xl font-serif italic tracking-tight mb-8">Redefining <br className="hidden lg:block" /><span className="text-rose-600 font-sans not-italic font-bold">Educational Legacy</span></h2>
              <div className="space-y-8 text-zinc-600 text-lg font-light leading-relaxed keep-all">
                <p>롯데의 프리미엄 브랜드 가치와 연세대학교의 학문적 깊이가 만나 새로운 비즈니스 모델을 창조합니다.</p>
                <p>우리는 디지털 전환의 시대에 발맞춰, 전통적인 교육 환경을 파괴적으로 혁신하고 사용자 중심의 예술적 체험 공간을 제안합니다.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="aspect-square bg-zinc-50 rounded-[3rem] p-12 flex flex-col justify-center border border-zinc-100 shadow-inner">
                 <h4 className="text-rose-600 font-bold uppercase tracking-widest text-[11px] mb-4">Strategic Pillar 01</h4>
                 <h3 className="text-3xl font-serif mb-6 italic">World's First K-Culture Edutech Hub</h3>
                 <p className="text-zinc-500 font-light keep-all">글로벌 시장을 선도하는 K-콘텐츠 교육의 전초기지로서, 기술이 담보하는 교육의 보편성과 예술이 선사하는 특수성을 결합합니다.</p>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-[3rem]">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover" alt="Modern Tech" />
              </div>
            </div>
          </div>

          {/* Section 2: Artistic Architecture */}
          <div className="text-center">
            <h2 className="text-5xl font-serif italic mb-20 tracking-tight">Core Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="group">
                <div className="mb-8 overflow-hidden rounded-full w-24 h-24 mx-auto flex items-center justify-center bg-zinc-50 border border-zinc-100 group-hover:bg-rose-600 group-hover:text-white transition-all duration-700">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Data Value</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed keep-all">학습 데이터 분석을 통한 <br/>글로벌 학습자 행동 패턴 구축</p>
              </div>
              <div className="group">
                <div className="mb-8 overflow-hidden rounded-full w-24 h-24 mx-auto flex items-center justify-center bg-zinc-50 border border-zinc-100 group-hover:bg-rose-600 group-hover:text-white transition-all duration-700">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.364-5.636l-.707-.707m1.414 8.486l-.707.707M18.364 18.364l-.707-.707M12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Tech Infra</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed keep-all">AI 맞춤 엔진 및 <br/>XR 몰입형 교육 환경 운영</p>
              </div>
              <div className="group">
                <div className="mb-8 overflow-hidden rounded-full w-24 h-24 mx-auto flex items-center justify-center bg-zinc-50 border border-zinc-100 group-hover:bg-rose-600 group-hover:text-white transition-all duration-700">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 012.5 2.5V14a2 2 0 002 2h1.065" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Global Scale</h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed keep-all">K-문화 콘텐츠의 <br/>글로벌 확장 모델 설계 및 확산</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
