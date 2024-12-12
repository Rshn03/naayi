import { motion } from 'framer-motion';
import logo from '../assets/naayi-logo.png'; 

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full py-4 px-4 bg-[#1a4c45]/90 backdrop-blur-sm fixed top-0 z-50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Naayi Logo"
            className="h-16 max-h-16 object-contain" // Adjust size as needed
          />
        </motion.div>

        {/* Navigation Section */}
        <nav>
          <ul className="flex gap-6">
            {['About', 'Services', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  {item}
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};
