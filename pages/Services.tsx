import React from 'react';

const PROMOTION_QUOTE_URL =
  'https://itscare-integrated-crm-preview.vercel.app/?public=promotion&kind=ice&token=ssa27qCFaVsltw6bKqBThRzeyl88ql-Z';

const pricePlans = [
  {
    name: '소형 제빙기',
    detail: '50kg 이하 업소용 제빙기',
    price: '120,000원',
    icon: 'fa-cubes-stacked',
  },
  {
    name: '호시자키·라셀',
    detail: '50kg 이하 호시자키·라셀 제빙기',
    price: '140,000원',
    icon: 'fa-snowflake',
  },
  {
    name: '중형 제빙기',
    detail: '50~200kg 업소용 제빙기',
    price: '180,000원',
    icon: 'fa-building',
  },
  {
    name: '대형 제빙기',
    detail: '200kg 이상 업소용 제빙기',
    price: '180,000원',
    icon: 'fa-industry',
  },
];

const processSteps = [
  { number: '01', title: '기기 점검', detail: '작업 전 전원, 급수 및 정상 제빙 작동 상태를 점검합니다.', icon: 'fa-magnifying-glass' },
  { number: '02', title: '기기 분해', detail: '상판, 전면 패널, 얼음 저장고, 급수 노즐 등을 완전 분해합니다.', icon: 'fa-screwdriver-wrench' },
  { number: '03', title: '친환경 세제 도포', detail: '식품용 안전 친환경 전용 세제를 도포해 찌든 오염을 불립니다.', icon: 'fa-spray-can-sparkles' },
  { number: '04', title: '디테일 세척', detail: '분해 부품과 미세 틈새의 물때·곰팡이를 수작업으로 정밀 세척합니다.', icon: 'fa-hand-sparkles' },
  { number: '05', title: '고압 스케일링 세척', detail: '강력 수압으로 배관 내벽 석회 스케일과 침전물을 분쇄·제거합니다.', icon: 'fa-droplet' },
  { number: '06', title: '고온 스팀 살균·소독', detail: '100°C 이상 고온 고압 스팀으로 식중독균 및 미세 세균을 살균 관리합니다.', icon: 'fa-temperature-arrow-up' },
  { number: '07', title: '기기 조립', detail: '살균 세척이 완료된 모든 부품을 오차 없이 정밀 재조립합니다.', icon: 'fa-screwdriver-wrench' },
  { number: '08', title: 'UV 자외선 살균·소독', detail: '저장고 내부 UV-C 살균 소독으로 2차 잔존 오염을 관리합니다.', icon: 'fa-sun' },
  { number: '09', title: '탈빙 체크·정상 작동 확인', detail: '정수·급수 시스템과 맑고 투명한 얼음 토출 상태를 최종 검수합니다.', icon: 'fa-circle-check' },
];

const QuoteButton: React.FC<{ className?: string; label?: string }> = ({ className = '', label = '견적 문의하기' }) => (
  <a
    href={PROMOTION_QUOTE_URL}
    className={`inline-flex items-center justify-center gap-2 rounded-xl font-black transition-all active:scale-[0.98] ${className}`}
  >
    <span>{label}</span>
    <i className="fas fa-arrow-right text-sm" aria-hidden="true" />
  </a>
);

