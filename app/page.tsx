 "use client";
import React, { useState } from 'react';

export default function SDSPlatform() {
  const [showSignup, setShowSignup] = useState(false);

  // 알림창 함수
  const handleReady = (snsName: string) => {
    alert(`준비 중입니다!\n현재 ${snsName} 로그인 기능을 열심히 만들고 있어요.\n조금만 기다려주세요, CEO님! 🌿`);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      {!showSignup ? (
        /* 메인 화면 */
        <div className="text-center space-y-8 animate-in fade-in duration-1000">
          <div className="space-y-2">
            <h1 className="text-6xl font-black tracking-tighter text-slate-900">
              S<span className="text-green-600">D</span>S
            </h1>
            <p className="text-slate-500 font-medium">Connect. Build. Create.</p>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            세상을 연결하는 <br />
            <span className="text-green-600">멋진 공간</span>에 오신 것을 환영합니다
          </h2>

          <button 
            onClick={() => setShowSignup(true)}
            className="px-10 py-4 bg-green-600 text-white text-xl font-bold rounded-full hover:bg-green-700 transform hover:scale-105 transition-all shadow-xl"
          >
            시작하기
          </button>
        </div>
      ) : (
        /* 회원가입 화면 */
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 space-y-8 animate-in slide-in-from-bottom-10 duration-700">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900">SDS</h1>
            <p className="mt-4 text-xl font-semibold text-slate-700">
              우리 <span className="text-green-600">SDS 멤버</span>가 되어주세요!
            </p>
            <p className="text-slate-500 mt-2">당신의 아이디어가 시작되는 곳입니다.</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => handleReady('카카오')}
              className="w-full py-4 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-500 transition-colors"
            >
              카카오로 1초 만에 시작하기
            </button>
            <button 
              onClick={() => handleReady('구글')}
              className="w-full py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors"
            >
              구글로 계속하기
            </button>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
              <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-slate-400">또는</span></div>
            </div>
            <button 
              onClick={() => handleReady('이메일')}
              className="w-full py-4 text-green-600 font-semibold hover:underline"
            >
              이메일로 가입하기
            </button>
          </div>

          <p className="text-center text-sm text-slate-400">
            가입하면 SDS의 이용약관에 동의하게 됩니다.
          </p>
        </div>
      )}
    </div>
  );
}