
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import Process from './pages/Process';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import QA from './pages/QA';
import ServiceArea from './pages/ServiceArea';

// 페이지 이동 시 스크롤을 최상단으로 올리는 컴포넌트
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/process" element={<Process />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/qa" element={<QA />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
