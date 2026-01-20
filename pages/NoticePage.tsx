
import React, { useState } from 'react';
import { Notice } from '../types';

const NoticePage: React.FC<{ notices: Notice[] }> = ({ notices }) => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  return (
    <div className="fade-in py-32 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-24 text-center">
          <span className="text-rose-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">Communication</span>
          <h1 className="text-5xl md:text-7xl font-serif italic tracking-tighter mb-6">Archives</h1>
          <p className="text-zinc-400 text-lg font-light italic">Kai Culture Academy의 기록과 새로운 소식들</p>
        </header>

        {selectedNotice ? (
          <div className="reveal active">
            <button 
              onClick={() => setSelectedNotice(null)}
              className="text-[10px] font-bold text-zinc-400 hover:text-rose-600 mb-12 flex items-center gap-2 uppercase tracking-widest transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Archives
            </button>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-zinc-900">{selectedNotice.title}</h2>
              <div className="flex gap-6 text-[10px] font-bold text-zinc-300 uppercase tracking-[0.2em] border-b border-zinc-100 pb-8">
                <span>By {selectedNotice.author}</span>
                <span>/</span>
                <span>{selectedNotice.date}</span>
              </div>
              <div className="prose prose-zinc max-w-none text-zinc-600 leading-[1.8] font-light text-lg whitespace-pre-wrap keep-all pt-4">
                {selectedNotice.content}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-px">
            {notices.length > 0 ? (
              notices.map((notice) => (
                <div 
                  key={notice.id} 
                  onClick={() => setSelectedNotice(notice)}
                  className="group py-12 border-b border-zinc-100 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:px-4 transition-all duration-500"
                >
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest">{notice.date}</span>
                    <h3 className="text-2xl md:text-3xl font-serif italic text-zinc-900 group-hover:text-rose-600 transition-colors leading-tight">{notice.title}</h3>
                  </div>
                  <div className="mt-6 md:mt-0 flex items-center gap-2 text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Read More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-40 text-center text-zinc-300 italic font-serif text-xl">등록된 공지사항이 없습니다.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticePage;
