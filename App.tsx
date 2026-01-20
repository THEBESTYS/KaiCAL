
import React, { useState, useEffect } from 'react';
import { User, Notice, View } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import KaiCAL from './pages/KaiCAL';
import NoticePage from './pages/NoticePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('HOME');
  const [user, setUser] = useState<User | null>(null);
  const [notices, setNotices] = useState<Notice[]>([]);

  // Load initial data
  useEffect(() => {
    const savedUser = localStorage.getItem('kai_user');
    if (savedUser) setUser(JSON.parse(savedUser));

    const savedNotices = localStorage.getItem('kai_notices');
    if (savedNotices) {
      setNotices(JSON.parse(savedNotices));
    } else {
      // Default notices
      const initialNotices: Notice[] = [
        { id: 1, title: 'Kai Culture Academy 홈페이지 오픈 안내', content: '안녕하세요. KaiCA의 새로운 소통 창구가 마련되었습니다.', author: '관리자', date: '2024-05-20' },
        { id: 2, title: '연세대학교 미래교육원 MOU 체결 소식', content: '글로벌 에듀테크 리더로 도약하기 위한 전략적 파트너십을 체결했습니다.', author: '관리자', date: '2024-05-18' }
      ];
      setNotices(initialNotices);
      localStorage.setItem('kai_notices', JSON.stringify(initialNotices));
    }
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('kai_user', JSON.stringify(u));
    setCurrentView('HOME');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('kai_user');
    setCurrentView('HOME');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'HOME': return <Home setView={setCurrentView} />;
      case 'ABOUT': return <About />;
      case 'KAICA-L': return <KaiCAL />;
      case 'NOTICE': return <NoticePage notices={notices} />;
      case 'LOGIN': return <Login onLogin={handleLogin} setView={setCurrentView} />;
      case 'SIGNUP': return <Signup setView={setCurrentView} />;
      case 'ADMIN': 
        return user?.role === 'admin' 
          ? <Admin notices={notices} setNotices={(n) => { setNotices(n); localStorage.setItem('kai_notices', JSON.stringify(n)); }} /> 
          : <Home setView={setCurrentView} />;
      default: return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        user={user} 
        onLogout={handleLogout} 
      />
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
