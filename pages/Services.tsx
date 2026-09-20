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

const includedServices = [
  '제빙기 완전 분해 세척',
  '내부 디테일 세척',
  '내부 물때·스케일 제거',
  '고온 스팀 위생 관리',
  '조립 후 정상 작동 확인',
];

const processSteps = [
  { number: '01', title: '상태 점검·분해', detail: '기종과 내부 상태를 확인한 뒤 구조에 맞춰 안전하게 분해합니다.', icon: 'fa-magnifying-glass' },
  { number: '02', title: '내부 세척', detail: '물때와 스케일을 제거하고 필요한 부분을 세밀하게 세척합니다.', icon: 'fa-droplet' },
  { number: '03', title: '위생 관리', detail: '고온 스팀으로 내부 위생 관리 과정을 진행합니다.', icon: 'fa-temperature-arrow-up' },
  { number: '04', title: '조립·작동 확인', detail: '조립 후 얼음 생성과 정상 작동 상태를 확인합니다.', icon: 'fa-circle-check' },
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
            <p className="text-sm font-medium text-gray-500">모든 표기 금액은 부가세 포함 기준입니다.</p>
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
            <p className="mt-4 break-keep text-[15px] font-medium leading-relaxed text-gray-600 md:text-lg">외관만 닦는 청소가 아니라, 제빙기 내부 상태를 기준으로 분해·세척·위생 관리·작동 확인까지 진행합니다.</p>
            <QuoteButton label="내 제빙기 견적 문의하기" className="mt-7 bg-[#0069D9] px-6 py-3.5 text-sm text-white shadow-lg shadow-blue-200 hover:bg-[#0057B5]" />
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {includedServices.map((service, index) => (
              <div key={service} className="flex min-h-[104px] items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-sm font-black text-emerald-500">0{index + 1}</span>
                <p className="break-keep text-[15px] font-bold leading-relaxed text-gray-800">{service}</p>
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
          </div>
          <div className="relative mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-4 md:gap-5">
            {processSteps.map((step) => (
              <article key={step.number} className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <span className="absolute right-5 top-4 text-4xl font-black text-blue-50">{step.number}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-lg text-[#0069D9]"><i className={`fas ${step.icon}`} aria-hidden="true" /></span>
                <h3 className="mt-5 text-lg font-black text-gray-900">{step.title}</h3>
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
            <p className="mt-2 break-keep text-sm font-medium leading-relaxed text-blue-100 md:text-base">사진과 매장 정보를 남겨주시면 적합한 청소 기준을 안내해 드립니다.</p>
          </div>
          <QuoteButton label="견적 문의하기" className="w-full bg-white px-7 py-4 text-sm text-[#0069D9] shadow-lg hover:bg-blue-50 md:w-auto" />
        </div>
      </section>
    </div>
  );
};

export default Services;
