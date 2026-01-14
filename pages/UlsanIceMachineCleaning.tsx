import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ✅ 울산 전용 페이지 (부산 페이지 디자인 스타일로 통일)
 * - 카드형 섹션(상단요약/본문핵심/적용업소/마무리/블로그/이미지/CTA)
 * - 모바일 가독성 강화(짧은 문장, 간격, 카드 구조)
 * - document.title + meta description 갱신(SEO 보조)
 */

const UlsanIceMachineCleaning: React.FC = () => {
  // ✅ SEO (구글 검색 최적화)
  const seoTitle = '울산 제빙기 청소 | 카페·업소용 제빙기 위생 관리 - 이끌림잇츠케어';
  const seoDesc =
    '울산 제빙기 청소. 카페·맥주전문점·기업체·학교·관공서 업소용 제빙기 내부 위생 점검이 필요합니다. 외관은 깨끗해 보여도 내부 물때·스케일이 누적되기 쉬워 분해 점검과 세척·살균 중심 관리가 중요합니다.';

  React.useEffect(() => {
    document.title = seoTitle;
    const meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (meta) meta.content = seoDesc;
  }, []);

  // ✅ 울산 전용 콘텐츠(부산 카드형 구성에 맞춤)
  const page = {
    h1: '울산 제빙기 청소 | 카페·업소용 제빙기 위생 관리',
    summary: `울산 지역에서 운영 중인 카페·맥주전문점·기업체·학교·관공서 등은
업소용 제빙기를 매일 반복 가동합니다.
얼음은 음료와 함께 직접 제공되는 만큼,
제빙기 내부 상태는 매장 위생과 신뢰에 바로 연결됩니다.`,
    core: `울산 제빙기 청소 현장을 다니다 보면
“겉은 닦아왔는데 안쪽은 열어본 적이 없다”는 이야기를 자주 듣습니다.
제빙기는 구조상 내부 습기가 많아 오염이 빠르게 진행되며,
외부 청소만으로는 위생 상태를 판단하기 어렵습니다.

겉으로는 깨끗해 보여도 내부에는 물때와 스케일이 쉽게 쌓이기 때문에
정기적인 점검과 위생 관리가 필요합니다.

이끌림잇츠케어는 울산 지역 업소용 제빙기를 기준으로
분해 점검을 통해 내부 상태를 확인하고,
위생 기준에 맞춘 세척·살균 중심의 관리 작업을 진행합니다.`,
    applies: '울산 지역 카페, 맥주전문점, 기업체, 학교, 관공서, S2B등록업체 ',
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
  } as const;

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#111827] py-14 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/%EB%A9%94%EC%9D%B8.jpg"
            alt="울산 업소용 제빙기 위생 관리 배경 이미지"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-5 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight break-keep">{page.h1}</h1>
          <p className="text-gray-300 text-sm md:text-lg mt-4 leading-relaxed break-keep">
            울산 지역 업소용 제빙기, 내부 위생 점검부터 깔끔하게 관리합니다.
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
                {page.summary}
              </p>
            </section>

            {/* Core */}
            <section className="bg-white border border-gray-200 rounded-2xl p-5 md:p-7">
              <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-3 break-keep">본문 핵심</h3>
              <p className="text-gray-700 text-[15px] md:text-lg leading-7 whitespace-pre-line font-medium break-keep">
                {page.core}
              </p>
            </section>

            {/* Applies */}
            <section className="bg-gray-50 border border-gray-200 rounded-2xl p-5 md:p-7">
              <h3 className="text-lg md:text-2xl font-black text-gray-900 mb-3 break-keep">적용 업소 예시</h3>
              <div className="flex flex-wrap gap-2">
                {page.applies.split(',').map((t, i) => (
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
                {page.closing}
              </p>
            </section>

            {/* ✅ 울산 블로그 섹션 (부산과 동일 카드 구조) */}
            <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 break-keep">울산 제빙기 위생 관리 현장 기록</h3>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
                실제 울산 지역 카페·업소에서 진행한 제빙기 내부 점검 및 위생 관리 과정을 네이버 블로그에 기록하고 있습니다.
              </p>

              {/* 안내 박스 */}
              <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-5">
                <p className="text-gray-800 font-bold text-sm md:text-base leading-relaxed break-keep whitespace-pre-line">
                  울산 지역 업소용 제빙기 위생 관리 기준은
                  {'\n'}울산 제빙기 청소 안내 페이지에서 정리되어 있습니다.
                </p>
              </div>

              {/* 링크 목록 */}
              <ul className="mt-5 space-y-3 text-base md:text-lg font-semibold">
                {page.blogLinks.map((item, idx) => (
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
                  href="https://blog.naver.com/itscare77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0069D9] font-bold hover:underline"
                >
                  ▶ 울산 제빙기 청소 현장 후기 모음 (네이버 블로그)
                  <i className="fas fa-arrow-up-right-from-square text-sm"></i>
                </a>
              </div>
            </section>

            {/* Images */}
            <section className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6">
                {page.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden shadow-sm aspect-[4/3] group relative">
                    <img
                      src={img}
                      alt={`${page.caption} ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 text-xs md:text-sm font-bold flex items-center justify-center gap-2 mt-4">
                <i className="fas fa-camera text-[#0069D9]"></i>
                {page.caption}
              </p>
            </section>

            {/* CTA */}
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0069D9] hover:bg-[#005bb5] text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
                aria-label="울산 제빙기 청소 문의하기"
              >
                <i className="fas fa-calendar-check"></i>
                울산 제빙기 청소 문의하기
              </Link>
              <p className="text-xs md:text-sm text-gray-500 mt-3 break-keep">
                문의 전, 제빙기 모델/설치 환경/최근 관리 여부를 함께 알려주시면 안내가 더 정확해집니다.
              </p>
            </div>

            {/* ✅ 하단 허브 링크(원래 유지) */}
            <section className="mt-6 border-t pt-8">
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4">지역별 제빙기 청소 현장 후기 모음</h3>

              <ul className="space-y-3 text-[#0069D9] font-semibold text-base md:text-lg">
                <li>
                  <a href="https://blog.naver.com/itscare77" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    ▶ 울산 제빙기 청소 현장 후기 모음 (네이버 블로그)
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
