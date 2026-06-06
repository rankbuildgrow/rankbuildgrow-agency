import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUp } from "lucide-react";
import { Button } from "./ui";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Reviews", path: "/reviews" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

const SocialIcons = () => (
  <div className="flex gap-4 items-center">
    <a href="https://youtube.com/@RankBuildGrow" target="_blank" rel="noreferrer" aria-label="RankBuildGrow on YouTube" className="text-[#888888] hover:text-mint transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg></a>
    <a href="https://facebook.com/RankBuildGrow" target="_blank" rel="noreferrer" aria-label="RankBuildGrow on Facebook" className="text-[#888888] hover:text-mint transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
    <a href="https://instagram.com/RankBuildGrow" target="_blank" rel="noreferrer" aria-label="RankBuildGrow on Instagram" className="text-[#888888] hover:text-mint transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
    <a href="https://linkedin.com/company/rankbuildgrow" target="_blank" rel="noreferrer" aria-label="RankBuildGrow on LinkedIn" className="text-[#888888] hover:text-mint transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
    <a href="https://x.com/RankBuildGrow" target="_blank" rel="noreferrer" aria-label="RankBuildGrow on X (Twitter)" className="text-[#888888] hover:text-mint transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></a>
    <a href="https://pinterest.com/rankbuildgrow" target="_blank" rel="noreferrer" aria-label="RankBuildGrow on Pinterest" className="text-[#888888] hover:text-mint transition-colors"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.592 0 12.017 0z"/></svg></a>
    <a href="https://threads.net/@RankBuildGrow" target="_blank" rel="noopener noreferrer" aria-label="RankBuildGrow on Threads" className="text-muted hover:text-mint transition-colors"><svg width="20" height="20" viewBox="0 0 192 192" fill="currentColor"><path d="M141.537 88.988a66.667 66.667 0 00-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.318-11.319 11.258-24.925 16.135-45.488 16.286-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.195 47.292 9.6 32.788 27.94 19.882 44.356 13.2 67.847 13 96v.04c.2 28.113 6.882 51.605 19.788 68.02C47.292 182.4 68.882 191.805 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.166 18.963-18.91 18.392-42.57 12.142-57.114-4.484-10.454-13.033-18.945-24.723-24.732zm-41.71 55.171c-10.463.572-21.317-4.108-21.867-14.151-.403-7.557 5.38-15.984 22.76-17.01 1.99-.114 3.944-.169 5.864-.169 6.262 0 12.117.606 17.436 1.765-1.982 24.681-13.58 28.959-24.193 29.565z"/></svg></a>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 w-full z-50 h-[72px] bg-primary/95 backdrop-blur-[20px] border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px] h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src="/images/logo.webp" alt="RankBuildGrow Logo" className="h-10 w-10 object-contain bg-mint/10 rounded-lg" width="40" height="40" />
            <div className="flex flex-col">
              <span className="font-syne font-bold text-[22px] text-[#F5F5F5] leading-none">RankBuildGrow</span>
              <span className="font-inter text-[10px] text-mint uppercase tracking-[0.2em] mt-1">Digital Marketing Agency</span>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link key={link.name} to={link.path} className={`font-inter text-[13px] transition-colors duration-200 ${location.pathname === link.path ? "text-[#F5F5F5]" : "text-[#888888] hover:text-mint"}`}>
                {link.name}
              </Link>
            ))}
            <Button variant="nav" href="/contact">Get Free Quote</Button>
          </nav>
          <button className="lg:hidden text-chrome" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close menu" : "Open menu"}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-0 right-0 top-[72px] bottom-0 bg-[#0A0A0A] z-[999] px-8 py-6 flex flex-col gap-4 overflow-y-auto"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-syne font-bold py-3 border-b border-white/5 ${location.pathname === link.path ? "text-mint" : "text-chrome"}`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="primary" href="/contact" className="mt-4">Get Free Quote</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => (
  <footer className="bg-[#050505] border-t border-white/5 pt-[60px] pb-[30px]">
    <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-[60px]">
      <div className="mb-12">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.webp" alt="RankBuildGrow Logo" className="h-10 w-10 object-contain bg-mint/10 rounded-lg" width="40" height="40" />
          <div className="flex flex-col">
            <span className="font-syne font-bold text-[22px] text-[#F5F5F5] leading-none">RankBuildGrow</span>
            <span className="font-inter text-[10px] text-mint uppercase tracking-[0.2em] mt-1">Rank Higher. Build Smarter. Grow Faster.</span>
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        <div>
          <h4 className="font-inter font-semibold text-[#F5F5F5] mb-6">SERVICES</h4>
          <ul className="space-y-3 font-inter text-[14px] text-[#888888]">
            <li><Link to="/services" className="hover:text-mint transition-colors">Website Design</Link></li>
            <li><Link to="/services" className="hover:text-mint transition-colors">Local SEO</Link></li>
            <li><Link to="/services" className="hover:text-mint transition-colors">Google Ads</Link></li>
            <li><Link to="/services" className="hover:text-mint transition-colors">Social Media</Link></li>
            <li><Link to="/services" className="hover:text-mint transition-colors">Meta Ads</Link></li>
            <li><Link to="/services" className="hover:text-mint transition-colors">App Development</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-inter font-semibold text-[#F5F5F5] mb-6">COMPANY</h4>
          <ul className="space-y-3 font-inter text-[14px] text-[#888888]">
            <li><Link to="/about" className="hover:text-mint transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-mint transition-colors">Portfolio</Link></li>
            <li><Link to="/reviews" className="hover:text-mint transition-colors">Reviews</Link></li>
            <li><Link to="/careers" className="hover:text-mint transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-mint transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-inter font-semibold text-[#F5F5F5] mb-6">CONNECT</h4>
          <SocialIcons />
        </div>
        <div>
          <h4 className="font-inter font-semibold text-[#F5F5F5] mb-6">LEGAL</h4>
          <ul className="space-y-3 font-inter text-[14px] text-[#888888]">
            <li><Link to="/privacy-policy#privacy" className="hover:text-mint transition-colors">Privacy Policy</Link></li>
            <li><Link to="/privacy-policy#terms" className="hover:text-mint transition-colors">Terms & Conditions</Link></li>
            <li><a href="mailto:hello@rankbuildgrow.com" className="hover:text-mint transition-colors">Email Us</a></li>
            <li><a href="https://wa.me/916350371343" className="hover:text-mint transition-colors">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 text-center font-inter text-[13px] text-[#888888]">
        © 2026 RankBuildGrow. All rights reserved. | <Link to="/privacy-policy" className="hover:text-mint">Privacy Policy</Link>
      </div>
    </div>
  </footer>
);

const FloatingElements = () => {
  const [showTop, setShowTop] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(true);

  useEffect(() => {
    const checkScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', checkScroll);
    setCookieConsent(localStorage.getItem('cookieConsent') === 'true');
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <>
      <a href="https://wa.me/916350371343" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" className="fixed bottom-6 right-6 w-14 h-14 bg-mint rounded-full flex items-center justify-center z-[999] hover:scale-110 transition-transform shadow-lg shadow-mint/20">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} onClick={() => window.scrollTo(0,0)} aria-label="Back to top" className="fixed bottom-24 right-6 w-12 h-12 border border-mint rounded-full flex items-center justify-center z-[999] bg-primary/50 backdrop-blur-sm text-mint hover:bg-mint hover:text-primary transition-all">
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
      {!cookieConsent && (
        <div className="fixed bottom-0 w-full bg-[#141414] border-t border-white/5 py-4 z-[998]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-[60px] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-inter text-[14px] text-[#F5F5F5]">We use cookies to improve your experience.</p>
            <div className="flex gap-4">
              <button onClick={() => { localStorage.setItem('cookieConsent', 'true'); setCookieConsent(true); }} className="bg-mint text-primary px-6 py-2 rounded-md font-medium text-[14px]">Accept</button>
              <button onClick={() => setCookieConsent(true)} className="border border-white/20 text-[#F5F5F5] px-6 py-2 rounded-md font-medium text-[14px]">Decline</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const AppLayout = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-grow pt-[72px]"><AnimatePresence mode="wait">{children}</AnimatePresence></main>
    <Footer />
    <FloatingElements />
  </div>
);
