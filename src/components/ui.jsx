import { motion } from "framer-motion";

export const Section = ({ children, className = "", id = "", bg = "" }) => (
  <section id={id} className={`w-full ${bg} ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-[1200px] mx-auto px-[20px] md:px-[40px] lg:px-[60px]"
    >
      {children}
    </motion.div>
  </section>
);

export const GlassCard = ({ children, className = "", hover = true }) => (
  <div className={`glass-card ${!hover ? 'hover:transform-none hover:border-white/10 hover:shadow-none' : ''} ${className}`}>
    {children}
  </div>
);

export const Button = ({ children, variant = "primary", href, className = "", onClick, type="button" }) => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300";
  const styles = {
    primary: "bg-gradient-to-br from-mint to-[#00CC77] text-primary font-semibold px-10 py-4 hover:brightness-110 hover:scale-[1.02]",
    secondary: "border border-white/20 text-[#F5F5F5] px-10 py-4 hover:border-mint/40",
    nav: "border border-mint text-mint px-6 py-2.5 rounded-md hover:bg-mint hover:text-primary",
  };
  
  if (href) return <a href={href} className={`${base} ${styles[variant]} ${className}`}>{children}</a>;
  return <button type={type} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>{children}</button>;
};

export const GradientHeading = ({ children, level = 2, className = "" }) => {
  const Tag = `h${level}`;
  return <Tag className={`font-syne font-bold gradient-text ${className}`}>{children}</Tag>;
};