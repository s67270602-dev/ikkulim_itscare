
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import Process from './pages/Process';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import QA from './pages/QA';
import ServiceArea from './pages/ServiceArea';

// ✅ 지역 페이지 import 추가
import UlsanIceMachineCleaning from './pages/UlsanIceMachineCleaning';
import BusanIceMachineCleaning from './pages/BusanIceMachineCleaning';
import YangsanIceMachineCleaning from './pages/YangsanIceMachineCleaning';
import GimhaeIceMachineCleaning from './pages/GimhaeIceMachineCleaning';

// 페이지 이동 시 스크롤 최상단
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/process" element={<Process />} />
          <Route path="/services" element={<Services />} />

          {/* ✅ 허브 */}
          <Route path="/service-area" element={<ServiceArea />} />

          {/* ✅ 지역별 “진짜 URL” */}
          <Route path="/ulsan-ice-machine-cleaning" element={<UlsanIceMachineCleaning />} />
          <Route path="/busan-ice-machine-cleaning" element={<BusanIceMachineCleaning />} />
          <Route path="/yangsan-ice-machine-cleaning" element={<YangsanIceMachineCleaning />} />
          <Route path="/gimhae-ice-machine-cleaning" element={<GimhaeIceMachineCleaning />} />

          <Route path="/qa" element={<QA />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
