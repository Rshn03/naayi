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

        {/* Cards for Naayi (Business Owners) and Users */}
        <div className="flex gap-4 ml-auto">
          {/* Card for Naayi (Business Owners) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer w-36"
          >
            <h3 className="text-lg font-semibold mb-2 text-center">For Naayi (Business Owners)</h3>
            <p className="text-gray-600 text-center text-sm">
              Manage services and appointments.
            </p>
          </motion.div>

          {/* Card for Users */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl cursor-pointer w-36"
          >
            <h3 className="text-lg font-semibold mb-2 text-center">For Users</h3>
            <p className="text-gray-600 text-center text-sm">
              Book appointments and explore salons.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};
