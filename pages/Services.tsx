
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
          <h1 className="text-2xl md:text-5xl font-black text-white mb-3 md:mb-4 tracking-tight break-keep">
            업소용 제빙기 위생 청소 프로세스 안내
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
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-5 right-5 md:top-6 md:right-6 text-3xl md:text-5xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors">01</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0069D9] mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                <i className="fas fa-file-invoice"></i>
              </div>
              <h3 className="text-lg md:text-lg font-bold text-gray-900 mb-2 md:mb-3 relative z-10">상태 점검 및 분해</h3>
              <p className="text-[14px] md:text-sm text-gray-500 leading-relaxed break-keep relative z-10">
                업소용 제빙기 내부 상태를 확인한 뒤, 기종과 구조에 맞춰 안전하게 분해합니다.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-5 right-5 md:top-6 md:right-6 text-3xl md:text-5xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors">02</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0069D9] mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="text-lg md:text-lg font-bold text-gray-900 mb-2 md:mb-3 relative z-10">고압 세척</h3>
              <p className="text-[14px] md:text-sm text-gray-500 leading-relaxed break-keep relative z-10">
                제빙기 내부에 누적된 물때와 스케일을 고압 세척으로 제거합니다.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-5 right-5 md:top-6 md:right-6 text-3xl md:text-5xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors">03</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0069D9] mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                <i className="fas fa-temperature-arrow-up"></i>
              </div>
              <h3 className="text-lg md:text-lg font-bold text-gray-900 mb-2 md:mb-3 relative z-10">고온 스팀 살균</h3>
              <p className="text-[14px] md:text-sm text-gray-500 leading-relaxed break-keep relative z-10">
                고온 스팀을 활용해 내부 세척 후 위생 관리 과정을 진행합니다.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-5 right-5 md:top-6 md:right-6 text-3xl md:text-5xl font-black text-gray-100 select-none group-hover:text-blue-50 transition-colors">04</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0069D9] mb-4 md:mb-6 text-lg md:text-xl relative z-10">
                <i className="fas fa-screwdriver-wrench"></i>
              </div>
              <h3 className="text-lg md:text-lg font-bold text-gray-900 mb-2 md:mb-3 relative z-10">조립 및 테스트</h3>
              <p className="text-[14px] md:text-sm text-gray-500 leading-relaxed break-keep relative z-10">
                조립 후 정상 작동 여부를 확인하고, 얼음 생성 상태를 점검합니다.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Pricing Section */}
      <section className="py-12 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-5 md:px-6 max-w-[1000px]">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-3 break-keep">업소용 제빙기 청소 비용 안내</h2>
            <p className="text-gray-500 text-sm md:text-base break-keep">매장 상황에 맞는 최적의 플랜을 선택하세요.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start mb-12">
            
            {/* Card 1: 1-Time Care (Updated with Integrated Pricing) */}
            <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm border border-gray-100 relative hover:shadow-lg transition-all duration-300 h-full flex flex-col">
              <div className="mb-5 md:mb-6 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 break-keep leading-tight">업소용 제빙기 1회 완전 분해 위생 청소</h3>
                <p className="text-gray-500 text-sm break-keep leading-relaxed">기종·용량·오염 상태에 따라 작업 범위가 달라질 수 있습니다.</p>
              </div>

              <div className="mb-5 md:mb-6 pb-5 md:pb-6 border-b border-gray-100 text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">100,000</span>
                  <span className="text-xl text-gray-500">원~</span>
                </div>
              </div>

              {/* Integrated Detail List - Mobile Optimized */}
              <div className="bg-gray-50 rounded-xl p-4 md:p-5 mb-6 md:mb-8 border border-gray-100 space-y-3">
                 <div className="flex justify-between items-start text-[13px] md:text-sm border-b border-dashed border-gray-200 pb-2 gap-3">
                    <span className="text-gray-600 font-bold break-keep text-left leading-snug">50kg 이하 (소형 업소용 제빙기)</span>
                    <span className="text-[#0069D9] font-black text-[15px] md:text-base whitespace-nowrap shrink-0">100,000원</span>
                 </div>
                 <div className="flex justify-between items-start text-[13px] md:text-sm border-b border-dashed border-gray-200 pb-2 gap-3">
                    <span className="text-gray-600 font-bold break-keep text-left leading-snug">50kg 이하 (호시자키/라셀르 업소용 제빙기)</span>
                    <span className="text-[#0069D9] font-black text-[15px] md:text-base whitespace-nowrap shrink-0">120,000원</span>
                 </div>
                 <div className="flex justify-between items-start text-[13px] md:text-sm border-b border-dashed border-gray-200 pb-2 gap-3">
                    <span className="text-gray-600 font-bold break-keep text-left leading-snug">50kg 이상 (중형 업소용 제빙기)</span>
                    <span className="text-[#0069D9] font-black text-[15px] md:text-base whitespace-nowrap shrink-0">150,000원</span>
                 </div>
                 <div className="flex justify-between items-start text-[13px] md:text-sm pt-1 gap-3">
                    <span className="text-gray-600 font-bold break-keep text-left leading-snug">200kg 이상 (대형 업소용 제빙기)</span>
                    <span className="text-[#0069D9] font-black text-[15px] md:text-base whitespace-nowrap shrink-0">200,000원</span>
                 </div>
              </div>

              <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-grow">
                {[
                  "제빙기 완전 분해 세척",
                  "내부 디테일 세척",
                  "고압 스케일 제거",
                  "고온 스팀 위생 관리",
                  "작업 후 정상 작동 확인"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-gray-600">
                    <i className="fas fa-check text-[#00C853] text-sm shrink-0"></i>
                    <span className="break-keep">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className="block w-full py-3.5 md:py-4 rounded-lg bg-[#E3F2FD] text-[#0069D9] font-bold text-center hover:bg-[#BBDEFB] transition-colors text-sm md:text-base shadow-sm"
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
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 break-keep leading-tight">정기 위생 관리 케어 (상담 후 안내)</h3>
                <p className="text-gray-500 text-sm break-keep leading-relaxed">업소 환경과 제빙기 사용량에 맞춰 위생 관리 주기를 상담 후 안내드립니다.</p>
              </div>

              <div className="mb-8 md:mb-10 pb-6 md:pb-8 border-b border-gray-100 text-center md:text-left">
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="text-4xl md:text-5xl font-black text-[#0069D9] tracking-tight">별도 협의</span>
                </div>
                <p className="text-xs text-gray-400 mt-3 font-medium">* 방문 주기 (월/분기) 선택 가능</p>
              </div>

              <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-grow">
                <li className="flex items-center gap-3 text-sm md:text-base text-gray-900 font-bold">
                  <i className="fas fa-check text-[#0069D9] text-sm shrink-0"></i>
                  <span className="break-keep">1회성 비용 대비 20% 할인</span>
                </li>
                {[
                  "정기 내부 점검",
                  "소모 부위 상태 점검",
                  "제빙기 위생관리 대장 부착",
                  "정기관리(안심매장)스티커 부착",
                  "우선 출동 서비스"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm md:text-base text-gray-600">
                    <i className="fas fa-check text-[#0069D9] text-sm shrink-0"></i>
                    <span className="break-keep">{item}</span>
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
          
          {/* Additional Description Text */}
          <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-sm text-center">
            <div className="w-12 h-1 bg-[#0069D9] mx-auto mb-6 rounded-full opacity-50"></div>
            <p className="text-gray-600 text-[15px] md:text-lg leading-relaxed md:leading-8 break-keep font-medium">
              업소용 제빙기는 카페를 비롯해 맥주전문점, 기업체, 학교, 관공서 등 다양한 시설에서 사용됩니다.<br className="hidden md:block"/>
              이끌림잇츠케어는 제빙기 외관이 아닌 <span className="text-[#0069D9] font-bold">내부 상태를 기준</span>으로 점검과 세척 중심의 위생 관리 서비스를 제공합니다.<br className="hidden md:block"/>
              기종과 사용 환경에 따라 적합한 청소 기준을 안내합니다.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;
