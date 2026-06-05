import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-syne font-extrabold text-[120px] gradient-text leading-none">404</h1>
      <h2 className="font-syne font-bold text-3xl text-white mt-4 mb-4">Page Not Found</h2>
      <p className="text-[#888888] text-lg max-w-[500px] mb-8">Looks like this page doesn't exist. Let's get you back on track!</p>
      <Link to="/" className="bg-gradient-to-br from-mint to-[#00CC77] text-primary font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all">
        Back to Homepage →
      </Link>
    </motion.div>
  );
}