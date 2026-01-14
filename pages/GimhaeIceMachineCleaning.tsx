import React from 'react';
import { Link } from 'react-router-dom';

const GimhaeIceMachineCleaning: React.FC = () => {
  // ✅ 김해 전용 SEO (구글 검색 최적화)
  const seoTitle = '김해 제빙기 청소 | 업소용 제빙기 위생 관리 전문 - 이끌림잇츠케어';
  const seoDesc =
    '김해 카페·식당·호프집·기업체 등 업소용 제빙기 내부 위생 점검과 분해 세척이 필요합니다. 물때·스케일 누적 구간을 확인하고 세척·살균 중심으로 위생 관리 기준에 맞춰 진행합니다.';

  React.useEffect(() => {
    document.title = seoTitle;
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = seoDesc;
  }, []);

  // ✅ 김해 전용 콘텐츠(다른 지역 0%)
  const content = {
    title: '김해 제빙기 청소 | 업소용 제빙기 위생 점검·관리',
    desc: `김해 지역은 카페·식당·호프집뿐 아니라 기업체, 학교, 관공서 등 다양한 업종에서 업소용 제빙기 사용이 많습니다.
얼음은 음료와 함께 바로 제공되는 만큼, 제빙기 내부 위생 상태는 매장 신뢰와 고객 안전에 직접 영향을 줍니다.

김해제빙기청소 현장에서 자주 보는 문제는 “외관은 깔끔한데 내부는 확인이 어려운 상태”입니다.
제빙기는 물이 순환하고 습기가 남는 구조라 내부 라인·저수 구간·얼음 이동 구간에 물때와 스케일이 누적되기 쉽습니다.
겉면 청소만으로는 핵심 오염 구간을 확인하기 어렵기 때문에, 정기적인 내부 점검과 위생 관리가 중요합니다.

이끌림잇츠케어는 김해 지역 업소용 제빙기를 대상으로 내부 구조와 오염 상태를 기준으로 분해 점검을 진행하고,
세척·살균 중심의 위생 관리 기준에 맞춰 작업을 진행합니다.`,
    caption: '김해 지역 업소용 제빙기 내부 위생 점검 및 세척·살균 관리 작업 모습',
    images: [
      '/images/gimhae-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
      '/images/gimhae-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
      '/images/gimhae-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
    ],
  } as const;

  // ✅ 기존 title split 로직 유지
  const getTitleParts = (title: string) => {
    const parts = title.split(' | ');
    return { main: parts[0] || title, sub: parts[1] || '' };
  };

  const { main, sub } = getTitleParts(content.title);

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-white">
      <section className="bg-[#111827] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/%EB%A9%94%EC%9D%B8.jpg" alt="Background" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-5 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">서비스 지역</h1>
          <p className="text-gray-400 text-sm md:text-lg">김해 지역, 전문가가 직접 찾아갑니다.</p>
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
                  {content.desc}
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                {content.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] group relative">
                    <img
                      src={img}
                      alt={`${content.caption} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-2 mt-4">
                <i className="fas fa-camera text-[#0069D9]"></i>
                {content.caption}
              </p>
            </div>

            <div className="mt-4 md:mt-8 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0069D9] hover:bg-[#005bb5] text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                aria-label="김해 제빙기 청소 견적 문의하기"
              >
                <i className="fas fa-calendar-check"></i>
                김해 제빙기 청소 견적 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GimhaeIceMachineCleaning;
