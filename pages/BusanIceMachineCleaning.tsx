import React from 'react';
import { Link } from 'react-router-dom';

const BusanIceMachineCleaning: React.FC = () => {
  // ✅ SEO (구글 검색 최적화)
  const seoTitle = '부산 제빙기 청소 | 카페·업소용 제빙기 위생 관리 - 이끌림잇츠케어';
  const seoDesc =
    '부산 제빙기 청소. 카페·상업시설 밀집 지역 특성상 업소용 제빙기 사용량이 많아 내부 위생 점검이 중요합니다. 분해 점검 기반으로 물때·스케일 누적 구간을 확인하고 위생 중심 관리로 진행합니다.';

  React.useEffect(() => {
    document.title = seoTitle;
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = seoDesc;
  }, []);

  const content = {
    h1: '부산 제빙기 청소 | 카페·업소용 제빙기 위생 관리',
    summary: `부산 지역은 카페·상업시설이 밀집돼 있어
업소용 제빙기 사용 빈도가 높은 지역입니다.
사용량이 많은 만큼 내부 관리 여부가
얼음 위생과 매장 이미지에 직접적인 영향을 줍니다.`,
    core: `부산 제빙기 청소 현장에서는
외관은 깔끔하지만 내부에는 물때와 스케일이
쌓여 있는 경우를 자주 확인합니다.
특히 장기간 내부 점검이 이루어지지 않은 경우
위생 상태를 육안으로 판단하기 어렵습니다.

이끌림잇츠케어는 부산 지역 업소용 제빙기를 기준으로
내부 구조에 맞춘 분해 점검과
위생 중심 관리 작업을 진행하고 있습니다.`,
    applies: '부산 지역 카페, 맥주전문점, 호텔, 기업체, 관공서, 학교, S2B 등록업체',
    closing: `부산 제빙기 청소는
눈에 보이지 않는 내부 상태부터 관리하는 것이 중요합니다.`,
    caption: '부산 지역 업소용 제빙기 내부 위생 점검 및 분해 세척 과정',
    images: [
      '/images/busan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
      '/images/busan-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
      '/images/busan-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
    ],
  } as const;

  // ✅ 부산 네이버 블로그 링크 (울산처럼 “현장 기록” 섹션에 표시)
  const blogLinks = [
    { title: '부산 부산진구 카페 제빙기청소 현장 후기', url: 'https://blog.naver.com/itscare88/224145284596' },
    { title: '부산 카페 제빙기청소, 미루면 안 되는 이유｜카페 현장에서 본 현실', url: 'https://blog.naver.com/itscare88/224143730051' },
    { title: '부산제빙기청소 현장 기록｜해운대 달맞이길 카페 업소용 제빙기 분해 세척', url: 'https://blog.naver.com/itscare88/224143662647' },
  ];

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
            부산 지역 업소용 제빙기, 내부 위생 점검부터 깔끔하게 관리합니다.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-5 md:px-6 max-w-[980px]">
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Summary Card */}
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

            {/* ✅ 부산 블로그 섹션 (울산과 동일 구조) */}
            <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 break-keep">부산 제빙기 위생 관리 현장 기록</h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
                실제 부산 지역 카페·업소에서 진행한 제빙기 내부 점검 및 위생 관리 과정을 네이버 블로그에 기록하고 있습니다.
              </p>

              {/* 안내 박스 */}
              <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-5">
                <p className="text-gray-800 font-bold text-sm md:text-base leading-relaxed break-keep whitespace-pre-line">
                  부산 지역 업소용 제빙기 위생 관리 기준은
                  {'\n'}부산 제빙기 청소 안내 페이지에서 정리되어 있습니다.
                </p>
              </div>

              {/* 링크 목록 */}
              <ul className="mt-5 space-y-3 text-base md:text-lg font-semibold">
                {blogLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#0069D9] hover:underline break-keep">
                      ▶ {item.title}
                    </a>
                  </li>
                ))}
              </ul>

              {/* 블로그 홈 링크 */}
              <div className="mt-6 pt-5 border-t">
                <a
                  href="https://blog.naver.com/itscare88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0069D9] font-bold hover:underline"
                >
                  ▶ 부산 제빙기 청소 현장 후기 모음 (네이버 블로그)
                  <i className="fas fa-arrow-up-right-from-square text-sm"></i>
                </a>
              </div>
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
                aria-label="부산 제빙기 청소 견적 문의하기"
              >
                <i className="fas fa-calendar-check"></i>
                부산 제빙기 청소 견적 문의하기
              </Link>
              <p className="text-xs md:text-sm text-gray-500 mt-3 break-keep">
                문의 전, 제빙기 모델/설치 환경/최근 관리 여부를 함께 알려주시면 안내가 더 정확해집니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusanIceMachineCleaning;
