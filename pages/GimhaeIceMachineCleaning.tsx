import React from 'react';
import { Link } from 'react-router-dom';

const GimhaeIceMachineCleaning: React.FC = () => {
  // ✅ SEO
  const seoTitle = '김해 제빙기 청소 | 업소용 제빙기 위생 관리 - 이끌림잇츠케어';
  const seoDesc =
    '김해 제빙기 청소. 카페·다양 업종이 운영되는 지역 특성상 얼음 위생 관리 중요성이 커지고 있습니다. 분해 점검으로 내부 오염을 확인하고 위생 기준에 맞춘 관리 중심 청소를 진행합니다.';

  React.useEffect(() => {
    document.title = seoTitle;
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = seoDesc;
  }, []);

  const content = {
    h1: '김해 제빙기 청소 | 업소용 제빙기 위생 관리',
    summary: `김해 지역은 카페와 다양한 업종이 함께 운영되는 지역으로
업소용 제빙기 위생 관리의 중요성이 점점 커지고 있습니다.
얼음은 직접 제공되는 식품인 만큼
내부 상태 점검이 필수입니다.`,
    core: `김해 제빙기 청소 현장에서는
외부 관리만으로는 알 수 없는 내부 오염을
분해 점검 과정에서 확인하는 경우가 많습니다.
특히 물이 반복적으로 순환되는 구조상
정기적인 관리가 필요합니다.

이끌림잇츠케어는 김해 지역 업소용 제빙기를 대상으로
위생 기준에 맞춘 점검과 관리 중심 청소를 진행합니다.`,
    applies: '김해 지역 카페, 맥주전문점, 기업체, 호텔, 관공서, 학교, S2B등록업체',
    closing: `김해 제빙기 청소는
매장 위생과 고객 신뢰를 동시에 지키는 관리입니다.`,
    caption: '김해 지역 업소용 제빙기 내부 위생 점검 및 관리 중심 세척',
    images: [
      '/images/gimhae-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
      '/images/gimhae-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
      '/images/gimhae-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
    ],
  } as const;

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#111827] py-14 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/%EB%A9%94%EC%9D%B8.jpg" alt="Background" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-5 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight break-keep">{content.h1}</h1>
          <p className="text-gray-300 text-sm md:text-lg mt-4 leading-relaxed break-keep">
            김해 업소용 제빙기, 내부 위생 점검을 기준으로 관리합니다.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-5 md:px-6 max-w-[980px]">
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Summary */}
            <section className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 md:p-7">
              <div className="flex items-start gap-2.5 mb-3">
                <span className="text-[#0069D9] text-xl md:text-2xl">🟦</span>
                <h2 className="text-lg md:text-2xl font-black text-gray-900 break-keep">상단 요약</h2>
              </div>
              <p className="text-gray-700 text-[15px] md:text-lg leading-7 whitespace-pre-line font-medium break-keep">
                {content.summary}
              </p>
            </section>

            {/* Core */}
            <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7">
              <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-3 break-keep">본문 핵심</h3>
              <p className="text-gray-700 text-[15px] md:text-lg leading-7 whitespace-pre-line font-medium break-keep">
                {content.core}
              </p>
            </section>

            {/* Applies */}
            <section className="bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-7">
              <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-3 break-keep">적용 업소 예시</h3>
              <div className="flex flex-wrap gap-2">
                {content.applies.split(',').map((t, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-2 rounded-full bg-white border border-gray-200 text-gray-700 text-sm md:text-base font-semibold"
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>
            </section>

            {/* Closing */}
            <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7">
              <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-3 break-keep">마무리</h3>
              <p className="text-gray-700 text-[15px] md:text-lg leading-7 whitespace-pre-line font-medium break-keep">
                {content.closing}
              </p>
            </section>

            {/* Images */}
            <section className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                {content.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] group relative">
                    <img
                      src={img}
                      alt={`${content.caption} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-2 mt-4">
                <i className="fas fa-camera text-[#0069D9]"></i>
                {content.caption}
              </p>
            </section>

            {/* CTA */}
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0069D9] hover:bg-[#005bb5] text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                aria-label="김해 제빙기 청소 견적 문의하기"
              >
                <i className="fas fa-calendar-check"></i>
                김해 제빙기 청소 견적 문의하기
              </Link>
              <p className="text-xs md:text-sm text-gray-500 mt-3 break-keep">
                얼음 냄새/이물감이 느껴졌다면 내부 상태 점검부터 권장드립니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GimhaeIceMachineCleaning;
