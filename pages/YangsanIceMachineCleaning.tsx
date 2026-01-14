import React from 'react';
import { Link } from 'react-router-dom';

const YangsanIceMachineCleaning: React.FC = () => {
  // ✅ SEO
  const seoTitle = '양산 제빙기 청소 | 업소용 제빙기 내부 위생 점검 - 이끌림잇츠케어';
  const seoDesc =
    '양산 제빙기 청소. 카페·소형 매장 중심으로 사용 빈도가 높아 정기적인 내부 점검이 중요합니다. 사용 기간에 따라 누적되는 내부 오염을 확인하고 위생 관리 기준에 맞춰 청소를 진행합니다.';

  React.useEffect(() => {
    document.title = seoTitle;
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = seoDesc;
  }, []);

  const content = {
    h1: '양산 제빙기 청소 | 업소용 제빙기 내부 위생 점검',
    summary: `양산 지역의 업소용 제빙기는
카페와 소형 매장을 중심으로 사용 빈도가 높습니다.
공간 특성상 관리가 미뤄지는 경우가 많아
정기적인 내부 점검이 중요합니다.`,
    core: `양산 제빙기 청소 현장에서는
“문제 생기기 전까지는 괜찮은 줄 알았다”는 경우가 많습니다.
하지만 제빙기 내부는 사용 기간에 따라
눈에 띄지 않게 오염이 누적됩니다.

이끌림잇츠케어는 양산 지역 업소 환경을 고려해
필요한 부분 위주로 내부 상태를 확인하고
위생 관리 기준에 맞춘 청소를 진행합니다.`,
    applies: '양산 지역 카페, 소형 업소, 기업체, 호텔, 관공서, 학교, S2B등록업체 등',
    closing: `양산 제빙기 청소는
문제가 생기기 전 관리하는 것이 가장 효과적입니다.`,
    caption: '양산 지역 업소용 제빙기 내부 점검 및 위생 관리 작업 모습',
    images: [
      '/images/yangsan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
      '/images/yangsan-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
      '/images/yangsan-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
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
            양산 지역 업소용 제빙기, 내부 위생 점검부터 기준 있게 관리합니다.
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
                aria-label="양산 제빙기 청소 견적 문의하기"
              >
                <i className="fas fa-calendar-check"></i>
                양산 제빙기 청소 견적 문의하기
              </Link>
              <p className="text-xs md:text-sm text-gray-500 mt-3 break-keep">
                운영 업종/제빙기 사용량/최근 점검 여부를 알려주시면 안내가 더 정확해집니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YangsanIceMachineCleaning;
