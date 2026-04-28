 "use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  // --- [1. 상태 관리 영역] ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: "CEO님",
    bio: "SDS의 창립자이자 혁신가입니다.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&q=80"
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("feed"); // feed or profile
  const [isChatOpen, setIsChatOpen] = useState(false);

  // --- [2. 로그인 로직] ---
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // --- [3. 테마 설정] ---
  const theme = {
    bg: isDarkMode ? '#18191a' : '#f0f2f5',
    card: isDarkMode ? '#242526' : '#ffffff',
    text: isDarkMode ? '#e4e6eb' : '#1c1e21',
    border: isDarkMode ? '#3e4042' : '#dbdbdb',
    accent: '#1877f2'
  };

  // --- [로그인 전 화면: 가입 및 로그인 페이지] ---
  if (!isLoggedIn) {
    return (
      <div style={{ backgroundColor: '#f0f2f5', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <div style={{ width: '400px', textAlign: 'center' }}>
          <h1 style={{ color: '#1877f2', fontSize: '4rem', marginBottom: '10px', fontWeight: 'bold' }}>SDS</h1>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>새로운 연결의 시작</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input type="text" placeholder="이메일 또는 전화번호" style={{ padding: '15px', borderRadius: '6px', border: '1px solid #ddd', outline: 'none' }} required />
              <input type="password" placeholder="비밀번호" style={{ padding: '15px', borderRadius: '6px', border: '1px solid #ddd', outline: 'none' }} required />
              <button type="submit" style={{ backgroundColor: '#1877f2', color: 'white', padding: '12px', borderRadius: '6px', border: 'none', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer' }}>로그인</button>
            </form>
            <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ddd' }} />
            <button style={{ backgroundColor: '#42b72a', color: 'white', padding: '12px 20px', borderRadius: '6px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>새 계정 만들기</button>
          </div>
        </div>
      </div>
    );
  }

  // --- [로그인 후 화면: 메인 서비스] ---
  return (
    <div style={{ backgroundColor: theme.bg, minHeight: '100vh', color: theme.text, transition: '0.3s' }}>
      
      {/* 상단 네비게이션 */}
      <nav style={{ backgroundColor: theme.card, borderBottom: `1px solid ${theme.border}`, padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: theme.accent, cursor: 'pointer' }} onClick={() => setActiveTab("feed")}>SDS</h1>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <span onClick={() => setActiveTab("profile")} style={{ cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={userProfile.avatar} style={{ width: '28px', height: '28px', borderRadius: '50%' }} alt="프로필" />
            {userProfile.name}
          </span>
          <button onClick={() => setIsDarkMode(!isDarkMode)} style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer' }}>{isDarkMode ? '☀️' : '🌙'}</button>
          <button onClick={() => setIsLoggedIn(false)} style={{ background: 'none', border: 'none', color: '#8e8e8e', cursor: 'pointer' }}>로그아웃</button>
        </div>
      </nav>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        
        {/* [메인 탭: 피드] */}
        {activeTab === "feed" && (
          <main style={{ width: '550px' }}>
            {/* 게시물 작성창 */}
            <div style={{ backgroundColor: theme.card, borderRadius: '8px', padding: '15px', marginBottom: '20px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <img src={userProfile.avatar} style={{ width: '40px', height: '40px', borderRadius: '50%' }} alt="내프사" />
                <textarea placeholder={`${userProfile.name}님, 무슨 생각을 하고 계신가요?`} style={{ flex: 1, border: 'none', outline: 'none', resize: 'none', backgroundColor: 'transparent', color: theme.text, fontSize: '1rem' }} />
              </div>
              <div style={{ borderTop: `1px solid ${theme.border}`, paddingTop: '10px', display: 'flex', justifyContent: 'flex-end' }}>
                <button style={{ backgroundColor: theme.accent, color: 'white', border: 'none', padding: '8px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>게시</button>
              </div>
            </div>
            
            {/* 샘플 게시물 */}
            <div style={{ backgroundColor: theme.card, borderRadius: '8px', marginBottom: '20px', padding: '15px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: theme.accent }}></div>
                  <span style={{ fontWeight: 'bold' }}>지미(AI)</span>
               </div>
               <p>드디어 회원 가입 기능까지 완성되었습니다! 이제 진정한 플랫폼의 시작입니다. 🚀</p>
            </div>
          </main>
        )}

        {/* [메인 탭: 프로필 설정] */}
        {activeTab === "profile" && (
          <main style={{ width: '550px', backgroundColor: theme.card, borderRadius: '8px', padding: '30px', boxShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '25px' }}>프로필 설정</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <img src={userProfile.avatar} style={{ width: '120px', height: '120px', borderRadius: '50%', border: `4px solid ${theme.accent}`, marginBottom: '10px' }} alt="대형프로필" />
                <div><button style={{ color: theme.accent, background: 'none', border: 'none', cursor: 'pointer' }}>사진 변경하기</button></div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>이름</label>
                <input 
                  type="text" 
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.bg, color: theme.text }}
                  value={userProfile.name}
                  onChange={(e) => setUserProfile({...userProfile, name: e.target.value})}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: 'bold' }}>자기소개</label>
                <textarea 
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: `1px solid ${theme.border}`, backgroundColor: theme.bg, color: theme.text, height: '100px' }}
                  value={userProfile.bio}
                  onChange={(e) => setUserProfile({...userProfile, bio: e.target.value})}
                />
              </div>
              <button onClick={() => { alert("저장되었습니다!"); setActiveTab("feed"); }} style={{ backgroundColor: theme.accent, color: 'white', padding: '12px', borderRadius: '6px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>저장하기</button>
            </div>
          </main>
        )}

      </div>
    </div>
  );
}