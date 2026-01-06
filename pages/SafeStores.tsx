
import React, { useState, useEffect } from 'react';
import { SAFE_STORES } from '../constants';
import { Link } from 'react-router-dom';

// ID를 포함한 매장 데이터 타입 정의
interface Store {
  id: string;
  name: string;
}

const SafeStores: React.FC = () => {
  // --- 상태 관리 ---
  const [isAdmin, setIsAdmin] = useState(false);
  
  // 로그인/등록 모달 상태
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authInput, setAuthInput] = useState('');
  const [authError, setAuthError] = useState('');
  
  // 최초 등록 모드인지 여부
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  // 안심매장이란? 상세 설명 토글 상태
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // 확인(Confirm) 모달 상태 (관리자 종료, 삭제 등 공용 사용)
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
  }>({
    isOpen: false,
    message: '',
    onConfirm: () => {},
  });

  // 로컬 스토리지에서 매장 데이터 불러오기
  const [stores, setStores] = useState<Store[]>(() => {
    try {
      // v5로 업데이트하여 새로운 상점 목록이 반영되도록 함
      const saved = localStorage.getItem('safeStores_v5');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
            return parsed.map((item: any) => ({
                id: item.id || `restored-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                name: item.name || item
            }));
        }
      }
      return SAFE_STORES.map((store) => ({
        id: `init-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: store.name
      }));
    } catch (e) {
      return SAFE_STORES.map((store) => ({
        id: `fallback-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        name: store.name
      }));
    }
  });

  const [newStoreName, setNewStoreName] = useState('');

  // stores 상태 변경 시 저장 (v5 키 사용)
  useEffect(() => {
    localStorage.setItem('safeStores_v5', JSON.stringify(stores));
  }, [stores]);

  // --- 관리자 인증 로직 ---

  // 관리자 버튼 클릭 핸들러
  const handleAdminBtnClick = () => {
    if (isAdmin) {
      // [수정] window.confirm 대신 커스텀 모달 사용
      setConfirmModal({
        isOpen: true,
        message: '관리자 모드를 종료하시겠습니까?',
        onConfirm: () => {
          setIsAdmin(false);
          setConfirmModal(prev => ({ ...prev, isOpen: false }));
        }
      });
    } else {
      // 관리자가 아니라면 로그인/등록 모달 열기
      const savedPassword = localStorage.getItem('admin_password_secret');
      
      if (!savedPassword) {
        setIsRegisterMode(true); // 비번 없으면 등록 모드
      } else {
        setIsRegisterMode(false); // 비번 있으면 로그인 모드
      }
      
      setAuthInput('');
      setAuthError('');
      setShowAuthModal(true);
    }
  };

  // 모달 내 제출(로그인/등록) 핸들러
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (!authInput.trim()) {
      setAuthError('비밀번호를 입력해주세요.');
      return;
    }

    if (isRegisterMode) {
      localStorage.setItem('admin_password_secret', authInput.trim());
      alert('관리자 비밀번호가 설정되었습니다.'); // 단순 알림은 alert 사용해도 무방하나 flow상 자연스럽게 처리
      setIsAdmin(true);
      setShowAuthModal(false);
    } else {
      const savedPassword = localStorage.getItem('admin_password_secret');
      if (authInput.trim() === savedPassword) {
        setIsAdmin(true);
        setShowAuthModal(false);
      } else {
        setAuthError('비밀번호가 일치하지 않습니다.');
      }
    }
  };

  // --- 매장 추가/삭제 로직 ---

  const handleAddStore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStoreName.trim()) return;
    
    const newStore: Store = {
      id: `new-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: newStoreName.trim()
    };
    
    setStores(prev => [...prev, newStore]);
    setNewStoreName('');
  };

  const handleDeleteStore = (idToRemove: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // 이벤트 전파 중단
    
    // [수정] window.confirm 대신 커스텀 모달 사용
    setConfirmModal({
      isOpen: true,
      message: '정말 이 매장을 삭제하시겠습니까?',
      onConfirm: () => {
        setStores(prev => prev.filter(store => store.id !== idToRemove));
        setConfirmModal(prev => ({ ...prev, isOpen: false }));
      }
    });
  };

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-[#F8FAFC]">
      
      {/* 1. Header & Intro Section */}
      <section className="bg-white py-8 md:py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-[1000px] text-center">
          <span className="text-[#0069D9] font-black tracking-widest text-[10px] md:text-sm uppercase mb-2 md:mb-3 block">Safe Zone Partner</span>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tight break-keep">
            울산·부산·양산 안심매장 안내 <span className="block md:inline text-base md:text-2xl text-gray-400 mt-1 md:mt-0 md:ml-2 font-bold">| 제빙기 위생 관리 매장</span>
          </h1>

          {/* New Page Description (Block B) */}
          <div className="mb-8 md:mb-12">
            <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto break-keep font-medium">
              이끌림잇츠케어 안심매장은 <strong className="text-[#0069D9]">울산·부산·양산</strong><br className="md:hidden" /> 업소용 제빙기를 사용하는 매장을 대상으로<br className="hidden md:block"/>
              <strong className="text-gray-900">정기적인 청소와 위생 관리</strong>를 진행하고 있습니다.
            </p>
            <p className="text-gray-500 text-xs md:text-base mt-2 md:mt-3 leading-relaxed break-keep">
              카페, 프랜차이즈, 학교, 기업체 등<br className="md:hidden" />
              다양한 업종의 매장이 관리 대상에 포함되어 있습니다.
            </p>
          </div>
          
          {/* Collapsible Info Section */}
          <div className="mb-8 md:mb-12 max-w-3xl mx-auto">
            <button 
              onClick={() => setIsDetailOpen(!isDetailOpen)}
              className="group flex items-center justify-center gap-2 mx-auto bg-white border border-blue-100 px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-blue-200 transition-all focus:outline-none"
            >
              <div className="w-5 h-5 rounded-full bg-[#E3F2FD] text-[#0069D9] flex items-center justify-center text-xs">
                <i className="fas fa-question"></i>
              </div>
              <span className="font-bold text-gray-600 group-hover:text-[#0069D9] transition-colors text-sm md:text-base">안심매장이란?</span>
              <i className={`fas fa-chevron-down text-gray-400 group-hover:text-[#0069D9] transition-transform duration-300 text-xs ml-1 ${isDetailOpen ? 'rotate-180' : ''}`}></i>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isDetailOpen ? 'max-h-60 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
               <div className="bg-white rounded-2xl p-6 md:p-8 text-center border border-gray-100 shadow-sm relative">
                  {/* Updated Block A: Definition */}
                  <p className="text-gray-600 text-sm md:text-lg leading-relaxed break-keep font-medium">
                    이끌림잇츠케어의 <strong className="text-[#0069D9]">정기 관리 기준</strong>에 따라<br/>
                    제빙기 내부 세척, 위생 점검, 사용 환경 관리를<br className="hidden md:block"/>
                    <strong className="text-gray-900">지속적으로 받고 있는 매장</strong>을 말합니다.
                  </p>
                  <p className="text-gray-500 text-xs md:text-base mt-3 md:mt-4 leading-relaxed break-keep">
                    관리 이력과 점검 기준을 바탕으로<br/>
                    소비자가 <strong className="text-[#0069D9]">안심하고 얼음을 이용할 수 있도록</strong> 돕습니다.
                  </p>
               </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-8 max-w-3xl mx-auto">
             {[
               { 
                 icon: "fa-calendar-check", 
                 title: "정기 세척", 
                 desc: "제빙기 내부를 정기적으로 세척 관리" 
               },
               { 
                 icon: "fa-search-plus", 
                 title: "위생 점검", 
                 desc: "얼음 위생 상태를 정기 점검" 
               },
               { 
                 icon: "fa-cogs", 
                 title: "내부 관리", 
                 desc: "업소 환경에 맞춰 위생을 관리" 
               }
             ].map((feature, idx) => (
               <div key={idx} className="bg-white p-3 md:p-5 rounded-lg md:rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                 <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#0069D9] mb-2 md:mb-3 shrink-0">
                    <i className={`fas ${feature.icon} text-sm md:text-xl`}></i>
                 </div>
                 <span className="font-bold text-gray-800 text-[11px] md:text-base whitespace-nowrap mb-1">{feature.title}</span>
                 <p className="text-[9px] md:text-xs text-gray-500 leading-tight break-keep">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2. Stores Grid Section */}
      <section className="py-8 md:py-20 relative">
        {/* Admin Login Button */}
        <div className="absolute top-4 right-4 md:top-10 md:right-10 z-10">
            <button 
                type="button"
                onClick={handleAdminBtnClick}
                className={`text-[10px] md:text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                    isAdmin 
                    ? 'bg-red-50 text-red-500 border-red-200 hover:bg-red-100' 
                    : 'bg-transparent text-gray-300 border-transparent hover:text-gray-500 hover:border-gray-200'
                }`}
            >
                {isAdmin ? '관리자 종료' : '관리자 로그인'}
            </button>
        </div>

        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <div className="text-center mb-6 md:mb-12">
             <h3 className="text-lg md:text-3xl font-black text-gray-900">우리 동네 안심 매장</h3>
             <p className="text-gray-500 text-xs md:text-base mt-1 md:mt-2">깨끗한 얼음을 사용하는 매장을 확인하세요.</p>
          </div>

          {/* Admin Input Area - ONLY Visible if isAdmin is true */}
          {isAdmin && (
            <div className="max-w-md mx-auto mb-6 md:mb-10 p-3 md:p-4 bg-blue-50 rounded-xl shadow-sm border border-blue-100 animate-fade-in">
                <div className="text-center mb-2">
                    <span className="text-xs font-bold text-blue-600 bg-white px-2 py-0.5 rounded-full">관리자 모드 실행 중</span>
                </div>
                <form onSubmit={handleAddStore} className="flex gap-2">
                <input 
                    type="text" 
                    value={newStoreName} 
                    onChange={(e) => setNewStoreName(e.target.value)}
                    placeholder="추가할 매장명을 입력하세요"
                    className="flex-grow px-3 py-2 md:px-4 md:py-2 bg-white border border-blue-200 rounded-lg text-xs md:text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0069D9] transition-all"
                />
                <button 
                    type="submit" 
                    className="bg-[#0069D9] hover:bg-[#005bb5] text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm transition-colors whitespace-nowrap shadow-sm"
                >
                    <i className="fas fa-plus mr-1"></i> 추가
                </button>
                </form>
            </div>
          )}

          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
            {stores.map((store) => (
              <div 
                key={store.id} 
                className="bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md border border-gray-100 flex items-center justify-center py-3 px-2 md:py-6 md:px-4 text-center transition-shadow duration-300 group relative"
              >
                {/* Delete Button - ONLY Visible if isAdmin is true */}
                {isAdmin && (
                    <button 
                    type="button"
                    onClick={(e) => handleDeleteStore(store.id, e)}
                    className="absolute top-1 right-1 md:top-2 md:right-2 w-6 h-6 md:w-9 md:h-9 flex items-center justify-center text-red-400 hover:text-white bg-red-50 hover:bg-red-500 rounded-full transition-all z-30 cursor-pointer shadow-sm border border-red-100 hover:border-red-500"
                    title="매장 삭제"
                    >
                    <i className="fas fa-times text-xs md:text-base pointer-events-none"></i>
                    </button>
                )}

                {/* Store Name */}
                <div>
                   <div className="text-gray-900 font-black text-xs md:text-lg break-keep group-hover:text-[#0069D9] transition-colors leading-tight px-1">
                     {store.name}
                   </div>
                   <div className="w-6 md:w-8 h-0.5 md:h-1 bg-gray-100 mx-auto mt-1.5 md:mt-2 group-hover:bg-[#0069D9] transition-colors"></div>
                </div>
              </div>
            ))}
            
            {/* Join Us Card */}
            <Link to="/contact" className="bg-[#0069D9] rounded-lg md:rounded-xl shadow-sm flex flex-col items-center justify-center py-3 px-2 md:py-6 md:px-4 text-center text-white hover:bg-[#005bb5] transition-colors group">
               <i className="fas fa-plus text-lg md:text-3xl mb-1 md:mb-2 group-hover:scale-110 transition-transform"></i>
               <span className="font-bold text-xs md:text-lg">안심 매장 등록</span>
               <span className="text-[9px] md:text-xs text-blue-200 mt-0.5 md:mt-1">함께하시겠습니까?</span>
            </Link>
          </div>
        </div>
      </section>

      {/* --- Auth Modal (Login/Register) --- */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-2xl relative">
            <h3 className="text-xl font-black text-gray-900 mb-2">
              {isRegisterMode ? '관리자 비밀번호 설정' : '관리자 로그인'}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {isRegisterMode 
                ? '최초 1회, 사용할 관리자 비밀번호를 등록해주세요.' 
                : '등록된 관리자 비밀번호를 입력해주세요.'}
            </p>

            <form onSubmit={handleAuthSubmit}>
              <input
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-[#0069D9] transition-all"
                placeholder="비밀번호 입력"
                value={authInput}
                onChange={(e) => setAuthInput(e.target.value)}
                autoFocus
              />
              {authError && <p className="text-red-500 text-xs font-bold mb-3">{authError}</p>}
              
              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowAuthModal(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-colors"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#0069D9] hover:bg-[#005bb5] text-white font-bold py-3 rounded-xl transition-colors"
                >
                  {isRegisterMode ? '등록하기' : '로그인'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- Confirm Modal (Delete/Logout) --- */}
      {confirmModal.isOpen && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white w-full max-w-sm rounded-2xl p-6 shadow-2xl relative text-center">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 text-2xl">
              <i className="fas fa-exclamation"></i>
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 mb-6 break-keep">
              {confirmModal.message}
            </h3>

            <div className="flex gap-2">
                <button
                  onClick={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-colors"
                >
                  취소
                </button>
                <button
                  onClick={confirmModal.onConfirm}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  확인
                </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default SafeStores;
