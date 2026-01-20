
import React, { useState } from 'react';
import { User, View } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
  setView: (v: View) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, setView }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Check admin credentials
    if (username === 'one' && password === 'pass1234') {
      onLogin({ id: 'admin-1', username: '관리자(one)', role: 'admin' });
      return;
    }

    // Check local storage users
    const usersStr = localStorage.getItem('kai_users');
    if (usersStr) {
      const users: User[] = JSON.parse(usersStr);
      const foundUser = users.find(u => u.username === username && u.password === password);
      if (foundUser) {
        onLogin({ id: foundUser.id, username: foundUser.username, role: 'user' });
        return;
      }
    }

    setError('아이디 또는 비밀번호가 일치하지 않습니다.');
  };

  return (
    <div className="fade-in min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-zinc-50">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-zinc-100">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-zinc-900 mb-2">Login</h2>
          <p className="text-sm text-zinc-500">카이 컬처 아카데미에 오신 것을 환영합니다.</p>
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
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-zinc-900 hover:bg-zinc-800 transition-colors focus:outline-none"
            >
              로그인
            </button>
          </div>
        </form>
        <div className="text-center pt-4">
          <button 
            onClick={() => setView('SIGNUP')}
            className="text-sm font-medium text-rose-600 hover:underline"
          >
            계정이 없으신가요? 회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
