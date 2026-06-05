import { motion } from "framer-motion";
import { Section, GradientHeading, GlassCard } from "../components/ui";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="relative pt-40 pb-32 flex justify-center items-center">
        <div className="absolute inset-0 z-0"><img src="/images/about-workspace.webp" className="w-full h-full object-cover" alt="Workspace" fetchpriority="high" /><div className="absolute inset-0 bg-[#0A0A0A]/85"></div></div>
        <div className="relative z-10 text-center max-w-[800px] px-5">
          <h1 className="font-syne font-extrabold text-[40px] md:text-[56px] gradient-text mb-6">The Team Behind Your Growth</h1>
          <p className="text-[#888888] text-lg">We're obsessed with one thing — getting US small businesses the online presence they deserve.</p>
        </div>
      </section>

      <Section>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <img src="/images/strategy-visual.webp" alt="Strategy" className="w-full lg:w-1/2 rounded-[16px] object-cover h-[400px]" loading="lazy" width="600" height="400" />
          <div className="lg:w-1/2">
            <GradientHeading className="mb-6">Our Story</GradientHeading>
            <p className="text-[#888888] mb-6">RankBuildGrow is an AI-Powered Digital Marketing Agency that was founded on a simple premise: small businesses deserve enterprise-level digital marketing without the ridiculous price tag. We saw too many US businesses struggling to get found online while competitors with deeper pockets took all the customers.</p>
            <div className="border-l-4 border-mint pl-6 py-2 mb-6 bg-mint/5"><h4 className="text-white font-bold mb-1">Our Mission</h4><p className="text-[#888888]">To empower small businesses with enterprise-level digital marketing.</p></div>
            <div className="border-l-4 border-mint pl-6 py-2 bg-mint/5"><h4 className="text-white font-bold mb-1">Our Vision</h4><p className="text-[#888888]">A world where business size never limits digital presence.</p></div>
          </div>
        </div>
      </Section>

      <Section bg="bg-surface">
        <GradientHeading className="text-center mb-16">Our Core Values</GradientHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { t: "Transparency", d: "We report everything, hide nothing. You always know exactly what we're doing and why." },
            { t: "Results First", d: "We measure success only in your growth. If you're not winning, neither are we." },
            { t: "Speed", d: "72-hour website delivery is our standard, not our promise. We move fast without cutting corners." },
            { t: "Partnership", d: "Your success is our success. We're invested in your growth for the long term." }
          ].map(v => (
            <GlassCard key={v.t} className="flex flex-col">
              <h3 className="font-syne font-bold text-xl text-white mb-3">{v.t}</h3>
              <p className="text-[#888888]">{v.d}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
          <GradientHeading>Founder-Led Means You Get the Best</GradientHeading>
          <p className="text-[#888888] mt-4">When you work with RankBuildGrow, you work directly with senior expertise — not handed off to a junior. Every project gets our full attention and commitment.</p>
        </div>
        <GlassCard className="max-w-[400px] mx-auto text-center">
          <img src="/images/founder.webp" alt="Founder" className="w-[80px] h-[80px] rounded-full mx-auto mb-4 object-cover" loading="lazy" width="80" height="80" />
          <h3 className="font-syne font-bold text-2xl text-white">RankBuildGrow Founder</h3>
          <p className="text-mint text-sm font-medium mb-4">Founder & Lead Digital Strategist</p>
          <p className="text-[#888888] text-sm">Specialist in digital marketing for US small businesses. Combining web design, SEO, and paid advertising to deliver complete digital growth solutions.</p>
        </GlassCard>
      </Section>

      <Section bg="bg-surface">
        <div className="text-center mb-12">
          <GradientHeading>Tools We Use</GradientHeading>
          <p className="text-[#888888] mt-2">Industry-leading tools to deliver results you can measure.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[800px] mx-auto">
          {["Google Analytics", "Meta Business", "Canva", "SEMrush", "Ahrefs", "Mailchimp", "Shopify", "WordPress"].map(t => (
            <div key={t} className="bg-primary border border-[#2A2A2A] rounded-lg py-6 text-center text-[#888888] font-syne font-bold hover:text-mint hover:border-mint transition-colors cursor-pointer">{t}</div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative rounded-[20px] overflow-hidden">
          <img src="/images/global-reach.webp" alt="Global" className="w-full h-[400px] object-cover" loading="lazy" width="1200" height="400" />
          <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full px-10">
              {[["5", "Countries Served"], ["50+", "Projects Completed"], ["100%", "Client Satisfaction"], ["Est. 2026", "Founded"]].map(([n, l]) => (
                <div key={l} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center">
                  <span className="block font-syne font-bold text-3xl md:text-4xl text-mint mb-2">{n}</span>
                  <span className="text-white text-xs md:text-sm uppercase tracking-wider">{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
}
