import React from 'react';
import { Link } from 'react-router-dom';

const ServiceArea: React.FC = () => {
  const regions = [
    {
      id: 'ulsan',
      label: '울산 제빙기 청소',
      to: '/ulsan-ice-machine-cleaning',
      desc: '울산 전 지역 업소용 제빙기 분해 점검·세척·살균 위생 관리',
    },
    {
      id: 'busan',
      label: '부산 제빙기 청소',
      to: '/busan-ice-machine-cleaning',
      desc: '부산 카페·업소 제빙기 내부 점검 및 위생 관리',
    },
    {
      id: 'yangsan',
      label: '양산 제빙기 청소',
      to: '/yangsan-ice-machine-cleaning',
      desc: '양산 지역 업소용 제빙기 세척·살균 중심 위생 청소',
    },
    {
      id: 'gimhae',
      label: '김해 제빙기 청소',
      to: '/gimhae-ice-machine-cleaning',
      desc: '김해 지역 제빙기 내부 상태 확인 및 위생 관리',
    },
  ] as const;

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-white">
      {/* Header */}
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
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">서비스 지역</h1>
          <p className="text-gray-400 text-sm md:text-lg">
            부산·울산·양산·김해 전 지역, 전문가가 직접 찾아갑니다.
          </p>
        </div>
      </section>

      {/* Region Hub */}
      <section className="py-10 md:py-16">
        <div className="container mx-auto px-5 md:px-6 max-w-[1000px]">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
            지역별 제빙기 청소 안내
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {regions.map((r) => (
              <Link
                key={r.id}
                to={r.to}
                className="group border border-gray-200 rounded-2xl p-6 hover:border-[#0069D9] hover:shadow-lg transition-all bg-white"
                aria-label={`${r.label} 페이지로 이동`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xl md:text-2xl font-black text-gray-900 group-hover:text-[#0069D9]">
                    {r.label}
                  </div>
                  <div className="text-[#0069D9] font-black">→</div>
                </div>
                <p className="text-gray-600 mt-3 leading-relaxed font-medium">
                  {r.desc}
                </p>
                <p className="text-sm text-gray-400 mt-4">
                  클릭하면 {r.label} 전용 페이지로 이동합니다.
                </p>
              </Link>
            ))}
          </div>

          {/* 보조 안내 */}
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-2xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-black text-gray-900 mb-3">안내</h3>
            <p className="text-gray-700 leading-relaxed font-medium">
              지역별 페이지에서 해당 지역 기준으로 업소용 제빙기 위생 관리 내용을 확인하실 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceArea;
