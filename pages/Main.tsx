
import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div className="font-pretendard pt-[60px]">
      
      {/* 1. Hero Section - Extremely Compact for Mobile */}
      <section className="relative flex items-center bg-[#020617] overflow-hidden min-h-[300px] sm:min-h-[360px] md:min-h-[500px] lg:min-h-[600px]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
           {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-[#020617]/40 z-10"></div>
          <img
            src="/images/%EB%A9%94%EC%9D%B8.jpg"
            alt="Dark Blue Nature Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container mx-auto px-5 md:px-6 max-w-[1200px] relative z-20 flex items-center h-full">
          <div className="max-w-3xl w-full py-8 md:py-12">
            <h1 className="text-[26px] xs:text-[28px] sm:text-4xl md:text-5xl lg:text-[64px] font-black text-white leading-[1.2] tracking-tight mb-3 md:mb-6 break-keep">
              얼음 위생이 곧 <span className="text-[#FF7E00]">매장의 매출</span>입니다.
            </h1>
            
            <p className="text-gray-300 text-[12px] sm:text-sm md:text-lg lg:text-[19px] font-medium mb-6 md:mb-10 leading-relaxed break-keep max-w-xl md:max-w-2xl opacity-90 pr-2">
              부산/울산/양산 1등 제빙기 청소 전문 업체. 보이지 않는 곳의 곰팡이까지 완벽하게 제거합니다. 
              HACCP 기준에 부합하는 친환경 살균 세척으로 고객에게 신뢰를 선물하세요.
            </p>

            <div className="flex flex-row gap-2.5 md:gap-4">
              <Link to="/contact" className="bg-[#FF7E00] hover:bg-[#E67000] text-white px-4 md:px-8 py-3 md:py-4 rounded font-bold text-[13px] md:text-lg transition-all shadow-lg active:scale-95 flex-1 md:flex-none text-center flex items-center justify-center max-w-[190px] md:min-w-[220px]">
                30초 만에 무료 견적 받기
              </Link>
              <Link to="/services" className="bg-white hover:bg-gray-100 text-gray-900 px-4 md:px-8 py-3 md:py-4 rounded font-bold text-[13px] md:text-lg transition-all shadow-lg active:scale-95 flex-1 md:flex-none text-center flex items-center justify-center max-w-[150px] md:min-w-[180px]">
                청소 과정 확인하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DANGER Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="text-center mb-8 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-3 md:mb-4">
              <i className="fas fa-exclamation-triangle text-[#DC2626] text-xl md:text-2xl animate-pulse"></i>
              <span className="text-[#DC2626] font-black text-xl md:text-3xl tracking-[0.3em] border-b-4 border-[#DC2626] pb-1">DANGER</span>
              <i className="fas fa-exclamation-triangle text-[#DC2626] text-xl md:text-2xl animate-pulse"></i>
            </div>
            <h2 className="text-xl md:text-4xl font-black text-gray-900 mb-3 md:mb-4 tracking-tight">
              혹시 우리 매장 제빙기 내부는<br className="md:hidden"/> 이런 모습 아닙니까?
            </h2>
            <p className="text-gray-500 text-[13px] md:text-base max-w-2xl mx-auto break-keep leading-relaxed">
              겉만 닦는 것은 청소가 아닙니다. 제빙기 내부는 습하고 어두워 곰팡이와 세균의 온상입니다.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-20">
            {/* Image Side */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gray-100">
                <img 
                  src="https://raw.githubusercontent.com/s67270602-dev/ikkulim_itscare/main/public/images/20250821_161033.jpg" 
                  alt="오염된 내부" 
                  className="w-full h-[220px] md:h-[360px] object-cover filter brightness-50 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D32F2F] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-black flex flex-col items-center shadow-lg border-2 border-white/20 whitespace-nowrap">
                  <i className="fas fa-exclamation-triangle text-lg md:text-2xl mb-1"></i>
                  <span className="text-sm md:text-lg">관리되지 않은 내부</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 space-y-4 md:space-y-6">
              {/* Warning Box 1 */}
              <div className="bg-[#FFF5F5] p-4 md:p-6 rounded-2xl flex gap-3 md:gap-5 items-start border border-[#FEB2B2]/30 hover:-translate-y-1 transition-transform">
                <div className="w-9 h-9 md:w-12 md:h-12 bg-[#FED7D7] rounded-xl flex items-center justify-center text-[#C53030] shrink-0 text-base md:text-xl">
                  <i className="fas fa-exclamation-circle"></i>
                </div>
                <div>
                  <h3 className="text-[15px] md:text-lg font-black text-gray-900 mb-1 md:mb-2">검은 곰팡이와 물때</h3>
                  <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed break-keep">
                    얼음에서 냄새가 나거나 이물질이 보인다면 이미 내부는 심각하게 오염된 상태입니다.
                  </p>
                </div>
              </div>

              {/* Warning Box 2 */}
              <div className="bg-[#FFF5F5] p-4 md:p-6 rounded-2xl flex gap-3 md:gap-5 items-start border border-[#FEB2B2]/30 hover:-translate-y-1 transition-transform">
                <div className="w-9 h-9 md:w-12 md:h-12 bg-[#FED7D7] rounded-xl flex items-center justify-center text-[#C53030] shrink-0 text-base md:text-xl">
                  <i className="fas fa-shield-virus"></i>
                </div>
                <div>
                  <h3 className="text-[15px] md:text-lg font-black text-gray-900 mb-1 md:mb-2">식중독균의 위험</h3>
                  <p className="text-gray-600 text-[13px] md:text-sm leading-relaxed break-keep">
                    살모넬라균, 대장균 등은 얼음 속에서도 생존합니다. 고객의 건강을 위협할 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="pt-2 md:pt-4 text-right md:text-left">
                <Link to="/process" className="inline-flex items-center text-[#0069D9] font-bold hover:underline underline-offset-4 transition-colors text-sm md:text-base">
                  위생 정보 더 자세히 보기 <i className="fas fa-chevron-right ml-2 text-xs"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 3-Step Care Section */}
      <section className="py-12 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-4xl font-black text-gray-900 mb-3 md:mb-4">
              <span className="text-[#0069D9]">3단계 토탈 케어</span> 시스템
            </h2>
            <p className="text-gray-500 text-[13px] md:text-base">
              단순 세척이 아닌, 완전 분해와 고온 스팀 살균으로 새 기계처럼!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {[
              { 
                icon: "fa-tools", 
                title: "완전 분해", 
                desc: "부품 하나하나 분해하여 사각지대 없이 청소합니다." 
              },
              { 
                icon: "fa-spray-can", 
                title: "고압 스팀 살균", 
                desc: "140도 이상의 고온 스팀으로 세균을 99.9% 박멸합니다." 
              },
              { 
                icon: "fa-clipboard-list", 
                title: "사후 관리", 
                desc: "올바른 관리법 교육 및 정기 점검 스케줄을 제공합니다." 
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-[#E3F2FD] rounded-full flex items-center justify-center text-[#0069D9] text-xl md:text-3xl mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-base md:text-xl font-black text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed word-keep px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reviews Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-xl md:text-4xl font-black text-gray-900 mb-3 md:mb-4">
              부산/울산/양산 <span className="text-[#0069D9]">500+ 매장</span>의 선택
            </h2>
            <p className="text-gray-500 text-[13px] md:text-base">
              직접 경험하신 사장님들의 생생한 후기입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                text: "얼음에서 나던 냄새가 싹 사라졌어요. 손님들이 얼음이 더 투명해졌다고 좋아하십니다.",
                author: "해운대 A 카페 사장님"
              },
              {
                text: "여름철 위생 점검 걱정이 컸는데, 정기 관리 덕분에 마음 편하게 장사합니다.",
                author: "울산 삼산 B 호프 사장님"
              },
              {
                text: "기사님이 정말 꼼꼼하게 분해해서 청소해주시는 걸 보고 믿음이 갔습니다.",
                author: "양산 물금 C 레스토랑 사장님"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-[#F8F9FA] p-5 md:p-8 rounded-2xl border border-gray-100 flex flex-col justify-between h-full hover:border-blue-100 transition-colors">
                <div>
                  <div className="flex text-[#FFC107] text-xs md:text-sm mb-2 md:mb-4 space-x-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-700 text-[13px] md:text-[15px] font-medium leading-relaxed mb-4 md:mb-6 break-keep">
                    "{review.text}"
                  </p>
                </div>
                <div className="text-xs md:text-sm font-bold text-gray-500 border-t border-gray-200 pt-3 md:pt-4 mt-auto">
                  - {review.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="bg-[#0085FF] py-10 md:py-16">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 text-center md:text-left">
            <div>
              <h2 className="text-xl md:text-3xl font-black text-white mb-2 leading-tight">
                아직도 고민 중이신가요?
              </h2>
              <p className="text-blue-100 text-base md:text-xl font-bold">
                지금 신청하면 첫 방문 10% 할인 혜택!
              </p>
            </div>
            <Link to="/contact" className="bg-white text-[#0085FF] hover:bg-gray-50 px-8 md:px-10 py-3.5 md:py-5 rounded-xl font-black text-base md:text-lg shadow-xl active:scale-95 transition-transform min-w-[180px] md:min-w-[200px] flex items-center justify-center">
              무료 견적 받기
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Main;
