import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type Region = 'ulsan' | 'busan' | 'yangsan' | 'gimhae';

const UlsanIceMachineCleaning: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Region>('ulsan');

  const content = {
    ulsan: {
      title: '울산 제빙기 청소 | 업소용 제빙기 위생 관리',
      desc: `울산 지역 업소용 제빙기는 카페를 중심으로 맥주전문점, 기업체, 학교, 관공서, 헬스클럽 등 다양한 시설에서 사용되고 있습니다. 얼음은 음료와 함께 직접 제공되는 식품인 만큼, 제빙기 내부 위생 상태는 매장 신뢰와 직결됩니다.

겉으로는 깨끗해 보여도 내부에는 물때와 스케일, 미세 오염물이 쌓이기 쉬워 정기적인 내부 점검과 위생 관리가 필요합니다.

이끌림잇츠케어는 울산 지역 업소용 제빙기를 대상으로 내부 상태를 확인하고, 위생 기준에 맞춘 분해 점검과 세척·살균 중심의 위생 청소를 진행합니다.`,
      caption: '울산 지역 업소용 제빙기 분해 점검 및 내부 위생 세척 작업 모습',
      images: [
        '/images/ulsan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
        '/images/ulsan-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
        '/images/ulsan-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
      ],
    },
    busan: {
      title: '부산 제빙기 청소 | 업소용 제빙기 위생 점검',
      desc: `부산 지역 업소용 제빙기는 카페와 맥주전문점을 비롯해 기업체, 학교, 관공서 등 얼음을 사용하는 다양한 공간에서 운영되고 있습니다. 제빙기는 하루 중 가동 시간이 길고 물이 지속적으로 순환되는 구조이기 때문에, 외부 청소만으로는 위생 상태를 유지하기 어렵습니다.

내부 관리가 이루어지지 않으면 얼음 냄새나 이물감으로 이어질 수 있어 주기적인 내부 점검이 중요합니다.

이끌림잇츠케어는 부산 지역 업소용 제빙기의 내부 구조와 오염 상태를 확인한 뒤, 필요한 범위 내에서 세척과 살균 중심의 위생 관리 작업을 진행합니다.`,
      caption: '부산 지역 업소용 제빙기 내부 오염 구간 세척 및 살균 과정',
      images: [
        '/images/busan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
        '/images/busan-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
        '/images/busan-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
      ],
    },
    yangsan: {
      title: '양산 제빙기 청소 | 업소용 제빙기 위생 관리',
      desc: `양산 지역 업소용 제빙기는 카페를 중심으로 맥주전문점, 기업체, 학교, 관공서, 헬스클럽 등 다양한 업종에서 사용되고 있습니다. 제빙기는 장시간 가동되는 설비 특성상 내부에 물때와 스케일이 누적되기 쉬우며, 겉면 관리만으로는 위생 상태를 정확히 판단하기 어렵습니다.

안정적인 얼음 품질 유지를 위해서는 내부 점검을 포함한 위생 관리가 필요합니다.

이끌림잇츠케어는 양산 지역 업소용 제빙기를 대상으로 내부 상태를 기준으로 세척·살균 위주의 위생 청소를 진행합니다.`,
      caption: '양산 지역 업소용 제빙기 고압 세척 및 고온 스팀 소독 작업 모습',
      images: [
        '/images/yangsan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
        '/images/yangsan-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
        '/images/yangsan-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
      ],
    },
    gimhae: {
      title: '김해 제빙기 청소 | 업소용 제빙기 위생 점검',
      desc: `김해 지역 업소용 제빙기는 카페, 맥주전문점, 기업체, 학교, 관공서 등 얼음을 사용하는 다양한 공간에서 운영되고 있습니다. 제빙기는 내부 구조상 물이 머무르는 구간이 많아 관리가 미흡할 경우 위생 문제가 발생할 수 있으며, 외관 상태만으로는 내부 위생 상태를 확인하기 어렵습니다.

이러한 이유로 정기적인 내부 점검과 위생 관리가 중요합니다.

이끌림잇츠케어는 김해 지역 업소용 제빙기의 내부 상태를 확인하고, 위생 기준에 맞춘 세척과 살균 중심의 관리 작업을 진행합니다.`,
      caption: '김해 지역 업소용 제빙기 내부 위생 관리 및 정상 작동 점검 모습',
      images: [
        '/images/gimhae-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
        '/images/gimhae-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
        '/images/gimhae-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
      ],
    },
  } as const;

  const tabs: { id: Region; label: string }[] = [
    { id: 'ulsan', label: '울산 제빙기 청소' },
    { id: 'busan', label: '부산 제빙기 청소' },
    { id: 'yangsan', label: '양산 제빙기 청소' },
    { id: 'gimhae', label: '김해 제빙기 청소' },
  ];

  const getTitleParts = (title: string) => {
    const parts = title.split(' | ');
    return { main: parts[0] || title, sub: parts[1] || '' };
  };

  const { main, sub } = getTitleParts(content[activeTab].title);

  const blogLinks: Record<Region, { title: string; url: string }[]> = {
    ulsan: [
      { title: '울산제빙기청소 안 하면 생기는 문제 5가지｜울산 카페 현장 기준 정리', url: 'https://blog.naver.com/itscare77/224143860043' },
      { title: '울산제빙기청소 후기｜울산 무거동 카페 제빙기 청소 현장 기록', url: 'https://blog.naver.com/itscare77/224141966289' },
      { title: '울산제빙기청소 필요했던 간절곶 카페｜제빙기 내부 위생관리 체크 포인트', url: 'https://blog.naver.com/itscare77/224142041961' },
    ],
    busan: [
      { title: '부산 부산진구 카페 제빙기청소 현장 후기', url: 'https://blog.naver.com/itscare88/224145284596' },
      { title: '부산 카페 제빙기청소, 미루면 안 되는 이유｜카페 현장에서 본 현실', url: 'https://blog.naver.com/itscare88/224143730051' },
      { title: '부산제빙기청소 현장 기록｜해운대 달맞이길 카페 업소용 제빙기 분해 세척', url: 'https://blog.naver.com/itscare88/224143662647' },
    ],
    yangsan: [],
    gimhae: [],
  };

  const regionName = useMemo(() => (activeTab === 'ulsan' ? '울산' : activeTab === 'busan' ? '부산' : activeTab === 'yangsan' ? '양산' : '김해'), [activeTab]);

  React.useEffect(() => {
    document.title = `${regionName} 제빙기 청소 | 이끌림잇츠케어`;
  }, [regionName]);

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-white">
      <section className="bg-[#111827] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/%EB%A9%94%EC%9D%B8.jpg" alt="Background" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-5 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">서비스 지역</h1>
          <p className="text-gray-400 text-sm md:text-lg">부산·울산·양산·김해 전 지역, 전문가가 직접 찾아갑니다.</p>
        </div>
      </section>

      <section className="sticky top-[60px] md:top-[80px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-0 md:px-6 max-w-[1200px]">
          <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto md:scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo(0, 0);
                }}
                className={`
                  w-1/2 md:w-auto md:flex-1 py-4 md:py-5 px-1 md:px-4 
                  text-[13px] md:text-lg font-bold transition-all relative whitespace-nowrap
                  flex items-center justify-center
                  border-b border-gray-100 md:border-b-0
                  ${activeTab === tab.id ? 'text-[#0069D9] bg-blue-50/50' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}
                `}
                aria-label={`${tab.label} 탭`}
              >
                {tab.label}
                {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-0.5 md:h-1 bg-[#0069D9]"></div>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 animate-fade-in">
        <div className="container mx-auto px-5 md:px-6 max-w-[1000px]">
          <div className="flex flex-col gap-8 md:gap-12">
            <div>
              <div className="flex flex-col md:flex-row md:items-end gap-1 md:gap-3 mb-5 md:mb-8">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#0069D9] text-xl md:text-2xl mt-0.5 md:mt-0">🟦</span>
                  <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight break-keep">{main}</h2>
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

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-[16px] md:text-lg leading-[1.8] md:leading-8 whitespace-pre-line break-keep font-medium tracking-tight">
                  {content[activeTab].desc}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                {content[activeTab].images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] group relative">
                    <img
                      src={img}
                      alt={`${content[activeTab].caption} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
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

            {blogLinks[activeTab] && blogLinks[activeTab].length > 0 && (
              <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4">{regionName} 제빙기 위생 관리 현장 기록</h3>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-5">
                  실제 {regionName} 지역 카페·업소에서 진행한 제빙기 내부 점검 및 위생 관리 과정을 네이버 블로그에 기록하고 있습니다.
                </p>

                <ul className="space-y-3 text-base md:text-lg font-semibold">
                  {blogLinks[activeTab].map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#0069D9] hover:underline break-keep">
                        ▶ {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="mt-4 md:mt-8 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0069D9] hover:bg-[#005bb5] text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                aria-label="견적 문의하기"
              >
                <i className="fas fa-calendar-check"></i>
                {tabs.find((t) => t.id === activeTab)?.label} 견적 문의하기
              </Link>
            </div>

            <section className="mt-6 border-t pt-8">
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4">지역별 제빙기 청소 현장 후기 모음</h3>

              <ul className="space-y-3 text-[#0069D9] font-semibold text-base md:text-lg">
                <li>
                  <a href="https://blog.naver.com/itscare77" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    ▶ 울산 제빙기 청소 현장 후기 모음 (네이버 블로그)
                  </a>
                </li>
                <li>
                  <a href="https://blog.naver.com/itscare88" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    ▶ 부산·양산·김해 제빙기 청소 현장 후기 모음 (네이버 블로그)
                  </a>
                </li>
              </ul>

              <p className="text-sm text-gray-500 mt-4">홈페이지와 블로그의 연결 신호를 강화해 검색 노출에 도움이 되도록 구성했습니다.</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UlsanIceMachineCleaning;
