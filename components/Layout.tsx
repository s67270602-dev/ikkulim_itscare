import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed w-full z-50 bg-white border-b border-gray-100 h-[60px] md:h-[80px] flex items-center font-pretendard transition-all shadow-sm">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-[1200px] flex justify-between items-center h-full">
        {/* Left: Logo + (모바일 전용) 야간 작업 버튼 */}
        <div className="flex items-center gap-2 min-w-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0 min-w-0">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center text-white bg-[#0069D9] shadow-sm">
              <i className="fas fa-snowflake text-sm md:text-base"></i>
            </div>
            <span className="text-[16px] sm:text-[17px] md:text-xl font-black tracking-tight text-gray-900 whitespace-nowrap">
              이끌림<span className="text-[#0069D9]">잇츠케어</span>
            </span>
          </Link>

          {/* ✅ 모바일에서 로고 옆에 항상 보이는 '야간 작업 가능' (전화 연결) */}
          <a
            href="tel:1577-7672"
            className="lg:hidden inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-[12px] font-extrabold text-orange-700 shadow-sm active:scale-[0.99] transition-transform whitespace-nowrap"
            aria-label="영업 종료 후 야간 작업 가능 1577-7672 전화 연결"
            title="영업 종료 후 야간 작업 가능"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-orange-500" />
            야간 작업 가능
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[14px] xl:text-[15px] font-bold transition-colors hover:text-[#0069D9] relative whitespace-nowrap ${
                  isActive ? 'text-[#0069D9]' : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ✅ PC 상단 우측 버튼: '긴급출동' 삭제 → 야간 작업 가능 문구로 */}
        <div className="hidden lg:block shrink-0">
          <a
            href="tel:1577-7672"
            className="bg-[#FF7E00] text-white px-5 py-3 rounded-lg font-black text-sm hover:bg-[#ff8f26] transition-all flex items-center gap-3 shadow-md active:scale-95"
            aria-label="영업 종료 후 야간 작업 가능 - 전화 연결 1577-7672"
            title="영업 종료 후 야간 작업 가능 (1577-7672)"
          >
            <i className="fas fa-phone-volume text-base"></i>
            <div className="leading-tight">
              <div className="text-[13px] font-black whitespace-nowrap">영업 종료 후 야간 작업 가능</div>
              <div className="text-[11px] font-extrabold opacity-95 whitespace-nowrap">1577-7672</div>
            </div>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl p-2 text-gray-900 transition-colors shrink-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="모바일 메뉴 열기/닫기"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white w-full absolute top-full left-0 shadow-2xl border-t border-gray-100 animate-slide-down">
          <div className="flex flex-col p-5 sm:p-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[17px] font-black py-3 border-b border-gray-50 ${
                  location.pathname === link.path ? 'text-[#0069D9]' : 'text-gray-800'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* 모바일 메뉴 안에도 전화 버튼(보조) */}
            <div className="pt-4">
              <a
                href="tel:1577-7672"
                className="bg-[#FF7E00] text-white text-center block w-full py-4 rounded-2xl font-black shadow-xl active:scale-[0.99] transition-transform"
              >
                <div className="flex items-center justify-center gap-2">
                  <i className="fas fa-phone-volume"></i>
                  <span className="text-[15px]">영업 종료 후 야간 작업 가능</span>
                </div>
                <div className="text-[12px] font-extrabold opacity-95 mt-1">1577-7672</div>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#111827] text-gray-400 py-10 md:py-16 font-pretendard">
      <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-0 border-b border-gray-800 pb-8 md:pb-10 mb-8 md:mb-10 text-center md:text-left">
          {/* Brand Info */}
          <div className="space-y-3 md:space-y-4 max-w-sm md:max-w-none mx-auto md:mx-0">
            <h3 className="text-white text-xl md:text-2xl font-black tracking-tight flex items-center justify-center md:justify-start gap-2">
              <i className="fas fa-snowflake text-[#0069D9]"></i>
              이끌림잇츠케어
            </h3>
            <p className="text-xs md:text-sm leading-relaxed text-gray-500 break-keep">
              이끌림잇츠케어는 울산·부산·양산·김해 전 지역에서 업소용 제빙기 위생 청소 서비스를 제공합니다.<br className="hidden md:block" />
              카페, 맥주전문점, 기업체, 학교, 관공서 등에서 사용되는 제빙기 내부 상태를 기준으로 점검과 세척 중심의 위생 관리를 진행합니다.
            </p>

            {/* ✅ Social Icons: 울산 블로그 + 부산 블로그 + 카카오 / 아이콘 아래 지역 표기 */}
            <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
              {/* 울산 블로그 */}
              <div className="flex flex-col items-center gap-1">
                <a
                  href="https://blog.naver.com/itscare77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#03C75A] flex items-center justify-center text-white shadow-md hover:-translate-y-1 transition-transform group"
                  title="네이버 블로그 (울산)"
                  aria-label="네이버 블로그 울산"
                >
                  <span className="font-black text-sm group-hover:scale-110 transition-transform">N</span>
                </a>
                <span className="text-[11px] text-gray-400 font-bold">울산</span>
              </div>

              {/* 부산 블로그 */}
              <div className="flex flex-col items-center gap-1">
                <a
                  href="https://blog.naver.com/itscare88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#03C75A] flex items-center justify-center text-white shadow-md hover:-translate-y-1 transition-transform group"
                  title="네이버 블로그 (부산)"
                  aria-label="네이버 블로그 부산"
                >
                  <span className="font-black text-sm group-hover:scale-110 transition-transform">N</span>
                </a>
                <span className="text-[11px] text-gray-400 font-bold">부산</span>
              </div>

              {/* 카카오 채널 */}
              <div className="flex flex-col items-center gap-1">
                <a
                  href="https://pf.kakao.com/_Azgyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#FAE100] flex items-center justify-center text-[#3B1E1E] shadow-md hover:-translate-y-1 transition-transform group"
                  title="카카오톡 채널"
                  aria-label="카카오톡 채널"
                >
                  <i className="fas fa-comment text-lg group-hover:scale-110 transition-transform"></i>
                </a>
                <span className="text-[11px] text-gray-400 font-bold">채널</span>
              </div>
            </div>
          </div>

          {/* Contact Center */}
          <div className="flex flex-col gap-3 md:gap-4 md:text-right">
            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="text-[10px] md:text-xs font-bold text-[#0069D9] uppercase tracking-wider">Customer Center</span>
              <a href="tel:1577-7672" className="text-2xl md:text-3xl font-black text-white hover:text-[#0069D9] transition-colors tracking-tight">
                1577-7672
              </a>
            </div>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed break-keep">
              운영시간 : 09:00 - 22:00 (연중무휴)<br />
              울산광역시 동구 동진5길62 <span className="hidden md:inline">/</span><br className="md:hidden" />
              부산광역시 사하구 오작로184번길32 <span className="hidden md:inline">/</span><br className="md:hidden" />
              부산광역시 사하구 다대로 142번길106 1층
            </p>
          </div>
        </div>

        {/* Service Area Info */}
        <div className="flex flex-col items-center md:items-start gap-2 pb-8 mb-8 border-b border-gray-800">
          <span className="text-[11px] font-bold text-gray-600 uppercase tracking-wider">서비스 지역 안내</span>
          <div className="text-[13px] md:text-sm text-gray-500 font-medium flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-1">
            <Link to="/service-area" className="hover:text-gray-300 transition-colors">울산 제빙기 청소</Link>
            <span className="text-gray-700">|</span>
            <Link to="/service-area" className="hover:text-gray-300 transition-colors">부산 제빙기 청소</Link>
            <span className="text-gray-700">|</span>
            <Link to="/service-area" className="hover:text-gray-300 transition-colors">양산 제빙기 청소</Link>
            <span className="text-gray-700">|</span>
            <Link to="/service-area" className="hover:text-gray-300 transition-colors">김해 제빙기 청소</Link>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5 text-[11px] md:text-xs font-medium text-gray-500">
          <p>&copy; 2024 Ikkleem It's Care. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 px-4 md:px-0">
            <Link to="/services" className="hover:text-white transition-colors">서비스 소개</Link>
            <span className="text-gray-700">|</span>
            <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-white transition-colors">개인정보처리방침</button>
            <span className="text-gray-700">|</span>
            <a href="https://blog.naver.com/itscare77" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">울산 블로그</a>
            <span className="text-gray-700">|</span>
            <a href="https://blog.naver.com/itscare88" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">부산 블로그</a>
            <span className="text-gray-700">|</span>
            <Link to="/contact" className="hover:text-white transition-colors">견적문의</Link>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={() => setIsPrivacyOpen(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl animate-fade-in relative" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="p-5 md:p-6 border-b flex justify-between items-center bg-gray-50 rounded-t-2xl">
              <h2 className="text-lg md:text-xl font-black text-gray-900">개인정보처리방침</h2>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200"
              >
                <i className="fas fa-times text-lg"></i>
              </button>
            </div>

            {/* Content */}
            <div className="p-5 md:p-6 overflow-y-auto text-sm text-gray-700 leading-relaxed space-y-6">
              <div className="bg-gray-50 p-4 rounded-xl text-gray-600 text-xs md:text-sm">
                이끌림잇츠케어(이하 “회사”)는 개인정보 보호법 등 관련 법령을 준수하며,
                이용자의 개인정보를 보호하기 위해 다음과 같은 개인정보처리방침을 수립·공개합니다.
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-base">1. 수집하는 개인정보 항목</h4>
                <p>회사는 카카오톡 채팅 상담을 통해 이용자가 자발적으로 제공하는 이름, 연락처, 상담 내용 등의 개인정보를 수집할 수 있습니다.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-base">2. 개인정보의 수집 및 이용 목적</h4>
                <p>수집된 개인정보는 상담 문의 응대 및 서비스 안내를 목적으로만 이용됩니다.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-base">3. 개인정보의 보유 및 이용 기간</h4>
                <p>개인정보는 상담 목적 달성 후 즉시 파기하며, 관계 법령에 따라 보관이 필요한 경우 해당 기간 동안 보관합니다.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-base">4. 개인정보의 제3자 제공 및 위탁</h4>
                <p>회사는 원활한 상담을 위해 카카오톡 채널 서비스를 이용하며, 이 과정에서 카카오 주식회사에 개인정보 처리가 위탁될 수 있습니다.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-base">5. 개인정보의 파기 절차 및 방법</h4>
                <p>개인정보는 목적 달성 후 지체 없이 파기하며, 전자적 파일 형태의 정보는 복구 불가능한 방법으로 삭제합니다.</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-gray-900 text-base">6. 개인정보 보호 책임자</h4>
                <p className="bg-blue-50 p-3 rounded-lg border border-blue-100 inline-block text-blue-900">
                  <strong>상호명:</strong> 이끌림잇츠케어<br />
                  <strong>연락처:</strong> 1577-7672
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t bg-gray-50 rounded-b-2xl flex justify-end">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="bg-[#0069D9] text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-[#005bb5] transition-colors shadow-sm"
              >
                확인했습니다
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-pretendard bg-white">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
