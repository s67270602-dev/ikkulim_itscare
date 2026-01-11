
export const COLORS = {
  primary: "#0069D9",
  secondary: "#4FB3D9",
  background: "#F8FAFC",
  accent: "#FF7E00" // 이미지의 주황색 포인트 컬러 반영
};

export const IMAGES = {
  HERO_BG: "https://raw.githubusercontent.com/s67270602-dev/ikkulim_itscare/main/public/images/%EB%A9%94%EC%9D%B8.jpg",
  ICE_MAKER: "https://images.unsplash.com/photo-1551714502-0e427783935b?auto=format&fit=crop&q=80&w=1600",
  AC_CLEANING: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1600",
  ULSAN_CITY: "https://drive.google.com/thumbnail?id=1Q2HGVOV8UtjUaeIuTQoqQwGS_L1zWOX5&sz=w2000",
  TRUST_BADGE: "https://cdn-icons-png.flaticon.com/512/190/190411.png"
};

export const NAV_LINKS = [
  { label: "홈", path: "/" },
  { label: "위생 정보", path: "/process" },
  { label: "서비스/요금", path: "/services" },
  { label: "서비스 지역", path: "/service-area" },
  { label: "자주 묻는 질문", path: "/qa" },
  { label: "회사 소개", path: "/about" },
  { label: "견적 문의", path: "/contact" }
];

// 안심 매장 리스트 (추후 이곳에 매장을 추가/삭제하면 자동으로 반영됩니다)
export const SAFE_STORES = [
  { name: "더벤티 울산화정점" },
  { name: "1000cc 월평점" },
  { name: "태번159" },
  { name: "에밀리아" }
];
