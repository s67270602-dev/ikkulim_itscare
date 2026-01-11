
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QA: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // 첫 번째 항목 열어두기

  const faqs = [
    {
      category: '관리 주기',
      question: "제빙기 청소 주기는 어떻게 되나요?",
      answer: "일반적으로 위생 관리를 위해 3개월 주기의 정기 세척을 권장합니다. 특히 여름철이나 카페처럼 사용량이 많은 매장은 1~2개월 주기로 관리해야 물때와 곰팡이 발생을 막고 투명한 얼음을 유지할 수 있습니다."
    },
    {
      category: '위생 문제',
      question: "얼음에서 냄새가 나거나 검은 이물질이 보여요.",
      answer: "얼음에서 냄새가 나는 것은 내부 물탱크에 곰팡이나 물때(슬라임)가 번식했기 때문입니다. 검은 이물질은 곰팡이 덩어리이거나 부품 부식으로 인한 가루일 수 있습니다. 건강에 해로울 수 있으므로 즉시 사용을 중단하고 전문 분해 세척을 받으셔야 합니다."
    },
    {
      category: '작업 관련',
      question: "영업 중에도 청소가 가능한가요?",
      answer: "네, 가능합니다. 다만 고압 세척기 사용으로 인한 소음이 발생할 수 있고, 세척 작업 중에는 제빙기 주변 공간이 필요하므로 손님이 비교적 적은 시간대나 오픈 전/마감 후 시간을 추천드립니다."
    },
    {
      category: '소요 시간',
      question: "작업 시간은 얼마나 걸리나요?",
      answer: "제빙기 1대 기준, 완전 분해 세척 및 스팀 살균까지 약 1시간 30분에서 2시간 정도 소요됩니다. 오염도가 심하거나 대형 기종(200kg 이상)의 경우 시간이 조금 더 추가될 수 있습니다."
    },
    {
      category: '취급 기종',
      question: "어떤 브랜드의 제빙기가 청소 가능한가요?",
      answer: "호시자키, 카이저, 라셀르, 네오트, 브레마, 매니토웍 등 국내외 전 기종 청소 가능합니다. 수냉식/공냉식 상관없이 전문가가 현장에 맞는 최적의 방법으로 케어해 드립니다."
    }
  ];

  return (
    <div className="pt-[60px] md:pt-[80px] min-h-screen bg-white font-pretendard">
      <section className="py-10 md:py-24">
        <div className="container mx-auto px-5 max-w-[800px]">
          
          {/* Header Title */}
          <div className="text-center mb-8 md:mb-16">
            <span className="text-[#0069D9] font-black text-xs md:text-sm mb-2 md:mb-3 block uppercase tracking-widest">FAQ</span>
            <h1 className="text-2xl md:text-5xl font-black text-gray-900 mb-3 md:mb-4 tracking-tight">자주 묻는 질문</h1>
            <p className="text-gray-500 text-xs md:text-lg italic break-keep font-medium leading-relaxed">
              궁금하신 점들을 모아 정리했습니다. 더 상세한 상담은 1577-7672로 전화주세요.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-xl md:rounded-2xl border transition-all duration-300 overflow-hidden ${
                  activeIndex === idx 
                    ? 'border-[#0069D9] shadow-lg ring-1 ring-[#0069D9]/20' 
                    : 'border-gray-100 shadow-sm hover:border-gray-300'
                }`}
              >
                <button 
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full text-left p-5 md:p-8 flex justify-between items-start md:items-center gap-3 md:gap-4 bg-white"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-1">
                    <span className={`px-2 py-1 md:px-2.5 rounded text-[10px] md:text-xs font-black uppercase tracking-wide shrink-0 self-start md:self-auto w-fit ${
                      activeIndex === idx 
                        ? 'bg-[#0069D9] text-white' 
                        : 'bg-blue-50 text-[#0069D9]'
                    }`}>
                      {faq.category}
                    </span>
                    <span className={`font-bold text-[17px] md:text-xl break-keep transition-colors leading-tight ${
                      activeIndex === idx ? 'text-[#0069D9]' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    activeIndex === idx ? 'bg-[#0069D9] rotate-180' : 'bg-gray-100'
                  }`}>
                    <i className={`fas fa-chevron-down text-xs md:text-sm ${
                      activeIndex === idx ? 'text-white' : 'text-gray-400'
                    }`}></i>
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-8 pb-6 md:pb-8 text-gray-600 text-[13px] md:text-base leading-relaxed md:leading-8 break-keep">
                     {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA (Dark Box) */}
          <div className="mt-12 md:mt-20 bg-[#111827] rounded-2xl md:rounded-[2rem] p-6 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
             {/* Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#0069D9] opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF7E00] opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>

             <div className="relative z-10">
                <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-4 tracking-tight">더 궁금한 점이 있으신가요?</h3>
                <p className="text-gray-400 text-xs md:text-base mb-8 md:mb-10 break-keep font-medium leading-relaxed">
                  부산·울산·양산·김해 제빙기 청소 전문가가<br className="md:hidden"/> 직접 친절하게 상담해 드립니다.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                    <a href="tel:1577-7672" className="bg-[#0069D9] hover:bg-[#005bb5] text-white px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-black shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm md:text-base">
                       <i className="fas fa-phone-alt"></i> 1577-7672
                    </a>
                    <Link to="/contact" className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3.5 md:px-8 md:py-4 rounded-xl font-black shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-sm md:text-base">
                       <i className="fas fa-paper-plane text-[#0069D9]"></i> 견적 문의하기
                    </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QA;
