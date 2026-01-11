
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    phone: '',
    region: '',
    machineType: ''
  });
  
  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 카카오톡으로 전송할 메시지 포맷팅
    const message = `[간편 견적 문의]
    
■ 상호명: ${formData.businessName}
■ 연락처: ${formData.phone}
■ 지역: ${formData.region}
■ 기종: ${formData.machineType || '종류 미선택'}
    
견적 문의드립니다.`;

    // 1. 클립보드 복사 시도
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(message);
      } catch (err) {
        console.error('Clipboard failed', err);
      }
    }

    // 2. 바로 이동하지 않고 안내 모달 띄우기
    setIsModalOpen(true);
  };

  const handleFinalConnect = () => {
    const targetUrl = 'https://pf.kakao.com/_Azgyn';
    
    // 3. 사용자가 모달에서 버튼을 클릭했을 때 카카오톡 열기
    const newWindow = window.open(targetUrl, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
      window.location.href = targetUrl;
    }

    // 4. 상태 초기화
    setIsModalOpen(false);
    setFormData({ businessName: '', phone: '', region: '', machineType: '' });
  };

  return (
    <div className="pt-[70px] md:pt-24 min-h-screen bg-[#F8FAFC] font-pretendard">
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          {/* Header Section */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <h1 className="text-[26px] md:text-5xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight break-keep leading-tight">
              업소용 제빙기 청소 간편 견적 & 예약 문의
            </h1>
            <p className="text-gray-500 text-[15px] md:text-lg max-w-3xl mx-auto break-keep leading-[1.6] md:leading-8 font-medium">
              울산·부산·양산·김해 전 지역,<br className="md:block" />
              업소용 제빙기 청소 전문가가 직접 방문하여<br className="md:block" />
              제빙기 내부 상태를 기준으로 상담 및 점검을 진행합니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-xl md:shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[auto] md:min-h-[580px]">
            {/* Left Side: Info Box */}
            <div className="md:w-5/12 bg-[#0069D9] p-6 md:p-12 text-white flex flex-col justify-between relative">
              <div className="space-y-6 md:space-y-0">
                <div>
                    <h2 className="text-xl md:text-3xl font-black mb-3 md:mb-6 tracking-tight leading-snug">업소용 제빙기 청소 무료 상담 안내</h2>
                    <p className="text-blue-100 mb-2 md:mb-12 leading-relaxed text-[15px] md:text-lg break-keep font-medium">
                    매장 정보와 제빙기 종류를 남겨주시면<br className="hidden md:inline" />
                    전문 상담원이 제빙기 내부 상태 기준으로<br className="hidden md:inline" />
                    작업 범위와 절차를 안내드립니다.
                    </p>
                </div>

                <div className="space-y-4 md:space-y-6 bg-blue-800/20 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none">
                  <a href="tel:1577-7672" className="flex items-center gap-3 md:gap-4 group">
                    <div className="w-10 h-10 md:w-auto md:h-auto bg-white/10 md:bg-transparent rounded-full flex items-center justify-center">
                        <i className="fas fa-phone-alt text-lg md:text-2xl group-hover:scale-110 transition-transform"></i>
                    </div>
                    <span className="text-xl md:text-2xl font-black tracking-widest">1577-7672</span>
                  </a>
                  <a href="https://pf.kakao.com/_Azgyn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-4 group cursor-pointer">
                    <div className="w-10 h-10 md:w-auto md:h-auto bg-white/10 md:bg-transparent rounded-full flex items-center justify-center">
                        <i className="fas fa-comment text-lg md:text-2xl group-hover:scale-110 transition-transform"></i>
                    </div>
                    <span className="text-[15px] md:text-xl font-bold underline underline-offset-4 decoration-white/50 group-hover:decoration-white transition-all">카카오톡 상담 바로가기</span>
                  </a>
                </div>
              </div>

              <div className="mt-6 md:mt-12 pt-4 md:pt-8 border-t border-white/20">
                <p className="text-blue-200 text-[13px] md:text-sm font-medium leading-relaxed">
                  ※ 긴급 점검이 필요한 경우 전화 문의가 빠릅니다.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-7/12 p-6 md:p-12 bg-white relative">
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label className="block text-sm md:text-sm font-bold text-gray-700 mb-2">상호명</label>
                  <input 
                    type="text" 
                    name="businessName"
                    placeholder="예: 부산 카페 ○○점"
                    // Mobile Optimization: text-base (16px) prevents iOS zoom on focus
                    className="w-full bg-[#F3F4F6] md:bg-[#373737] text-gray-900 md:text-white placeholder-gray-500 md:placeholder-gray-400 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0069D9] transition-all font-medium text-base shadow-sm md:shadow-none border border-gray-200 md:border-transparent"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-sm font-bold text-gray-700 mb-2">연락처</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="예: 010-0000-0000"
                    className="w-full bg-[#F3F4F6] md:bg-[#373737] text-gray-900 md:text-white placeholder-gray-500 md:placeholder-gray-400 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0069D9] transition-all font-medium text-base shadow-sm md:shadow-none border border-gray-200 md:border-transparent"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-sm font-bold text-gray-700 mb-2">지역 (구/동)</label>
                  <input 
                    type="text" 
                    name="region"
                    placeholder="예: 부산 해운대구 / 울산 북구"
                    className="w-full bg-[#F3F4F6] md:bg-[#373737] text-gray-900 md:text-white placeholder-gray-500 md:placeholder-gray-400 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0069D9] transition-all font-medium text-base shadow-sm md:shadow-none border border-gray-200 md:border-transparent"
                    value={formData.region}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm md:text-sm font-bold text-gray-700 mb-2">제빙기 종류 (선택)</label>
                  <div className="relative">
                    <select 
                      name="machineType"
                      className="w-full bg-[#F3F4F6] md:bg-[#373737] text-gray-900 md:text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0069D9] transition-all appearance-none font-medium cursor-pointer text-base shadow-sm md:shadow-none border border-gray-200 md:border-transparent pr-10"
                      value={formData.machineType}
                      onChange={handleChange}
                    >
                      <option value="">업소용 제빙기 종류를 선택해주세요</option>
                      <option value="50kg">50kg 이하 (소형)</option>
                      <option value="100kg">100kg 급 (중형)</option>
                      <option value="200kg">200kg 이상 (대형)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 md:text-gray-400 pointer-events-none">
                      <i className="fas fa-chevron-down text-sm"></i>
                    </div>
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-[#FAE100] hover:bg-[#FCE620] text-[#3C1E1E] font-black py-4 rounded-xl text-lg transition-all mt-6 shadow-md active:scale-[0.98] flex items-center justify-center gap-2">
                  <i className="fas fa-comment"></i>
                  카카오톡으로 견적 신청하기
                </button>
              </form>
            </div>
          </div>

          {/* Area Badge - Optimized for Mobile Reading */}
          <div className="mt-8 md:mt-16 bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-dashed border-gray-200 text-center shadow-sm">
             <div className="flex flex-col items-center justify-center gap-3">
                <p className="text-gray-700 font-bold text-[13px] md:text-base break-keep leading-relaxed flex flex-col md:block items-center">
                   <span className="text-[#0069D9] font-black mb-1 md:mb-0 md:mr-2 text-sm md:text-base">서비스 지역 안내</span>
                   <span>부산 전 지역 · 울산 전 지역 · 양산 전 지역 · 김해 전 지역</span>
                </p>
                <div className="inline-block font-black text-gray-800 bg-gray-100 px-4 py-2 rounded-full text-xs md:text-sm">
                   업소용 제빙기 무료 방문 점검 상담 진행 중
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* 안내 모달 - Mobile Optimized */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-sm p-6 md:p-8 text-center shadow-2xl relative animate-slide-up">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 text-green-500 text-2xl md:text-3xl shadow-sm">
              <i className="fas fa-check"></i>
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2">견적 내용 복사 완료!</h3>
            <p className="text-red-500 font-bold text-sm mb-5 md:mb-6">아직 접수가 끝나지 않았습니다.</p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-5 md:mb-6 text-left">
              <div className="flex items-center gap-2 mb-2 text-yellow-700 font-black text-sm">
                <i className="fas fa-exclamation-circle"></i> 필독해주세요!
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-medium break-keep">
                1. 아래 버튼을 눌러 카톡을 실행하세요.<br/>
                2. 채팅창 입력란을 <span className="text-red-600 font-black underline">2초간 꾹 눌러</span> [붙여넣기] 하셔야 접수가 완료됩니다.
              </p>
            </div>

            <button 
              onClick={handleFinalConnect}
              className="w-full bg-[#FAE100] hover:bg-[#FCE620] text-[#3C1E1E] font-black py-4 rounded-xl text-lg shadow-lg shadow-yellow-200 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <i className="fas fa-comment"></i>
              카톡 실행하고 붙여넣기
            </button>
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-gray-400 text-sm font-medium underline decoration-gray-300 underline-offset-4 hover:text-gray-600 py-2"
            >
              창 닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
