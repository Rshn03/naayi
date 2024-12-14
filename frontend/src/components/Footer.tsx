import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="bg-[#1a4c45]/90 backdrop-blur-sm text-white py-8 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
            <div className="flex gap-4">  
              {[
                { Icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/naayi_official/' },
                { Icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/naayi-com/' },
                { Icon: FaTwitter, label: 'LinkedIn', url: 'https://www.x.com/naayi_officials/' },
                { Icon: FaFacebook, label: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61569793105584' },
                { Icon: FaYoutube, label: 'Youtube', url: 'https://www.youtube.com/channel/UCXHIh7b3JX1O7Ka_FAuU4yA' },
              ].map(({ Icon, label, url }, index) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="hover:text-gray-200 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-gray-300">
              © 2024 Naayi. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
