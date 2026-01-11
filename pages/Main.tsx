
import React from 'react';
import { Link } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <div className="font-pretendard pt-[60px]">
      
      {/* 1. Hero Section */}
      <section className="relative flex items-center bg-[#020617] overflow-hidden min-h-[500px] lg:min-h-[600px]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#020617]/70 to-[#020617]/40 z-10 sm:bg-gradient-to-r"></div>
          <img
            src="/images/itscare-ice-machine-cleaning-main-banne.jpg"
            alt="Dark Blue Nature Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="container mx-auto px-5 md:px-6 max-w-[1200px] relative z-20 flex items-center h-full">
          <div className="max-w-3xl w-full py-12 md:py-20">
            <h1 className="text-3xl xs:text-[34px] sm:text-5xl lg:text-[64px] font-black text-white leading-[1.3] tracking-tight mb-4 md:mb-6 break-keep drop-shadow-lg">
              얼음 위생이 곧<br className="xs:hidden" /> <span className="text-[#FF7E00]">매장의 매출</span>입니다.
            </h1>
            
            {/* Mobile Optimization: Increased base font size from 13px to 15px for better readability */}
            <p className="text-gray-200 text-[15px] sm:text-base md:text-lg lg:text-[19px] font-medium mb-8 md:mb-10 leading-relaxed break-keep max-w-xl md:max-w-3xl opacity-90 text-justify md:text-left">
              이끌림잇츠케어는 울산·부산·양산·김해 전 지역에서 업소용 제빙기 위생 청소 서비스를 제공하고 있습니다.
              카페를 비롯해 맥주전문점, 기업체, 학교, 관공서 등 다양한 업소에서 사용되는 제빙기는 내부 관리가 이루어지지 않을 경우 위생 문제로 이어질 수 있습니다.
              보이지 않는 제빙기 내부 상태를 기준으로 분해 점검과 세척·살균 중심의 위생 관리를 진행합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/contact" className="bg-[#FF7E00] hover:bg-[#E67000] text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[17px] md:text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center">
                30초 만에 무료 견적 받기
              </Link>
              <Link to="/services" className="bg-white hover:bg-gray-100 text-gray-900 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[17px] md:text-lg transition-all shadow-lg active:scale-95 flex items-center justify-center">
                청소 과정 확인하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DANGER Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="text-center mb-10 md:mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <i className="fas fa-exclamation-triangle text-[#DC2626] text-xl md:text-2xl animate-pulse"></i>
              <span className="text-[#DC2626] font-black text-xl md:text-3xl tracking-[0.3em] border-b-4 border-[#DC2626] pb-1">DANGER</span>
              <i className="fas fa-exclamation-triangle text-[#DC2626] text-xl md:text-2xl animate-pulse"></i>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 tracking-tight leading-tight">
              혹시 우리 매장 제빙기 내부는<br className="md:hidden"/> 이런 모습 아닙니까?
            </h2>
            <p className="text-gray-500 text-[15px] md:text-base max-w-2xl mx-auto break-keep leading-relaxed">
              겉만 닦는 것은 청소가 아닙니다. 제빙기 내부는 습하고 어두워 곰팡이와 세균의 온상입니다.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group bg-gray-100">
                <img 
                  src="/images/itscare-ice-machine-cleaning-main-banner-1.jpg" 
                  alt="오염된 내부" 
                  className="w-full h-[260px] sm:h-[350px] md:h-[460px] object-cover filter brightness-50 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D32F2F] text-white px-6 py-3 rounded-xl font-black flex flex-col items-center shadow-lg border-2 border-white/20 whitespace-nowrap z-10">
                  <i className="fas fa-exclamation-triangle text-2xl mb-1"></i>
                  <span className="text-lg">관리되지 않은 내부</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              {/* Warning Box 1 */}
              <div className="bg-[#FFF5F5] p-6 md:p-6 rounded-2xl flex gap-4 items-start border border-[#FEB2B2]/30 shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FED7D7] rounded-xl flex items-center justify-center text-[#C53030] shrink-0 text-lg md:text-xl mt-0.5">
                  <i className="fas fa-exclamation-circle"></i>
                </div>
                <div>
                  <h3 className="text-[17px] md:text-lg font-black text-gray-900 mb-1">검은 곰팡이와 물때</h3>
                  {/* Optimized: Increased mobile font size to 15px */}
                  <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed break-keep">
                    얼음에서 냄새가 나거나 이물질이 보인다면 이미 내부는 심각하게 오염된 상태입니다.
                  </p>
                </div>
              </div>

              {/* Warning Box 2 */}
              <div className="bg-[#FFF5F5] p-6 md:p-6 rounded-2xl flex gap-4 items-start border border-[#FEB2B2]/30 shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FED7D7] rounded-xl flex items-center justify-center text-[#C53030] shrink-0 text-lg md:text-xl mt-0.5">
                  <i className="fas fa-shield-virus"></i>
                </div>
                <div>
                  <h3 className="text-[17px] md:text-lg font-black text-gray-900 mb-1">식중독균의 위험</h3>
                  {/* Optimized: Increased mobile font size to 15px */}
                  <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed break-keep">
                    살모넬라균, 대장균 등은 얼음 속에서도 생존합니다. 고객의 건강을 위협할 수 있습니다.
                  </p>
                </div>
              </div>

              {/* Warning Box 3 */}
              <div className="bg-[#FFF5F5] p-6 md:p-6 rounded-2xl flex gap-4 items-start border border-[#FEB2B2]/30 shadow-sm hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#FED7D7] rounded-xl flex items-center justify-center text-[#C53030] shrink-0 text-lg md:text-xl mt-0.5">
                  <i className="fas fa-store"></i>
                </div>
                <div>
                  <h3 className="text-[17px] md:text-lg font-black text-gray-900 mb-1">위생 관리와 매장 신뢰</h3>
                  {/* Optimized: Increased mobile font size to 15px */}
                  <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed break-keep">
                    업소용 제빙기는 얼음을 직접 제공하는 설비이기 때문에 위생 관리가 매우 중요합니다.
                    외관이 깨끗해 보여도 내부에는 물때와 스케일, 미세 오염물이 쌓이기 쉬워 정기적인 내부 점검이 필요합니다.
                    특히 카페와 맥주전문점, 다중 이용 시설에서는 제빙기 위생 관리가 매장 신뢰와 직결됩니다.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-right">
                <Link to="/process" className="inline-flex items-center text-[#0069D9] font-bold text-base hover:underline underline-offset-4 transition-colors">
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
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">
              <span className="text-[#0069D9]">3단계 토탈 케어</span> 시스템
            </h2>
            <p className="text-gray-500 text-[15px] md:text-base">
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
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 group">
                <div className="w-16 h-16 bg-[#E3F2FD] rounded-full flex items-center justify-center text-[#0069D9] text-2xl mb-4 group-hover:scale-110 transition-transform">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed word-keep px-2">
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
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 break-keep leading-tight">
              울산·부산·양산·김해 업소용 제빙기 청소 <span className="text-[#0069D9]">실제 이용 후기</span>
            </h2>
            <p className="text-gray-500 text-[15px] md:text-base">
              직접 경험하신 사장님들의 생생한 후기입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
              },
              {
                text: "지인 소개로 이용했는데, 보이지 않는 곳까지 완벽하게 청소해주셔서 놀랐습니다.",
                author: "김해 장유 D 베이커리 사장님"
              }
            ].map((review, idx) => (
              <div key={idx} className="bg-[#F8F9FA] p-6 rounded-2xl border border-gray-100 flex flex-col justify-between h-full hover:border-blue-100 transition-colors">
                <div>
                  <div className="flex text-[#FFC107] text-sm mb-3 space-x-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="text-gray-700 text-[15px] font-medium leading-relaxed mb-6 break-keep">
                    "{review.text}"
                  </p>
                </div>
                <div className="text-sm font-bold text-gray-500 border-t border-gray-200 pt-4 mt-auto">
                  - {review.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="bg-[#0085FF] py-12 md:py-16">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                아직도 고민 중이신가요?
              </h2>
              <p className="text-blue-100 text-lg md:text-xl font-bold">
                지금 신청하면 첫 방문 10% 할인 혜택!
              </p>
            </div>
            <Link to="/contact" className="bg-white text-[#0085FF] hover:bg-gray-50 w-full md:w-auto px-8 md:px-10 py-4 md:py-5 rounded-xl font-black text-lg md:text-xl shadow-xl active:scale-95 transition-transform flex items-center justify-center">
              무료 견적 받기
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Main;
