import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

type Region = 'ulsan' | 'busan' | 'yangsan' | 'gimhae';

const BusanIceMachineCleaning: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Region>('busan');

  const content = {
    busan: {
      title: '부산 제빙기 청소 | 업소용 제빙기 위생 관리 전문',
      desc: `부산 지역에서는 카페, 맥주전문점, 호텔, 기업체, 학교, 관공서 등
얼음을 직접 제공하는 다양한 업소에서 업소용 제빙기가 사용되고 있습니다.
제빙기는 하루 중 가동 시간이 길고 물이 지속적으로 순환되는 구조이기 때문에
겉으로는 깨끗해 보여도 내부에는 물때와 스케일, 미세 오염물이 점차 쌓이기 쉽습니다.

특히 내부 위생 관리가 이루어지지 않은 제빙기는
얼음 냄새, 이물감, 위생 불안으로 이어질 수 있어
정기적인 내부 점검과 위생 관리가 중요합니다.

이끌림잇츠케어는 부산 지역 업소용 제빙기를 대상으로
기기 구조와 내부 오염 상태를 직접 확인한 뒤
분해 점검을 기반으로 세척·살균 중심의
제빙기 위생 관리 작업을 진행하고 있습니다.`,
      caption: '부산 지역 업소용 제빙기 분해 점검 및 내부 위생 세척 작업 모습',
      images: [
        '/images/busan-ikkulim-itscare-ice-machine-cleaning-banner-01.jpg',
        '/images/busan-ikkulim-itscare-ice-machine-cleaning-banner-02.jpg',
        '/images/busan-ikkulim-itscare-ice-machine-cleaning-banner-03.jpg',
      ],
    },
    ulsan: {
      title: '울산 제빙기 청소',
      desc: '',
      caption: '',
      images: [],
    },
    yangsan: {
      title: '양산 제빙기 청소',
      desc: '',
      caption: '',
      images: [],
    },
    gimhae: {
      title: '김해 제빙기 청소',
      desc: '',
      caption: '',
      images: [],
    },
  } as const;

  const tabs: { id: Region; label: string }[] = [
    { id: 'ulsan', label: '울산 제빙기 청소' },
    { id: 'busan', label: '부산 제빙기 청소' },
    { id: 'yangsan', label: '양산 제빙기 청소' },
    { id: 'gimhae', label: '김해 제빙기 청소' },
  ];

  const getTitleParts = (title: string) => {
    const parts = title.split(' | ');
    return { main: parts[0] || title, sub: parts[1] || '' };
  };

  const { main, sub } = getTitleParts(content[activeTab].title);

  const blogLinks: Record<Region, { title: string; url: string }[]> = {
    busan: [
      {
        title: '부산 부산진구 카페 제빙기청소 현장 후기',
        url: 'https://blog.naver.com/itscare88/224145284596',
      },
      {
        title: '부산 카페 제빙기청소, 미루면 안 되는 이유｜현장 기준 정리',
        url: 'https://blog.naver.com/itscare88/224143730051',
      },
      {
        title: '부산 해운대 카페 제빙기 분해 점검 기록',
        url: 'https://blog.naver.com/itscare88/224143662647',
      },
    ],
    ulsan: [],
    yangsan: [],
    gimhae: [],
  };

  const regionName = '부산';

  React.useEffect(() => {
    document.title = '부산 제빙기 청소 | 이끌림잇츠케어';
  }, []);

  return (
    <div className="pt-[60px] md:pt-[80px] font-pretendard min-h-screen bg-white">
      <section className="bg-[#111827] py-16 md:py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/메인.jpg"
            alt="부산 제빙기 청소 배경"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-5 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            부산 제빙기 청소
          </h1>
          <p className="text-gray-400 text-sm md:text-lg">
            부산 전 지역 업소용 제빙기 위생 관리 전문
          </p>
        </div>
      </section>

      <section className="py-10 md:py-24">
        <div className="container mx-auto px-5 md:px-6 max-w-[1000px]">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                {main}
              </h2>

              <p className="text-gray-700 text-[16px] md:text-lg leading-[1.8] whitespace-pre-line break-keep">
                {content.busan.desc}
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 md:p-8 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
                {content.busan.images.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden aspect-[4/3]">
                    <img
                      src={img}
                      alt={`${content.busan.caption} ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 text-sm font-semibold">
                {content.busan.caption}
              </p>
            </div>

            {blogLinks.busan.length > 0 && (
              <section className="border rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-black mb-4">
                  부산 제빙기 청소 현장 기록
                </h3>
                <ul className="space-y-3 font-semibold">
                  {blogLinks.busan.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0069D9] hover:underline"
                      >
                        ▶ {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0069D9] hover:bg-[#005bb5] text-white px-10 py-4 rounded-xl font-bold text-lg"
              >
                부산 제빙기 청소 문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusanIceMachineCleaning;
