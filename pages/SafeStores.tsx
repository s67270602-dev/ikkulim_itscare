
import React, { useState } from 'react';
import { SAFE_STORES } from '../constants';
import { Link } from 'react-router-dom';

const SafeStores: React.FC = () => {
  // 안심매장이란? 상세 설명 토글 상태
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-[#F8FAFC]">
      
      {/* 1. Header & Intro Section */}
      <section className="bg-white py-8 md:py-20 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 max-w-[1000px] text-center">
          <span className="text-[#0069D9] font-black tracking-widest text-[10px] md:text-sm uppercase mb-2 md:mb-3 block">Safe Zone Partner</span>
          <h1 className="text-xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-6 md:mb-8 tracking-tight break-keep">
            울산·부산·양산 안심매장 안내 <span className="block md:inline text-base md:text-2xl text-gray-400 mt-1 md:mt-0 md:ml-2 font-bold">| 제빙기 위생 관리 매장</span>
          </h1>

          {/* Page Description */}
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
        <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
          <div className="text-center mb-6 md:mb-12">
             <h3 className="text-lg md:text-3xl font-black text-gray-900">우리 동네 안심 매장</h3>
             <p className="text-gray-500 text-xs md:text-base mt-1 md:mt-2">깨끗한 얼음을 사용하는 매장을 확인하세요.</p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
            {SAFE_STORES.map((store, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg md:rounded-xl shadow-sm hover:shadow-md border border-gray-100 flex items-center justify-center py-3 px-2 md:py-6 md:px-4 text-center transition-shadow duration-300 group relative"
              >
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

      {/* 3. Consumer Notice Section */}
      <section className="pb-8 md:pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-[1000px]">
          <div className="bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-10 border border-gray-200 text-center md:text-left flex flex-col md:flex-row items-center gap-3 md:gap-10">
            <div className="w-10 h-10 md:w-16 md:h-16 bg-gray-200 rounded-full flex items-center justify-center shrink-0 text-gray-500">
               <i className="fas fa-info text-lg md:text-2xl"></i>
            </div>
            <div>
               <h4 className="font-black text-gray-900 text-sm md:text-xl mb-1 md:mb-3">소비자 안내</h4>
               <p className="text-gray-600 text-[10px] md:text-sm leading-relaxed break-keep">
                 이 페이지에 등록된 매장은 정기적인 관리가 이루어지고 있는 매장이며, 
                 관리 주기 및 방식은 매장 운영 상황에 따라 다를 수 있습니다.
                 하지만 <strong className="text-gray-800">위생적인 얼음 제공을 위해 지속적으로 관리되고 있습니다.</strong>
               </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SafeStores;
