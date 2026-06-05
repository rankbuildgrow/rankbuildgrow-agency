import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AppLayout } from "./components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const About = lazy(() => import("./pages/About"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Careers = lazy(() => import("./pages/Careers"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyTerms = lazy(() => import("./pages/PrivacyTerms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const Fallback = () => <div className="h-screen flex items-center justify-center text-mint font-syne text-2xl">Loading...</div>;

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout>
        <Suspense fallback={<Fallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyTerms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppLayout>
    </BrowserRouter>
  );
}