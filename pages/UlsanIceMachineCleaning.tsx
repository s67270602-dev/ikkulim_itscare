import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ✅ 울산 전용 페이지
 * - 다른 지역 데이터/탭/activeTab 제거
 * - 울산 내용만 렌더링 (URL: /ulsan-ice-machine-cleaning 전용)
 * - 문서 제목 + description 메타를 JS에서 갱신(SEO 보조)
 *   ※ SPA라서 "완전한 SEO"는 SSR이 더 좋지만,
 *      구글/네이버가 수집할 때 내용/내부링크/문서제목/설명 신호를 최대한 강화하는 방식
 */

const UlsanIceMachineCleaning: React.FC = () => {
  // ✅ 울산 전용 콘텐츠(검색 최적화 문구 구조)
  const page = {
    seoTitle: '울산 제빙기 청소 | 업소용 제빙기 위생 관리 전문 | 이끌림잇츠케어',
    seoDesc:
      '울산 카페·맥주전문점·기업체·학교·관공서 업소용 제빙기 내부 위생 점검이 필요합니다. 겉으로 깨끗해 보여도 내부 물때·스케일이 쌓이기 쉬워 울산 제빙기 청소는 분해 점검과 세척·살균 중심 관리가 중요합니다.',
    h1: '울산 제빙기 청소 | 업소용 제빙기 위생 관리 전문',
    lead: `울산 지역에서 운영 중인 카페·맥주전문점·기업체·학교·관공서 등에서
업소용 제빙기는 매일 반복 가동됩니다. 얼음은 음료와 함께 직접 제공되는 만큼
제빙기 내부 상태는 매장 위생과 신뢰에 바로 연결됩니다.`,
    body: `울산 제빙기 청소 현장을 다니다 보면
“겉은 닦아왔는데 안쪽은 열어본 적이 없다”는 이야기를 자주 듣습니다.
제빙기는 구조상 내부 습기가 많아 오염이 빠르게 진행되며,
외부 청소만으로는 위생 상태를 판단하기 어렵습니다.

겉으로는 깨끗해 보여도 내부에는 물때와 스케일이 쉽게 쌓이기 때문에
정기적인 점검과 위생 관리가 필요합니다.

이끌림잇츠케어는 울산 지역 업소용 제빙기를 대상으로
분해 점검을 통해 내부 상태를 확인하고
위생 기준에 맞춘 세척·살균 중심의 관리 작업을 진행합니다.`,
    need: `울산 지역 카페, 맥주전문점, 기업체, 학교, 관공서 등
얼음을 직접 제공하는 모든 업소에 적용 가능합니다.`,
    closing: `울산 제빙기 청소는 단순 세척이 아니라
매장의 신뢰를 지키는 기본 관리입니다.`,
    caption: '울산 지역 업소용 제빙기 분해 점검 및 내부 위생 세척 작업 모습',
    images: [
      '/images/ulsan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
      '/images/ulsan-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
      '/images/ulsan-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
    ],
    blogLinks: [
      { title: '울산제빙기청소 안 하면 생기는 문제 5가지｜울산 카페 현장 기준 정리', url: 'https://blog.naver.com/itscare77/224143860043' },
      { title: '울산제빙기청소 후기｜울산 무거동 카페 제빙기 청소 현장 기록', url: 'https://blog.naver.com/itscare77/224141966289' },
      { title: '울산제빙기청소 필요했던 간절곶 카페｜제빙기 내부 위생관리 체크 포인트', url: 'https://blog.naver.com/itscare77/224142041961' },
    ],
    // ✅ SEO 안전형 내부 연결 문장(블로그↔홈페이지 신호 강화)
    blogToPageSentence: `울산 지역 업소용 제빙기 위생 관리 기준은
울산 제빙기 청소 안내 페이지에서 정리되어 있습니다.`,
  } as const;

  // ✅ title/description 갱신(SEO 보조)
  React.useEffect(() => {
    document.title = page.seoTitle;
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = page.seoDesc;
  }, []);

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#111827] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/%EB%A9%94%EC%9D%B8.jpg"
            alt="울산 업소용 제빙기 위생 관리 배경 이미지"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-5 relative z-10">
          {/* ✅ H1: 페이지 핵심 키워드 */}
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight break-keep">{page.h1}</h1>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            울산 지역 카페·업소용 제빙기 내부 위생 점검과 세척·살균 중심 관리 기준을 정리했습니다.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-20 animate-fade-in">
        <div className="container mx-auto px-5 md:px-6 max-w-[1000px]">
          <div className="flex flex-col gap-8 md:gap-12">
            {/* ✅ 상단 요약 + 본문 */}
            <div>
              <div className="flex items-start gap-2.5 mb-5 md:mb-8">
                <span className="text-[#0069D9] text-xl md:text-2xl mt-0.5">🟦</span>
                {/* H2는 보조 헤딩 */}
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight break-keep">
                  울산 업소용 제빙기 위생 관리 안내
                </h2>
              </div>

              <div className="w-full h-px bg-gray-200 my-6 md:my-8"></div>

              {/* 1) 상단 요약 문구 */}
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-[16px] md:text-lg leading-[1.85] whitespace-pre-line break-keep font-medium tracking-tight">
                  {page.lead}
                </p>
              </div>

              {/* 2) 본문 핵심 */}
              <div className="mt-6 prose prose-lg max-w-none">
                <p className="text-gray-700 text-[16px] md:text-lg leading-[1.85] whitespace-pre-line break-keep font-medium tracking-tight">
                  {page.body}
                </p>
              </div>

              {/* 3) 적용 업소 */}
              <div className="mt-8 bg-blue-50/60 border border-blue-100 rounded-2xl p-5 md:p-7">
                <h3 className="text-lg md:text-xl font-black text-gray-900 mb-3">이런 업소에서 필요합니다</h3>
                <p className="text-gray-700 text-[15px] md:text-lg leading-relaxed whitespace-pre-line break-keep font-semibold">
                  {page.need}
                </p>
              </div>

              {/* 4) 마무리 */}
              <div className="mt-6">
                <p className="text-gray-900 text-[16px] md:text-lg leading-relaxed whitespace-pre-line break-keep font-black">
                  {page.closing}
                </p>
              </div>
            </div>

            {/* ✅ 이미지 섹션 */}
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

            {/* ✅ 울산 블로그 연결 섹션 */}
            <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-4">울산 제빙기 위생 관리 현장 기록</h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">
                실제 울산 지역 카페·업소에서 진행한 제빙기 내부 점검 및 위생 관리 과정을 네이버 블로그에 기록하고 있습니다.
              </p>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed whitespace-pre-line break-keep font-semibold bg-gray-50 border border-gray-100 rounded-xl p-4 mb-5">
                {page.blogToPageSentence}
              </p>

              <ul className="space-y-3 text-base md:text-lg font-semibold">
                {page.blogLinks.map((item, idx) => (
                  <li key={idx}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-[#0069D9] hover:underline break-keep">
                      ▶ {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            {/* ✅ 문의 버튼 */}
            <div className="mt-2 md:mt-4 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0069D9] hover:bg-[#005bb5] text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                aria-label="울산 제빙기 청소 문의하기"
              >
                <i className="fas fa-calendar-check"></i>
                울산 제빙기 청소 문의하기
              </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default UlsanIceMachineCleaning;
