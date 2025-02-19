'use client'
import { motion } from 'framer-motion';
import { Oleo_Script } from 'next/font/google';
import Link from 'next/link';
const oleo = Oleo_Script({ subsets: ["latin"], weight: ["400", "700"] });

const Footer = () => {
  const socialLinks = [
    { src: '/github-142-svgrepo-com.svg', url: 'https://github.com/yourusername' },
    { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png', url: 'https://www.instagram.com/akhil_soigama_/' },
    { src: '/youtube-svgrepo-com.svg', url: 'https://www.youtube.com/@science_panther' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="dark:bg-black/40 shadow-md bg-white border-t py-6 "
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-4">
        <p className="text-3xl font-semibold"style={{ fontFamily: oleo.style.fontFamily }}
        >Akhil</p>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
           <Link
           href={link.url} key={index}
           target="_blank"
           passHref
         >
           <motion.button
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             className="bg-white/10 hover:bg-white/20 p-3 rounded-lg backdrop-blur-md transition-all duration-300"
           >
             <img
               src={link.src}
               alt="GitHub"
               width={24}
               height={24}
             />
           </motion.button>
         </Link>
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;