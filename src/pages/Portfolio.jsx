import { useState } from "react";
import { motion } from "framer-motion";
import { Section, GradientHeading, GlassCard, Button } from "../components/ui";

const portfolio = [
  { i: "portfolio-restaurant.jpg", t: "Cultivating Elegance Restaurant", type: "Websites", tag: "Website Design", l: "Dallas, TX", r: "+40% increase in online reservations" },
  { i: "portfolio-contractor.jpg", t: "Elite Builders Group", type: "Websites", tag: "Website + SEO + Ads", l: "Austin, TX", r: "Page 1 Google ranking in 45 days" },
  { i: "portfolio-salon.jpg", t: "Opulence Beauty", type: "Websites", tag: "Website Design", l: "Miami, FL", r: "+40% increase in bookings" },
  { i: "portfolio-seo.jpg", t: "SmileCare Dental", type: "SEO", tag: "Local SEO", l: "Houston, TX", r: "+250% increase in patient enquiries" },
  { i: "portfolio-ads.jpg", t: "Luxury Homes Realty", type: "Ads", tag: "Google Ads", l: "Los Angeles, CA", r: "3x return on ad spend" },
  { i: "portfolio-social.jpg", t: "Fashion Forward Retail", type: "Ads", tag: "Meta Ads + Social", l: "New York, NY", r: "+160% increase in online sales" },
  { i: "portfolio-app1.jpg", t: "QuickBite Restaurant App", type: "Apps", tag: "App Development", l: "Chicago, IL", r: "4.8 star rating, 5,000+ downloads" },
  { i: "portfolio-app2.jpg", t: "FitTrack Fitness App", type: "Apps", tag: "App Development", l: "Miami, FL", r: "2,000+ active monthly users" },
  { i: "portfolio-dental.jpg", t: "PearlSmile Dental", type: "Websites", tag: "Website Design", l: "Phoenix, AZ", r: "+35% new patient appointments" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? portfolio : portfolio.filter(p => p.type === filter);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="pt-32 pb-16 text-center px-5">
        <h1 className="font-syne font-extrabold text-[40px] md:text-[56px] gradient-text mb-4">Our Work Speaks for Itself</h1>
        <p className="text-[#888888] text-lg max-w-[600px] mx-auto">Real results from real businesses across the United States.</p>
      </section>
      
      <Section className="!pt-0">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Websites", "SEO", "Ads", "Apps"].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-6 py-2 rounded-md font-medium transition-all ${filter === f ? "bg-mint text-primary" : "border border-[#2A2A2A] text-[#888888] hover:border-mint hover:text-mint"}`}>{f}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p, i) => (
            <GlassCard key={i} className="!p-0 overflow-hidden group">
              <div className="relative overflow-hidden h-[220px]">
                <img src={`/images/${p.i}`} alt={p.t} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-mint font-syne font-bold text-xl border border-mint px-6 py-2 rounded">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-mint text-primary text-xs font-semibold rounded mb-3">{p.tag}</span>
                <h3 className="font-syne font-bold text-xl text-white mb-1">{p.t}</h3>
                <p className="text-[#888888] text-sm mb-4">{p.l}</p>
                <div className="px-4 py-2 bg-mint/10 border border-mint/30 text-mint text-sm rounded-md font-medium">{p.r}</div>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="mt-20 text-center">
          <GradientHeading className="mb-6">Ready to be our next success story?</GradientHeading>
          <Button href="/contact">Start Your Project →</Button>
        </div>
      </Section>
    </motion.div>
  );
}