
import React, { useState } from 'react';
import { Notice } from '../types';

const NoticePage: React.FC<{ notices: Notice[] }> = ({ notices }) => {
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  return (
    <div className="fade-in py-16 md:py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">공지사항</h1>
          <p className="text-zinc-500">Kai Culture Academy의 새로운 소식과 안내사항을 확인하세요.</p>
        </header>

        {selectedNotice ? (
          <div className="bg-zinc-50 rounded-3xl p-10 border border-zinc-100">
            <button 
              onClick={() => setSelectedNotice(null)}
              className="text-sm font-bold text-rose-600 mb-8 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              목록으로 돌아가기
            </button>
            <h2 className="text-3xl font-bold mb-4">{selectedNotice.title}</h2>
            <div className="flex gap-4 text-xs text-zinc-400 mb-8 border-b border-zinc-200 pb-4">
              <span>작성자: {selectedNotice.author}</span>
              <span>날짜: {selectedNotice.date}</span>
            </div>
            <div className="prose prose-zinc prose-lg whitespace-pre-wrap text-zinc-700 leading-relaxed keep-all">
              {selectedNotice.content}
            </div>
          </div>
        ) : (
          <div className="border-t border-zinc-900">
            {notices.length > 0 ? (
              notices.map((notice) => (
                <div 
                  key={notice.id} 
                  onClick={() => setSelectedNotice(notice)}
                  className="group py-8 border-b border-zinc-100 flex items-center justify-between cursor-pointer hover:bg-zinc-50 px-4 transition-colors"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-zinc-400 font-medium">{notice.date}</span>
                    <h3 className="text-lg font-bold group-hover:text-rose-600 transition-colors">{notice.title}</h3>
                  </div>
                  <svg className="w-5 h-5 text-zinc-300 group-hover:text-rose-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
              ))
            ) : (
              <div className="py-20 text-center text-zinc-400 italic">등록된 공지사항이 없습니다.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticePage;
