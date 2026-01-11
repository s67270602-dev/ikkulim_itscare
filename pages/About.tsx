
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard">
      
      {/* 1. Intro Section */}
      <section className="py-16 md:py-32 bg-white text-center">
        <div className="container mx-auto px-6 md:px-6 max-w-[1000px]">
          {/* Mobile Optimization: Increased text size for better impact */}
          <h1 className="text-[28px] md:text-5xl font-black text-gray-900 mb-8 md:mb-12 leading-[1.3] md:leading-tight tracking-tight break-keep">
            부산·울산·양산·김해 업소용 제빙기<br className="hidden md:block" /> 위생을 책임지는 <span className="text-[#0069D9]">Clean Partner</span>
          </h1>
          
          {/* Mobile Optimization: Increased base font size to 16px and relaxed line height */}
          <div className="space-y-8 md:space-y-8 text-gray-600 text-[16px] md:text-xl leading-[1.7] md:leading-9 font-medium break-keep">
            <p>
              이끌림잇츠케어는 ‘내 가족이 먹는 얼음’이라는 기준으로 시작한<br className="hidden md:block"/>
              업소용 제빙기 위생 청소 전문업체입니다.
            </p>
            <p>
              단순히 기계를 닦는 작업이 아니라,<br className="hidden md:block"/>
              제빙기 내부 상태를 기준으로 점검과 세척 중심의<br className="hidden md:block"/>
              위생 관리 서비스를 제공합니다.
            </p>
            <p>
              울산·부산·양산·김해 지역의 카페, 맥주전문점, 기업체,<br className="hidden md:block"/>
              학교, 관공서 등 얼음을 사용하는 다양한 업소 환경에 맞춰<br className="hidden md:block"/>
              안전하고 신뢰할 수 있는 제빙기 위생 관리 기준을 안내합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-12 text-center">
            
            {/* Item 1 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-blue-100 flex items-center justify-center text-[#0069D9] text-xl md:text-2xl mb-4 md:mb-5 shadow-sm group-hover:-translate-y-1 transition-transform">
                <i className="fas fa-store"></i>
              </div>
              <strong className="text-2xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">500여 개</strong>
              <span className="text-gray-500 text-[15px] md:text-base font-medium">누적 방문 매장</span>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-blue-100 flex items-center justify-center text-[#0069D9] text-xl md:text-2xl mb-4 md:mb-5 shadow-sm group-hover:-translate-y-1 transition-transform">
                <i className="fas fa-thumbs-up"></i>
              </div>
              <strong className="text-2xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">99%</strong>
              <span className="text-gray-500 text-[15px] md:text-base font-medium">고객 만족도 기준</span>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-blue-100 flex items-center justify-center text-[#0069D9] text-xl md:text-2xl mb-4 md:mb-5 shadow-sm group-hover:-translate-y-1 transition-transform">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <strong className="text-lg md:text-2xl font-black text-gray-900 mb-2 tracking-tight h-[32px] md:h-[40px] flex items-center">울산·부산·양산·김해</strong>
              <span className="text-gray-500 text-[15px] md:text-base font-medium">서비스 지역</span>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-blue-100 flex items-center justify-center text-[#0069D9] text-xl md:text-2xl mb-4 md:mb-5 shadow-sm group-hover:-translate-y-1 transition-transform">
                <i className="fas fa-calendar-check"></i>
              </div>
              <strong className="text-xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight h-[32px] md:h-[40px] flex items-center">지역별 일정 대응</strong>
              <span className="text-gray-500 text-[15px] md:text-base font-medium">사전 예약제</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Service Area Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
               <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
                 <img 
                   src="/images/itscare-ice-machine-cleaning-main-banner-1.jpg" 
                   alt="출장 가능 지역 지도" 
                   className="w-full h-auto object-cover min-h-[250px] md:min-h-[400px] transition-transform duration-700 group-hover:scale-105"
                 />
               </div>
               <p className="text-center text-xs md:text-sm text-gray-400 mt-4 font-bold tracking-tight">
                 ※ 부산·울산·양산·김해 전 지역 출장 가능 (일부 도서산간 제외)
               </p>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
               {/* Mobile Optimization: Larger text size for visibility */}
               <h2 className="text-[26px] md:text-4xl font-black text-gray-900 mb-8 md:mb-8 tracking-tight break-keep leading-tight">
                 업소용 제빙기 청소<br/> 출장 가능 지역
               </h2>
               
               {/* Mobile Optimization: 16px text with relaxed leading */}
               <div className="space-y-6 text-gray-600 text-[16px] md:text-lg leading-[1.7] md:leading-relaxed font-medium break-keep mb-10 md:mb-12">
                 <p>
                   이끌림잇츠케어는 부산광역시를 중심으로<br className="hidden md:block"/>
                   울산, 양산, 김해 지역까지<br className="hidden md:block"/>
                   업소용 제빙기 위생 청소 서비스를 제공하고 있습니다.
                 </p>
                 <p>
                   지역별 매장 환경과 제빙기 사용량,<br className="hidden md:block"/>
                   기종 특성을 고려하여<br className="hidden md:block"/>
                   현장 기준에 맞는 점검과 세척 중심의<br className="hidden md:block"/>
                   위생 관리를 진행합니다.
                 </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                 {/* Busan */}
                 <div>
                    <h3 className="text-[#0069D9] font-black text-[17px] md:text-lg mb-3 flex items-center gap-2">
                      <i className="fas fa-map-marker-alt"></i> 부산광역시
                    </h3>
                    <p className="text-gray-600 text-[15px] md:text-sm leading-7 break-keep font-medium pl-6">
                      해운대구 / 수영구 / 남구<br/>
                      부산진구 / 동래구 / 연제구<br/>
                      금정구 / 북구 / 사상구<br/>
                      기장군 포함 전 지역
                    </p>
                 </div>

                 {/* Ulsan/Yangsan */}
                 <div>
                    <h3 className="text-gray-800 font-black text-[17px] md:text-lg mb-3 flex items-center gap-2">
                       <i className="fas fa-map-marker-alt text-gray-400"></i> 울산 / 양산 / 김해
                    </h3>
                    <p className="text-gray-600 text-[15px] md:text-sm leading-7 break-keep font-medium pl-6">
                      울산광역시 전 지역<br/>
                      양산시 전 지역 (물금, 웅상 포함)<br/>
                      김해시 전 지역
                    </p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Bottom SEO Paragraph */}
      <section className="py-12 md:py-16 bg-[#F8F9FA] border-t border-gray-200">
        <div className="container mx-auto px-6 md:px-6 max-w-[900px] text-center">
          <div className="w-10 h-1 bg-gray-300 mx-auto mb-6 rounded-full"></div>
          {/* Mobile Optimization: 14px -> 15px for better footer readability */}
          <p className="text-gray-500 text-[15px] md:text-base leading-7 md:leading-8 break-keep font-medium">
            이끌림잇츠케어는 업소용 제빙기 위생 청소를 중심으로 제빙기 내부 상태 점검과 세척 기준에 맞춘 위생 관리 서비스를 제공합니다.
            울산·부산·양산·김해 지역 업소 환경에 맞는 안전하고 신뢰할 수 있는 제빙기 위생 관리 기준을 통해 매장의 위생 신뢰를 함께 만들어갑니다.
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
