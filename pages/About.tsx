
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard">
      
      {/* 1. Intro Section */}
      <section className="py-12 md:py-32 bg-white text-center">
        <div className="container mx-auto px-5 md:px-6 max-w-[1000px]">
          <h1 className="text-2xl md:text-5xl font-black text-gray-900 mb-6 md:mb-8 leading-tight tracking-tight">
            부산·울산·양산·김해 위생을 책임지는<br />
            <span className="text-[#0091EA]">Clean Partner</span>
          </h1>
          <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto break-keep font-medium">
            이끌림잇츠케어는 "내 가족이 먹는 얼음"이라는 마음가짐으로 시작했습니다.<br className="hidden md:block"/>
            단순히 기계를 닦는 것이 아니라, 부산/울산/양산/김해 지역 사장님들의 위생 고민을 해결해드리는 파트너가 되겠습니다.<br className="hidden md:block"/>
            최신 스팀 장비와 검증된 친환경 세제를 사용하여 가장 안전한 얼음을 약속드립니다.
          </p>
        </div>
      </section>

      {/* 2. Stats Section */}
      <section className="py-12 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 text-center">
            
            {/* Item 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#0091EA] flex items-center justify-center text-[#0091EA] text-xl md:text-2xl mb-4 md:mb-5 bg-white shadow-sm">
                <i className="fas fa-user-friends"></i>
              </div>
              <strong className="text-2xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">1,200+</strong>
              <span className="text-gray-500 text-xs md:text-sm font-medium">누적 방문 매장</span>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#0091EA] flex items-center justify-center text-[#0091EA] text-xl md:text-2xl mb-4 md:mb-5 bg-white shadow-sm">
                <i className="fas fa-medal"></i>
              </div>
              <strong className="text-2xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">99%</strong>
              <span className="text-gray-500 text-xs md:text-sm font-medium">고객 만족도</span>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#0091EA] flex items-center justify-center text-[#0091EA] text-xl md:text-2xl mb-4 md:mb-5 bg-white shadow-sm">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <strong className="text-xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">부산/울산/양산/김해</strong>
              <span className="text-gray-500 text-xs md:text-sm font-medium">서비스 지역</span>
            </div>

            {/* Item 4 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#0091EA] flex items-center justify-center text-[#0091EA] text-xl md:text-2xl mb-4 md:mb-5 bg-white shadow-sm">
                <i className="fas fa-truck"></i>
              </div>
              <strong className="text-xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">상시 대기</strong>
              <span className="text-gray-500 text-xs md:text-sm font-medium">전문 기사</span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Service Area Section */}
      <section className="py-12 md:py-32 bg-white">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
               <div className="rounded-2xl overflow-hidden shadow-lg relative group">
                 <img 
                   src="/images/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-02-24%20121821.jpg" 
                   alt="출장 가능 지역 지도" 
                   className="w-full h-auto object-cover min-h-[250px] md:min-h-[300px] transition-transform duration-700 group-hover:scale-105"
                 />
               </div>
               <p className="text-center text-xs text-gray-400 mt-3 font-medium tracking-tight">
                 * 부산/울산/양산 전 지역 출장 가능 (일부 도서 산간 제외)
               </p>
            </div>

            {/* Text Side */}
            <div className="w-full lg:w-1/2 pt-2 md:pt-4">
               <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 md:mb-4 tracking-tight">출장 가능 지역 안내</h2>
               <p className="text-gray-500 text-sm md:text-base mb-8 md:mb-10 leading-relaxed font-medium">
                 부산광역시를 중심으로 울산, 양산, 김해까지 서비스를 확대하여 운영하고 있습니다.
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                 {/* Busan */}
                 <div>
                    <h3 className="text-[#0091EA] font-bold text-lg mb-2 md:mb-3">부산광역시</h3>
                    <p className="text-gray-600 text-sm leading-6 md:leading-7 break-keep font-medium">
                      해운대구 / 수영구 / 남구<br/>
                      부산진구 / 동래구 / 연제구<br/>
                      금정구 / 북구 / 사상구<br/>
                      기장군 포함 전 지역
                    </p>
                 </div>

                 {/* Ulsan/Yangsan */}
                 <div>
                    <h3 className="text-gray-900 font-bold text-lg mb-2 md:mb-3">울산 / 양산 / 김해</h3>
                    <p className="text-gray-600 text-sm leading-6 md:leading-7 break-keep font-medium">
                      울산광역시 전 지역<br/>
                      양산시 전 지역<br/>
                      (물금, 웅상 포함)<br/>
                      김해시 전 지역
                    </p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
