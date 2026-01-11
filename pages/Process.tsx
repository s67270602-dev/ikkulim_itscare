
import React from 'react';

const Process: React.FC = () => {
  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard">
      {/* 1. Header Section */}
      <section className="py-10 md:py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-4 md:mb-3 leading-tight tracking-tight">왜 업소용 제빙기 위생관리가 필수일까요?</h1>
          <p className="text-gray-600 text-[15px] md:text-lg break-keep leading-7 md:leading-relaxed">
            얼음은 음료와 함께 직접 제공되는 만큼, 제빙기 내부 위생관리는 매장 신뢰와 직결됩니다. 겉으로 보이지 않는 내부 상태를 기준으로 점검·세척 기준을 확인해보세요.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column: Chart */}
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <i className="fas fa-microscope text-[#0069D9] text-xl md:text-2xl"></i>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight">시간 경과에 따른 세균 번식률</h2>
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
                 <div className="flex flex-col items-center justify-center mt-10 md:mt-12">
                     <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-[#FF7E00]"></div>
                        <span className="text-sm text-[#FF7E00] font-bold">세균 수치</span>
                     </div>
                     <p className="text-xs text-gray-500 mt-2 text-center leading-relaxed break-keep">
                        ※ 사용 환경(수질, 사용량, 내부 습도)에 따라 오염 누적 속도는 달라질 수 있습니다. 중요한 것은 ‘겉면’이 아니라 ‘내부 상태’입니다.
                     </p>
                 </div>
              </div>
            </div>

            {/* Right Column: Info & Checklist */}
            <div className="lg:w-1/2">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">식중독의 원인이 되는 얼음</h2>
              <p className="text-gray-600 leading-7 md:leading-relaxed mb-8 md:mb-8 text-[15px] md:text-base break-keep">
                식품의약품안전처 조사 결과, 위생 관리가 미흡한 제빙기 얼음에서 <span className="text-red-600 font-black">대장균과 리스테리아균</span>이 검출되는 사례가 빈번합니다. 이는 고객의 배탈, 식중독을 유발하여 매장의 이미지에 치명적인 타격을 줄 수 있습니다.
              </p>

              <div className="bg-[#EBF5FF] rounded-2xl p-6 md:p-8 border border-blue-100">
                <h3 className="text-[#0069D9] font-bold text-lg mb-4 md:mb-5 flex items-center gap-2 tracking-tight">
                  제빙기 오염 자가 진단 체크리스트
                </h3>
                <ul className="space-y-4 md:space-y-4 mb-6 md:mb-6">
                  {[
                    "얼음에서 불쾌한 냄새가 난다.",
                    "얼음이 탁하거나 투명도가 떨어진다.",
                    "얼음에 미세한 이물감이 느껴진다.",
                    "제빙기 내부 벽면에 물때/슬라임이 보인다.",
                    "최근 3개월 이상 내부 점검을 하지 않았다."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full border border-[#FF7E00] flex items-center justify-center shrink-0 mt-0.5 bg-white">
                        <i className="fas fa-exclamation text-[#FF7E00] text-xs font-bold"></i>
                      </div>
                      <span className="text-gray-700 text-[15px] md:text-base font-medium leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[#DC2626] text-[15px] md:text-base font-black border-t border-blue-200 pt-4 md:pt-4 tracking-tight leading-snug">
                  ※ 한 가지라도 해당된다면 내부 점검을 권장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bottom Section: Promise */}
      <section className="py-12 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-5 md:px-6 max-w-[1200px]">
          <div className="text-center mb-10 md:mb-16">
             <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-3 md:mb-2 tracking-tight">청결한 얼음은 고객과의 약속입니다</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 md:gap-5 items-start hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <i className="fas fa-check-circle text-green-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 tracking-tight">매장 위생 신뢰 유지</h3>
                <p className="text-gray-600 text-[15px] md:text-base leading-7 md:leading-relaxed break-keep">
                  업소용 제빙기 위생관리는 고객이 가장 먼저 체감하는 ‘얼음 품질’을 안정적으로 유지하는 데 도움이 됩니다. 정기적인 관리를 통해 식품위생법 기준을 충족하고, 불시 위생 점검에도 당당하게 대응할 수 있습니다.
                </p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 md:gap-5 items-start hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                 <i className="fas fa-history text-green-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 tracking-tight">기기 효율·수명 관리</h3>
                <p className="text-gray-600 text-[15px] md:text-base leading-7 md:leading-relaxed break-keep">
                  스케일과 오염이 누적되면 제빙 효율이 떨어질 수 있어, 주기적인 내부 관리가 기기 유지에 도움이 됩니다
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
