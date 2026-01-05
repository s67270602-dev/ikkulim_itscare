
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="font-pretendard pt-[60px] md:pt-[80px]">
      
      {/* 1. Process Header Section (Dark Background with Image) */}
      <section className="relative bg-[#1a1f2c] py-16 md:py-32 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-30">
           <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop" 
            alt="Cleaning Process Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1f2c]/80 to-[#1a1f2c] z-0"></div>
        
        <div className="container mx-auto px-5 md:px-6 relative z-10 text-center">
          <h1 className="text-2xl md:text-5xl font-black text-white mb-3 md:mb-4 tracking-tight">
            완벽을 추구하는 청소 프로세스
          </h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto break-keep leading-relaxed font-medium">
            업계 최고 수준의 장비와 노하우로 새것처럼 만들어드립니다.
          </p>
        </div>
      </section>

      {/* 2. Process Steps Cards */}
      <section className="relative -mt-10 md:-mt-20 pb-16 md:pb-32 px-5 md:px-6 z-20">
        <div className="container mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            
            {/* Step 1 */}
            <div className="bg-white p-5 md:p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-5 right-5 md:top-6 md:right-6 text-3xl md:text-5xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors">01</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0069D9] mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                <i className="fas fa-file-invoice"></i>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 relative z-10">상태 점검 및 분해</h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed break-keep relative z-10">
                오염도를 측정하고 부품 손상 없이 안전하게 완전 분해합니다.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-5 md:p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-5 right-5 md:top-6 md:right-6 text-3xl md:text-5xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors">02</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0069D9] mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 relative z-10">고압 세척</h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed break-keep relative z-10">
                친환경 세척제와 고압수로 묵은 때와 곰팡이를 씻어냅니다.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-5 md:p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-5 right-5 md:top-6 md:right-6 text-3xl md:text-5xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors">03</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0069D9] mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                <i className="fas fa-temperature-arrow-up"></i>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 relative z-10">고온 스팀 살균</h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed break-keep relative z-10">
                140도 이상의 스팀으로 보이지 않는 세균까지 박멸합니다.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-5 md:p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-5 right-5 md:top-6 md:right-6 text-3xl md:text-5xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors">04</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0069D9] mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                <i className="fas fa-screwdriver-wrench"></i>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 relative z-10">조립 및 테스트</h3>
              <p className="text-[13px] md:text-sm text-gray-500 leading-relaxed break-keep relative z-10">
                재조립 후 정상 작동 확인 및 주변 정리를 진행합니다.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Pricing Section */}
      <section className="py-12 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-5 md:px-6 max-w-[1000px]">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">서비스 요금 안내</h2>
            <p className="text-gray-500 text-sm md:text-base">매장 상황에 맞는 최적의 플랜을 선택하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            
            {/* Card 1: 1-Time Care (Updated with Integrated Pricing) */}
            <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-gray-100 relative hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="mb-5 md:mb-6 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">1회 완전 분해 케어</h3>
                <p className="text-gray-500 text-sm">긴급하게 청소가 필요할 때</p>
              </div>

              <div className="mb-5 md:mb-6 pb-5 md:pb-6 border-b border-gray-100 text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">100,000</span>
                  <span className="text-xl text-gray-500">원~</span>
                </div>
              </div>

              {/* Integrated Detail List */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-5 mb-6 md:mb-8 border border-gray-100 space-y-3">
                 <div className="flex justify-between items-center text-[13px] md:text-sm border-b border-dashed border-gray-200 pb-2 gap-2">
                    <span className="text-gray-600 font-bold shrink-0">50kg 이하 (소형)</span>
                    <span className="text-[#0069D9] font-black text-[15px] md:text-base whitespace-nowrap">100,000원</span>
                 </div>
                 <div className="flex justify-between items-center text-[13px] md:text-sm border-b border-dashed border-gray-200 pb-2 gap-2">
                    <span className="text-gray-600 font-bold shrink-0">50kg (호시자키/라셀르)</span>
                    <span className="text-[#0069D9] font-black text-[15px] md:text-base whitespace-nowrap">120,000원</span>
                 </div>
                 <div className="flex justify-between items-center text-[13px] md:text-sm border-b border-dashed border-gray-200 pb-2 gap-2">
                    <span className="text-gray-600 font-bold shrink-0">200kg 미만 (중형)</span>
                    <span className="text-[#0069D9] font-black text-[15px] md:text-base whitespace-nowrap">150,000원</span>
                 </div>
                 <div className="flex justify-between items-center text-[13px] md:text-sm pt-1 gap-2">
                    <span className="text-gray-600 font-bold shrink-0">200kg 이상 (대형)</span>
                    <span className="text-[#0069D9] font-black text-[15px] md:text-base whitespace-nowrap">200,000원</span>
                 </div>
              </div>

              <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-grow">
                {[
                  "완전 분해 세척",
                  "디테일링 세척",
                  "고압 스케일링 세척",
                  "고온 스팀 살균",
                  "A/S 7일 보장"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-gray-600">
                    <i className="fas fa-check text-[#00C853] text-sm"></i>
                    {item}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className="block w-full py-3.5 md:py-4 rounded-lg bg-[#E3F2FD] text-[#0069D9] font-bold text-center hover:bg-[#BBDEFB] transition-colors text-sm md:text-base"
              >
                견적 문의하기
              </Link>
            </div>

            {/* Card 2: Membership Care (Highlighted) */}
            <div className="bg-white rounded-2xl p-6 md:p-12 shadow-xl border-2 border-[#0069D9] relative transform md:-translate-y-6 h-full flex flex-col z-10">
              {/* Badge */}
              <div className="absolute top-0 right-0 bg-[#FF7E00] text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-lg shadow-sm">
                인기 선택
              </div>

              <div className="mb-6 md:mb-8 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">정기 멤버십 케어</h3>
                <p className="text-gray-500 text-sm">1년 내내 깨끗한 얼음 관리</p>
              </div>

              <div className="mb-8 md:mb-10 pb-6 md:pb-8 border-b border-gray-100 text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="text-4xl md:text-5xl font-black text-[#0069D9] tracking-tight">별도 협의</span>
                </div>
                <p className="text-xs text-gray-400 mt-3 font-medium">* 방문 주기 (월/분기) 선택 가능</p>
              </div>

              <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm md:text-base text-gray-900 font-bold">
                  <i className="fas fa-check text-[#0069D9] text-sm"></i>
                  1회성 비용 대비 20% 할인
                </li>
                {[
                  "정기 수질 검사 무료",
                  "소모품(필터 등) 교체 할인",
                  "우선 출동 서비스"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-gray-600">
                    <i className="fas fa-check text-[#0069D9] text-sm"></i>
                    {item}
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className="block w-full py-3.5 md:py-4 rounded-lg bg-[#0069D9] text-white font-bold text-center hover:bg-[#0052a9] transition-colors shadow-lg active:scale-[0.98] text-sm md:text-base"
              >
                상담 신청하기
              </Link>
            </div>

          </div>
          
        </div>
      </section>

    </div>
  );
};

export default Services;
