import React from 'react';
import { Link } from 'react-router-dom';

type Region = 'ulsan' | 'busan' | 'yangsan' | 'gimhae';

const regionCards: {
  id: Region;
  label: string;
  path: string;
  title: string;
  desc: string;
  image: string;
}[] = [
  {
    id: 'ulsan',
    label: '울산 제빙기 청소',
    path: '/ulsan-ice-machine-cleaning',
    title: '울산 제빙기 청소 | 업소용 제빙기 위생 관리',
    desc: '카페·업소용 제빙기 내부 점검과 위생 기준에 맞춘 세척·살균 중심 관리 안내.',
    image: '/images/ulsan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
  },
  {
    id: 'busan',
    label: '부산 제빙기 청소',
    path: '/busan-ice-machine-cleaning',
    title: '부산 제빙기 청소 | 업소용 제빙기 위생 점검',
    desc: '가동 시간이 긴 부산 지역 업소용 제빙기, 내부 오염 확인 후 위생 관리 안내.',
    image: '/images/busan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
  },
  {
    id: 'yangsan',
    label: '양산 제빙기 청소',
    path: '/yangsan-ice-machine-cleaning',
    title: '양산 제빙기 청소 | 업소용 제빙기 위생 관리',
    desc: '물때·스케일 누적이 쉬운 구조 특성, 내부 점검 포함 위생 관리 기준 안내.',
    image: '/images/yangsan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
  },
  {
    id: 'gimhae',
    label: '김해 제빙기 청소',
    path: '/gimhae-ice-machine-cleaning',
    title: '김해 제빙기 청소 | 업소용 제빙기 위생 점검',
    desc: '외관만으로 판단 어려운 내부 위생 상태, 정기 점검·관리 필요성 안내.',
    image: '/images/gimhae-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
  },
];

const ServiceArea: React.FC = () => {
  React.useEffect(() => {
    document.title = `서비스 지역 | 이끌림잇츠케어`;
  }, []);

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-white">
      {/* 1) Header */}
      <section className="bg-[#111827] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/%EB%A9%94%EC%9D%B8.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-5 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            서비스 지역
          </h1>
          <p className="text-gray-300 text-sm md:text-lg">
            부산·울산·양산·김해 전 지역, 업소용 제빙기 위생 관리 안내 페이지입니다.
          </p>
        </div>
      </section>

      {/* 2) Region Tabs (URL 이동형) */}
      <section className="sticky top-[60px] md:top-[80px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-0 md:px-6 max-w-[1200px]">
          <div className="flex flex-wrap md:flex-nowrap md:overflow-x-auto md:scrollbar-hide">
            {regionCards.map((r) => (
              <Link
                key={r.id}
                to={r.path}
                className={`
                  w-1/2 md:w-auto md:flex-1 py-4 md:py-5 px-1 md:px-4 
                  text-[13px] md:text-lg font-bold transition-all relative whitespace-nowrap
                  flex items-center justify-center
                  border-b border-gray-100 md:border-b-0
                  text-gray-600 hover:text-gray-900 hover:bg-gray-50
                `}
                aria-label={`${r.label} 페이지로 이동`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3) Content: 허브 안내 + 지역 선택 카드 */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-5 md:px-6 max-w-[1100px]">
          {/* 안내 문구 */}
          <div className="mb-8 md:mb-12">
            <div className="flex items-start gap-2.5 mb-4">
              <span className="text-[#0069D9] text-xl md:text-2xl mt-0.5">🟦</span>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight break-keep">
                지역별 안내 페이지를 선택해 주세요
              </h2>
            </div>

            <p className="text-gray-700 text-[16px] md:text-lg leading-[1.8] md:leading-8 break-keep font-medium">
              서비스 지역 페이지는 <b>울산·부산·양산·김해</b>로 분리되어 있으며,
              각 지역 페이지에서 업소용 제빙기 위생 관리 기준과 현장 기록 링크를 확인할 수 있습니다.
              아래 카드 또는 상단 탭을 눌러 이동해 주세요.
            </p>
          </div>

          {/* 지역 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
            {regionCards.map((r) => (
              <Link
                key={r.id}
                to={r.path}
                className="group border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white"
                onClick={() => window.scrollTo(0, 0)}
                aria-label={`${r.label} 상세 페이지로 이동`}
              >
                <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 md:p-6">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-2 break-keep">
                    {r.label}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed break-keep">
                    {r.desc}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 text-[#0069D9] font-bold">
                    자세히 보기 <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 md:mt-14 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#0069D9] hover:bg-[#005bb5] text-white w-full md:w-auto px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
              aria-label="견적 문의하기"
            >
              <i className="fas fa-calendar-check"></i>
              견적 문의하기
            </Link>
          </div>

          {/* Footer: 블로그 허브 링크는 허브 페이지에만 남김 */}
          <section className="mt-10 border-t pt-8">
            <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4">
              지역별 제빙기 청소 현장 후기 모음
            </h3>

            <ul className="space-y-3 text-[#0069D9] font-semibold text-base md:text-lg">
              <li>
                <a
                  href="https://blog.naver.com/itscare77"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  ▶ 울산 제빙기 청소 현장 후기 모음 (네이버 블로그)
                </a>
              </li>
              <li>
                <a
                  href="https://blog.naver.com/itscare88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  ▶ 부산·양산·김해 제빙기 청소 현장 후기 모음 (네이버 블로그)
                </a>
              </li>
            </ul>

            <p className="text-sm text-gray-500 mt-4">
              홈페이지와 블로그의 연결 신호를 강화해 검색 노출에 도움이 되도록 구성했습니다.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ServiceArea;
