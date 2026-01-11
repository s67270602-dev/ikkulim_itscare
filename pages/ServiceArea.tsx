
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Region = 'ulsan' | 'busan' | 'yangsan' | 'gimhae';

const ServiceArea: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Region>('ulsan');

  const content = {
    ulsan: {
      title: "울산 제빙기 청소 | 업소용 제빙기 위생 관리",
      desc: `울산 지역 업소용 제빙기는 카페를 중심으로 맥주전문점, 기업체, 학교, 관공서, 헬스클럽 등 다양한 시설에서 사용되고 있습니다. 얼음은 음료와 함께 직접 제공되는 식품인 만큼, 제빙기 내부 위생 상태는 매장 신뢰와 직결됩니다.

      겉으로는 깨끗해 보여도 내부에는 물때와 스케일, 미세 오염물이 쌓이기 쉬워 정기적인 내부 점검과 위생 관리가 필요합니다.

      이끌림잇츠케어는 울산 지역 업소용 제빙기를 대상으로 내부 상태를 확인하고, 위생 기준에 맞춘 분해 점검과 세척·살균 중심의 위생 청소를 진행합니다.`,
      caption: "울산 지역 업소용 제빙기 분해 점검 및 내부 위생 세척 작업 모습",
      images: [
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=800"
      ]
    },
    busan: {
      title: "부산 제빙기 청소 | 업소용 제빙기 위생 점검",
      desc: `부산 지역 업소용 제빙기는 카페와 맥주전문점을 비롯해 기업체, 학교, 관공서 등 얼음을 사용하는 다양한 공간에서 운영되고 있습니다. 제빙기는 하루 중 가동 시간이 길고 물이 지속적으로 순환되는 구조이기 때문에, 외부 청소만으로는 위생 상태를 유지하기 어렵습니다.

      내부 관리가 이루어지지 않으면 얼음 냄새나 이물감으로 이어질 수 있어 주기적인 내부 점검이 중요합니다.

      이끌림잇츠케어는 부산 지역 업소용 제빙기의 내부 구조와 오염 상태를 확인한 뒤, 필요한 범위 내에서 세척과 살균 중심의 위생 관리 작업을 진행합니다.`,
      caption: "부산 지역 업소용 제빙기 내부 오염 구간 세척 및 살균 과정",
      images: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1605218427306-635ba2439af2?auto=format&fit=crop&q=80&w=800"
      ]
    },
    yangsan: {
      title: "양산 제빙기 청소 | 업소용 제빙기 위생 관리",
      desc: `양산 지역 업소용 제빙기는 카페를 중심으로 맥주전문점, 기업체, 학교, 관공서, 헬스클럽 등 다양한 업종에서 사용되고 있습니다. 제빙기는 장시간 가동되는 설비 특성상 내부에 물때와 스케일이 누적되기 쉬우며, 겉면 관리만으로는 위생 상태를 정확히 판단하기 어렵습니다.

      안정적인 얼음 품질 유지를 위해서는 내부 점검을 포함한 위생 관리가 필요합니다.

      이끌림잇츠케어는 양산 지역 업소용 제빙기를 대상으로 내부 상태를 기준으로 세척·살균 위주의 위생 청소를 진행합니다.`,
      caption: "양산 지역 업소용 제빙기 고압 세척 및 고온 스팀 소독 작업 모습",
      images: [
        "https://images.unsplash.com/photo-1551714502-0e427783935b?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1631557371533-8a9d10a90757?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800"
      ]
    },
    gimhae: {
      title: "김해 제빙기 청소 | 업소용 제빙기 위생 점검",
      desc: `김해 지역 업소용 제빙기는 카페, 맥주전문점, 기업체, 학교, 관공서 등 얼음을 사용하는 다양한 공간에서 운영되고 있습니다. 제빙기는 내부 구조상 물이 머무르는 구간이 많아 관리가 미흡할 경우 위생 문제가 발생할 수 있으며, 외관 상태만으로는 내부 위생 상태를 확인하기 어렵습니다.

      이러한 이유로 정기적인 내부 점검과 위생 관리가 중요합니다.

      이끌림잇츠케어는 김해 지역 업소용 제빙기의 내부 상태를 확인하고, 위생 기준에 맞춘 세척과 살균 중심의 관리 작업을 진행합니다.`,
      caption: "김해 지역 업소용 제빙기 내부 위생 관리 및 정상 작동 점검 모습",
      images: [
        "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800"
      ]
    }
  };

  const tabs: { id: Region; label: string }[] = [
    { id: 'ulsan', label: '울산 제빙기 청소' },
    { id: 'busan', label: '부산 제빙기 청소' },
    { id: 'yangsan', label: '양산 제빙기 청소' },
    { id: 'gimhae', label: '김해 제빙기 청소' },
  ];

  // Helper to split title safely
  const getTitleParts = (title: string) => {
    const parts = title.split(" | ");
    return {
      main: parts[0] || title,
      sub: parts[1] || ""
    };
  };

  const { main, sub } = getTitleParts(content[activeTab].title);

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-white">
      
      {/* 1. Header Section */}
      <section className="bg-[#111827] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
             <img src="/images/%EB%A9%94%EC%9D%B8.jpg" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-5 relative z-10">
           <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">서비스 지역</h1>
           <p className="text-gray-400 text-sm md:text-lg">부산·울산·양산·김해 전 지역, 전문가가 직접 찾아갑니다.</p>
        </div>
      </section>

      {/* 2. Tabs Navigation */}
      <section className="sticky top-[60px] md:top-[80px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-0 md:px-6 max-w-[1200px]">
          {/* Mobile: 2x2 Grid, Desktop: Single Row */}
          <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto md:scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  w-1/2 md:w-auto md:flex-1 py-4 md:py-5 px-1 md:px-4 
                  text-[13px] md:text-lg font-bold transition-all relative whitespace-nowrap
                  flex items-center justify-center
                  border-b border-gray-100 md:border-b-0
                  ${activeTab === tab.id 
                    ? 'text-[#0069D9] bg-blue-50/50' 
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}
                `}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-[#0069D9]"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Content Section */}
      <section className="py-10 md:py-24 animate-fade-in">
        <div className="container mx-auto px-5 md:px-6 max-w-[1000px]">
          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* Title & Description */}
            <div>
               {/* Mobile Optimized Title Header */}
               <div className="flex flex-col md:flex-row md:items-end gap-1 md:gap-3 mb-5 md:mb-8">
                 <div className="flex items-start gap-2.5">
                    <span className="text-[#0069D9] text-xl md:text-2xl mt-0.5 md:mt-0">🟦</span>
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight break-keep">
                        {main}
                    </h2>
                 </div>
                 {sub && (
                    <div className="pl-8 md:pl-0">
                        <span className="text-gray-500 font-bold text-lg md:text-2xl break-keep block md:inline mt-1 md:mt-0">
                            <span className="hidden md:inline text-gray-300 mx-3">|</span>
                            {sub}
                        </span>
                    </div>
                 )}
               </div>
               
               <div className="w-full h-px bg-gray-200 my-6 md:my-8"></div>
               
               {/* Readability Optimized Text */}
               <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 text-[16px] md:text-lg leading-[1.8] md:leading-8 whitespace-pre-line break-keep font-medium tracking-tight">
                        {content[activeTab].desc}
                    </p>
               </div>
            </div>

            {/* Images Grid */}
            <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                 {content[activeTab].images.map((img, idx) => (
                   <div key={idx} className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] group relative">
                      <img 
                        src={img} 
                        alt={`${content[activeTab].caption} ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                   </div>
                 ))}
               </div>
               <p className="text-center text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-2 mt-4">
                 <i className="fas fa-camera text-[#0069D9]"></i>
                 {content[activeTab].caption}
               </p>
            </div>

            {/* CTA */}
            <div className="mt-4 md:mt-8 text-center">
               <Link 
                 to="/contact" 
                 className="inline-flex items-center justify-center gap-2 bg-[#0069D9] hover:bg-[#005bb5] text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
               >
                 <i className="fas fa-calendar-check"></i>
                 {tabs.find(t => t.id === activeTab)?.label} 견적 문의하기
               </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceArea;
