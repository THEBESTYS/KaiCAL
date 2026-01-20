
import React, { useState } from 'react';
import { User, View } from '../types';

interface SignupProps {
  setView: (v: View) => void;
}

const Signup: React.FC<SignupProps> = ({ setView }) => {
  const [username, setUsername] = useState('');
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
      password,
      role: 'user'
    };

    users.push(newUser);
    localStorage.setItem('kai_users', JSON.stringify(users));
    alert('회원가입이 완료되었습니다. 로그인해주세요.');
    setView('LOGIN');
  };

  return (
    <div className="fade-in min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-zinc-100">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-2">Sign Up</h2>
          <p className="text-sm text-zinc-500">카이 컬처 아카데미의 회원이 되어보세요.</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-rose-500 text-xs text-center font-bold bg-rose-50 p-2 rounded-lg">{error}</div>}
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 mb-2 block">Username</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                placeholder="아이디를 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 mb-2 block">Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1 mb-2 block">Confirm Password</label>
              <input
                type="password"
                required
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors focus:outline-none"
            >
              회원가입 하기
            </button>
          </div>
        </form>
        <div className="text-center pt-4">
          <button 
            onClick={() => setView('LOGIN')}
            className="text-sm font-medium text-rose-600 hover:underline"
          >
            이미 계정이 있으신가요? 로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
