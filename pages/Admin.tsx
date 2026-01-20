
import React, { useState, useEffect } from 'react';
import { Notice, User, UserTier } from '../types';

interface AdminProps {
  notices: Notice[];
  setNotices: (n: Notice[]) => void;
}

const Admin: React.FC<AdminProps> = ({ notices, setNotices }) => {
  const [activeTab, setActiveTab] = useState<'notices' | 'users'>('notices');
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const savedUsers = localStorage.getItem('kai_users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

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

  const handleUpdateUserTier = (userId: string, newTier: UserTier) => {
    const updatedUsers = users.map(u => u.id === userId ? { ...u, tier: newTier } : u);
    setUsers(updatedUsers);
    localStorage.setItem('kai_users', JSON.stringify(updatedUsers));
  };

  const handleDeleteNotice = (id: number) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setNotices(notices.filter(n => n.id !== id));
    }
  };

  const downloadUserList = () => {
    const headers = ['ID', 'Username', 'Email', 'Role', 'Tier'];
    const rows = users.map(u => [u.id, u.username, u.email || '', u.role, u.tier || 'Silver']);
    
    let csvContent = "data:text/csv;charset=utf-8,\ufeff";
    csvContent += headers.join(",") + "\r\n";
    rows.forEach(row => {
      csvContent += row.join(",") + "\r\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `KaiCA_Users_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fade-in py-32 bg-zinc-50 min-h-screen px-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-rose-600 font-bold tracking-[0.3em] text-[10px] uppercase mb-2 block">Control Panel</span>
            <h1 className="text-5xl font-serif italic text-zinc-900">Administrator</h1>
          </div>
          <div className="flex bg-white p-1 rounded-2xl border border-zinc-200 shadow-sm">
            <button 
              onClick={() => setActiveTab('notices')}
              className={`px-8 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'notices' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-900'}`}
            >
              Notices
            </button>
            <button 
              onClick={() => setActiveTab('users')}
              className={`px-8 py-3 rounded-xl text-[11px] font-bold uppercase tracking-widest transition-all ${activeTab === 'users' ? 'bg-zinc-900 text-white' : 'text-zinc-400 hover:text-zinc-900'}`}
            >
              Users
            </button>
          </div>
        </header>

        {activeTab === 'notices' ? (
          <div className="reveal active space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif italic text-zinc-800">Notice Management</h2>
              <button 
                onClick={() => setIsAdding(!isAdding)}
                className={`px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${isAdding ? 'bg-zinc-200 text-zinc-500' : 'bg-rose-600 text-white hover:shadow-xl hover:shadow-rose-600/20'}`}
              >
                {isAdding ? 'Cancel' : 'Add New Notice'}
              </button>
            </div>

            {isAdding && (
              <div className="bg-white p-10 rounded-[2rem] shadow-xl border border-zinc-100 fade-in">
                <form onSubmit={handleAddNotice} className="space-y-6">
                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 block">Title</label>
                    <input 
                      type="text" 
                      className="w-full px-6 py-4 rounded-2xl border border-zinc-100 bg-zinc-50 focus:bg-white focus:border-rose-500 outline-none transition-all"
                      placeholder="공지 제목"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2 block">Content</label>
                    <textarea 
                      rows={6}
                      className="w-full px-6 py-4 rounded-2xl border border-zinc-100 bg-zinc-50 focus:bg-white focus:border-rose-500 outline-none transition-all resize-none"
                      placeholder="내용을 입력하세요"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="w-full py-5 bg-zinc-900 text-white rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-rose-600 transition-colors shadow-lg">Publish Notice</button>
                </form>
              </div>
            )}

            <div className="bg-white rounded-[2rem] border border-zinc-100 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-zinc-50/50 border-b border-zinc-100 text-[9px] font-black text-zinc-300 uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-10 py-5">Content Archive</th>
                    <th className="px-10 py-5">Date</th>
                    <th className="px-10 py-5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {notices.map((notice) => (
                    <tr key={notice.id} className="group hover:bg-zinc-50/50 transition-colors">
                      <td className="px-10 py-6">
                        <div className="font-serif italic text-lg text-zinc-900">{notice.title}</div>
                        <div className="text-xs text-zinc-400 line-clamp-1 mt-1 font-light">{notice.content}</div>
                      </td>
                      <td className="px-10 py-6 text-[11px] font-bold text-zinc-400">{notice.date}</td>
                      <td className="px-10 py-6 text-right">
                        <button onClick={() => handleDeleteNotice(notice.id)} className="text-zinc-300 hover:text-rose-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="reveal active space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-serif italic text-zinc-800">Registered Users ({users.length})</h2>
              <button 
                onClick={downloadUserList}
                className="flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all shadow-lg active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download Excel (CSV)
              </button>
            </div>

            <div className="bg-white rounded-[2rem] border border-zinc-100 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-zinc-50/50 border-b border-zinc-100 text-[9px] font-black text-zinc-300 uppercase tracking-[0.2em]">
                  <tr>
                    <th className="px-10 py-5">Profile</th>
                    <th className="px-10 py-5">Contact</th>
                    <th className="px-10 py-5">Tier Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {users.map((u) => (
                    <tr key={u.id} className="group hover:bg-zinc-50/50 transition-colors">
                      <td className="px-10 py-6">
                        <div className="font-bold text-zinc-900">{u.username}</div>
                        <div className="text-[10px] text-zinc-400 uppercase tracking-widest">{u.role}</div>
                      </td>
                      <td className="px-10 py-6">
                        <div className="text-sm text-zinc-600">{u.email || '-'}</div>
                      </td>
                      <td className="px-10 py-6">
                        <select 
                          value={u.tier || 'Silver'} 
                          onChange={(e) => handleUpdateUserTier(u.id, e.target.value as UserTier)}
                          className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-zinc-100 bg-white focus:ring-2 focus:ring-rose-500/10 outline-none transition-all cursor-pointer ${
                            u.tier === 'Diamond' ? 'text-indigo-600' : u.tier === 'Gold' ? 'text-amber-600' : 'text-zinc-500'
                          }`}
                        >
                          <option value="Diamond">Diamond</option>
                          <option value="Gold">Gold</option>
                          <option value="Silver">Silver</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-10 py-20 text-center text-zinc-300 italic font-serif text-xl">가입된 회원이 없습니다.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
