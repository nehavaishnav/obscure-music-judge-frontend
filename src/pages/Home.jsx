import { motion } from "framer-motion";
import { Music2, Sparkles } from "lucide-react";

export default function Home() {
  const handleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/login`;
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-green-800 text-white px-6 text-center">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="mb-6"
      >
        <Music2 size={70} className="text-green-400 drop-shadow-lg" />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
      >
        Obscure Music Judge
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-gray-300 max-w-md mb-10"
      >
        Discover how <span className="text-green-400 font-semibold">unique</span> (or
        totally <span className="italic text-gray-400">basic 😜</span>) your Spotify taste really is!
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleLogin}
        className="flex items-center gap-2 bg-green-500 text-black font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-green-400 transition-all"
      >
        <Sparkles size={20} />
        Login with Spotify
      </motion.button>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-6 text-sm text-gray-500"
      >
        Built with ❤️ using React & Spotify API
      </motion.footer>
    </div>
  );
}
