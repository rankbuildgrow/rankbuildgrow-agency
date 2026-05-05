import { useState } from "react";
import { motion } from "framer-motion";
import { Section, GradientHeading, GlassCard } from "../components/ui";
import { Mail, Clock, MessageSquare } from "lucide-react";

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [auditSubmitted, setAuditSubmitted] = useState(false);

  const handleSubmit = (e, setFn) => {
    e.preventDefault();
    const form = e.target;
    fetch(form.action, { method: form.method, body: new FormData(form), headers: { Accept: 'application/json' }})
      .then(res => { if (res.ok) setFn(true); });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className="pt-32 pb-16 text-center px-5">
        <h1 className="font-syne font-extrabold text-[40px] md:text-[56px] gradient-text mb-4">Let's Grow Your Business Together</h1>
        <p className="text-[#707070] text-lg max-w-[600px] mx-auto">Get in touch and let's discuss how we can help you rank higher, build smarter, and grow faster.</p>
      </section>

      <Section>
        <div className="flex flex-col lg:flex-row gap-16 mb-24">
          <div className="w-full lg:w-1/2">
            <h3 className="font-syne font-bold text-3xl text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mint/10 rounded-lg"><Mail className="text-mint w-6 h-6"/></div>
                <div><h4 className="text-white font-medium mb-1">Email Us</h4><a href="mailto:hello@rankbuildgrow.com" className="text-[#707070] hover:text-mint">hello@rankbuildgrow.com</a></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mint/10 rounded-lg"><MessageSquare className="text-mint w-6 h-6"/></div>
                <div><h4 className="text-white font-medium mb-2">Chat on WhatsApp</h4><a href="https://wa.me/916350371343" className="inline-flex items-center justify-center bg-[#25D366] text-white px-5 py-2 rounded-md font-medium hover:brightness-110">Start Chat →</a></div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-mint/10 rounded-lg"><Clock className="text-mint w-6 h-6"/></div>
                <div><h4 className="text-white font-medium mb-1">Response Time</h4><p className="text-[#707070]">We reply within 4 business hours</p></div>
              </div>
            </div>
            
            <div className="border-t border-[#2A2A2A] pt-8">
              <p className="text-[#707070] text-sm mb-4">Connect with us</p>
              <div className="flex gap-4">
                {/* Reusing SocialIcons logic without abstracting fully due to size, minimal version: */}
                <a href="https://youtube.com/@RankBuildGrow" target="_blank" rel="noopener noreferrer" className="text-mint hover:text-mint transition-colors"> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> </a>
                <a href="https://facebook.com/RankBuildGrow" target="_blank" rel="noopener noreferrer" className="text-mint hover:text-mint transition-colors"> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> </a>
                <a href="https://instagram.com/RankBuildGrow" target="_blank" rel="noopener noreferrer" className="text-mint hover:text-mint transition-colors"> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> </a>
                <a href="https://linkedin.com/company/rankbuildgrow" target="_blank" rel="noopener noreferrer" className="text-mint hover:text-mint transition-colors"> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> </a>
                <a href="https://x.com/RankBuildGrow" target="_blank" rel="noopener noreferrer" className="text-mint hover:text-mint transition-colors"> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.402 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> </a>
                <a href="https://pinterest.com/rankbuildgrow" target="_blank" rel="noopener noreferrer" className="text-mint hover:text-mint transition-colors"> <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg> </a>
                <a href="https://threads.net/@RankBuildGrow" target="_blank" rel="noopener noreferrer" className="text-mint hover:text-mint transition-colors"> <svg width="24" height="24" viewBox="0 0 192 192" fill="currentColor"><path d="M141.537 88.988a66.667 66.667 0 00-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.318-11.319 11.258-24.925 16.135-45.488 16.286-22.809-.169-40.06-7.484-51.275-21.742C35.236 139.966 29.808 120.682 29.605 96c.203-24.682 5.63-43.966 16.133-57.317C56.954 24.425 74.204 17.11 97.013 16.94c22.975.17 40.526 7.52 52.171 21.847 5.71 7.026 10.015 15.86 12.853 26.162l16.147-4.308c-3.44-12.68-8.853-23.606-16.219-32.668C147.036 9.607 125.202.195 97.07 0h-.113C68.882.195 47.292 9.6 32.788 27.94 19.882 44.356 13.2 67.847 13 96v.04c.2 28.113 6.882 51.605 19.788 68.02C47.292 182.4 68.882 191.805 96.957 192h.113c24.96-.173 42.554-6.708 57.048-21.166 18.963-18.91 18.392-42.57 12.142-57.114-4.484-10.454-13.033-18.945-24.723-24.732zm-41.71 55.171c-10.463.572-21.317-4.108-21.867-14.151-.403-7.557 5.38-15.984 22.76-17.01 1.99-.114 3.944-.169 5.864-.169 6.262 0 12.117.606 17.436 1.765-1.982 24.681-13.58 28.959-24.193 29.565z"/></svg> </a>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <GlassCard>
              <h3 className="font-syne font-bold text-3xl text-white mb-8">Send us a Message</h3>
              {contactSubmitted ? (
                <div className="bg-mint/10 border border-mint p-8 rounded-xl"><p className="text-mint font-semibold">✓ Message received! We'll be in touch within 4 business hours.</p></div>
              ) : (
                <form action="https://formspree.io/f/mykoedjj" method="POST" onSubmit={(e) => handleSubmit(e, setContactSubmitted)} className="space-y-4">
                  <input type="hidden" name="_subject" value="New Enquiry — RankBuildGrow" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="Full Name" required placeholder="Full Name *" className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-white focus:outline-none focus:border-mint" />
                    <input type="email" name="Business Email" required placeholder="Business Email *" className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-white focus:outline-none focus:border-mint" />
                  </div>
                  <input type="text" name="Business Name" required placeholder="Business Name *" className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-white focus:outline-none focus:border-mint" />
                  <select name="Business Type" required className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-[#707070] focus:outline-none focus:border-mint appearance-none">
                    <option value="">Business Type *</option><option>Restaurant</option><option>Salon</option><option>Contractor</option><option>Healthcare</option><option>Real Estate</option><option>Law Firm</option><option>Retail</option><option>Other</option>
                  </select>
                  <select name="Service Interested In" required className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-[#707070] focus:outline-none focus:border-mint appearance-none">
                    <option value="">Service Interested In *</option><option>Website Design</option><option>Local SEO</option><option>Google Ads</option><option>Meta Ads</option><option>Social Media</option><option>App Development</option><option>Full Package</option>
                  </select>
                  <select name="Estimated Budget" required className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-[#707070] focus:outline-none focus:border-mint appearance-none">
                    <option value="">Estimated Budget *</option><option>Under $500</option><option>$500–$1,000</option><option>$1,000–$5,000</option><option>$5,000+</option>
                  </select>
                  <textarea name="Project details" required rows="5" placeholder="Tell us about your project *" className="w-full bg-primary border border-[#2A2A2A] rounded-md p-4 text-white focus:outline-none focus:border-mint"></textarea>
                  <button type="submit" className="w-full bg-gradient-to-br from-mint to-[#00CC77] text-primary font-semibold py-4 rounded-md hover:brightness-110 transition-all text-lg mt-2">Send Message →</button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>

        <GlassCard className="w-full text-center py-12">
          <h3 className="font-syne font-bold text-3xl text-white mb-2">Get Your Free Website Audit</h3>
          <p className="text-[#707070] mb-8 max-w-[600px] mx-auto">We'll analyze your current online presence and show you exactly where you're losing customers — completely free, no obligation.</p>
          {auditSubmitted ? (
            <p className="text-mint font-semibold">✓ Audit request received! We'll email your report soon.</p>
          ) : (
            <form action="https://formspree.io/f/xojrenwk" method="POST" onSubmit={(e) => handleSubmit(e, setAuditSubmitted)} className="max-w-[500px] mx-auto flex flex-col sm:flex-row gap-3">
              <input type="hidden" name="_subject" value="Free Audit Request — RankBuildGrow" />
              <input type="email" name="Email" required placeholder="Enter your business email" className="flex-grow bg-primary border border-[#2A2A2A] rounded-md px-4 py-3 text-white focus:outline-none focus:border-mint" />
              <button type="submit" className="bg-mint text-primary font-semibold px-6 py-3 rounded-md hover:brightness-110 whitespace-nowrap">Claim Free Audit →</button>
            </form>
          )}
        </GlassCard>
      </Section>
    </motion.div>
  );
}