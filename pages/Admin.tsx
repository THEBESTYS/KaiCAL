
import React, { useState } from 'react';
import { Notice } from '../types';

interface AdminProps {
  notices: Notice[];
  setNotices: (n: Notice[]) => void;
}

const Admin: React.FC<AdminProps> = ({ notices, setNotices }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const newNotice: Notice = {
      id: Date.now(),
      title,
      content,
      author: '관리자',
      date: new Date().toISOString().split('T')[0]
    };

    setNotices([newNotice, ...notices]);
    setTitle('');
    setContent('');
    setIsAdding(false);
    alert('공지사항이 등록되었습니다.');
  };

  const handleDelete = (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setNotices(notices.filter(n => n.id !== id));
    }
  };

  return (
    <div className="fade-in py-16 md:py-24 bg-zinc-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">관리자 페이지</h1>
            <p className="text-zinc-500 mt-2">공지사항 및 게시물을 관리하세요.</p>
          </div>
          <button 
            onClick={() => setIsAdding(!isAdding)}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
              isAdding ? 'bg-zinc-200 text-zinc-600' : 'bg-rose-600 text-white hover:bg-rose-700'
            }`}
          >
            {isAdding ? '취소' : '새 공지사항 등록'}
          </button>
        </div>

        {isAdding && (
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-zinc-200 mb-12 fade-in">
            <h2 className="text-2xl font-bold mb-8">공지사항 등록</h2>
            <form onSubmit={handleAddNotice} className="space-y-6">
              <div>
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">Title</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none"
                  placeholder="제목을 입력하세요"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest block mb-2">Content</label>
                <textarea 
                  rows={8}
                  className="w-full px-6 py-4 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none resize-none"
                  placeholder="내용을 입력하세요"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-4 bg-zinc-900 text-white rounded-xl font-bold hover:bg-zinc-800 transition-colors"
              >
                등록하기
              </button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-3xl border border-zinc-200 overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-400 uppercase text-[10px] tracking-widest">
              <tr>
                <th className="px-8 py-4 font-bold">제목</th>
                <th className="px-8 py-4 font-bold">날짜</th>
                <th className="px-8 py-4 font-bold">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {notices.map((notice) => (
                <tr key={notice.id} className="hover:bg-zinc-50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="font-bold text-zinc-900">{notice.title}</div>
                    <div className="text-xs text-zinc-400 truncate max-w-md">{notice.content.substring(0, 50)}...</div>
                  </td>
                  <td className="px-8 py-6 text-sm text-zinc-500">{notice.date}</td>
                  <td className="px-8 py-6">
                    <button 
                      onClick={() => handleDelete(notice.id)}
                      className="text-rose-500 hover:text-rose-700 text-sm font-bold"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))}
              {notices.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-8 py-20 text-center text-zinc-400 italic">등록된 공지사항이 없습니다.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
