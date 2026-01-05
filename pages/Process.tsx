
import React from 'react';

const Process: React.FC = () => {
  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard">
      {/* 1. Header Section */}
      <section className="py-10 md:py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-3">왜 제빙기 청소가 필수일까요?</h1>
          <p className="text-gray-500 text-sm md:text-lg break-keep">
            깨끗해 보이는 얼음, 하지만 그 속에는 보이지 않는 세균이 숨어있을 수 있습니다.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
            
            {/* Left Column: Chart */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <i className="fas fa-microscope text-[#0069D9] text-xl md:text-2xl"></i>
                <h2 className="text-lg md:text-2xl font-bold text-gray-900">시간 경과에 따른 세균 번식률</h2>
              </div>
              
              <div className="bg-white border border-gray-100 rounded-xl p-5 md:p-8 shadow-sm h-auto relative">
                 <div className="relative h-[220px] md:h-[300px] w-full pl-10 pr-2 pb-8">
                    
                    {/* Y-axis Label Title */}
                    <div className="absolute top-1/2 -left-3 -translate-y-1/2 -rotate-90 text-xs text-gray-500 font-bold tracking-tight whitespace-nowrap">세균 수 (RLU)</div>

                    {/* Chart Container */}
                    <div className="relative w-full h-full border-l border-b border-gray-400">
                       
                       {/* Y-Axis Values */}
                       <div className="absolute -left-12 top-0 h-full flex flex-col justify-between text-xs text-gray-500 font-medium text-right w-10">
                          <span className="-translate-y-1/2">6000</span>
                          <span className="-translate-y-1/2">4500</span>
                          <span className="-translate-y-1/2">3000</span>
                          <span className="-translate-y-1/2">1500</span>
                          <span className="translate-y-1/2">0</span>
                       </div>

                       {/* Grid Background */}
                       <div className="absolute inset-0 w-full h-full flex flex-col justify-between pointer-events-none">
                          <div className="w-full border-t border-dashed border-gray-200 h-0"></div>
                          <div className="w-full border-t border-dashed border-gray-200 h-0"></div>
                          <div className="w-full border-t border-dashed border-gray-200 h-0"></div>
                          <div className="w-full border-t border-dashed border-gray-200 h-0"></div>
                          <div className="w-full border-t border-transparent h-0"></div> {/* Bottom aligned with border-b */}
                       </div>
                       
                       {/* Vertical Grid Lines */}
                        <div className="absolute inset-0 w-full h-full flex pointer-events-none">
                            <div className="flex-1 border-r border-dashed border-gray-200 h-full"></div>
                            <div className="flex-1 border-r border-dashed border-gray-200 h-full"></div>
                            <div className="flex-1 border-r border-dashed border-gray-200 h-full"></div>
                            <div className="flex-1 h-full"></div>
                        </div>

                       {/* Bars */}
                        <div className="absolute inset-0 w-full h-full flex items-end">
                            {/* Item 1 */}
                            <div className="flex-1 flex justify-center items-end h-full group relative">
                                <div className="w-8 md:w-16 bg-[#FF7E00] h-[0.5%] transition-all duration-1000"></div>
                                <div className="absolute -bottom-8 text-[11px] md:text-sm text-gray-600 font-medium whitespace-nowrap">청소 직후</div>
                            </div>
                            {/* Item 2 */}
                            <div className="flex-1 flex justify-center items-end h-full group relative">
                                <div className="w-8 md:w-16 bg-[#FF7E00] h-[5%] transition-all duration-1000 delay-100"></div>
                                <div className="absolute -bottom-8 text-[11px] md:text-sm text-gray-600 font-medium whitespace-nowrap">1개월 후</div>
                            </div>
                            {/* Item 3 */}
                            <div className="flex-1 flex justify-center items-end h-full group relative">
                                <div className="w-8 md:w-16 bg-[#FF7E00] h-[20%] transition-all duration-1000 delay-200"></div>
                                <div className="absolute -bottom-8 text-[11px] md:text-sm text-gray-600 font-medium whitespace-nowrap">3개월 후</div>
                            </div>
                            {/* Item 4 */}
                            <div className="flex-1 flex justify-center items-end h-full group relative">
                                <div className="w-8 md:w-16 bg-[#FF7E00] h-[83%] transition-all duration-1000 delay-300"></div>
                                <div className="absolute -bottom-8 text-[11px] md:text-sm text-gray-900 font-bold whitespace-nowrap">6개월 후</div>
                            </div>
                        </div>
                    </div>
                 </div>

                 {/* Legend */}
                 <div className="flex flex-col items-center justify-center mt-8 md:mt-12">
                     <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-[#FF7E00]"></div>
                        <span className="text-sm text-[#FF7E00] font-bold">세균 수치</span>
                     </div>
                     <p className="text-[11px] text-gray-400">* 일반적인 업소 환경 기준 추정치</p>
                 </div>
              </div>
            </div>

            {/* Right Column: Info & Checklist */}
            <div className="lg:w-1/2">
              <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">식중독의 원인이 되는 얼음</h2>
              <p className="text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base break-keep">
                식품의약품안전처 조사 결과, 위생 관리가 미흡한 제빙기 얼음에서 <span className="text-red-600 font-black">대장균과 리스테리아균</span>이 검출되는 사례가 빈번합니다. 이는 고객의 배탈, 식중독을 유발하여 매장의 이미지에 치명적인 타격을 줄 수 있습니다.
              </p>

              <div className="bg-[#EBF5FF] rounded-2xl p-5 md:p-8 border border-blue-100">
                <h3 className="text-[#0069D9] font-bold text-lg mb-4 md:mb-5 flex items-center gap-2">
                  제빙기 오염 자가 진단 체크리스트
                </h3>
                <ul className="space-y-3 md:space-y-4 mb-5 md:mb-6">
                  {[
                    "얼음에서 불쾌한 냄새가 난다.",
                    "얼음의 투명도가 떨어지고 탁하다.",
                    "제빙기 내부 벽면에 물때나 곰팡이가 보인다.",
                    "청소한 지 3개월이 지났다.",
                    "얼음에서 검은 이물질이 섞여 나온다."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border border-[#FF7E00] flex items-center justify-center shrink-0 mt-0.5">
                        <i className="fas fa-exclamation text-[#FF7E00] text-xs font-bold"></i>
                      </div>
                      <span className="text-gray-700 text-sm md:text-base font-medium leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#DC2626] text-sm md:text-base font-black border-t border-blue-200 pt-3 md:pt-4 tracking-tight">
                  * 하나라도 해당된다면 전문 청소가 시급합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Section: Promise */}
      <section className="py-12 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="text-center mb-8 md:mb-16">
             <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-2">청결한 얼음은 고객과의 약속입니다</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex gap-5 items-start hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <i className="fas fa-check-circle text-green-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">법적 위생 기준 충족</h3>
                <p className="text-gray-500 text-sm leading-relaxed break-keep">
                  정기적인 관리를 통해 식품위생법 기준을 충족하고, 불시 위생 점검에도 당당하게 대응할 수 있습니다.
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex gap-5 items-start hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                 <i className="fas fa-history text-green-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">기계 수명 연장</h3>
                <p className="text-gray-500 text-sm leading-relaxed break-keep">
                  먼지와 곰팡이를 제거하면 제빙기 효율이 좋아지고, 컴프레서 부하를 줄여 기계 수명이 최대 2배 늘어납니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
