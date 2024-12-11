import { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const LaunchingSoon = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError('');
  };

  const handleNotifyClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess('You have successfully subscribed!');
      setEmail('');
    }, 1000);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="relative min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center px-4 backdrop-blur-sm bg-white/30 rounded-2xl p-8 shadow-xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-[#1a4c45] mb-6"
        >
          Launching Soon..
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
        >
          Seamlessly connect with local barbers and book your slots hassle-free. We're crafting something special for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-md mx-auto"
        >
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              aria-label="Email address"
              className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:border-[#1a4c45] bg-white/80 backdrop-blur-sm"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleNotifyClick}
              disabled={!email || loading}
              className={`${
                loading || !email
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-[#1a4c45] hover:bg-[#153d37]'
              } text-white px-6 py-3 rounded-r-lg transition-colors flex items-center gap-2`}
            >
              {loading ? (
                <span className="loader w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Mail className="w-5 h-5" />
              )}
              {loading ? 'Processing...' : 'Notify Me'}
            </motion.button>
          </div>

          {error && <p className="text-red-700 mt-2 text-sm">{error}</p>}
          {success && <p className="text-green-700 mt-2 text-sm">{success}</p>}
        </motion.div>
      </motion.div>
    </div>
  );
};