const Services: React.FC = () => {
  return (
    <div className="bg-white pt-[60px] font-pretendard md:pt-[80px]">
      <section className="relative overflow-hidden bg-[#F4F9FF] px-5 py-9 md:px-6 md:py-24">
        <div className="absolute -left-20 top-0 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-cyan-100/80 blur-3xl" />
        <div className="relative mx-auto max-w-[860px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black text-[#0069D9] shadow-sm md:text-sm">
            <i className="fas fa-snowflake" aria-hidden="true" />
            ICE MAKER CLEANING PRICE
          </span>
          <h1 className="mt-4 break-keep text-[26px] font-black tracking-tight text-gray-900 md:mt-6 md:text-5xl">
            업소용 제빙기 청소 비용 안내
          </h1>
          <p className="mx-auto mt-3 max-w-xl break-keep text-sm font-medium leading-relaxed text-gray-600 md:mt-5 md:text-lg">
            기종과 용량별 기준 가격을 안내드립니다.<br className="hidden md:block" />
            울산·부산·양산·김해 전 지역 업소용 제빙기 청소 전문 이끌림잇츠케어가<br className="hidden md:block" />
            매장 환경과 제빙기 상태를 확인한 뒤 정확한 작업 범위를 상담해 드립니다.
          </p>
        </div>
      </section>

      <section className="px-5 py-9 md:px-6 md:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="mb-7 flex flex-col gap-2 md:mb-9 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black text-[#0069D9]">STANDARD PRICE</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-gray-900 md:text-3xl">기종별 청소 기준 가격</h2>
            </div>
            <p className="text-sm font-medium text-gray-500">카페·음식점·주점 등 업소용 제빙기 청소 기준 가격 · 모든 표기 금액은 부가세 포함 기준입니다.</p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
            {pricePlans.map((plan) => (
              <article
                key={plan.name}
                className="group flex min-h-0 flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg sm:min-h-[270px] sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-base text-[#0069D9] sm:h-11 sm:w-11 sm:rounded-xl sm:text-lg">
                    <i className={`fas ${plan.icon}`} aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-500 sm:px-2.5 sm:py-1 sm:text-[11px]">기준 가격</span>
                </div>
                <div className="mt-3 flex items-end justify-between gap-3 sm:mt-6 sm:block">
                  <div>
                    <h3 className="text-base font-black text-gray-900 sm:text-xl">{plan.name}</h3>
                    <p className="mt-0.5 break-keep text-xs font-medium leading-relaxed text-gray-500 sm:mt-2 sm:min-h-[42px] sm:text-sm">{plan.detail}</p>
                  </div>
                  <div className="shrink-0 sm:mt-5 sm:border-t sm:border-gray-100 sm:pt-5">
                    <span className="text-xl font-black tracking-tight text-[#0069D9] sm:text-3xl">{plan.price}</span>
                  </div>
                </div>
                <div className="mt-auto hidden pt-5 sm:block">
                  <QuoteButton className="w-full bg-[#E8F4FF] py-3 text-sm text-[#0069D9] group-hover:bg-[#0069D9] group-hover:text-white" />
                </div>
              </article>
            ))}
          </div>

          <QuoteButton label="내 제빙기 견적 문의하기" className="mt-4 w-full bg-[#0069D9] py-3.5 text-sm text-white shadow-lg shadow-blue-100 hover:bg-[#0057B5] sm:hidden" />

          <div className="mt-4 grid grid-cols-1 gap-2 md:mt-6 md:grid-cols-2 md:gap-5">
            <div className="flex items-center gap-3 rounded-xl border border-orange-200 bg-orange-50 p-3.5 md:items-start md:gap-4 md:rounded-2xl md:p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FF7E00] text-sm text-white md:h-10 md:w-10 md:rounded-xl"><i className="fas fa-moon" aria-hidden="true" /></span>
              <div>
                <p className="text-xs font-black text-orange-800 md:text-sm">야간 작업 안내</p>
                <p className="mt-0.5 break-keep text-sm font-bold leading-relaxed text-gray-800 md:mt-1 md:text-base">오후 6시 이후 야간 작업: <span className="text-[#E56600]">추가 30,000원</span></p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 p-3.5 md:items-start md:gap-4 md:rounded-2xl md:p-6">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0069D9] text-sm text-white md:h-10 md:w-10 md:rounded-xl"><i className="fas fa-calendar-check" aria-hidden="true" /></span>
              <div>
                <p className="text-xs font-black text-[#0069D9] md:text-sm">정기관리 혜택</p>
                <p className="mt-0.5 break-keep text-sm font-bold leading-relaxed text-gray-800 md:mt-1 md:text-base">1개월~3개월 정기관리 선택 시 <span className="text-[#0069D9]">20,000원 할인</span></p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-center text-xs font-medium leading-relaxed text-gray-400 md:text-sm">※ 기기 상태, 설치 환경 및 작업 범위에 따라 현장 상담이 필요할 수 있습니다.</p>
        </div>
      </section>

      <section className="bg-[#F8FAFC] px-5 py-14 md:px-6 md:py-20">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-black text-[#0069D9]">INCLUDED SERVICE</p>
            <h2 className="mt-2 break-keep text-2xl font-black tracking-tight text-gray-900 md:text-4xl">가격에는 어떤 서비스가<br className="hidden lg:block" /> 포함되나요?</h2>
            <p className="mt-4 inline-flex rounded-full bg-blue-100 px-3 py-1.5 text-sm font-black text-[#0069D9]">9단계 표준 분해·살균 프로세스 (필수 순서)</p>
            <p className="mt-4 break-keep text-[15px] font-medium leading-relaxed text-gray-600 md:text-lg">울산 제빙기 청소, 부산 제빙기 청소, 양산 제빙기 청소, 김해 제빙기 청소가 필요한 매장을 대상으로 9단계 표준 순서에 따라 내부 위생 관리를 진행합니다.</p>
            <QuoteButton label="내 제빙기 견적 문의하기" className="mt-7 bg-[#0069D9] px-6 py-3.5 text-sm text-white shadow-lg shadow-blue-200 hover:bg-[#0057B5]" />
          </div>
          <div className="grid grid-cols-3 gap-2.5 md:gap-3">
            {processSteps.map((step) => (
              <div key={step.number} className="flex min-h-[92px] flex-col justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-sm md:min-h-[112px] md:p-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-xs font-black text-[#0069D9] md:h-8 md:w-8">{step.number}</span>
                <p className="mt-2 break-keep text-xs font-black leading-snug text-gray-800 md:text-sm">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-[1120px]">
          <div className="text-center">
            <p className="text-sm font-black text-[#0069D9]">CLEANING PROCESS</p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-gray-900 md:text-4xl">작업은 이렇게 진행됩니다</h2>
            <p className="mt-3 break-keep text-sm font-medium text-gray-500 md:text-base">9단계 표준 분해·살균 프로세스를 순서대로 진행합니다.</p>
          </div>
          <div className="relative mt-8 grid grid-cols-1 gap-3 md:mt-12 md:grid-cols-3 md:gap-5">
            {processSteps.map((step) => (
              <article key={step.number} className="relative rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
                <span className="absolute right-5 top-4 text-4xl font-black text-blue-50 md:text-5xl">{step.number}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-base text-[#0069D9] md:h-11 md:w-11 md:text-lg"><i className={`fas ${step.icon}`} aria-hidden="true" /></span>
                <h3 className="mt-4 text-base font-black text-gray-900 md:mt-5 md:text-lg">{step.title}</h3>
                <p className="mt-2 break-keep text-sm font-medium leading-relaxed text-gray-500">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0B3D73] px-5 py-12 md:px-6 md:py-16">
        <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-7 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-black text-blue-200">FREE CONSULTATION</p>
            <h2 className="mt-2 break-keep text-2xl font-black text-white md:text-3xl">제빙기 종류가 헷갈리시나요?</h2>
            <p className="mt-2 break-keep text-sm font-medium leading-relaxed text-blue-100 md:text-base">울산·부산·양산·김해 업소용 제빙기 청소 견적이 필요하시면 사진과 매장 정보를 남겨주세요.</p>
          </div>
          <QuoteButton label="견적 문의하기" className="w-full bg-white px-7 py-4 text-sm text-[#0069D9] shadow-lg hover:bg-blue-50 md:w-auto" />
        </div>
      </section>
    </div>
  );
};

export default Services;
