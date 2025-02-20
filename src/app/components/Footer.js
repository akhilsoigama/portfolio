'use client'
import { Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import { Oleo_Script } from 'next/font/google';
import Link from 'next/link';
const oleo = Oleo_Script({ subsets: ["latin"], weight: ["400", "700"] });

const Footer = () => {
  const socialLinks = [
    { title: "github", src: '/github-142-svgrepo-com.svg', url: 'https://github.com/yourusername' },
    { title: "instagram", src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png', url: 'https://www.instagram.com/akhil_soigama_/' },
    { title: "youtube", src: '/youtube-svgrepo-com.svg', url: 'https://www.youtube.com/@science_panther' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="dark:bg-black/40 shadow-md bg-white border-t py-6 "
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4">
        <p className="text-3xl font-semibold" style={{ fontFamily: oleo.style.fontFamily }}
        >Akhil</p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <Tooltip title={link.title} arrow key={index}>
              <Link
                href={link.url} key={index}
                target="_blank"
                passHref
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="dark:bg-white bg-slate-800/20 hover:bg-slate-200 dark:hover:bg-slate-400 p-3 rounded-lg backdrop-blur-md transition-all duration-300"
                >
                  <img
                    src={link.src}
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                </motion.button>
              </Link>
            </Tooltip>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;