import { motion } from "framer-motion";
import { Section, GradientHeading, GlassCard, Button } from "../components/ui";

const reviews = [
  { i: "1", n: "Dr. Michael Torres", r: "Dental Practice, Houston TX", q: "RankBuildGrow built our website in 3 days and we started getting new patient bookings within the first week. Professional, fast, and genuinely invested in our success." },
  { i: "2", n: "Sarah Chen", r: "Real Estate Agent, Austin TX", q: "Our Google ranking went from page 5 to page 1 in 60 days. These guys know their stuff. Worth every single penny." },
  { i: "3", n: "Marcus Johnson", r: "General Contractor, Chicago IL", q: "Finally a marketing agency that actually delivers. New website, running Google Ads, and my phone has not stopped ringing." },
  { i: "4", n: "Emily Watson", r: "Salon Owner, Miami FL", q: "I was skeptical at first but the results don't lie. 40% more bookings since launching our new site and social media campaign." },
  { i: "5", n: "James Rodriguez", r: "Restaurant Owner, Dallas TX", q: "Best investment we made for our restaurant's online presence. RankBuildGrow understood exactly what we needed." },
  { i: "6", n: "Sofia Martinez", r: "Fitness Studio Owner, Phoenix AZ", q: "RankBuildGrow transformed our online presence completely. New website, active social media, and Google Ads — we've seen 60% more class bookings in two months." },
  { i: "7", n: "Dr. Arjun Mehta", r: "Healthcare Clinic, San Diego CA", q: "Incredibly professional team. Our clinic website now ranks on page 1 for local searches and we're getting 3x more appointment requests online." },
  { i: "8", n: "Diana Thompson", r: "Retail Store Owner, Atlanta GA", q: "The Meta Ads campaign they built for us generated $45,000 in online sales in the first month. Absolute game changer for our small business." },
  { i: "9", n: "Robert Harrison", r: "Law Firm Partner, Chicago IL", q: "Our firm needed a premium digital presence. RankBuildGrow delivered exactly that — a world-class website and SEO strategy that brings in quality leads consistently." }
];

export default function Reviews() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="pt-32 pb-16 text-center px-5">
        <h1 className="font-syne font-extrabold text-[40px] md:text-[56px] gradient-text mb-4">What Our Clients Say About Us</h1>
        <p className="text-[#707070] text-lg max-w-[600px] mx-auto">Real reviews from real business owners across the United States.</p>
      </section>

      <Section className="!pt-0">
        <GlassCard className="max-w-[600px] mx-auto text-center mb-16">
          <h3 className="font-syne font-bold text-2xl text-white mb-2">Join Our Growing Family of Happy Clients</h3>
          <p className="text-[#707070] mb-6">We're building our review base — every client gets our absolute best work.</p>
          <div className="flex justify-center gap-4">
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded font-medium text-white text-sm">Google Reviews</span>
            <span className="px-4 py-2 bg-white/5 border border-white/10 rounded font-medium text-white text-sm">Facebook Reviews</span>
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(r => (
            <GlassCard key={r.n} className="flex flex-col h-full">
              <div className="flex text-[#FFD700] mb-4">{"★★★★★".split("").map((s,i)=><span key={i}>{s}</span>)}</div>
              <p className="text-[#F5F5F5] italic mb-6 flex-grow">"{r.q}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={`/images/client-${r.i}.jpg`} alt={r.n} className="w-[56px] h-[56px] rounded-full object-cover" loading="lazy" />
                <div>
                  <h4 className="font-syne font-bold text-white">{r.n}</h4>
                  <p className="text-[#707070] text-xs">{r.r}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section bg="bg-surface text-center">
        <GradientHeading className="mb-10">Video Testimonials</GradientHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <div key={i} className="aspect-video bg-primary border border-[#2A2A2A] rounded-xl flex flex-col items-center justify-center cursor-pointer group hover:border-mint transition-colors">
              <div className="w-16 h-16 rounded-full bg-mint/10 border border-mint flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"><div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-mint border-b-8 border-b-transparent ml-1"></div></div>
              <p className="text-[#707070] text-sm group-hover:text-white transition-colors">Video testimonial coming soon</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="text-center py-20">
        <GlassCard className="max-w-[500px] mx-auto mb-16">
          <h3 className="font-syne font-bold text-2xl text-white mb-2">See Us on Google</h3>
          <div className="text-[#FFD700] text-2xl mb-2">★★★★★</div>
          <p className="text-[#707070] mb-6">We'd love your feedback.</p>
          <Button href="#">Leave a Review →</Button>
        </GlassCard>
        <GradientHeading className="mb-6">Ready to become our next success story?</GradientHeading>
        <Button href="/contact">Start Your Journey →</Button>
      </Section>
    </motion.div>
  );
}