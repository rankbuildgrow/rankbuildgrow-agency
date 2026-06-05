import { motion } from "framer-motion";
import { Section, Button, GlassCard, GradientHeading } from "../components/ui";
import { ArrowRight, Globe, Shield, Zap, Headphones, BarChart3, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[calc(100vh-72px)] flex flex-col justify-center py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.webp" alt="Background" className="w-full h-full object-cover opacity-15" fetchpriority="high" />
        </div>
        <div className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] lg:px-[60px] relative z-10 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/10 border border-mint/25 mb-8">
            <motion.div animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-2 h-2 rounded-full bg-mint" />
            <span className="font-inter text-[13px] text-mint uppercase tracking-wider font-medium">Now Accepting US Clients</span>
          </motion.div>
          <h1 className="font-syne font-extrabold text-[40px] md:text-[72px] leading-[1.1] mb-6">
            <span className="gradient-text">We Rank. Build. Grow.</span><br/>
            <span className="text-[#F5F5F5]">Your Business Online.</span>
          </h1>
          <p className="font-inter text-[#888888] text-[18px] max-w-[580px] mx-auto mb-10">
            AI-Powered Professional websites, local SEO, and digital marketing for US small businesses. Get found on Google. Convert visitors into paying customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button href="/contact">Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" /></Button>
            <Button variant="secondary" href="/portfolio">View Our Work</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[800px] mx-auto divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[["50+", "Projects Delivered"], ["100%", "Client Satisfaction"], ["10+", "Industries Served"]].map(([num, label]) => (
              <div key={label} className="pt-4 md:pt-0 flex flex-col items-center">
                <span className="font-syne font-bold text-[56px] gradient-text">{num}</span>
                <span className="font-inter text-[14px] text-[#888888] uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-24 relative max-w-[700px] mx-auto">
            <img src="/images/hero-visual.webp" alt="Dashboard" className="w-full rounded-[20px] shadow-[0_0_80px_rgba(0,255,148,0.12)]" loading="lazy" width="700" height="467" />
            <GlassCard className="absolute -bottom-10 -left-10 w-[240px] hidden md:block !p-5">
              <div className="flex items-center gap-3 mb-4"><BarChart3 className="text-mint"/><div><p className="text-sm font-semibold text-white">SEO Growth</p><p className="text-xs text-[#888888]">Past 30 days</p></div></div>
              <div className="space-y-3"><div className="w-full bg-white/10 h-2 rounded-full overflow-hidden"><div className="w-[78%] bg-mint h-full rounded-full"></div></div><p className="text-xs text-right text-mint">+78% organic</p></div>
            </GlassCard>
            <GlassCard className="absolute -bottom-10 -right-10 w-[260px] hidden md:block !p-5">
              <div className="flex items-center gap-3 mb-4"><Globe className="text-mint"/><div><p className="text-sm font-semibold text-white">Website Live</p><div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse"/><p className="text-xs text-mint">Active · Dallas, TX</p></div></div></div>
              <div className="text-xs text-[#888888] space-y-1"><p>Response: 0.8s</p><p>Score: 97/100</p><p>72hr delivery: Success</p></div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* SECTION 2: TRUST BAR */}
      <section className="w-full border-y border-white/5 bg-white/5 py-5 overflow-hidden flex flex-col items-center justify-center">
        <p className="font-inter text-[13px] text-[#888888] mb-3">Trusted by businesses across</p>
        <div className="w-full overflow-hidden flex whitespace-nowrap">
          <div className="animate-marquee flex gap-12 items-center text-[#F5F5F5] font-inter text-lg">
            {["🇺🇸 United States", "🇨🇦 Canada", "🇦🇺 Australia", "🇬🇧 United Kingdom", "🇳🇿 New Zealand", "🇺🇸 United States", "🇨🇦 Canada", "🇦🇺 Australia", "🇬🇧 United Kingdom", "🇳🇿 New Zealand"].map((c, i) => (
              <span key={i} className="flex items-center gap-2">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES OVERVIEW */}
      <Section id="services">
        <div className="text-center mb-16">
          <GradientHeading>Everything Your Business Needs to Dominate Online</GradientHeading>
          <p className="text-[#888888] mt-4 text-lg">Comprehensive digital marketing solutions designed for US small businesses.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: "Website Design", d: "Professional 5-page websites from $497. Mobile-first, fast-loading, built to convert visitors into customers.", i: "service-web.webp" },
            { t: "Local SEO", d: "Rank on Google Maps and search results. Get found by customers searching for your services right now.", i: "service-seo.webp" },
            { t: "Google Ads", d: "Targeted campaigns that bring ready-to-buy customers directly to your business.", i: "service-google-ads.webp" },
            { t: "Social Media Marketing", d: "Build your audience and grow brand awareness across all major platforms.", i: "service-social.webp" },
            { t: "Meta Ads", d: "Facebook and Instagram advertising that reaches your ideal US customers precisely.", i: "service-meta.webp" },
            { t: "App Development", d: "Custom iOS and Android apps that keep your customers engaged and coming back.", i: "service-app.webp" }
          ].map((s, i) => (
            <a href="/services" key={i} className="group flex flex-col glass-card !p-0 overflow-hidden hover:-translate-y-1 transition-all">
              <img src={`/images/${s.i}`} alt={s.t} className="w-full h-[200px] object-cover rounded-t-[12px]" loading="lazy" width="400" height="200" />
              <div className="p-7 flex-grow flex flex-col">
                <CheckCircle2 className="text-mint mb-3 w-6 h-6" />
                <h3 className="font-syne font-bold text-xl text-[#F5F5F5] mb-2">{s.t}</h3>
                <p className="text-[#888888] text-[15px] flex-grow mb-4">{s.d}</p>
                <span className="text-mint font-medium group-hover:underline">Learn More →</span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* SECTION 4: WHY CHOOSE US */}
      <Section bg="bg-surface">
        <GradientHeading className="text-center mb-16">Why Businesses Choose RankBuildGrow</GradientHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { i: Zap, t: "72-Hour Delivery", d: "Your website live in 3 days or we work for free. Speed is our standard." },
            { i: Shield, t: "Results Guaranteed", d: "We don't stop optimizing until you see measurable, real growth." },
            { i: Globe, t: "US Market Expertise", d: "Deep understanding of American business culture and consumer behavior." },
            { i: Headphones, t: "24/7 Support", d: "Always available when you need us, across every time zone." }
          ].map((f, i) => (
            <GlassCard key={i} className="flex gap-5 items-start">
              <div className="p-3 bg-mint/10 rounded-lg"><f.i className="text-mint w-6 h-6" /></div>
              <div>
                <h3 className="font-syne font-bold text-[24px] text-white mb-2">{f.t}</h3>
                <p className="text-[#888888]">{f.d}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* SECTION 5: PORTFOLIO PREVIEW */}
      <Section>
        <div className="text-center mb-16">
          <GradientHeading>Our Work Speaks for Itself</GradientHeading>
          <p className="text-[#888888] mt-4 text-lg">Real results from real businesses across the United States.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {[
            { i: "portfolio-restaurant.webp", tag: "Website Design", b: "Cultivating Elegance Restaurant", l: "Dallas, TX", r: "+40% online reservations" },
            { i: "portfolio-contractor.webp", tag: "Website + SEO + Ads", b: "Elite Builders Group", l: "Austin, TX", r: "Page 1 Google in 45 days" },
            { i: "portfolio-salon.webp", tag: "Complete Digital Presence", b: "Opulence Beauty", l: "Miami, FL", r: "+40% bookings" }
          ].map((p, i) => (
            <GlassCard key={i} className="!p-0 overflow-hidden">
              <img src={`/images/${p.i}`} alt={p.b} className="w-full h-[220px] object-cover" loading="lazy" width="400" height="220" />
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-mint text-primary text-xs font-semibold rounded mb-4">{p.tag}</span>
                <h3 className="font-syne font-bold text-xl text-white mb-1">{p.b}</h3>
                <p className="text-[#888888] text-sm mb-4">{p.l}</p>
                <div className="px-4 py-2 bg-mint/10 border border-mint/30 text-mint text-sm rounded-md mb-4 font-medium">{p.r}</div>
                <a href="/portfolio" className="text-mint font-medium hover:underline">View Project →</a>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="text-center"><Button variant="secondary" href="/portfolio">View All Work →</Button></div>
      </Section>

      {/* SECTION 6: HOW WE WORK */}
      <Section bg="bg-surface">
        <GradientHeading className="text-center mb-16">How We Work</GradientHeading>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-[100px] left-0 w-full h-px border-t-2 border-dashed border-mint/30 z-0"></div>
          {[
            { n: "01", t: "Discovery", d: "We learn your business, goals, and target customers inside out.", img: "process-discovery.webp" },
            { n: "02", t: "Strategy", d: "We build a custom digital marketing plan designed for your specific market.", img: "process-strategy.webp" },
            { n: "03", t: "Build & Launch", d: "Website live, campaigns running, and tracking set up in 72 hours.", img: "process-building.webp" },
            { n: "04", t: "Grow", d: "We monitor, optimize, and scale until you dominate your market.", img: "process-growth.webp" }
          ].map((s, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <img src={`/images/${s.img}`} alt={s.t} className="w-[160px] h-[160px] object-cover rounded-full border-4 border-primary mb-6 shadow-xl" loading="lazy" width="160" height="160" />
              <span className="font-syne font-bold text-3xl gradient-text mb-2">{s.n}</span>
              <h3 className="font-syne font-bold text-xl text-white mb-3">{s.t}</h3>
              <p className="text-[#888888] text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA BANNER */}
      <section className="w-full bg-mint/5 border-y border-mint/15 py-24">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <GradientHeading className="mb-4">Ready to Rank Higher, Build Smarter, and Grow Faster?</GradientHeading>
          <p className="text-[#888888] text-lg mb-8 max-w-[600px] mx-auto">Get your free website audit — no obligation, no credit card, no strings attached.</p>
          <Button href="/contact">Claim Free Audit →</Button>
        </div>
      </section>
    </motion.div>
  );
}
