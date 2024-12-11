import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 w-full h-full z-0"
    >
      <div className="absolute inset-0 bg-[#1a4c45]/10" />
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeOut"
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        <motion.img
          src="/naayi-logo.png"
          alt="Naayi Logo"
          className="w-[80vh] h-[80vh] object-contain"
          style={{
            filter: "blur(8px)",
            opacity: 0.15
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.2, 0.15]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </motion.div>
  );
};
