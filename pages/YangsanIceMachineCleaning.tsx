import React from 'react';
import { Link } from 'react-router-dom';

const YangsanIceMachineCleaning: React.FC = () => {
  // ✅ 양산 전용 SEO
  const seoTitle = '양산 제빙기 청소 | 업소용 제빙기 위생 관리 전문 - 이끌림잇츠케어';
  const seoDesc =
    '양산 카페·베이커리·식당·호프집 등 업소용 제빙기 내부 위생 점검과 분해 세척이 필요합니다. 겉으로 보이지 않는 물때·스케일 누적 구간을 확인하고 세척·살균 중심으로 관리합니다.';

  React.useEffect(() => {
    document.title = seoTitle;
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = seoDesc;
  }, []);

  // ✅ 양산 전용 본문(중복 문장 피해서 새로 작성)
  const page = {
    title: '양산 제빙기 청소 | 업소용 제빙기 위생 관리 전문',
    lead: `양산 지역은 카페·베이커리·식당·호프집처럼 얼음을 꾸준히 사용하는 매장이 많습니다.
얼음은 음료와 함께 바로 제공되는 만큼, 업소용 제빙기 내부 위생 상태는 매장 신뢰와 연결됩니다.`,
    body: `양산제빙기청소 현장에서 자주 확인되는 건 “겉은 깔끔한데 내부는 확인을 못 했다”는 상황입니다.
제빙기는 물이 순환되고 습기가 남는 구조라서, 내부 라인·저수 구간·얼음 이동 구간에 물때와 스케일이 누적되기 쉽습니다.
겉면 청소만으로는 핵심 오염 구간을 확인하기 어렵기 때문에, 정기적인 내부 점검이 필요합니다.

이끌림잇츠케어는 양산 업소용 제빙기를 대상으로 기기 구조에 맞춘 분해 점검으로 내부 상태를 확인하고,
세척·살균 중심의 위생 관리 기준에 맞춰 작업을 진행합니다.`,
    needTitle: '이런 업소에서 필요합니다',
    need: `양산 지역 카페 · 베이커리 · 음식점 · 호프집 · 기업체 · 학교 · 관공서 등
얼음을 직접 제공하는 업소 전반에 적용 가능합니다.`,
    closing: `양산 제빙기 청소는 단순히 “깨끗해 보이게”가 아니라,
보이지 않는 내부 상태까지 점검해 위생 기준을 지키는 기본 관리입니다.`,
    caption: '양산 지역 업소용 제빙기 분해 점검 및 내부 위생 세척 작업 모습',
    images: [
      '/images/yangsan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
      '/images/yangsan-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
      '/images/yangsan-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
    ],
  };

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-white">
      {/* ✅ 상단 히어로 */}
      <section className="bg-[#111827] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/images/%EB%A9%94%EC%9D%B8.jpg" alt="Background" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="container mx-auto px-5 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">양산 제빙기 청소</h1>
          <p className="text-gray-300 text-sm md:text-lg">업소용 제빙기 내부 위생 점검 · 분해 세척 · 살균 관리</p>
        </div>
      </section>

      {/* ✅ 본문 */}
      <section className="py-10 md:py-24 animate-fade-in">
        <div className="container mx-auto px-5 md:px-6 max-w-[1000px]">
          <div className="flex flex-col gap-8 md:gap-12">
            {/* 타이틀 */}
            <div>
              <div className="flex items-start gap-2.5 mb-5 md:mb-8">
                <span className="text-[#0069D9] text-xl md:text-2xl mt-0.5 md:mt-0">🟦</span>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight break-keep">{page.title}</h2>
              </div>

              <div className="w-full h-px bg-gray-200 my-6 md:my-8"></div>

              {/* 서브 설명 */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-[16px] md:text-lg leading-[1.8] md:leading-8 whitespace-pre-line break-keep font-semibold tracking-tight">
                  {page.lead}
                </p>
              </div>

              {/* 본문 핵심 */}
              <div className="mt-6 prose prose-lg max-w-none">
                <p className="text-gray-700 text-[16px] md:text-lg leading-[1.8] md:leading-8 whitespace-pre-line break-keep font-medium tracking-tight">
                  {page.body}
                </p>
              </div>

              {/* 이런 업소 */}
              <div className="mt-8 bg-blue-50/60 border border-blue-100 rounded-2xl p-5 md:p-7">
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-3">{page.needTitle}</h3>
                <p className="text-gray-700 text-[15px] md:text-lg leading-relaxed whitespace-pre-line break-keep font-semibold">{page.need}</p>
              </div>

              {/* 마무리 */}
              <div className="mt-6">
                <p className="text-gray-900 text-[16px] md:text-lg leading-relaxed whitespace-pre-line break-keep font-black">{page.closing}</p>
              </div>
            </div>

            {/* 이미지 */}
            <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                {page.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] group relative">
                    <img
                      src={img}
                      alt={`${page.caption} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-2 mt-4">
                <i className="fas fa-camera text-[#0069D9]"></i>
                {page.caption}
              </p>
            </div>

            {/* 문의 버튼 */}
            <div className="mt-4 md:mt-8 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0069D9] hover:bg-[#005bb5] text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                aria-label="양산 제빙기 청소 견적 문의하기"
              >
                <i className="fas fa-calendar-check"></i>
                양산 제빙기 청소 견적 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YangsanIceMachineCleaning;
