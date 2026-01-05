
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
■ 기종: ${formData.machineType || '잘 모름'}
    
견적 문의드립니다.`;

    // 1. 클립보드 복사 시도
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(message);
      } catch (err) {
        // 복사 실패해도 모달은 띄워서 수동 복사 유도 혹은 그냥 이동
        console.error('Clipboard failed', err);
      }
    }

    // 2. 바로 이동하지 않고 안내 모달 띄우기
    setIsModalOpen(true);
  };

  const handleFinalConnect = () => {
    const targetUrl = 'https://pf.kakao.com/_Azgyn/chat';
    
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
    <div className="pt-24 min-h-screen bg-[#F8FAFC]">
      <section className="py-8 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-6 md:mb-12 animate-fade-in">
            <h1 className="text-2xl md:text-5xl font-black text-gray-900 mb-2 md:mb-4 tracking-tight">간편 견적 & 예약 신청</h1>
            <p className="text-gray-500 text-xs md:text-lg max-w-2xl mx-auto break-keep">
              부산·양산·울산 전 지역, 전문가가 직접 방문하여 꼼꼼하게 점검해 드립니다.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[auto] md:min-h-[580px]">
            {/* Left Side: Info */}
            <div className="md:w-5/12 bg-[#0069D9] p-5 md:p-12 text-white flex flex-col justify-between relative">
              <div>
                <h2 className="text-lg md:text-3xl font-black mb-2 md:mb-6 tracking-tight">무료 견적 상담</h2>
                <p className="text-blue-100 mb-4 md:mb-12 leading-snug text-sm md:text-lg break-keep font-medium">
                  매장 정보와 기종을 남겨주시면,<br className="hidden md:inline" />
                  전문 상담원이 30분 내로 연락드립니다.
                </p>

                <div className="space-y-3 md:space-y-6">
                  <a href="tel:1577-7672" className="flex items-center gap-2 md:gap-4 group">
                    <i className="fas fa-phone-alt text-lg md:text-2xl group-hover:scale-110 transition-transform"></i>
                    <span className="text-xl md:text-2xl font-black tracking-widest">1577-7672</span>
                  </a>
                  <a href="https://pf.kakao.com/_Azgyn/chat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-4 group cursor-pointer">
                    <i className="fas fa-comment text-lg md:text-2xl group-hover:scale-110 transition-transform"></i>
                    <span className="text-base md:text-xl font-bold underline underline-offset-4 decoration-white/50 group-hover:decoration-white transition-all">카카오톡 상담 바로가기</span>
                  </a>
                </div>
              </div>

              <div className="mt-4 md:mt-12 pt-3 md:pt-8 border-t border-white/20">
                <p className="text-blue-200 text-[11px] md:text-sm font-medium leading-tight md:leading-relaxed">
                  * 긴급 출동이 필요한 경우, 전화 문의가 가장 빠릅니다.
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-7/12 p-5 md:p-12 bg-white relative">
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-5">
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gray-600 mb-1 md:mb-2">상호명</label>
                  <input 
                    type="text" 
                    name="businessName"
                    placeholder="예: 부산카페 1호점"
                    className="w-full bg-[#373737] text-white placeholder-gray-400 rounded-lg px-3 py-2.5 md:px-4 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0069D9] transition-all font-medium text-sm md:text-base"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gray-600 mb-1 md:mb-2">연락처</label>
                  <input 
                    type="text" 
                    name="phone"
                    placeholder="010-0000-0000"
                    className="w-full bg-[#373737] text-white placeholder-gray-400 rounded-lg px-3 py-2.5 md:px-4 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0069D9] transition-all font-medium text-sm md:text-base"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gray-600 mb-1 md:mb-2">지역 (구/동)</label>
                  <input 
                    type="text" 
                    name="region"
                    placeholder="예: 부산 해운대구 / 양산 물금읍"
                    className="w-full bg-[#373737] text-white placeholder-gray-400 rounded-lg px-3 py-2.5 md:px-4 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0069D9] transition-all font-medium text-sm md:text-base"
                    value={formData.region}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gray-600 mb-1 md:mb-2">제빙기 종류 (선택)</label>
                  <div className="relative">
                    <select 
                      name="machineType"
                      className="w-full bg-[#373737] text-white rounded-lg px-3 py-2.5 md:px-4 md:py-3.5 focus:outline-none focus:ring-2 focus:ring-[#0069D9] transition-all appearance-none font-medium cursor-pointer text-sm md:text-base"
                      value={formData.machineType}
                      onChange={handleChange}
                    >
                      <option value="">잘 모름</option>
                      <option value="50kg">50kg 이하 (소형)</option>
                      <option value="100kg">100kg 급 (중형)</option>
                      <option value="200kg">200kg 이상 (대형)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      <i className="fas fa-chevron-down text-xs"></i>
                    </div>
                  </div>
                </div>
                
                <button type="submit" className="w-full bg-[#FAE100] hover:bg-[#FCE620] text-[#3C1E1E] font-black py-3 md:py-4 rounded-xl text-base md:text-lg transition-all mt-4 md:mt-6 shadow-lg active:scale-[0.98] flex items-center justify-center gap-2">
                  <i className="fas fa-comment"></i>
                  카카오톡으로 견적 신청하기
                </button>
              </form>
            </div>
          </div>

          {/* Area Badge */}
          <div className="mt-8 md:mt-16 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-dashed border-gray-200 text-center shadow-sm">
            <p className="text-gray-500 font-bold flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs md:text-base">
              <span className="flex items-center gap-1.5 text-[#0069D9]">
                <i className="fas fa-check-circle"></i> 부산 전 지역
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
              <span className="flex items-center gap-1.5 text-[#0069D9]">
                <i className="fas fa-check-circle"></i> 양산 전 지역
              </span>
              <span className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></span>
              <span className="flex items-center gap-1.5 text-[#0069D9]">
                <i className="fas fa-check-circle"></i> 울산 전 지역
              </span>
              <span className="w-full sm:w-auto sm:ml-4 font-black text-gray-800 bg-gray-100 px-3 py-1 rounded-md mt-2 sm:mt-0">업소용제빙기 무료방문점검 진행중</span>
            </p>
          </div>

        </div>
      </section>

      {/* 안내 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-sm p-8 text-center shadow-2xl relative animate-slide-up">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 text-3xl shadow-sm">
              <i className="fas fa-check"></i>
            </div>
            
            <h3 className="text-2xl font-black text-gray-900 mb-2">견적 내용 복사 완료!</h3>
            <p className="text-red-500 font-bold text-sm mb-6">아직 접수가 끝나지 않았습니다.</p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6 text-left">
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
              className="mt-4 text-gray-400 text-sm font-medium underline decoration-gray-300 underline-offset-4 hover:text-gray-600"
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
