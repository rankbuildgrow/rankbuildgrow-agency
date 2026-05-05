import { motion } from "framer-motion";
import { Section, GradientHeading, Button, GlassCard } from "../components/ui";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  const sections = [
    {
      id: "web", img: "service-web.jpg", align: "left", title: "Professional Website Design & Development",
      desc: "Your website is your most important business asset. We build fast, mobile-first, conversion-optimized websites that make US customers trust you instantly.",
      features: ["Custom design for your industry", "Mobile-first responsive layout", "Loads under 2 seconds", "SEO-ready code structure", "Contact forms and booking systems", "Google Analytics integration", "Delivered in 72 hours"],
      pricing: true
    },
    {
      id: "seo", img: "service-seo.jpg", align: "right", title: "Local SEO & Google Ranking",
      desc: "Rank on Google Maps and local search results. Get found by customers actively searching for your services.",
      features: ["Google Business Profile optimization", "Local keyword targeting", "Monthly performance reporting"], price: "Starting from $297/month"
    },
    {
      id: "ads", img: "service-google-ads.jpg", align: "left", title: "Google Ads Management",
      desc: "Targeted pay-per-click campaigns that bring ready-to-buy customers directly to your door.",
      features: ["Keyword research & bidding strategy", "Ad copywriting & A/B testing", "Conversion tracking setup"], price: "Starting from $397/month + ad spend"
    },
    {
      id: "meta", img: "service-meta.jpg", align: "right", title: "Meta Ads — Facebook & Instagram",
      desc: "Reach your ideal customers on the platforms they use every day with laser-targeted advertising.",
      features: ["Audience demographic targeting", "Creative ad design", "Retargeting campaigns"], price: "Starting from $297/month + ad spend"
    },
    {
      id: "social", img: "service-social.jpg", align: "left", title: "Social Media Marketing",
      desc: "Build a loyal audience, increase brand awareness, and drive consistent traffic to your business.",
      features: ["Content creation & scheduling", "Community management", "Platform growth strategy"], price: "Starting from $247/month"
    },
    {
      id: "app", img: "service-app.jpg", align: "right", title: "Mobile App Development",
      desc: "Custom iOS and Android apps that keep your customers engaged, loyal, and coming back.",
      features: ["Native & cross-platform development", "UI/UX design", "App store submission"], price: "Starting from $1,497 — contact for custom quote"
    }
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="pt-32 pb-20 text-center max-w-[900px] mx-auto px-5">
        <h1 className="font-syne font-extrabold text-[40px] md:text-[56px] gradient-text mb-6">Full-Service Digital Marketing for US Businesses</h1>
        <p className="text-[#707070] text-lg">Everything you need to dominate your market online — from websites to ads to apps.</p>
      </section>

      {sections.map((s, idx) => (
        <Section key={s.id} bg={idx % 2 === 0 ? "bg-surface" : "bg-primary"}>
          <div className={`flex flex-col ${s.align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
            <div className="w-full lg:w-1/2">
              <img src={`/images/${s.img}`} alt={s.title} className="w-full h-[400px] object-cover rounded-2xl shadow-2xl" loading="lazy" />
            </div>
            <div className="w-full lg:w-1/2">
              <GradientHeading className="text-3xl mb-4">{s.title}</GradientHeading>
              <p className="text-[#707070] text-lg mb-6">{s.desc}</p>
              <ul className="space-y-3 mb-8">
                {s.features.map((f, i) => <li key={i} className="flex items-center gap-3 text-white"><CheckCircle2 className="text-mint w-5 h-5 flex-shrink-0" /> {f}</li>)}
              </ul>
              {s.price && <p className="font-semibold text-mint mb-6">{s.price}</p>}
              {!s.pricing && <Button href="/contact">Get Started →</Button>}
            </div>
          </div>
          {s.pricing && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <GlassCard className="flex flex-col">
                <h3 className="font-syne font-bold text-2xl text-white mb-2">Starter</h3><p className="text-mint text-3xl font-bold mb-6">$497</p>
                <ul className="space-y-3 text-[#707070] mb-8 flex-grow"><li>5 pages</li><li>Mobile responsive</li><li>Contact form</li><li>Basic SEO</li><li>72 hours delivery</li></ul>
                <Button variant="secondary" href="/contact" className="w-full">Get Started</Button>
              </GlassCard>
              <GlassCard className="flex flex-col border-mint relative scale-105 bg-mint/5 z-10">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mint text-primary text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                <h3 className="font-syne font-bold text-2xl text-white mb-2">Business</h3><p className="text-mint text-3xl font-bold mb-6">$997</p>
                <ul className="space-y-3 text-white mb-8 flex-grow"><li>8 pages</li><li>Advanced SEO</li><li>Google Analytics</li><li>WhatsApp integration</li><li>Blog setup</li><li>5 days delivery</li></ul>
                <Button variant="primary" href="/contact" className="w-full">Get Started</Button>
              </GlassCard>
              <GlassCard className="flex flex-col">
                <h3 className="font-syne font-bold text-2xl text-white mb-2">Premium</h3><p className="text-mint text-3xl font-bold mb-6">$1,997</p>
                <ul className="space-y-3 text-[#707070] mb-8 flex-grow"><li>12 pages</li><li>Full SEO optimization</li><li>Google Ads integration</li><li>Booking system</li><li>Priority support</li><li>7 days delivery</li></ul>
                <Button variant="secondary" href="/contact" className="w-full">Get Started</Button>
              </GlassCard>
            </div>
          )}
        </Section>
      ))}
      <Section className="text-center py-24"><GradientHeading className="mb-8">Ready to grow?</GradientHeading><Button href="/contact">Let's Talk About Your Project →</Button></Section>
    </motion.div>
  );
}