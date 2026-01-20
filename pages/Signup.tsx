
import React, { useState } from 'react';
import { User, View } from '../types';

interface SignupProps {
  setView: (v: View) => void;
}

const Signup: React.FC<SignupProps> = ({ setView }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (username === 'one') {
      setError('사용할 수 없는 아이디입니다.');
      return;
    }

    const usersStr = localStorage.getItem('kai_users');
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];
    
    if (users.some(u => u.username === username)) {
      setError('이미 존재하는 아이디입니다.');
      return;
    }

    const newUser: User = {
      id: Date.now().toString(),
      username,
      email,
      password,
      role: 'user',
      tier: 'Silver' // Default tier
    };

    users.push(newUser);
    localStorage.setItem('kai_users', JSON.stringify(users));
    alert('회원가입이 완료되었습니다. 로그인해주세요.');
    setView('LOGIN');
  };

  return (
    <div className="fade-in min-h-[85vh] flex items-center justify-center py-20 px-4 bg-zinc-50">
      <div className="max-w-md w-full space-y-8 bg-white p-12 rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100">
        <div className="text-center">
          <h2 className="text-4xl font-serif italic text-zinc-900 mb-2">Join Us</h2>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">카이 컬처 아카데미의 회원이 되어보세요.</p>
        </div>
        <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
          {error && <div className="text-rose-500 text-[10px] text-center font-bold bg-rose-50 p-3 rounded-xl uppercase tracking-wider">{error}</div>}
          
          <div className="space-y-4">
            <div className="group">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1 mb-2 block group-focus-within:text-rose-500 transition-colors">Username</label>
              <input
                type="text"
                required
                className="w-full px-5 py-3.5 rounded-2xl border border-zinc-100 bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-rose-500/5 focus:border-rose-500/30 focus:bg-white transition-all"
                placeholder="아이디"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            
            <div className="group">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1 mb-2 block group-focus-within:text-rose-500 transition-colors">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-5 py-3.5 rounded-2xl border border-zinc-100 bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-rose-500/5 focus:border-rose-500/30 focus:bg-white transition-all"
                placeholder="이메일 주소"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1 mb-2 block group-focus-within:text-rose-500 transition-colors">Password</label>
                <input
                  type="password"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border border-zinc-100 bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-rose-500/5 focus:border-rose-500/30 focus:bg-white transition-all"
                  placeholder="비밀번호"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="group">
                <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-1 mb-2 block group-focus-within:text-rose-500 transition-colors">Confirm</label>
                <input
                  type="password"
                  required
                  className="w-full px-5 py-3.5 rounded-2xl border border-zinc-100 bg-zinc-50 focus:outline-none focus:ring-4 focus:ring-rose-500/5 focus:border-rose-500/30 focus:bg-white transition-all"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-5 px-4 rounded-2xl text-[11px] font-bold text-white bg-zinc-900 hover:bg-rose-600 transition-all uppercase tracking-[0.2em] shadow-xl shadow-zinc-900/10 mt-4 active:scale-95"
          >
            Create Account
          </button>
        </form>
        <div className="text-center pt-2">
          <button 
            onClick={() => setView('LOGIN')}
            className="text-[10px] font-bold text-zinc-400 hover:text-rose-600 uppercase tracking-widest transition-colors"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
