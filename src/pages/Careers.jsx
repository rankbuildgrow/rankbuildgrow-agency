import { useState } from "react";
import { motion } from "framer-motion";
import { Section, GradientHeading, GlassCard } from "../components/ui";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, { method: form.method, body: new FormData(form), headers: { Accept: 'application/json' }})
      .then(res => { if (res.ok) setSubmitted(true); });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="pt-32 pb-16 text-center px-5">
        <h1 className="font-syne font-extrabold text-[40px] md:text-[56px] gradient-text mb-4">Join the RankBuildGrow Team</h1>
        <p className="text-[#888888] text-lg max-w-[600px] mx-auto">We're looking for talented people who are passionate about digital marketing and helping businesses grow.</p>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {[
            { t: "Remote Work", d: "Work from anywhere in the world. We believe in flexibility and trust." },
            { t: "Growth Opportunities", d: "Learn from industry experts and grow your skills constantly." },
            { t: "Competitive Pay", d: "We pay competitive rates and offer performance bonuses." },
            { t: "Collaborative Culture", d: "Join a team that values collaboration and mutual support." }
          ].map(c => (
            <GlassCard key={c.t}>
              <h3 className="font-syne font-bold text-xl text-white mb-2">{c.t}</h3>
              <p className="text-[#888888]">{c.d}</p>
            </GlassCard>
          ))}
        </div>

        <GradientHeading className="mb-8">Current Openings</GradientHeading>
        <div className="space-y-4 mb-24">
          {[
            { t: "Digital Marketing Specialist", type: "Full Time" },
            { t: "Web Developer", type: "Full Time" },
            { t: "Social Media Manager", type: "Part Time" }
          ].map(j => (
            <GlassCard key={j.t} className="flex flex-col md:flex-row justify-between items-center !p-6">
              <div>
                <h3 className="font-syne font-bold text-xl text-white mb-2">{j.t}</h3>
                <div className="flex gap-3"><span className="px-3 py-1 bg-white/5 text-xs text-[#888888] rounded">{j.type}</span><span className="px-3 py-1 bg-white/5 text-xs text-[#888888] rounded">Remote</span></div>
              </div>
              <span className="mt-4 md:mt-0 px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-sm font-medium rounded-md">Closed — check back soon</span>
            </GlassCard>
          ))}
        </div>

        <div className="max-w-[700px] mx-auto">
          <div className="text-center mb-10">
            <GradientHeading>Apply Now</GradientHeading>
            <p className="text-[#888888] mt-4">Don't see a role that fits? Send us your details anyway — we're always looking for exceptional talent.</p>
          </div>
          
          {submitted ? (
            <div className="bg-mint/10 border border-mint p-8 rounded-xl text-center"><p className="text-mint font-semibold text-lg">✓ Application received! We'll review it and be in touch soon.</p></div>
          ) : (
            <GlassCard>
              <form action="https://formspree.io/f/mvzlkbrd" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="New Career Application — RankBuildGrow" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="Full Name" required placeholder="Full Name *" className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-white focus:outline-none focus:border-mint transition-colors" />
                  <input type="email" name="Email" required placeholder="Email *" className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-white focus:outline-none focus:border-mint transition-colors" />
                </div>
                <select name="Role Interested In" required className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-[#888888] focus:outline-none focus:border-mint transition-colors appearance-none">
                  <option value="">Role Interested In *</option><option>Digital Marketing</option><option>Web Development</option><option>Social Media</option><option>Graphic Design</option><option>Other</option>
                </select>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="Experience" required placeholder="Years of Experience (e.g., 3 years) *" className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-white focus:outline-none focus:border-mint transition-colors" />
                  <input type="url" name="Portfolio/LinkedIn" required placeholder="Portfolio/LinkedIn URL *" className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-white focus:outline-none focus:border-mint transition-colors" />
                </div>
                <textarea name="Why join us" required rows="5" placeholder="Why do you want to join RankBuildGrow? *" className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-white focus:outline-none focus:border-mint transition-colors"></textarea>
                <button type="submit" className="w-full bg-gradient-to-br from-mint to-[#00CC77] text-primary font-semibold py-4 rounded-md hover:brightness-110 transition-all text-lg">Submit Application</button>
              </form>
            </GlassCard>
          )}
        </div>
      </Section>
    </motion.div>
  );
}